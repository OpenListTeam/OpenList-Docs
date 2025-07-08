<script lang="ts" setup>
  import { computed } from 'vue'

  import { useI18n } from 'vue-i18n'

  const props = defineProps<{
    theme: 'brand' | 'alt'
    external?: boolean
    link: string
    text: string
  }>()

  const classes = computed(() => {
    const arr = []
    if (props.theme === 'brand') arr.push('from-teal-200', 'to-sky-400')
    else arr.push('from-gray-700', 'to-dark-300')

    return arr
  })

  const { t } = useI18n()
</script>

<template>
  <AppLink
    :external="external"
    :to="link"
    m="2"
    :class="classes"
    class="sese-btn btn transition rounded-full hover:shadow-md"
    bg="gradient-to-r"
    p="x-6"
  >
    <slot>
      {{ t(text) }}
    </slot>
  </AppLink>
</template>
