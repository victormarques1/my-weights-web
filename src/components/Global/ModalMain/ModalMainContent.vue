<template>
  <q-card-section :class="mergedClass">
    <slot />
  </q-card-section>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

defineOptions({
  name: 'ModalMainContent',
})

const $props = defineProps<{
  class?: string
}>()

const mergedClass = twMerge('max-h-[50vh] h-[50vh] scroll sm:p-6', $props.class)
</script>
