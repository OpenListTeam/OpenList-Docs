<template>
  <div class="mermaid-container" ref="containerRef">
    <div v-if="loading" class="loading">Loading diagram...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else v-html="svgContent" class="mermaid-diagram"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch, nextTick } from 'vue'
  import { decode } from 'js-base64'

  const props = defineProps<{
    code: string
    theme?: string
    scale?: number
  }>()

  const containerRef = ref<HTMLElement>()
  const svgContent = ref('')
  const loading = ref(true)
  const error = ref('')

  let mermaidInstance: any = null

  const initMermaid = async () => {
    try {
      if (!mermaidInstance) {
        const mermaid = await import('mermaid')
        mermaidInstance = mermaid.default
        mermaidInstance.initialize({
          startOnLoad: false,
          theme: props.theme || 'default',
          securityLevel: 'loose',
          fontFamily: 'inherit',
        })
      }
      return mermaidInstance
    } catch (err) {
      console.error('Failed to load mermaid:', err)
      error.value = 'Failed to load mermaid library'
      return null
    }
  }

  const renderDiagram = async () => {
    if (!props.code) return

    loading.value = true
    error.value = ''

    try {
      const mermaid = await initMermaid()
      if (!mermaid) return

      const decodedCode = decode(props.code)
      const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      const { svg } = await mermaid.render(id, decodedCode)
      svgContent.value = svg

      await nextTick()

      const svgEl = containerRef.value?.querySelector('svg')
      if (svgEl) {
        const viewBox = svgEl.getAttribute('viewBox')
        if (viewBox) {
          const [x, y, width, height] = viewBox.split(' ').map(Number)

          const diagramType = decodedCode.trim().split('\n')[0].toLowerCase()
          let minHeight = 200
          let minWidth = 300

          if (diagramType.includes('pie')) {
            minHeight = 300
            minWidth = 300
          } else if (diagramType.includes('gantt')) {
            minHeight = 400
            minWidth = 600
          } else if (diagramType.includes('journey')) {
            minHeight = 300
            minWidth = 500
          } else if (diagramType.includes('mindmap')) {
            minHeight = 400
            minWidth = 500
          }

          if (props.scale) {
            svgEl.setAttribute('height', `${height * props.scale}`)
            svgEl.setAttribute('width', `${width * props.scale}`)
          } else {
            if (height < minHeight || width < minWidth) {
              const scaleX = width < minWidth ? minWidth / width : 1
              const scaleY = height < minHeight ? minHeight / height : 1
              const scale = Math.max(scaleX, scaleY, 1.2)

              svgEl.setAttribute('height', `${height * scale}`)
              svgEl.setAttribute('width', `${width * scale}`)
            }
          }

          svgEl.style.maxWidth = '100%'
          svgEl.style.height = 'auto'
        }

        svgEl.removeAttribute('style')
        svgEl.style.maxWidth = '100%'
        svgEl.style.height = 'auto'
      }
    } catch (err) {
      console.error('Mermaid render error:', err)
      error.value = 'Failed to render diagram'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    renderDiagram()
  })

  watch(
    () => [props.code, props.theme, props.scale],
    () => {
      renderDiagram()
    },
    { deep: true }
  )
</script>

<style scoped>
  .mermaid-container {
    margin: 1rem 0;
    text-align: center;
  }

  .mermaid-diagram {
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
  }

  .mermaid-diagram :deep(svg) {
    max-width: 100%;
    height: auto;
    min-height: 200px;
    min-width: 300px;
  }

  .loading {
    padding: 2rem;
    color: #666;
    font-style: italic;
  }

  .error {
    padding: 1rem;
    background-color: #fee;
    border: 1px solid #fcc;
    border-radius: 4px;
    color: #c33;
    margin: 1rem 0;
  }
</style>
