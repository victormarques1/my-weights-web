<template>
  <q-btn class="bg-primary text-white hover:bg-primary-dark" color="primary" v-bind="$attrs">
    <slot />
  </q-btn>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ButtonPrimary',
})
</script>
