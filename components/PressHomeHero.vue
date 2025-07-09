<!--
    Copyright (c) 2025 The OpenList Projects Contributors, 2022 云游君 YunYouJun
    Licensed under the MIT License.
    For full license text, see the LICENSE file in the project root
-->

<script lang="ts" setup>
  import { useFrontmatter } from 'valaxy'
  import { useI18n } from 'vue-i18n'

  const fm = useFrontmatter()

  const { t } = useI18n()
</script>

<template>
  <div text="center" m="md:t-24 t-10 md:t-20" flex="~ col" justify="center" items="center">
    <OpenListLogo mb="2" />
    <h1
      my="10"
      text="4xl md:8xl"
      font="black"
      class="gradient-text from-teal-200 to-sky-400"
      bg="gradient-to-r"
    >
      {{ fm.hero.name }}
    </h1>
  </div>

  <h2 flex="~ wrap justify-center" px="2" m="b-10" text="center 3xl" font="black" leading="tight">
    {{ t('hero.banner') }}
  </h2>

  <div p="2" text="center">
    <div class="flex justify-center items-center mb-2">
      <template v-for="(action, idx) in fm.hero.actions.slice(0, 2)" :key="action.link">
        <PressGetStarted
          v-if="action.type === 'fly'"
          :theme="action.theme"
          :link="action.link"
          :text="action.text"
        />
        <PressButton
          v-else
          :theme="action.theme"
          :external="action.external"
          :link="action.link"
          :text="action.text"
        />
      </template>
    </div>
    <div class="flex justify-center items-center">
      <template v-for="(action, idx) in fm.hero.actions.slice(2)" :key="action.link">
        <PressGetStarted
          v-if="action.type === 'fly'"
          :theme="action.theme"
          :link="action.link"
          :text="action.text"
        />
        <PressButton
          v-else
          :theme="action.theme"
          :external="action.external"
          :link="action.link"
          :text="action.text"
        />
      </template>
    </div>
  </div>

  <br />
</template>
