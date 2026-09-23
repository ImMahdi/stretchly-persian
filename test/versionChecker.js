import { afterEach, vi } from 'vitest'
import { expect } from 'chai'
import VersionChecker from '../app/utils/versionChecker'

describe('VersionChecker', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  describe('latest', () => {
    it('fetches tag name', async () => {
      const tagName = 'tag name'
      const response = {
        ok: true,
        json: vi.fn().mockReturnValue(Promise.resolve({ tag_name: tagName }))
      }
      const fetch = vi.fn().mockReturnValue(Promise.resolve(response))
      vi.stubGlobal('fetch', fetch)

      const checker = new VersionChecker()
      const result = await checker.latest()

      expect(result).to.equal(tagName)
      expect(fetch.mock.calls[0]).toEqual([
        'https://api.github.com/repos/ImMahdi/stretchly-persian/releases/latest',
        {
          method: 'GET',
          headers: { 'User-Agent': 'ImMahdi/stretchly-persian' },
          mode: 'cors',
          cache: 'default'
        }
      ])

      expect(response.json).toHaveBeenCalled()
    })
  })
})
