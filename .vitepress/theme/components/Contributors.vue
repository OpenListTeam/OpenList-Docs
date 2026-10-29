<script setup lang="ts">
  import { useData } from 'vitepress'
  import { computed } from 'vue'
  import type { Contributor } from '../../contributors'
  import { useI18n } from '../i18n'

  const { page } = useData()
  const { t } = useI18n()

  const contributors = computed<Contributor[]>(() => page.value.contributors ?? [])
</script>

<template>
  <section v-if="contributors.length" class="contributors">
    <h2>{{ t('post.contributors') }}</h2>
    <ul>
      <li v-for="contributor in contributors" :key="contributor.name">
        <img
          :src="contributor.avatar"
          :alt="contributor.name"
          width="32"
          height="32"
          loading="lazy"
          decoding="async"
        />
        <a v-if="contributor.github" :href="contributor.github" target="_blank" rel="noreferrer">
          {{ contributor.name }}
        </a>
        <span v-else>{{ contributor.name }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
  .contributors {
    margin-top: 3rem;
  }

  h2 {
    margin-bottom: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--vp-c-divider);
    font-size: 20px;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
  }

  img {
    border-radius: 50%;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.25s;
  }

  a:hover {
    color: var(--vp-c-brand-1);
  }
</style>
