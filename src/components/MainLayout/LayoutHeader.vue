<template>
  <q-header
    class="h-[60px] border-b"
    :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark border-background'"
  >
    <q-toolbar class="flex flex-nowrap h-full items-center justify-between pr-4">
      <div class="flex flex-nowrap items-center justify-between w-full">
        <div v-if="!leftDrawerOpen" class="flex flex-nowrap w-full items-center">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="$emit('toggleLeftDrawer')"
          />
          <span class="font-semibold text-2xl ml-4 pt-1">My Weights</span>
        </div>
        <div class="flex flex-nowrap items-center justify-end md:w-full">
          <span v-if="$q.screen.gt.sm" class="text-lg ml-2">Victor Marques</span>
          <SelectTheme />
          <SelectLanguage />
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import SelectLanguage from '../Global/SelectLanguage.vue'
import SelectTheme from '../Global/SelectTheme.vue'

defineOptions({
  name: 'LayoutHeader',
})

defineProps<{ leftDrawerOpen: boolean }>()
const $emit = defineEmits(['toggleLeftDrawer'])
</script>
