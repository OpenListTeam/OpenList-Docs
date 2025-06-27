<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { onMounted, nextTick } from 'vue'
  import { initLanguageDetection } from '../utils/languageDetector'

  const { locale, availableLocales } = useI18n()

  onMounted(async () => {
    try {
      await nextTick()

      if (import.meta.env.DEV) {
        console.log('AutoLanguageDetector mounted, current locale:', locale.value)
        console.log('Available locales:', availableLocales)
      }

      if (typeof window !== 'undefined') {
        initLanguageDetection(locale)
      }
    } catch (error) {
      console.error('Error in AutoLanguageDetector mount:', error)
    }
  })
</script>

<template></template>
