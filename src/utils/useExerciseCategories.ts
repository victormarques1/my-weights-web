// src/composables/useExerciseCategories.ts
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { MuscleGroup, MUSCLE_GROUP_OPTIONS } from '../interfaces/enums/MuscleGroup'

export function useExerciseCategories() {
  const { t } = useI18n()

  const categoryOptions = computed(() => {
    return MUSCLE_GROUP_OPTIONS.map((category) => ({
      label: t(`categories.${category}`),
      value: category,
    }))
  })

  const getCategoryName = (category: MuscleGroup): string => {
    return t(`categories.${category}`) || category
  }

  return {
    categoryOptions,
    getCategoryName,
    MuscleGroup,
  }
}
