<!-- 
本文件包含参考 vuepress-theme-hope 项目中 BiliBili 组件的修改实现

原始代码来源（MIT 许可证）：
https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/90c442b91600faf5f1d277df397949019a60e8ff/packages/components/src/client/components/BiliBili.ts

原始版权归属：
Mr.Hope. VuePress Theme Hope [Computer software]. 
https://github.com/vuepress-theme-hope/vuepress-theme-hope

许可协议声明：
1. 原始代码依据 MIT 许可证授权
2. 本衍生作品作为 AGPL-3.0 许可项目的一部分发布
3. 保留原始版权声明以符合 MIT 许可证要求

修改说明：
  - 修改原始代码适配Valaxy
-->

<template>
  <div class="bilibili-wrapper">
    <div class="bilibili-desc">
      <a class="sr-only" :href="videoLink" v-if="videoLink">{{ title }}</a>
    </div>
    <iframe
      ref="iframeRef"
      v-if="videoLink"
      :src="videoLink"
      :title="title"
      class="bilibili-iframe"
      :allow="videoIframeAllow"
      :style="{
        width: computedWidth,
        height: loaded ? computedHeight : 0,
      }"
      @load="onLoad"
    ></iframe>
    <div v-if="!loaded" class="loading-icon">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted, unref, type MaybeRef } from 'vue'

  interface Props {
    /**
     * BiliBili video id
     * B 站视频 ID
     */
    bvid?: string
    /**
     * BiliBili video aid
     * B 站视频 a ID
     */
    aid?: string
    /**
     * BiliBili video cid
     * B 站视频 CID
     */
    cid?: string
    /**
     * BiliBili video title
     * B 站视频标题
     */
    title?: string
    /**
     * BiliBili video page
     * B 站视频分页
     */
    page?: string | number
    /**
     * Component width
     * 组件宽度
     */
    width?: string | number
    /**
     * Component height
     * 组件高度
     */
    height?: string | number
    /**
     * Component width / height ratio
     * 组件长宽比
     */
    ratio?: string | number
    /**
     * Start time in seconds
     * 基于秒数的开始时间
     */
    time?: string | number
    /**
     * Whether autoplay
     * 是否自动播放
     */
    autoplay?: boolean
    /**
     * Whether to use low quality
     * 是否使用低画质
     */
    lowQuality?: boolean
    /**
     * Whether to disable danmaku
     * 是否禁用弹幕
     */
    noDanmaku?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    title: 'A BiliBili video',
    page: 1,
    width: '100%',
    ratio: 16 / 9,
    time: 0,
    autoplay: false,
    lowQuality: false,
    noDanmaku: false,
  })

  const VIDEO_LINK = 'https://player.bilibili.com/player.html'
  const videoIframeAllow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture'

  const iframeRef = ref<HTMLIFrameElement>()
  const loaded = ref(false)
  const computedHeight = ref('auto')

  // 计算视频链接
  const videoLink = computed(() => {
    const { aid, bvid, cid, autoplay, time, page, lowQuality, noDanmaku } = props

    if (!aid && !bvid) return null

    let url = ''
    const params = new URLSearchParams()

    if (aid && cid) {
      url = VIDEO_LINK
      params.set('aid', String(aid))
      params.set('cid', String(cid))
      params.set('p', String(page))
    } else if (bvid) {
      url = VIDEO_LINK
      params.set('bvid', String(bvid))
      params.set('p', String(page))
    } else {
      return null
    }

    params.set('t', String(time))
    params.set('autoplay', autoplay ? '1' : '0')

    if (lowQuality) {
      params.set('quality', '16')
    }

    if (noDanmaku) {
      params.set('danmaku', '0')
    }

    return `${url}?${params.toString()}`
  })

  // 获取数值
  const getValue = (value: string | number): string => {
    if (typeof value === 'number') return `${value}px`
    if (typeof value === 'string') {
      if (
        value.includes('%') ||
        value.includes('px') ||
        value.includes('em') ||
        value.includes('rem')
      ) {
        return value
      }
      const num = parseFloat(value)
      return isNaN(num) ? value : `${num}px`
    }
    return '100%'
  }

  // 计算宽度
  const computedWidth = computed(() => getValue(props.width))

  // 获取比例
  const getRadio = (ratio: number | string | undefined): number => {
    if (typeof ratio === 'string') {
      const [width, height] = ratio.split(':')
      const parsedRadio = Number(width) / Number(height)
      if (!Number.isNaN(parsedRadio)) return parsedRadio
    }
    return typeof ratio === 'number' ? ratio : 16 / 9
  }

  // 计算高度
  const getHeight = (width: number): string => {
    const height = props.height
    const ratio = getRadio(props.ratio)
    return height ? getValue(height) : `${Number(width) / ratio}px`
  }

  // 更新高度
  const updateHeight = (): void => {
    if (iframeRef.value) {
      computedHeight.value = getHeight(iframeRef.value.clientWidth)
    }
  }

  // 加载完成处理
  const onLoad = () => {
    loaded.value = true
    updateHeight()
  }

  // 事件监听器
  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    updateHeight()

    // 使用 ResizeObserver 监听尺寸变化
    if (window.ResizeObserver && iframeRef.value) {
      resizeObserver = new ResizeObserver(updateHeight)
      resizeObserver.observe(iframeRef.value.parentElement!)
    }

    // 降级方案：监听 window resize 事件
    window.addEventListener('resize', updateHeight)
    window.addEventListener('orientationchange', updateHeight)
  })

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    window.removeEventListener('resize', updateHeight)
    window.removeEventListener('orientationchange', updateHeight)
  })
</script>

<style scoped>
  .bilibili-wrapper {
    position: relative;
  }

  .bilibili-desc a {
    @media print {
      display: block;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .bilibili-iframe {
    margin: 8px 0;
    border: none;
    border-radius: 8px;
    transition: height 0.3s ease;

    @media print {
      display: none;
    }
  }

  .loading-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #00a1d6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
