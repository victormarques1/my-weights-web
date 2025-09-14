<template>
  <RouterLink :to="$props.route">
    <q-item
      class="data-[active=true]:text-primary"
      :data-active="$props.route === $route.path"
      clickable
      v-ripple
      role="navigation"
    >
      <q-item-section avatar>
        <q-icon :name="$props.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ $props.label }}</q-item-label>
      </q-item-section>
    </q-item>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({ name: 'SidebarButton' })

const $props = defineProps<{
  route: string
  icon: string
  label: string
}>()
</script>
