<script setup lang="ts">
  import { computed } from 'vue'
  import { useDark } from '@vueuse/core'

  interface Props {
    src: string
    alt?: string
    title?: string
    width?: string | number
    height?: string | number
    loading?: 'lazy' | 'eager'
  }

  const props = withDefaults(defineProps<Props>(), {
    alt: '',
    loading: 'lazy',
  })

  const isDark = useDark()

  const isThemeImage = computed(() => {
    return props.src.includes('#light') || props.src.includes('#dark')
  })

  const shouldShow = computed(() => {
    if (!isThemeImage.value) {
      return true
    }

    const isLightImage = props.src.includes('#light')
    const isDarkImage = props.src.includes('#dark')

    if (isLightImage && !isDark.value) {
      return true
    }

    if (isDarkImage && isDark.value) {
      return true
    }

    return false
  })

  const cleanSrc = computed(() => {
    return props.src.replace(/#(light|dark)$/, '')
  })
</script>

<template>
  <img
    v-show="shouldShow"
    :src="cleanSrc"
    :alt="alt"
    :title="title"
    :loading="loading"
    :width="width"
    :height="height"
    class="theme-image"
  />
</template>

<style scoped>
  .theme-image {
    max-width: 100%;
    height: auto;
    transition: opacity 0.3s ease-in-out;
  }
</style>
