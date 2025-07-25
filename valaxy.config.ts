import type { PressTheme } from 'valaxy-theme-press'
import process from 'node:process'
import { $t, defineValaxyConfig } from 'valaxy'
import { addonAlgolia } from 'valaxy-addon-algolia'
import { addonComponents } from 'valaxy-addon-components'
import { addonGitLog } from 'valaxy-addon-git-log'

import { localIconLoader } from 'vitepress-plugin-group-icons'
import { markdownThemeImagePlugin } from './utils/markdown-theme-image'

const COMMIT_TAG = process.env.COMMIT_TAG || 'dev'
const DOCS_COMMIT_SHA = process.env.CF_PAGES_COMMIT_SHA || process.env.DOCS_COMMIT_SHA
const DOCS_ICP = process.env.DOCS_ICP || ''
const DOCS_CN = DOCS_ICP !== ''
const DOCS_BUILT_DATE = new Date().toLocaleString('zh-CN', { hour12: false }).replace('T', ' ')
// Must have SITE_URL or build fails
const SITE_URL = process.env.SITE_URL || 'https://example.com'
const VITE_BASE = process.env.VITE_BASE || '/'

const safelist = ['i-ri-home-line', 'i-ri-github-line', 'i-ri-arrow-up-line']

export default defineValaxyConfig<PressTheme.Config>({
  siteConfig: {
    title: $t('siteConfig.title'),
    url: SITE_URL,
    description: $t('siteConfig.description'),

    comment: {
      enable: DOCS_CN ? false : true,
    },

    search: {
      enable: true,
      type: 'algolia',
    },

    encrypt: {
      enable: false,
    },

    mediumZoom: {
      enable: true,
    },

    statistics: {
      enable: true,
    },

    license: {
      enabled: false,
    },
  },

  addons: [
    // Cannot uncomment this, or build error
    addonAlgolia({
      appId: 'I80ZVXR7H9',
      apiKey: '2a3fe6e1f95a3c8ca60fee55e44c00a1',
      indexName: 'Document Crawler CN',
    }),
    addonComponents(),
    addonGitLog({
      contributor: {
        strategy: 'prebuilt',
      },
      repositoryUrl: 'https://github.com/OpenListTeam/OpenList-Docs',
    }),
  ],

  theme: 'press',
  themeConfig: {
    logo: VITE_BASE.endsWith('/') ? `${VITE_BASE}logo.svg` : `/${VITE_BASE}/logo.svg`,
    sidebar: ['guide', 'configuration', 'faq', 'api', 'migration', 'ecosystem'],
    socialLinks: [{ icon: 'i-ri-github-line', link: 'https://github.com/OpenListTeam/OpenList' }],
    nav: [
      {
        text: 'nav.guide',
        link: '/guide',
      },
      {
        text: 'nav.configuration',
        link: '/configuration',
      },
      {
        text: 'nav.faq',
        link: '/faq',
      },
      {
        text: 'nav.ecosystem',
        link: '/ecosystem',
      },
      {
        text: 'nav.community.title',
        items: [
          {
            text: 'nav.community.discussions',
            link: 'https://github.com/OpenListTeam/OpenList/discussions',
          },
          {
            text: 'nav.community.telegram',
            link: 'https://t.me/OpenListTeam',
          },
          {
            text: 'nav.community.telegram_channel',
            link: 'https://t.me/OpenListOfficial',
          },
        ],
      },
      {
        text: COMMIT_TAG,
        items: [
          {
            text: 'Release Notes',
            link: 'https://github.com/OpenListTeam/OpenList/releases',
          },
        ],
      },
    ],

    // Why default to be `https://github.com/YunYouJun/valaxy/edit/main/docs/:path`?
    editLink: {
      pattern: 'https://github.com/OpenListTeam/OpenList-Docs/edit/main/:path',
    },

    footer: {
      message: DOCS_COMMIT_SHA
        ? `Commit <a href="https://github.com/OpenListTeam/OpenList-Docs/commit/${DOCS_COMMIT_SHA}">${DOCS_COMMIT_SHA?.slice(0, 8)}</a> built at ${DOCS_BUILT_DATE}`
        : `Built at ${DOCS_BUILT_DATE}`,
      copyright: `AGPL-3.0 Licensed | © 2022-${new Date().getFullYear()} <a href="https://github.com/OpenListTeam" target="_blank">The OpenList Projects Contributors</a>${DOCS_ICP ? ' | <a href="https://beian.miit.gov.cn" target="_blank">' + DOCS_ICP + '</a>' : ''}`,
    },
  },

  vite: {
    base: VITE_BASE,
    resolve: {
      alias: {
        'valaxy-theme-press/components/PressNavScreenMenuLink.vue':
          './components/PressNavScreenMenuLink.vue',
      },
    },
  },
  unocss: {
    safelist,
  },

  markdown: {
    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
      },
      warning: {
        icon: 'i-carbon-warning-alt',
      },
      danger: {
        icon: 'i-carbon-warning',
      },
      info: {
        icon: 'i-carbon-information',
      },
    },

    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, '[!code')
        },
      },
    ],
    // theme: 'material-theme-palenight',
    config: md => {
      md.use(markdownThemeImagePlugin)
    },
  },

  groupIcons: {
    customIcon: {
      valaxy: localIconLoader(import.meta.url, './public/favicon.svg'),
      docker: 'vscode-icons:file-type-docker',
      nginx: 'vscode-icons:file-type-nginx',
      toml: 'vscode-icons:file-type-toml',
    },
  },

  modules: {
    rss: {
      enable: false,
    },
  },
})
