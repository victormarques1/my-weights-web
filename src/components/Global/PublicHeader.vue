<template>
  <div class="w-full flex flex-nowrap items-center justify-end pr-3 p-1">
    <SelectTheme />
    <SelectLanguage />
  </div>
</template>

<script setup lang="ts">
import SelectLanguage from './SelectLanguage.vue'
import SelectTheme from './SelectTheme.vue'

defineOptions({
  name: 'PublicHeader',
})
</script>
