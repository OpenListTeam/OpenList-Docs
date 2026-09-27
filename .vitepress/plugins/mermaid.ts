import type { MarkdownRenderer } from 'vitepress'

/**
 * Render ```mermaid fences with the client-side <Mermaid> component.
 */
export function mermaidPlugin(md: MarkdownRenderer) {
  const fence: NonNullable<typeof md.renderer.rules.fence> =
    md.renderer.rules.fence ??
    ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (token.info.trim() !== 'mermaid') return fence(tokens, idx, options, env, self)

    return `<Mermaid code="${encodeURIComponent(token.content)}" />`
  }
}
