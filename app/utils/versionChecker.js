class VersionChecker {
  latest () {
    return fetch(
      'https://api.github.com/repos/ImMahdi/stretchly-persian/releases/latest',
      {
        method: 'GET',
        headers: { 'User-Agent': 'ImMahdi/stretchly-persian' },
        mode: 'cors',
        cache: 'default'
      })
      .then(response => {
        if (!response.ok) {
          return null
        }
        return response.json()
      })
      .then(body => (body && body.tag_name) ? body.tag_name : null)
      .catch(() => null)
  }
}

export default VersionChecker
