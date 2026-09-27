import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { nextTick, onMounted, watch } from 'vue'
import 'virtual:group-icons.css'
import './style.css'
import Layout from './Layout.vue'
import BiliBili from './components/BiliBili.vue'
import Mermaid from './components/Mermaid.vue'
import OpenListDownload from './components/OpenListDownload.vue'
import WorkInProgress from './components/WorkInProgress.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('BiliBili', BiliBili)
    app.component('Mermaid', Mermaid)
    app.component('OpenListDownload', OpenListDownload)
    app.component('WorkInProgress', WorkInProgress)
  },
  setup() {
    const route = useRoute()
    const initZoom = () =>
      mediumZoom('.vp-doc :not(a) > img:not(.no-zoom)', { background: 'var(--vp-c-bg)' })
    onMounted(initZoom)
    watch(
      () => route.path,
      () => nextTick(initZoom)
    )
  },
} satisfies Theme
