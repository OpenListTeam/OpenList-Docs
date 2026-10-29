import type { MarkdownRenderer } from 'vitepress'

/**
 * Render `![](a.png#light)` + `![](a.png#dark)` pairs as a light/dark switching image.
 */
export function themeImagePlugin(md: MarkdownRenderer) {
  const defaultImageRender: NonNullable<typeof md.renderer.rules.image> =
    md.renderer.rules.image ??
    ((tokens, idx, options, _env, renderer) => renderer.renderToken(tokens, idx, options))

  md.renderer.rules.image = (tokens, idx, options, env, renderer) => {
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
