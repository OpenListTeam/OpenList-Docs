<!--
    Copyright (c) 2025 The OpenList Projects Contributors, 2022 云游君 YunYouJun
    Licensed under the MIT License.
    For full license text, see the LICENSE file in the project root
-->

<script lang="ts" setup>
  import { useI18n } from '../i18n'
  const { t } = useI18n()
</script>

<template>
  <div class="work-in-progress">
    <div class="icon fly-animation">🧪</div>
    <span class="text">{{ t('wip') }}</span>
  </div>
</template>

<style scoped>
  .work-in-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem auto;
    font-weight: 900;
  }

  .icon {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .text {
    font-size: 1.5rem;
    line-height: 2rem;
  }
</style>
