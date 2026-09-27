import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { DefaultTheme } from 'vitepress'

/**
 * Build the sidebar from page frontmatter, the same way the old Valaxy press
 * theme did it:
 *
 * - `categories: [guide, drivers]` puts a page in the "guide > drivers" group
 * - `top` sorts pages (and therefore groups) in descending order
 * - a nested group of more than 8 pages without subgroups starts collapsed
 */

interface PageEntry {
  link: string
  title: string
  top: number
  categories: string[]
}

interface CategoryNode {
  name: string
  children: Map<string, CategoryNode | PageEntry>
}

const isCategory = (item: CategoryNode | PageEntry): item is CategoryNode => 'children' in item

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return entry.name === 'public' ? [] : walk(full)
    return entry.name.endsWith('.md') ? [full] : []
  })
}

function toLink(relativePath: string): string {
  return '/' + relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
}

function readPages(srcDir: string, localePrefix: string, otherLocales: string[]): PageEntry[] {
  const root = path.join(srcDir, localePrefix)
  const files = walk(root).filter(file => {
    const rel = path.relative(root, file)
    // the root locale must not pick up the trees of the other locales
    return !otherLocales.some(locale => rel.startsWith(locale + path.sep))
  })

  const pages: PageEntry[] = []
  for (const file of files.sort()) {
    const { data, content } = matter(fs.readFileSync(file, 'utf8'))
    if (!Array.isArray(data.categories) || data.categories.length === 0) continue
    const title = content.match(/^#\s+(.+?)(?:\s+\{#[^}]*\})?\s*$/m)?.[1]
    if (!title) continue
    pages.push({
      link: toLink(path.relative(srcDir, file).split(path.sep).join('/')),
      title,
      top: Number(data.top) || 0,
      categories: data.categories.map(String),
    })
  }
  return pages
}

function buildTree(pages: PageEntry[]): CategoryNode {
  const root: CategoryNode = { name: 'All', children: new Map() }
  // stable sort keeps path order for equal `top`
  for (const page of [...pages].sort((a, b) => b.top - a.top)) {
    let node = root
    for (const name of page.categories) {
      let next = node.children.get(name)
      if (!next || !isCategory(next)) {
        next = { name, children: new Map() }
        node.children.set(name, next)
      }
      node = next
    }
    node.children.set(page.link, page)
  }
  return root
}

function toItems(
  node: CategoryNode,
  categoryText: Record<string, string>
): DefaultTheme.SidebarItem[] {
  return [...node.children.values()].map(child => {
    if (!isCategory(child)) return { text: child.title, link: child.link }
    const children = [...child.children.values()]
    const onlyPages = children.every(item => !isCategory(item))
    return {
      text: categoryText[child.name] ?? child.name,
      collapsed: onlyPages && children.length > 8,
      items: toItems(child, categoryText),
    }
  })
}

export function generateSidebar(options: {
  srcDir: string
  /** '' for the root locale, e.g. 'en' for /en/ */
  localePrefix: string
  /** directories of the other locales inside this locale's tree */
  otherLocales: string[]
  /** top-level categories, in display order */
  categories: string[]
  categoryText: Record<string, string>
}): DefaultTheme.SidebarItem[] {
  const tree = buildTree(readPages(options.srcDir, options.localePrefix, options.otherLocales))
  return options.categories.flatMap(name => {
    const node = tree.children.get(name)
    if (!node || !isCategory(node)) return []
    return [
      {
        text: options.categoryText[name] ?? name,
        collapsed: false,
        items: toItems(node, options.categoryText),
      },
    ]
  })
}
