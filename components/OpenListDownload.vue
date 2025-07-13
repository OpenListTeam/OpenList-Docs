<template>
  <p>{{ t('download.os') }}:</p>
  <div class="filter-buttons">
    <button :class="{ active: selectedOS === '' }" @click="selectedOS = ''">All</button>
    <button
      v-for="os in availableOS"
      :key="os"
      :class="{ active: selectedOS === os }"
      @click="selectedOS = os"
    >
      {{ os }}
    </button>
  </div>

  <p>{{ t('download.cpu') }}:</p>
  <div class="filter-buttons">
    <button :class="{ active: selectedCPU === '' }" @click="selectedCPU = ''">All CPU</button>
    <button
      v-for="cpu in availableCPU"
      :key="cpu"
      :class="{ active: selectedCPU === cpu }"
      @click="selectedCPU = cpu"
    >
      {{ cpu }}
    </button>
  </div>

  <div class="file-list">
    <div v-for="download in filteredDownloads" :key="download.filename" class="file-item">
      <div class="file-content">
        <h3>{{ download.filename }}</h3>
        <div class="badges">
          <span v-if="download.os" class="badge">{{ download.os }}</span>
          <span v-if="download.cpu" class="badge">{{ download.cpu }}</span>
        </div>
        <p class="description">
          <span v-if="locale === 'zh-CN' && download.desc_cn">{{ download.desc_cn }}</span>
          <span v-else-if="download.desc">{{ download.desc }}</span>
        </p>
      </div>
      <div class="downloads">
        <a
          v-if="locale === 'zh-CN'"
          :href="`https://ghproxy.cn/${download.link}`"
          class="download-button"
          :download="download.filename"
          target="_blank"
        >
          {{ t('download.gh_proxy') }}
        </a>
        <a
          :href="download.link"
          class="download-button"
          :download="download.filename"
          target="_blank"
        >
          {{ t('download.download') }}
        </a>
      </div>
    </div>
  </div>

  <div v-if="filteredDownloads.length === 0" class="empty-state">
    <h3>No downloads found</h3>
    <p>Try adjusting your filter criteria or check back later for new releases.</p>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import releases from './openlist_releases.json'

  const { t, locale } = useI18n()

  const selectedOS = ref('')
  const selectedCPU = ref('')

  const availableOS = computed(() => {
    const osSet = new Set(releases.map(d => d.os))
    return Array.from(osSet).sort()
  })

  const availableCPU = computed(() => {
    let filtered = releases

    if (selectedOS.value) {
      filtered = filtered.filter(download => download.os === selectedOS.value)
    }

    const cpuSet = new Set(filtered.map(d => d.cpu).filter(cpu => cpu && cpu.trim() !== ''))

    return Array.from(cpuSet).sort()
  })

  const filteredDownloads = computed(() => {
    let filtered = releases

    if (selectedOS.value) {
      filtered = filtered.filter(download => download.os === selectedOS.value)
    }

    if (selectedCPU.value) {
      filtered = filtered.filter(download => download.cpu === selectedCPU.value)
    }

    return filtered
  })
</script>

<style scoped>
  .filter-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    /* justify-content: center; */
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .filter-buttons button {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    padding: 0.3rem 1rem;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .filter-buttons button:hover {
    background: var(--vp-c-bg-alt);
  }

  .filter-buttons button.active {
    background: var(--vp-c-brand-3);
    color: white;
  }

  .file-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1rem;
  }

  .file-item {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }

  .file-content {
    flex: 1;
  }

  .file-item h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1em;
  }

  .badge {
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .description {
    margin: 0.5rem 0 0 0;
    color: var(--vp-c-text-2);
    font-size: 0.9em;
  }

  .downloads {
    display: flex;
    gap: 0.5rem;
    align-self: flex-end;
    margin-top: auto;
  }

  .download-button {
    background: var(--vp-c-brand-3);
    color: white !important;
    padding: 0.2rem 1rem;
    border-radius: 4px;
    text-decoration: none !important;
    font-weight: 500;
    white-space: nowrap;
    transition: opacity 0.2s;
  }

  .download-button:hover {
    opacity: 0.9;
  }

  .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--vp-c-text-2);
  }

  .empty-state h3 {
    margin: 0 0 0.5rem 0;
    color: var(--vp-c-text-1);
  }

  .empty-state p {
    margin: 0;
  }

  @media (max-width: 768px) {
    .file-list {
      grid-template-columns: 1fr;
    }

    .file-item {
      flex-direction: column;
      align-items: stretch;
    }
  }
</style>
