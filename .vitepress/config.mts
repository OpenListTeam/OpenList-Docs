import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { type DefaultTheme, defineConfigWithTheme } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { getContributors } from './contributors'
import { mermaidPlugin } from './plugins/mermaid'
import { themeImagePlugin } from './plugins/theme-image'
import { generateSidebar } from './sidebar'
import { fetchOpenListVersion } from './version'

export interface ThemeConfig extends DefaultTheme.Config {
  /** giscus comments, disabled for the China mainland mirror */
  comments?: boolean
}

const COMMIT_TAG = process.env.COMMIT_TAG || (await fetchOpenListVersion()) || 'dev'
const DOCS_COMMIT_SHA = process.env.CF_PAGES_COMMIT_SHA || process.env.DOCS_COMMIT_SHA
const DOCS_ICP = process.env.DOCS_ICP || ''
const DOCS_CN = DOCS_ICP !== ''
const DOCS_BUILT_DATE = new Date().toLocaleString('zh-CN', { hour12: false })
const SITE_URL = process.env.SITE_URL || 'https://doc.oplist.org'
const BASE = `/${(process.env.VITE_BASE || '').replace(/^\/+|\/+$/g, '')}/`.replace(/\/+/g, '/')

const srcDir = fileURLToPath(new URL('../pages', import.meta.url))

// top-level sidebar sections, in display order
const SIDEBAR_CATEGORIES = [
  'guide',
  'configuration',
  'faq',
  'seeds',
  'api',
  'migration',
  'ecosystem',
]

const categoryText = {
  en: {
    configuration: 'Configuration',
    guide: 'User Guide',
    installation: 'Installation',
    advanced: 'Advanced',
    drivers: 'Storage Setup',
    faq: 'FAQ',
    seeds: 'Transfer Seeds',
    api: 'API Documentation',
    admin: 'admin',
    changelog: 'Changelog',
    ecosystem: 'Ecosystem',
    eco_official: 'Official Ecosystem',
    eco_worker: 'OpenList Worker',
  },
  zh: {
    configuration: '配置指南',
    guide: '用户指南',
    installation: '安装教程',
    advanced: '高级设置',
    drivers: '添加存储',
    faq: 'FAQ',
    seeds: '传输种子',
    developer: '开发指引',
    api: 'API 文档',
    admin: 'admin',
    changelog: 'Changelog',
    ecosystem: '生态项目',
    eco_official: '官方生态项目',
    eco_worker: 'OpenList Worker',
  },
}

const navText = {
  en: {
    guide: 'User Guide',
    configuration: 'Configuration',
    faq: 'FAQ',
    seeds: 'Transfer Seeds',
    ecosystem: 'Ecosystem',
    community: 'Community',
    discussions: 'Github Discussions',
    telegramChannel: 'Telegram Channel',
  },
  zh: {
    guide: '用户指南',
    configuration: '配置指南',
    faq: 'FAQ',
    seeds: '传输种子',
    ecosystem: '生态项目',
    community: '社区',
    discussions: 'Github 讨论区',
    telegramChannel: 'Telegram 频道',
  },
}

function nav(prefix: string, text: typeof navText.en): DefaultTheme.NavItem[] {
  return [
    { text: text.guide, link: `${prefix}/guide/`, activeMatch: `^${prefix}/guide/` },
    {
      text: text.configuration,
      link: `${prefix}/configuration/`,
      activeMatch: `^${prefix}/configuration/`,
    },
    { text: text.faq, link: `${prefix}/faq/`, activeMatch: `^${prefix}/faq/` },
    { text: text.seeds, link: `${prefix}/seeds/`, activeMatch: `^${prefix}/seeds/` },
    { text: text.ecosystem, link: `${prefix}/ecosystem/`, activeMatch: `^${prefix}/ecosystem/` },
    {
      text: text.community,
      items: [
        { text: text.discussions, link: 'https://github.com/OpenListTeam/OpenList/discussions' },
        { text: 'Telegram', link: 'https://t.me/OpenListTeam' },
        { text: text.telegramChannel, link: 'https://t.me/OpenListOfficial' },
      ],
    },
    {
      text: COMMIT_TAG,
      items: [{ text: 'Release Notes', link: 'https://github.com/OpenListTeam/OpenList/releases' }],
    },
  ]
}

const footer = {
  message: DOCS_COMMIT_SHA
    ? `Commit <a href="https://github.com/OpenListTeam/OpenList-Docs/commit/${DOCS_COMMIT_SHA}">${DOCS_COMMIT_SHA.slice(0, 8)}</a> built at ${DOCS_BUILT_DATE}`
    : `Built at ${DOCS_BUILT_DATE}`,
  copyright: `AGPL-3.0 Licensed | © 2022-${new Date().getFullYear()} <a href="https://github.com/OpenListTeam" target="_blank">The OpenList Projects Contributors</a>${DOCS_ICP ? ` | <a href="https://beian.miit.gov.cn" target="_blank">${DOCS_ICP}</a>` : ''}`,
}

export default defineConfigWithTheme<ThemeConfig>({
  srcDir: 'pages',
  srcExclude: ['**/snippets/**', 'guide/advanced/sso/**', 'en/guide/advanced/sso/**'],
  outDir: 'dist',
  base: BASE,
  cleanUrls: true,
  ignoreDeadLinks: 'localhostLinks',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: `${BASE}favicon.svg`, type: 'image/svg+xml' }],
    ['meta', { property: 'og:site_name', content: 'OpenList Docs' }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/logo.svg` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  sitemap: {
    hostname: SITE_URL,
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'OpenList 文档',
      description: 'OpenList 文档网站',
      themeConfig: {
        nav: nav('', navText.zh),
        sidebar: generateSidebar({
          srcDir,
          localePrefix: '',
          otherLocales: ['en'],
          categories: SIDEBAR_CATEGORIES,
          categoryText: categoryText.zh,
        }),
        editLink: {
          pattern: 'https://github.com/OpenListTeam/OpenList-Docs/edit/main/pages/:path',
          text: '在 GitHub 上编辑此页',
        },
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '页面导航' },
        lastUpdated: { text: '最后更新于' },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        langMenuLabel: '切换语言',
        notFound: {
          title: '页面未找到',
          quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
          linkLabel: '前往首页',
          linkText: '带我回首页',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'OpenList Docs',
      description: 'Documentation site for OpenList',
      themeConfig: {
        nav: nav('/en', navText.en),
        sidebar: generateSidebar({
          srcDir,
          localePrefix: 'en',
          otherLocales: [],
          categories: SIDEBAR_CATEGORIES,
          categoryText: categoryText.en,
        }),
        editLink: {
          pattern: 'https://github.com/OpenListTeam/OpenList-Docs/edit/main/pages/:path',
          text: 'Edit this page on GitHub',
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/OpenListTeam/OpenList' }],
    comments: !DOCS_CN,
    footer,
    search: {
      provider: 'algolia',
      options: {
        appId: 'I80ZVXR7H9',
        apiKey: '2a3fe6e1f95a3c8ca60fee55e44c00a1',
        indexName: 'Document Crawler CN',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈',
                },
              },
            },
          },
        },
      },
    },
  },

  markdown: {
    languageAlias: {
      env: 'dotenv',
    },
    config(md) {
      // the plugin is typed against a newer @types/markdown-it than VitePress 1.x ships
      md.use(groupIconMdPlugin as unknown as Parameters<typeof md.use>[0])
      md.use(themeImagePlugin)
      md.use(mermaidPlugin)
    },
  },

  transformPageData(pageData) {
    if (pageData.frontmatter.layout === 'home' || pageData.frontmatter.contributors === false)
      return
    pageData.contributors = getContributors(pageData.relativePath)
  },

  vite: {
    resolve: {
      alias: [
        // three-state appearance switch (system / light / dark) instead of the light/dark toggle
        {
          find: /^.*\/VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/ThemeSwitcher.vue', import.meta.url)
          ),
        },
      ],
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          docker: 'vscode-icons:file-type-docker',
          nginx: 'vscode-icons:file-type-nginx',
          toml: 'vscode-icons:file-type-toml',
        },
      }),
    ],
  },
})
