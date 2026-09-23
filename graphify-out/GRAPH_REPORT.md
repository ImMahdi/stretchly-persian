# Graph Report - Stretchly  (2026-09-20)

## Corpus Check
- 130 files · ~167,046 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 727 nodes · 1012 edges · 99 communities (87 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.64)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d33ea655`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- main.js
- build
- Components
- preferences-renderer.js
- AppExclusionsManager
- dependencies
- context-bridge-exposers.js
- FlatpakPortalManager
- BreaksPlanner
- Command
- devDependencies
- scripts
- DisplayManager
- Change Log
- globals
- target
- target
- Shuffled
- AppIcon
- translations.js
- Agent & AI Coding Guidelines
- Contributor Covenant Code of Conduct
- package.json
- appx
- mac
- allowScripts
- [0.9.0] - 2017-05-17
- [1.0.0] - 2020-07-18
- [1.11.0] - 2022-8-7
- PULL_REQUEST_TEMPLATE.md
- keywords
- [0.10.0] - 2017-08-18
- [0.12.0] - 2017-11-05
- [0.14.0] - 2018-01-07
- [0.16.0] - 2018-03-17
- [0.17.0] - 2018-05-06
- [0.18.0] - 2018-10-21
- [0.19.0] - 2019-02-10
- [0.19.1] - 2019-02-17
- [0.20.0] - 2019-07-02
- [0.21.0] - 2019-10-13
- [0.21.1] - 2020-01-16
- [0.4.0] - 2016-11-05
- [0.7.0] - 2017-03-07
- [0.99.0] - 2020-03-19 Patreon
- [0.99.1] - 2020-04-09 Patreon
- [0.99.3] - 2020-05-05 Patreon
- [1.12.0] - 2022-9-24
- [1.16.0] - 2024-08-11
- [1.17.0] - 2024-12-24
- [1.18.0] - 2025-9-15
- [1.19.0] - 2025-11-13
- [1.1.99] - 2020-9-27 Patreon
- [1.20.0] - 2025-12-24
- [1.21.0] - 2026-04-25
- [1.22.0] - 2026-07-17
- [1.2.0] - 2020-10-03
- [1.3.0] - 2020-11-08
- [1.4.0] - 2020-12-25
- [1.5.0] - 2021-04-07
- [1.6.0] - 2021-04-16
- [1.7.0] - 2021-05-04
- [1.8.0] - 2021-11-21
- [1.9.0] - 2021-12-24
- Investigator.md
- Support.md
- fpm
- graphify - Architectural Knowledge Graph Rules
- [0.15.0] - 2018-02-18
- [0.20.1] - 2019-07-14
- [0.5.0] - 2016-11-28
- [0.5.1] - 2016-12-05
- [0.6.0] - 2017-01-21
- [0.8.0] - 2017-04-09
- [0.8.1] - 2017-04-15
- [0.99.2] - 2020-04-27 Patreon
- [0.99.4] - 2020-05-15 Patreon
- [0.99.5] - 2020-07-04 Patreon
- [1.10.0] - 2022-2-22
- [1.14.1] - 2023-06-04
- [1.15.1] - 2023-11-19
- [1.18.1] - 2025-9-27
- [1.1.0] - 2020-09-12
- [1.22.1] - 2026-08-13
- [1.6.99] - 2021-05-02 Patreon
- [1.8.1] - 2021-11-24
- dmg
- DndManager
- repository
- workflows/graphify.md
- files
- nsis
- [1.13.0] - 2022-12-23
- [1.17.1] - 2024-12-25

## God Nodes (most connected - your core abstractions)
1. `Change Log` - 78 edges
2. `initialize()` - 25 edges
3. `updateTray()` - 21 edges
4. `BreaksPlanner` - 19 edges
5. `Command` - 16 edges
6. `DndManager` - 14 edges
7. `scripts` - 14 edges
8. `build` - 14 edges
9. `DisplayManager` - 13 edges
10. `startMicrobreak()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Agent & AI Coding Guidelines` --cites--> `Stretchly Contribution Guidelines`  [EXTRACTED]
  AGENTS.md → CONTRIBUTING.md
- `initialize()` --calls--> `registerBreakShortcuts()`  [EXTRACTED]
  app/main.js → app/utils/breakShortcuts.js
- `initialize()` --calls--> `getLinuxDisplayBackend()`  [EXTRACTED]
  app/main.js → app/utils/utils.js
- `initialize()` --calls--> `insideFlatpak()`  [EXTRACTED]
  app/main.js → app/utils/utils.js
- `initialize()` --calls--> `insideSnap()`  [EXTRACTED]
  app/main.js → app/utils/utils.js

## Import Cycles
- None detected.

## Communities (99 total, 12 thin omitted)

### Community 0 - "main.js"
Cohesion: 0.07
Nodes (67): breakComplete(), calculateBackgroundColor(), checkVersion(), closeWindows(), commandLineArguments, createContributorSettingsWindow(), createPreferencesWindow(), createSyncPreferencesWindow() (+59 more)

### Community 1 - "build"
Cohesion: 0.20
Nodes (10): build, appId, nsisWeb, portable, productName, snap, allowToChangeInstallationDirectory, oneClick (+2 more)

### Community 2 - "Components"
Cohesion: 0.12
Nodes (16): 1. Toggle Switches, 2. Segmented Controls, 3. Settings Cards & Row Groups, 4. Audio Preview Card, 5. Theme Color Swatches, 6. Stepper & Time Duration Inputs, 7. Buttons, Brand & Style (+8 more)

### Community 3 - "preferences-renderer.js"
Cohesion: 0.11
Nodes (11): initIdeasTab(), versionChecker, applyBreakHealthEffect(), dangerColorForTheme(), dangerColors, defaultDangerColor, HtmlTranslate, createRunOnce() (+3 more)

### Community 4 - "AppExclusionsManager"
Cohesion: 0.10
Nodes (4): AppExclusionsManager, desktopIdle, NaturalBreaksManager, Scheduler

### Community 5 - "dependencies"
Cohesion: 0.07
Nodes (29): auto-launch, dompurify, electron-log, electron-store, humanize-duration, i18next, i18next-fs-backend, luxon (+21 more)

### Community 6 - "context-bridge-exposers.js"
Cohesion: 0.20
Nodes (16): exposeBreaks(), exposeElectronApi(), exposeGlobal(), exposeI18next(), exposeRuntime(), exposeSemver(), exposeSettings(), exposeStretchly() (+8 more)

### Community 8 - "BreaksPlanner"
Cohesion: 0.13
Nodes (4): BreaksPlanner, Long Break Concept (5m every 2 breaks), Microbreak Concept (20s every 10m), Natural Breaks & Idle Detection

### Community 9 - "Command"
Cohesion: 0.10
Nodes (11): calculateInterval(), onShortcut(), registerBreakShortcuts(), setupBreak(), shortcuts, allCommands, allExamples, allOptions (+3 more)

### Community 10 - "devDependencies"
Cohesion: 0.11
Nodes (19): cross-env, electron, electron-builder, husky, jsdom, devDependencies, cross-env, electron (+11 more)

### Community 11 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, coverage, dev, dist, lint, pack, postinstall, postpublish (+6 more)

### Community 13 - "Change Log"
Cohesion: 0.06
Nodes (35): [0.0.1] - 2016-09-06, [0.11.0] - 2017-09-09, [0.13.0] - 2017-12-20, [0.1.0] - 2016-09-26, [0.1.1] - 2016-10-04, [0.2.0] - 2016-10-08, [0.2.1] - 2016-10-10, [0.3.0] - 2016-10-15 (+27 more)

### Community 14 - "globals"
Cohesion: 0.17
Nodes (12): globals, after, afterEach, alert, Audio, before, beforeEach, describe (+4 more)

### Community 15 - "target"
Cohesion: 0.18
Nodes (11): linux, asarUnpack, category, target, apk, AppImage, deb, freebsd (+3 more)

### Community 16 - "target"
Cohesion: 0.20
Nodes (10): win, asarUnpack, target, 7z, app/images/**, appx, node_modules/macos-notification-state/**, node_modules/windows-notification-state/** (+2 more)

### Community 22 - "Contributor Covenant Code of Conduct"
Cohesion: 0.25
Nodes (7): Attribution, Contributor Covenant Code of Conduct, Enforcement, Our Pledge, Our Responsibilities, Our Standards, Scope

### Community 23 - "package.json"
Cohesion: 0.17
Nodes (11): author, bugs, url, description, homepage, license, main, name (+3 more)

### Community 25 - "appx"
Cohesion: 0.33
Nodes (6): applicationId, displayName, identityName, publisher, publisherDisplayName, appx

### Community 26 - "mac"
Cohesion: 0.33
Nodes (6): mac, LSBackgroundOnly, LSUIElement, category, extendInfo, target

### Community 27 - "allowScripts"
Cohesion: 0.33
Nodes (6): allowScripts, electron-winstaller@5.4.0, fsevents, node-desktop-idle-v2@1.1.26, usocket, windows-focus-assist@1.4.0

### Community 28 - "[0.9.0] - 2017-05-17"
Cohesion: 0.40
Nodes (5): [0.9.0] - 2017-05-17, Added, Changed, Fixed, Known issues

### Community 29 - "[1.0.0] - 2020-07-18"
Cohesion: 0.40
Nodes (5): [1.0.0] - 2020-07-18, Added, Changed, Fixed, Removed

### Community 30 - "[1.11.0] - 2022-8-7"
Cohesion: 0.40
Nodes (5): [1.11.0] - 2022-8-7, Added, Changed, Fixed, Removed

### Community 31 - "PULL_REQUEST_TEMPLATE.md"
Cohesion: 0.40
Nodes (4): Description of the Change, Other information, Requirements, Verification Process

### Community 32 - "keywords"
Cohesion: 0.40
Nodes (5): keywords, break, reminder, Stretchly, time

### Community 33 - "[0.10.0] - 2017-08-18"
Cohesion: 0.50
Nodes (4): [0.10.0] - 2017-08-18, Added, Changed, Fixed

### Community 34 - "[0.12.0] - 2017-11-05"
Cohesion: 0.50
Nodes (4): [0.12.0] - 2017-11-05, Added, Changed, Fixed

### Community 35 - "[0.14.0] - 2018-01-07"
Cohesion: 0.50
Nodes (4): [0.14.0] - 2018-01-07, Added, Changed, Fixed

### Community 36 - "[0.16.0] - 2018-03-17"
Cohesion: 0.50
Nodes (4): [0.16.0] - 2018-03-17, Added, Changed, Fixed

### Community 37 - "[0.17.0] - 2018-05-06"
Cohesion: 0.50
Nodes (4): [0.17.0] - 2018-05-06, Added, Changed, Fixed

### Community 38 - "[0.18.0] - 2018-10-21"
Cohesion: 0.50
Nodes (4): [0.18.0] - 2018-10-21, Added, Changed, Fixed

### Community 39 - "[0.19.0] - 2019-02-10"
Cohesion: 0.50
Nodes (4): [0.19.0] - 2019-02-10, Added, Changed, Fixed

### Community 40 - "[0.19.1] - 2019-02-17"
Cohesion: 0.50
Nodes (4): [0.19.1] - 2019-02-17, Added, Changed, Fixed

### Community 41 - "[0.20.0] - 2019-07-02"
Cohesion: 0.50
Nodes (4): [0.20.0] - 2019-07-02, Added, Changed, Fixed

### Community 42 - "[0.21.0] - 2019-10-13"
Cohesion: 0.50
Nodes (4): [0.21.0] - 2019-10-13, Added, Changed, Fixed

### Community 43 - "[0.21.1] - 2020-01-16"
Cohesion: 0.50
Nodes (4): [0.21.1] - 2020-01-16, Added, Changed, Fixed

### Community 44 - "[0.4.0] - 2016-11-05"
Cohesion: 0.50
Nodes (4): [0.4.0] - 2016-11-05, Added, Changed, Fixed

### Community 45 - "[0.7.0] - 2017-03-07"
Cohesion: 0.50
Nodes (4): [0.7.0] - 2017-03-07, Added, Changed, Removed

### Community 46 - "[0.99.0] - 2020-03-19 Patreon"
Cohesion: 0.50
Nodes (4): [0.99.0] - 2020-03-19 Patreon, Added, Changed, Fixed

### Community 47 - "[0.99.1] - 2020-04-09 Patreon"
Cohesion: 0.50
Nodes (4): [0.99.1] - 2020-04-09 Patreon, Changed, Fixed, Removed

### Community 48 - "[0.99.3] - 2020-05-05 Patreon"
Cohesion: 0.50
Nodes (4): [0.99.3] - 2020-05-05 Patreon, Added, Changed, Fixed

### Community 49 - "[1.12.0] - 2022-9-24"
Cohesion: 0.50
Nodes (4): [1.12.0] - 2022-9-24, Added, Changed, Removed

### Community 50 - "[1.16.0] - 2024-08-11"
Cohesion: 0.50
Nodes (4): [1.16.0] - 2024-08-11, Added, Changed, Fixed

### Community 51 - "[1.17.0] - 2024-12-24"
Cohesion: 0.50
Nodes (4): [1.17.0] - 2024-12-24, Added, Changed, Fixed

### Community 52 - "[1.18.0] - 2025-9-15"
Cohesion: 0.50
Nodes (4): [1.18.0] - 2025-9-15, Added, Changed, Fixed

### Community 53 - "[1.19.0] - 2025-11-13"
Cohesion: 0.50
Nodes (4): [1.19.0] - 2025-11-13, Added, Changed, Fixed

### Community 54 - "[1.1.99] - 2020-9-27 Patreon"
Cohesion: 0.50
Nodes (4): [1.1.99] - 2020-9-27 Patreon, Added, Changed, Fixed

### Community 55 - "[1.20.0] - 2025-12-24"
Cohesion: 0.50
Nodes (4): [1.20.0] - 2025-12-24, Added, Changed, Fixed

### Community 56 - "[1.21.0] - 2026-04-25"
Cohesion: 0.50
Nodes (4): [1.21.0] - 2026-04-25, Added, Changed, Fixed

### Community 57 - "[1.22.0] - 2026-07-17"
Cohesion: 0.50
Nodes (4): [1.22.0] - 2026-07-17, Added, Changed, Fixed

### Community 58 - "[1.2.0] - 2020-10-03"
Cohesion: 0.50
Nodes (4): [1.2.0] - 2020-10-03, Added, Changed, Fixed

### Community 59 - "[1.3.0] - 2020-11-08"
Cohesion: 0.50
Nodes (4): [1.3.0] - 2020-11-08, Added, Changed, Fixed

### Community 60 - "[1.4.0] - 2020-12-25"
Cohesion: 0.50
Nodes (4): [1.4.0] - 2020-12-25, Added, Changed, Fixed

### Community 61 - "[1.5.0] - 2021-04-07"
Cohesion: 0.50
Nodes (4): [1.5.0] - 2021-04-07, Added, Changed, Fixed

### Community 62 - "[1.6.0] - 2021-04-16"
Cohesion: 0.50
Nodes (4): [1.6.0] - 2021-04-16, Added, Changed, Fixed

### Community 63 - "[1.7.0] - 2021-05-04"
Cohesion: 0.50
Nodes (4): [1.7.0] - 2021-05-04, Added, Changed, Fixed

### Community 64 - "[1.8.0] - 2021-11-21"
Cohesion: 0.50
Nodes (4): [1.8.0] - 2021-11-21, Added, Changed, Fixed

### Community 65 - "[1.9.0] - 2021-12-24"
Cohesion: 0.50
Nodes (4): [1.9.0] - 2021-12-24, Added, Changed, Fixed

### Community 66 - "Investigator.md"
Cohesion: 0.50
Nodes (3): Key Files to Check, Response Guidelines, Workflow

### Community 67 - "Support.md"
Cohesion: 0.50
Nodes (3): Key Files to Check, Response Guidelines, Workflow

### Community 68 - "fpm"
Cohesion: 0.50
Nodes (4): rpm, fpm, _build_id_links none, --rpm-rpmbuild-define

### Community 70 - "[0.15.0] - 2018-02-18"
Cohesion: 0.67
Nodes (3): [0.15.0] - 2018-02-18, Added, Fixed

### Community 71 - "[0.20.1] - 2019-07-14"
Cohesion: 0.67
Nodes (3): [0.20.1] - 2019-07-14, Added, Fixed

### Community 72 - "[0.5.0] - 2016-11-28"
Cohesion: 0.67
Nodes (3): [0.5.0] - 2016-11-28, Added, Fixed

### Community 73 - "[0.5.1] - 2016-12-05"
Cohesion: 0.67
Nodes (3): [0.5.1] - 2016-12-05, Added, Fixed

### Community 74 - "[0.6.0] - 2017-01-21"
Cohesion: 0.67
Nodes (3): [0.6.0] - 2017-01-21, Added, Changed

### Community 75 - "[0.8.0] - 2017-04-09"
Cohesion: 0.67
Nodes (3): [0.8.0] - 2017-04-09, Added, Fixed

### Community 76 - "[0.8.1] - 2017-04-15"
Cohesion: 0.67
Nodes (3): [0.8.1] - 2017-04-15, Changed, Fixed

### Community 77 - "[0.99.2] - 2020-04-27 Patreon"
Cohesion: 0.67
Nodes (3): [0.99.2] - 2020-04-27 Patreon, Changed, Removed

### Community 78 - "[0.99.4] - 2020-05-15 Patreon"
Cohesion: 0.67
Nodes (3): [0.99.4] - 2020-05-15 Patreon, Added, Fixed

### Community 79 - "[0.99.5] - 2020-07-04 Patreon"
Cohesion: 0.67
Nodes (3): [0.99.5] - 2020-07-04 Patreon, Added, Changed

### Community 80 - "[1.10.0] - 2022-2-22"
Cohesion: 0.67
Nodes (3): [1.10.0] - 2022-2-22, Added, Changed

### Community 81 - "[1.14.1] - 2023-06-04"
Cohesion: 0.67
Nodes (3): [1.14.1] - 2023-06-04, Added, Fixed

### Community 82 - "[1.15.1] - 2023-11-19"
Cohesion: 0.67
Nodes (3): [1.15.1] - 2023-11-19, Changed, Fixed

### Community 83 - "[1.18.1] - 2025-9-27"
Cohesion: 0.67
Nodes (3): [1.18.1] - 2025-9-27, Changed, Fixed

### Community 84 - "[1.1.0] - 2020-09-12"
Cohesion: 0.67
Nodes (3): [1.1.0] - 2020-09-12, Added, Changed

### Community 85 - "[1.22.1] - 2026-08-13"
Cohesion: 0.67
Nodes (3): [1.22.1] - 2026-08-13, Changed, Fixed

### Community 86 - "[1.6.99] - 2021-05-02 Patreon"
Cohesion: 0.67
Nodes (3): [1.6.99] - 2021-05-02 Patreon, Added, Changed

### Community 87 - "[1.8.1] - 2021-11-24"
Cohesion: 0.67
Nodes (3): [1.8.1] - 2021-11-24, Changed, Fixed

### Community 88 - "dmg"
Cohesion: 0.50
Nodes (4): dmg, contents, icon, iconSize

### Community 90 - "repository"
Cohesion: 0.67
Nodes (3): repository, type, url

### Community 94 - "nsis"
Cohesion: 0.67
Nodes (3): nsis, allowToChangeInstallationDirectory, oneClick

## Knowledge Gaps
- **333 isolated node(s):** `__filename`, `__dirname`, `global`, `commandLineArguments`, `gotTheLock` (+328 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Change Log` connect `Change Log` to `[0.9.0] - 2017-05-17`, `[1.0.0] - 2020-07-18`, `[1.11.0] - 2022-8-7`, `[0.10.0] - 2017-08-18`, `[0.12.0] - 2017-11-05`, `[0.14.0] - 2018-01-07`, `[0.16.0] - 2018-03-17`, `[0.17.0] - 2018-05-06`, `[0.18.0] - 2018-10-21`, `[0.19.0] - 2019-02-10`, `[0.19.1] - 2019-02-17`, `[0.20.0] - 2019-07-02`, `[0.21.0] - 2019-10-13`, `[0.21.1] - 2020-01-16`, `[0.4.0] - 2016-11-05`, `[0.7.0] - 2017-03-07`, `[0.99.0] - 2020-03-19 Patreon`, `[0.99.1] - 2020-04-09 Patreon`, `[0.99.3] - 2020-05-05 Patreon`, `[1.12.0] - 2022-9-24`, `[1.16.0] - 2024-08-11`, `[1.17.0] - 2024-12-24`, `[1.18.0] - 2025-9-15`, `[1.19.0] - 2025-11-13`, `[1.1.99] - 2020-9-27 Patreon`, `[1.20.0] - 2025-12-24`, `[1.21.0] - 2026-04-25`, `[1.22.0] - 2026-07-17`, `[1.2.0] - 2020-10-03`, `[1.3.0] - 2020-11-08`, `[1.4.0] - 2020-12-25`, `[1.5.0] - 2021-04-07`, `[1.6.0] - 2021-04-16`, `[1.7.0] - 2021-05-04`, `[1.8.0] - 2021-11-21`, `[1.9.0] - 2021-12-24`, `[0.15.0] - 2018-02-18`, `[0.20.1] - 2019-07-14`, `[0.5.0] - 2016-11-28`, `[0.5.1] - 2016-12-05`, `[0.6.0] - 2017-01-21`, `[0.8.0] - 2017-04-09`, `[0.8.1] - 2017-04-15`, `[0.99.2] - 2020-04-27 Patreon`, `[0.99.4] - 2020-05-15 Patreon`, `[0.99.5] - 2020-07-04 Patreon`, `[1.10.0] - 2022-2-22`, `[1.14.1] - 2023-06-04`, `[1.15.1] - 2023-11-19`, `[1.18.1] - 2025-9-27`, `[1.1.0] - 2020-09-12`, `[1.22.1] - 2026-08-13`, `[1.6.99] - 2021-05-02 Patreon`, `[1.8.1] - 2021-11-24`, `[1.13.0] - 2022-12-23`, `[1.17.1] - 2024-12-25`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `build` connect `build` to `fpm`, `target`, `target`, `package.json`, `dmg`, `appx`, `mac`, `files`, `nsis`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `BreaksPlanner` connect `BreaksPlanner` to `main.js`, `AppExclusionsManager`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `initialize()` (e.g. with `main.js` and `pauseBreaks()`) actually correct?**
  _`initialize()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **What connects `__filename`, `__dirname`, `global` to the rest of the system?**
  _333 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `main.js` be split into smaller, more focused modules?**
  _Cohesion score 0.06759259259259259 - nodes in this community are weakly interconnected._
- **Should `Components` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._