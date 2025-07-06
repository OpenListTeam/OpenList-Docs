import type MarkdownIt from 'markdown-it'

export function markdownThemeImagePlugin(md: MarkdownIt) {
  const defaultImageRender =
    md.renderer.rules.image ||
    function (tokens: any, idx: any, options: any, _env: any, renderer: any) {
      return renderer.renderToken(tokens, idx, options)
    }

  md.renderer.rules.image = function (tokens, idx, options, env, renderer) {
    const token = tokens[idx]
    const src = token.attrGet('src') || ''
    const alt = token.content || ''
    const title = token.attrGet('title') || ''

    if (src.includes('#light') || src.includes('#dark')) {
      if (token.attrGet('data-processed') === 'true') {
        return ''
      }

      const isLight = src.includes('#light')
      const baseSrc = src.replace(/#(light|dark)$/, '')
      const expectedPairSrc = baseSrc + (isLight ? '#dark' : '#light')

      let pairedIdx = -1
      for (let i = idx + 1; i < Math.min(idx + 5, tokens.length); i++) {
        const nextToken = tokens[i]
        if (nextToken.type === 'image') {
          const nextSrc = nextToken.attrGet('src') || ''
          if (nextSrc === expectedPairSrc) {
            pairedIdx = i
            break
          }
        }
      }

      if (pairedIdx > idx) {
        tokens[pairedIdx].attrSet('data-processed', 'true')

        const lightSrc = isLight ? src : expectedPairSrc
        const darkSrc = isLight ? expectedPairSrc : src
        const titleAttr = title ? ` title="${md.utils.escapeHtml(title)}"` : ''

        return `<div class="theme-image-container">
          <img src="${md.utils.escapeHtml(lightSrc)}" alt="${md.utils.escapeHtml(alt)}"${titleAttr} class="theme-image-light" />
          <img src="${md.utils.escapeHtml(darkSrc)}" alt="${md.utils.escapeHtml(alt)}"${titleAttr} class="theme-image-dark" />
        </div>`
      }

      const themeClass = isLight ? 'theme-image-light' : 'theme-image-dark'
      const titleAttr = title ? ` title="${md.utils.escapeHtml(title)}"` : ''

      return `<img src="${md.utils.escapeHtml(src)}" alt="${md.utils.escapeHtml(alt)}"${titleAttr} class="${themeClass}" />`
    }

    return defaultImageRender(tokens, idx, options, env, renderer)
  }
}
