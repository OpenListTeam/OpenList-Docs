import { computed } from 'vue'
import { useData } from 'vitepress'

const messages = {
  en: {
    wip: 'WIP, please stay tuned',
    tooltip: {
      back_to_top: 'Back to Top',
    },
    post: {
      contributors: 'Contributors',
    },
    download: {
      all: 'All',
      os: 'Operating System',
      cpu: 'CPU Architecture',
      down_source: 'Download Source',
      download: 'Download',
      gh_proxy: 'GhProxy',
      version: 'Version',
      beta: 'Beta',
      latest: 'Latest',
    },
  },
  'zh-CN': {
    wip: '编写中，敬请期待',
    tooltip: {
      back_to_top: '回到顶部',
    },
    post: {
      contributors: '贡献者',
    },
    download: {
      all: '全部',
      os: '操作系统',
      cpu: 'CPU 架构',
      down_source: '下载来源',
      download: '下载',
      gh_proxy: '加速下载',
      version: '版本',
      beta: '测试版',
      latest: '最新版',
    },
  },
} as const

type Locale = keyof typeof messages

/** Minimal replacement for vue-i18n's `useI18n`, driven by the VitePress locale. */
export function useI18n() {
  const { lang } = useData()
  const locale = computed<Locale>(() => (lang.value in messages ? (lang.value as Locale) : 'en'))

  function t(key: string): string {
    let value: any = messages[locale.value]
    for (const part of key.split('.')) value = value?.[part]
    return typeof value === 'string' ? value : key
  }

  return { t, locale }
}
