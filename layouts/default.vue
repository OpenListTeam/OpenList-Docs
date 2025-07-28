<script setup lang="ts">
  import Giscus from '@giscus/vue'
  import { useI18n } from 'vue-i18n'
  import { useSiteConfig, useFrontmatter } from 'valaxy'
  import { computed } from 'vue'
  import { useDark } from '@vueuse/core'
  import AutoLanguageDetector from '../components/AutoLanguageDetector.vue'
  import BackToTop from '../components/BackToTop.vue'

  const { t, locale } = useI18n()
  const siteConfig = useSiteConfig()
  const frontmatter = useFrontmatter()
  const isDark = useDark()

  // 计算 Giscus 语言
  const giscusLang = computed(() => {
    const lang = locale.value
    // Giscus 支持的语言映射
    const langMap: Record<string, string> = {
      'zh-CN': 'zh-CN',
      'zh-TW': 'zh-TW',
      en: 'en',
      ja: 'ja',
      ko: 'ko',
      es: 'es',
      fr: 'fr',
      de: 'de',
      ru: 'ru',
    }
    return langMap[lang] || 'en'
  })

  // 计算 Giscus 主题
  const giscusTheme = computed(() => {
    return isDark.value ? 'dark' : 'light'
  })
</script>

<template>
  <Layout>
    <AutoLanguageDetector />

    <RouterView v-slot="{ Component }">
      <component :is="Component">
        <template #default>
          <div class="prose mx-auto w-full max-w-4xl">
            <h2>
              <span>
                {{ t('post.contributors') }}
              </span>
            </h2>
            <GitLogContributor />
            <div
              v-if="siteConfig.comment.enable && frontmatter.comment !== false"
              class="comments-container"
            >
              <Giscus
                repo="OpenListTeam/OpenList-Docs"
                repo-id="R_kgDOO-dM1g"
                category="Giscus Comments"
                category-id="DIC_kwDOO-dM1s4CruKV"
                mapping="pathname"
                strict="0"
                reactions-enabled="1"
                emit-metadata="0"
                input-position="top"
                :theme="giscusTheme"
                :lang="giscusLang"
                loading="lazy"
                crossorigin="anonymous"
              />
            </div>
          </div>
        </template>
      </component>
    </RouterView>

    <BackToTop />
  </Layout>
</template>

<style scoped>
  .comments-container {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--va-c-divider-light);
  }

  @media (max-width: 768px) {
    .comments-container {
      margin-top: 2rem;
      padding-top: 1.5rem;
    }
  }
</style>
