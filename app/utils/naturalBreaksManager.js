import EventEmitter from 'events'
import log from 'electron-log/main.js'
import { powerMonitor } from 'electron'

let desktopIdle = {
  startMonitoring: () => {},
  stopMonitoring: () => {},
  getIdleTime: () => 0
}

try {
  const mod = await import('node-desktop-idle-v2')
  if (mod && mod.desktopIdle) {
    desktopIdle = mod.desktopIdle
  }
} catch (err) {
  log.warn('Stretchly: node-desktop-idle-v2 native binary not available for this Electron ABI, using Electron powerMonitor.')
}


class NaturalBreaksManager extends EventEmitter {
  constructor (settings) {
    super()
    this.settings = settings
    this.usingNaturalBreaks = settings.get('naturalBreaks')
    this.naturalBreaksCheckInterval = settings.get('naturalBreaksCheckInterval')
    this.timer = null
    this.isOnNaturalBreak = false
    this.isSchedulerCleared = false
    if (this.usingNaturalBreaks) {
      this.start()
    }
  }

  start () {
    if (this.timer) return
    this.usingNaturalBreaks = true
    desktopIdle.startMonitoring()
    this._checkIdleTime()
    log.info('Stretchly: starting Idle time monitoring')
  }

  stop () {
    if (!this.timer) return
    this.usingNaturalBreaks = false
    this.isOnNaturalBreak = false
    this.isSchedulerCleared = false
    clearInterval(this.timer)
    this.timer = null
    desktopIdle.stopMonitoring()
    log.info('Stretchly: stopping Idle time monitoring')
  }

  get idleTime () {
    if (this.usingNaturalBreaks) {
      return (powerMonitor.getSystemIdleTime() || desktopIdle.getIdleTime()) * 1000
    } else {
      return 0
    }
  }

  _checkIdleTime () {
    let lastIdleTime = 0
    this.timer = setInterval(() => {
      const idleTime = this.idleTime
      if (!this.isOnNaturalBreak && idleTime > 20000) {
        this.isOnNaturalBreak = true
      }
      if (this.isOnNaturalBreak && idleTime < 20000) {
        this.isOnNaturalBreak = false
        if (lastIdleTime > this.settings.get('naturalBreaksInactivityResetTime')) {
          this.isSchedulerCleared = false
          this.emit('naturalBreakFinished')
        }
      }
      if (this.isOnNaturalBreak && idleTime > this.settings.get('naturalBreaksInactivityResetTime')) {
        this.isSchedulerCleared = true
        this.emit('clearBreakScheduler')
      }
      lastIdleTime = idleTime
    }, this.naturalBreaksCheckInterval)
  }
}

export default NaturalBreaksManager
