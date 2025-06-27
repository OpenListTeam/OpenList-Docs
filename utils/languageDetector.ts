const SUPPORTED_LANGUAGES = ['en', 'zh-CN'] as const
const DEFAULT_LANGUAGE = 'en'

function detectBrowserLanguage(): string {
  const browserLanguages = navigator.languages || [navigator.language]

  if (import.meta.env.DEV) {
    console.log('Browser languages:', browserLanguages)
    console.log('Supported languages:', SUPPORTED_LANGUAGES)
  }

  for (const browserLang of browserLanguages) {
    if (SUPPORTED_LANGUAGES.includes(browserLang as any)) {
      if (import.meta.env.DEV) {
        console.log('Exact match found:', browserLang)
      }
      return browserLang
    }
  }

  for (const browserLang of browserLanguages) {
    const langCode = browserLang.split('-')[0]
    const matchedLang = SUPPORTED_LANGUAGES.find(lang => lang.startsWith(langCode))
    if (matchedLang) {
      if (import.meta.env.DEV) {
        console.log('Language code match found:', matchedLang, 'for browser lang:', browserLang)
      }
      return matchedLang
    }
  }

  if (import.meta.env.DEV) {
    console.log('⚠️ No match found, using default language:', DEFAULT_LANGUAGE)
  }
  return DEFAULT_LANGUAGE
}

function setLanguage(lang: string, locale?: any) {
  if (locale && locale.value !== lang) {
    if (import.meta.env.DEV) {
      console.log('Setting language from', locale.value, 'to', lang)
    }

    locale.value = lang
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang
  }

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('valaxy-lang', lang)
  }

  if (import.meta.env.DEV) {
    console.log(`Language switched to: ${lang}`)
  }
}

export function initLanguageDetection(locale?: any) {
  try {
    let sessionInitialized: string | null = null
    if (typeof sessionStorage !== 'undefined') {
      sessionInitialized = sessionStorage.getItem('valaxy-lang-session-initialized')
    }

    if (sessionInitialized === 'true') {
      if (import.meta.env.DEV) {
        console.log('Language already initialized in this session, skipping')
      }
      return
    }

    let savedLang: string | null = null
    let hasVisitedBefore: string | null = null

    if (typeof localStorage !== 'undefined') {
      savedLang = localStorage.getItem('valaxy-lang')
      hasVisitedBefore = localStorage.getItem('valaxy-lang-initialized')
    }

    if (import.meta.env.DEV) {
      console.log('Saved language preference:', savedLang)
      console.log('Has visited before:', hasVisitedBefore)
    }

    if (hasVisitedBefore === 'true') {
      if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang as any)) {
        if (import.meta.env.DEV) {
          console.log('Using saved language preference (returning user):', savedLang)
        }
        setLanguage(savedLang, locale)
      } else {
        const currentLang = locale?.value || DEFAULT_LANGUAGE
        if (import.meta.env.DEV) {
          console.log('Using current/default language (returning user):', currentLang)
        }
        setLanguage(currentLang, locale)
      }
    } else {
      const detectedLang = detectBrowserLanguage()
      if (import.meta.env.DEV) {
        console.log('First visit - auto-detected language:', detectedLang)
      }

      setLanguage(detectedLang, locale)

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('valaxy-lang-initialized', 'true')
      }
    }

    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('valaxy-lang-session-initialized', 'true')
    }
  } catch (error) {
    console.error('ERROR in language initialization:', error)
    setLanguage(DEFAULT_LANGUAGE, locale)
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('valaxy-lang-session-initialized', 'true')
    }
  }
}

export function setLanguageManually(lang: string, locale?: any) {
  if (SUPPORTED_LANGUAGES.includes(lang as any)) {
    setLanguage(lang, locale)

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('valaxy-lang-initialized', 'true')
    }
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('valaxy-lang-session-initialized', 'true')
    }
  }
}
