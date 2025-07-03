<template>
  <Transition name="back-to-top">
    <button
      v-show="isVisible"
      class="back-to-top-btn"
      @click="scrollToTop"
      :aria-label="$t('tooltip.back_to_top')"
      :title="$t('tooltip.back_to_top')"
    >
      <div class="i-ri-arrow-up-line"></div>
    </button>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const isVisible = ref(false)
  const scrollThreshold = 300

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      isVisible.value = window.scrollY > scrollThreshold
    }
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<style scoped>
  .back-to-top-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: #666;
  }

  .back-to-top-btn:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    color: #333;
  }

  .back-to-top-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .dark .back-to-top-btn {
    background: rgba(36, 36, 36, 0.9);
    color: #ccc;
  }

  .dark .back-to-top-btn:hover {
    background: rgba(48, 48, 48, 1);
    color: #fff;
  }

  .back-to-top-btn .i-ri-arrow-up-line {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem;
  }

  .back-to-top-enter-active,
  .back-to-top-leave-active {
    transition: all 0.3s ease;
  }

  .back-to-top-enter-from,
  .back-to-top-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }

  .back-to-top-enter-to,
  .back-to-top-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  @media (max-width: 768px) {
    .back-to-top-btn {
      bottom: 1.5rem;
      right: 1.5rem;
      width: 2.75rem;
      height: 2.75rem;
    }

    .back-to-top-btn .i-ri-arrow-up-line {
      width: 1.125rem;
      height: 1.125rem;
      font-size: 1.125rem;
    }
  }

  @media (min-width: 1200px) {
    .back-to-top-btn {
      right: calc((100vw - 1200px) / 2 + 2rem);
    }
  }
</style>
