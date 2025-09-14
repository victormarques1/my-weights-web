<template>
  <q-card-section class="flex justify-end items-center p-4 sm:px-6">
    <slot />
  </q-card-section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ModalMainActions',
})
</script>
