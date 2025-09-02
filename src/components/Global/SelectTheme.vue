<template>
  <q-toggle
    v-model="theme"
    checked-icon="dark_mode"
    color="primary"
    keep-color
    unchecked-icon="light_mode"
    @update:model-value="toggleDarkMode"
  />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { setDarkMode, setLightMode } from 'src/helpers/ThemeHelper'
import { ThemeEnum } from 'src/interfaces/enums/ThemeEnum'
import { ref } from 'vue'

defineOptions({
  name: 'SelectTheme',
})

const $q = useQuasar()
const selectedTheme = ref<ThemeEnum>(ThemeEnum.DARK)
const theme = ref($q.dark.isActive)

const toggleDarkMode = () => {
  if (selectedTheme.value === ThemeEnum.LIGHT) {
    selectedTheme.value = ThemeEnum.DARK
    setDarkMode()
  } else {
    selectedTheme.value = ThemeEnum.LIGHT
    setLightMode()
  }
}
</script>
