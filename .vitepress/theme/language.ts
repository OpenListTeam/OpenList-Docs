import { useData } from 'vitepress'
import { onMounted, watch } from 'vue'

type Lang = 'en' | 'zh-CN'

const STORAGE_KEY = 'openlist-docs-lang'
/** preference saved by the old Valaxy site */
const LEGACY_STORAGE_KEY = 'valaxy-lang'
const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|prerender/i

function read(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // storage can be unavailable (private mode, blocked cookies): just don't remember
  }
}

function asLang(value: string | null): Lang | null {
  return value === 'en' || value === 'zh-CN' ? value : null
}

function detectBrowserLang(): Lang {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const language of languages) {
    if (/^zh\b/i.test(language)) return 'zh-CN'
    if (/^en\b/i.test(language)) return 'en'
  }
  return 'en'
}

/** Same page in the other language: `/foo` (Chinese) <-> `/en/foo`. */
function counterpart(pathname: string, base: string, target: Lang): string | null {
  if (!pathname.startsWith(base)) return null
  const rel = pathname.slice(base.length)
  const isEn = rel === 'en' || rel.startsWith('en/')
  if (target === 'en') return isEn ? null : `${base}en/${rel}`
  return isEn ? base + rel.replace(/^en\/?/, '') : null
}

/**
 * On landing, send visitors to the language they used last time (or their
 * browser language on the first visit); remember the language they browse in.
 */
export function useLanguageRedirect() {
  const { lang, page, site } = useData()

  onMounted(() => {
    const current = asLang(lang.value)
    if (
      !current ||
      page.value.isNotFound ||
      navigator.webdriver ||
      BOT_RE.test(navigator.userAgent)
    )
      return

    const preferred =
      asLang(read(STORAGE_KEY)) ?? asLang(read(LEGACY_STORAGE_KEY)) ?? detectBrowserLang()
    if (preferred !== current) {
      const target = counterpart(location.pathname, site.value.base, preferred)
      if (target) {
        write(STORAGE_KEY, preferred)
        location.replace(target + location.search + location.hash)
        return
      }
    }
    write(STORAGE_KEY, current)
  })

  watch(lang, value => {
    const current = asLang(value)
    if (current) write(STORAGE_KEY, current)
  })
}
