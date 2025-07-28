let openListVersionCache: string | null = null

// fetch the OpenList's latest version smartly
export const fetchOpenListVersion = async (): Promise<string> => {
  if (openListVersionCache) return openListVersionCache

  const sources = [
    // GitHub Releases
    {
      url: 'https://api.github.com/repos/OpenListTeam/OpenList/releases/latest',
      handler: (json: any) => json.tag_name,
    },
    // fallback to frontend version number
    // npm registry
    {
      url: 'https://registry.npmjs.org/@openlist-frontend/openlist-frontend/latest',
      handler: (json: any) => `v${json.version}`,
    },
    {
      url: 'https://registry.npmjs.org/@openlist-frontend/openlist-frontend',
      handler: (json: any) => `v${json['dist-tags'].latest}`,
    },
    // unpkg
    {
      url: 'https://unpkg.com/@openlist-frontend/openlist-frontend/package.json',
      handler: (json: any) => `v${json.version}`,
    },
  ]

  for (const { url, handler } of sources) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 2000)

      const res = await fetch(url, { signal: controller.signal })
      clearTimeout(timeoutId)

      const json = await res.json()
      const version = handler(json)

      if (typeof version === 'string' && /^v?\d+\.\d+\.\d+$/.test(version)) {
        return (openListVersionCache = version.startsWith('v') ? version : `v${version}`)
      }
    } catch (e) {
      console.warn(`Failed to fetch version from ${url}`, e)
    }
  }
  console.error('All version sources failed, fallback to dev version')
  return 'dev'
}
