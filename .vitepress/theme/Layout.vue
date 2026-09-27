<script setup lang="ts">
  import Giscus from '@giscus/vue'
  import { useData } from 'vitepress'
  import DefaultTheme, { useSidebar } from 'vitepress/theme'
  import { computed } from 'vue'
  import type { ThemeConfig } from '../config.mts'
  import BackToTop from './components/BackToTop.vue'
  import Contributors from './components/Contributors.vue'
  import { useLanguageRedirect } from './language'

  const { Layout } = DefaultTheme
  const { frontmatter, isDark, lang, page, theme } = useData<ThemeConfig>()
  const { hasSidebar } = useSidebar()

  useLanguageRedirect()

  const showComments = computed(() => theme.value.comments && frontmatter.value.comment !== false)

  // Before the migration both languages shared one URL, so share one discussion per page:
  // the giscus "pathname" term without the base and the /en prefix.
  const discussionTerm = computed(() => {
    const path = page.value.relativePath
      .replace(/^en\//, '')
      .replace(/(^|\/)index\.md$/, '')
      .replace(/\.md$/, '')
    return path || 'index'
  })
</script>

<template>
  <Layout>
    <template #doc-after>
      <Contributors v-if="frontmatter.contributors !== false" />
      <div v-if="showComments" class="comments-container">
        <Giscus
          :key="discussionTerm"
          repo="OpenListTeam/OpenList-Docs"
          repo-id="R_kgDOO-dM1g"
          category="Giscus Comments"
          category-id="DIC_kwDOO-dM1s4CruKV"
          mapping="specific"
          :term="discussionTerm"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="top"
          :theme="isDark ? 'dark' : 'light'"
          :lang="lang === 'zh-CN' ? 'zh-CN' : 'en'"
          loading="lazy"
          crossorigin="anonymous"
        />
      </div>
      <footer v-if="hasSidebar && theme.footer" class="doc-site-footer">
        <!-- eslint-disable vue/no-v-html -- footer HTML comes from our own config -->
        <p v-if="theme.footer.message" v-html="theme.footer.message" />
        <p v-if="theme.footer.copyright" v-html="theme.footer.copyright" />
        <!-- eslint-enable vue/no-v-html -->
      </footer>
    </template>
    <template #layout-bottom>
      <BackToTop />
    </template>
  </Layout>
</template>

<style scoped>
  .comments-container {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--vp-c-divider);
  }

  .doc-site-footer {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--vp-c-divider);
    text-align: center;
    font-size: 13px;
    line-height: 22px;
    color: var(--vp-c-text-2);
  }

  .doc-site-footer :deep(a) {
    text-decoration-line: underline;
    text-underline-offset: 2px;
    transition: color 0.25s;
  }

  .doc-site-footer :deep(a:hover) {
    color: var(--vp-c-text-1);
  }

  @media (max-width: 768px) {
    .comments-container {
      margin-top: 2rem;
      padding-top: 1.5rem;
    }
  }
</style>
