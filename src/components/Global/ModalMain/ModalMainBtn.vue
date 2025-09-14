<template>
  <ButtonPrimary v-bind="$props" :class="classBtn" />
</template>

<script setup lang="ts">
import type { QBtnProps } from 'quasar'
import ButtonPrimary from '../ButtonPrimary.vue'
import { twMerge } from 'tailwind-merge'

interface ButtonPrimaryProps extends QBtnProps {
  class?: string
}

defineOptions({ name: 'ModalMainBtn' })
const $props = defineProps<ButtonPrimaryProps>()

const classBtn = twMerge('w-28', $props.class)
</script>
