import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'

declare module 'vitepress' {
  interface PageData {
    /** set in `transformPageData`, see `.vitepress/config.mts` */
    contributors?: Contributor[]
  }
}

export interface Contributor {
  name: string
  count: number
  avatar: string
  github?: string
}

interface Author {
  name: string
  email: string
  count: number
}

/** file path (relative to repo root) -> author email -> author */
let gitLog: Map<string, Map<string, Author>> | undefined

function loadGitLog(): Map<string, Map<string, Author>> {
  const files = new Map<string, Map<string, Author>>()
  let output: string
  try {
    output = execFileSync('git', ['log', '--format=%x1e%an%x1f%ae', '--name-only', '--', 'pages'], {
      encoding: 'utf8',
      maxBuffer: 256 * 1024 * 1024,
    })
  } catch (error) {
    console.warn('[contributors] git log failed, contributors will be empty:', error)
    return files
  }

  for (const entry of output.split('\x1e').slice(1)) {
    const [header, ...paths] = entry.split('\n')
    const [name, rawEmail] = header.split('\x1f')
    const email = rawEmail.trim().toLowerCase()
    if (name.endsWith('[bot]')) continue
    for (const file of paths) {
      if (!file.trim()) continue
      const authors = files.get(file) ?? new Map<string, Author>()
      files.set(file, authors)
      const author = authors.get(email)
      if (author) author.count++
      // git log is newest first, so the first name seen is the latest one
      else authors.set(email, { name, email, count: 1 })
    }
  }
  return files
}

function toContributor({ name, email, count }: Author): Contributor {
  const noreply = email.match(/^(?:(\d+)\+)?([^@]+)@users\.noreply\.github\.com$/)
  if (noreply) {
    const [, id, login] = noreply
    return {
      name,
      count,
      github: `https://github.com/${login}`,
      avatar: id
        ? `https://avatars.githubusercontent.com/u/${id}?s=64&v=4`
        : `https://github.com/${login}.png?size=64`,
    }
  }
  const hash = createHash('md5').update(email).digest('hex')
  return { name, count, avatar: `https://www.gravatar.com/avatar/${hash}?s=64&d=identicon` }
}

/**
 * Contributors of a page, merged across both languages: before the VitePress
 * migration both languages lived in the same file.
 *
 * @param relativePath page path relative to `pages/`, e.g. `en/guide/index.md`
 */
export function getContributors(relativePath: string): Contributor[] {
  gitLog ??= loadGitLog()
  const base = relativePath.replace(/^en\//, '')
  const merged = new Map<string, Author>()
  for (const file of [`pages/${base}`, `pages/en/${base}`]) {
    for (const author of gitLog.get(file)?.values() ?? []) {
      const existing = merged.get(author.email)
      if (existing) existing.count += author.count
      else merged.set(author.email, { ...author })
    }
  }
  return [...merged.values()].sort((a, b) => b.count - a.count).map(toContributor)
}
