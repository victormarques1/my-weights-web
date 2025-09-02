<template>
  <q-layout style="min-height: 100dvh">
    <q-header class="px-4 py-2 bg-transparent">
      <q-toolbar>
        <div class="flex flex-row flex-nowrap items-center w-full justify-end">
          <SelectTheme />
          <SelectLanguage />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="p-4 md:p-6">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import SelectLanguage from 'src/components/Global/SelectLanguage.vue'
import SelectTheme from 'src/components/Global/SelectTheme.vue'

defineOptions({
  name: 'PublicLayout',
})
</script>
