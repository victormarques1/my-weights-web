<template>
  <q-menu>
    <q-form @submit.prevent="handleCreateExercise" class="p-4 space-y-4">
      <p class="text-lg">{{ $t('home.createExercise') }}</p>
      <q-input
        v-model="newExercise.name"
        :label="$t('register.name')"
        type="text"
        outlined
        dense
        :placeholder="$t('home.exerciseExample')"
      />
      <q-select
        v-model="newExercise.category"
        :label="$t('home.category')"
        outlined
        dense
        :options="categoryOptions"
        emit-value
        map-options
      />
      <ButtonPrimary :label="$t('home.create')" type="submit" class="w-full" />
    </q-form>
  </q-menu>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { MuscleGroup } from 'src/interfaces/enums/MuscleGroup'
import { createExercise } from 'src/services/ExerciseService'
import { useExerciseCategories } from 'src/utils/useExerciseCategories'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ButtonPrimary from '../Global/ButtonPrimary.vue'

defineOptions({ name: 'CreateExerciseMenu' })

const { t: $t } = useI18n()
const $q = useQuasar()

const { categoryOptions } = useExerciseCategories()

const newExercise = ref<{
  name: string
  category: MuscleGroup | ''
}>({
  name: '',
  category: '',
})
const loading = ref(false)

const handleCreateExercise = async () => {
  if (!newExercise.value.name || !newExercise.value.category) {
    $q.notify({
      type: 'negative',
      message: $t('home.fillAllFields'),
      position: 'top',
    })
    return
  }

  loading.value = true

  try {
    const result = await createExercise({
      name: newExercise.value.name,
      category: newExercise.value.category,
    })

    if (result) {
      $q.notify({
        type: 'positive',
        message: $t('home.exerciseSuccessMessage'),
        position: 'top',
      })

      newExercise.value.name = ''
      newExercise.value.category = ''

      loading.value = false
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
