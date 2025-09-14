<template>
  <q-layout view="lHh Lpr lFf">
    <LayoutHeader :leftDrawerOpen="leftDrawerOpen" @toggleLeftDrawer="toggleLeftDrawer" />
    <TheSidebar v-model="leftDrawerOpen" @toggleLeftDrawer="toggleLeftDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LayoutHeader from 'src/components/MainLayout/LayoutHeader.vue'
import TheSidebar from 'src/components/MainLayout/TheSidebar.vue'
import { ref } from 'vue'

defineOptions({ name: 'MainLayout' })

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
