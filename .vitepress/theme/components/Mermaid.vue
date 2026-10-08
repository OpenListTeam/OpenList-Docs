<script setup lang="ts">
  import { useData } from 'vitepress'
  import { computed, nextTick, onMounted, ref, useTemplateRef, watch } from 'vue'

  const props = defineProps<{
    /** URI-encoded diagram source, see `.vitepress/plugins/mermaid.ts` */
    code: string
  }>()

  const { isDark } = useData()
  const container = useTemplateRef<HTMLElement>('container')
  const source = computed(() => decodeURIComponent(props.code))
  const svg = ref('')
  const failed = ref(false)

  let renderCount = 0

  async function render() {
    const id = `mermaid-${Math.random().toString(36).slice(2)}`
    const current = ++renderCount
    const { default: mermaid } = await import('mermaid')
    mermaid.initialize({ startOnLoad: false, theme: isDark.value ? 'dark' : 'default' })
    let result: Awaited<ReturnType<typeof mermaid.render>>
    try {
      result = await mermaid.render(id, source.value)
    } catch (error) {
      console.error('[mermaid]', error)
      document.getElementById(`d${id}`)?.remove()
      if (current === renderCount) failed.value = true
      return
    }
    if (current !== renderCount) return
    svg.value = result.svg
    failed.value = false
    await nextTick()
    patchLinks()
  }

  /**
   * `click` links in diagrams render as SVG <a> elements, which have no `pathname`;
   * VitePress's link prefetcher reads it and throws, so provide one.
   */
  function patchLinks() {
    container.value?.querySelectorAll<SVGAElement>('svg a').forEach(link => {
      if ('pathname' in link) return
      const href = link.href.baseVal
      Object.defineProperty(link, 'pathname', {
        get: () => new URL(href, link.baseURI).pathname,
      })
    })
  }

  onMounted(render)
  watch(isDark, render)
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -- SVG rendered by mermaid (securityLevel: strict) from our own Markdown -->
  <div v-if="svg" ref="container" class="mermaid" v-html="svg" />
  <pre v-else-if="failed" class="mermaid-error"><code>{{ source }}</code></pre>
  <div v-else class="mermaid mermaid-loading" />
</template>

<style scoped>
  .mermaid {
    display: flex;
    justify-content: center;
    margin: 16px 0;
    overflow-x: auto;
  }

  .mermaid-loading {
    min-height: 120px;
  }

  .mermaid-error {
    padding: 16px;
    overflow-x: auto;
    border-radius: 8px;
    background-color: var(--vp-code-block-bg);
    font-size: 14px;
  }
</style>
