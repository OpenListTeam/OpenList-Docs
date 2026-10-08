<script setup lang="ts">
  import { useStorage } from '@vueuse/core'
  import { useI18n } from '../i18n'

  /**
   * Replaces VitePress's two-state VPSwitchAppearance (see the alias in config.mts).
   *
   * VitePress keeps the appearance in localStorage under this key ('auto' follows the
   * system); VueUse syncs storage refs with the same key, so VitePress applies the change.
   */
  type Mode = 'auto' | 'light' | 'dark'

  const mode = useStorage<Mode>('vitepress-theme-appearance', 'auto', undefined, {
    // read after mount so the server-rendered markup (always 'auto') hydrates cleanly
    initOnMounted: true,
  })

  const { t } = useI18n()

  const options: { value: Mode; label: string }[] = [
    { value: 'auto', label: 'appearance.auto' },
    { value: 'light', label: 'appearance.light' },
    { value: 'dark', label: 'appearance.dark' },
  ]
</script>

<template>
  <div class="ThemeSwitcher" role="radiogroup" :aria-label="t('appearance.title')">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      role="radio"
      :class="{ active: mode === option.value }"
      :aria-checked="mode === option.value"
      :aria-label="t(option.label)"
      :title="t(option.label)"
      @click="mode = option.value"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <template v-if="option.value === 'auto'">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </template>
        <template v-else-if="option.value === 'light'">
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          />
        </template>
        <path v-else d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
  .ThemeSwitcher {
    display: inline-flex;
    gap: 2px;
    padding: 2px;
    border: 1px solid var(--vp-input-border-color);
    border-radius: 999px;
    background-color: var(--vp-input-switch-bg-color);
  }

  button {
    display: grid;
    place-items: center;
    width: 26px;
    height: 20px;
    border-radius: 999px;
    color: var(--vp-c-text-3);
    transition:
      color 0.25s,
      background-color 0.25s;
  }

  button:hover {
    color: var(--vp-c-text-1);
  }

  button.active {
    background-color: var(--vp-c-bg);
    box-shadow: var(--vp-shadow-1);
    color: var(--vp-c-brand-1);
  }

  .dark button.active {
    background-color: var(--vp-c-default-soft);
  }

  svg {
    width: 14px;
    height: 14px;
  }
</style>
