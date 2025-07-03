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
    --back-to-top-bg: var(--pr-c-bg-soft, var(--va-c-bg-soft));
    --back-to-top-bg-hover: var(--pr-c-bg, var(--va-c-bg));
    --back-to-top-color: var(--pr-c-text-2, var(--va-c-text-2));
    --back-to-top-color-hover: var(--pr-c-text-1, var(--va-c-text-1));
    --back-to-top-border: var(--pr-c-divider-light, var(--va-c-divider-light));
    --back-to-top-border-hover: var(--pr-c-brand, var(--va-c-brand));
    --back-to-top-shadow: var(
      --pr-shadow-2,
      var(--va-shadow-2, var(--pr-c-shadow, var(--va-c-shadow)))
    );
    --back-to-top-shadow-hover: var(
      --pr-shadow-3,
      var(--va-shadow-3, var(--pr-c-shadow-strong, var(--va-c-shadow-strong)))
    );
    --back-to-top-shadow-active: var(
      --pr-shadow-1,
      var(--va-shadow-1, var(--pr-c-shadow-light, var(--va-c-shadow-light)))
    );
    --back-to-top-blur: var(--pr-backdrop-blur, var(--va-backdrop-blur, 8px));

    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px solid var(--back-to-top-border);
    background: var(--back-to-top-bg);
    backdrop-filter: blur(var(--back-to-top-blur));
    box-shadow: var(--back-to-top-shadow);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: var(--back-to-top-color);
  }

  .back-to-top-btn:hover {
    background: var(--back-to-top-bg-hover);
    box-shadow: var(--back-to-top-shadow-hover);
    transform: translateY(-2px);
    color: var(--back-to-top-color-hover);
    border-color: var(--back-to-top-border-hover);
  }

  .back-to-top-btn:active {
    transform: translateY(0);
    box-shadow: var(--back-to-top-shadow-active);
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
      right: 2rem;
    }
  }
</style>
