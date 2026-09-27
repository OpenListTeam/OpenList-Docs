import type { MarkdownRenderer } from 'vitepress'

/**
 * Render ```mermaid fences with the client-side <Mermaid> component.
 */
export function mermaidPlugin(md: MarkdownRenderer) {
  const fence = md.renderer.rules.fence!

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (token.info.trim() !== 'mermaid') return fence(tokens, idx, options, env, self)

    return `<Mermaid code="${encodeURIComponent(token.content)}" />`
  }
}
