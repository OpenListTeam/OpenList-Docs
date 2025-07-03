<!--
    Copyright (c) 2025 The OpenList Projects Contributors, 2022 云游君 YunYouJun
    Licensed under the MIT License.
    For full license text, see the LICENSE file in the project root
-->

<!-- This overwrites the default home layout -->

<script setup lang="ts">
  import AutoLanguageDetector from '../components/AutoLanguageDetector.vue'
  import BackToTop from '../components/BackToTop.vue'
</script>

<template>
  <Layout>
    <AutoLanguageDetector />

    <PressHome />

    <BackToTop />
  </Layout>
</template>
