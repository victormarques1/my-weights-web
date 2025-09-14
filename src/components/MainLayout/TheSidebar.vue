<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <div class="flex relative flex-nowrap items-center w-full md:p-4 p-12">
      <q-btn
        v-if="$q.screen.gt.sm"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggleLeftDrawer')"
      />
      <span class="font-semibold text-2xl mx-auto">My Weights</span>
      <q-btn
        v-if="$q.screen.lt.md"
        class="absolute top-2 right-2"
        :icon="mdiClose"
        flat
        dense
        round
        @click="$emit('toggleLeftDrawer')"
      />
    </div>

    <q-list class="p-1 text-lg flex flex-col flex-nowrap">
      <h2 class="p-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">Menu</h2>
      <SidebarButton
        v-for="link in sidebarLinks"
        :key="link.route"
        :route="link.route"
        :label="link.label"
        :icon="link.icon"
      />
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { mdiClose, mdiHome } from '@quasar/extras/mdi-v7'
import { computed } from 'vue'
import SidebarButton from './SidebarButton.vue'

defineOptions({
  name: 'TheSidebar',
})

const leftDrawerOpen = defineModel<boolean | null>({ default: false })
const $emit = defineEmits(['toggleLeftDrawer'])

const sidebarLinks = computed(() => {
  const links = [
    {
      route: '/home',
      icon: mdiHome,
      label: 'Home',
    },
  ]

  return links
})
</script>
