<script setup lang="ts">
  import { computed, ref, onMounted, nextTick } from 'vue'
  import { useDark } from '@vueuse/core'

  interface Props {
    lightSrc: string
    darkSrc: string
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
  const containerRef = ref<HTMLElement>()
  const lightImageRef = ref<HTMLImageElement>()
  const darkImageRef = ref<HTMLImageElement>()

  const currentSrc = computed(() => {
    return isDark.value ? props.darkSrc : props.lightSrc
  })

  const containerStyle = computed(() => {
    const style: Record<string, string> = {
      position: 'relative',
      display: 'inline-block',
    }

    if (props.width) {
      style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
    }

    if (props.height) {
      style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
    }

    return style
  })

  const imageStyle = computed(() => {
    const style: Record<string, string> = {
      maxWidth: '100%',
      height: 'auto',
      transition: 'opacity 0.3s ease-in-out',
      display: 'block',
    }

    if (props.width) {
      style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
    }

    if (props.height) {
      style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
    }

    return style
  })

  const lightImageStyle = computed(() => ({
    ...imageStyle.value,
    opacity: isDark.value ? '0' : '1',
    position: isDark.value ? ('absolute' as const) : ('static' as const),
    top: isDark.value ? '0' : 'auto',
    left: isDark.value ? '0' : 'auto',
  }))

  const darkImageStyle = computed(() => ({
    ...imageStyle.value,
    opacity: isDark.value ? '1' : '0',
    position: isDark.value ? ('static' as const) : ('absolute' as const),
    top: isDark.value ? 'auto' : '0',
    left: isDark.value ? 'auto' : '0',
  }))

  const preloadImage = (src: string) => {
    const img = new Image()
    img.src = src
  }

  onMounted(async () => {
    preloadImage(props.lightSrc)
    preloadImage(props.darkSrc)
  })
</script>

<template>
  <div ref="containerRef" :style="containerStyle" class="theme-image-pair">
    <img
      ref="lightImageRef"
      :src="lightSrc"
      :alt="alt"
      :title="title"
      :loading="loading"
      :style="lightImageStyle"
      class="theme-image light-image"
    />
    <img
      ref="darkImageRef"
      :src="darkSrc"
      :alt="alt"
      :title="title"
      :loading="loading"
      :style="darkImageStyle"
      class="theme-image dark-image"
    />
  </div>
</template>

<style scoped>
  .theme-image-pair {
    line-height: 0;
  }

  .theme-image {
    vertical-align: top;
  }
</style>
