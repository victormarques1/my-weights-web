<template>
  <main class="main-container">
    <p class="text-lg font-medium mb-6">
      Bem-vindo, <span class="text-primary">Victor Marques</span>
    </p>

    <section class="flex flex-1 gap-6">
      <q-card v-for="workout in workouts" :key="workout.id" class="mb-4 md:w-[360px] w-full">
        <q-card-section class="flex flex-nowrap text-lg justify-between items-center">
          <span>{{ workout.name }}</span>
          <q-btn :label="$t('home.start')" color="primary" dense />
        </q-card-section>
        <q-separator />
        <q-card-section class="p-0">
          <q-list>
            <q-item
              v-for="exercise in workout.exercises"
              :key="exercise.id"
              class="flex flex-nowrap flex-col"
            >
              <q-item-section side>{{ exercise.exerciseCategory }}</q-item-section>
              <div class="flex flex-nowrap">
                <q-item-section>{{ exercise.exerciseName }}</q-item-section>
                <q-item-section side
                  >{{ exercise.reps }}x{{ exercise.sets }} - {{ exercise.weight }}kg</q-item-section
                >
              </div>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Workout } from 'src/interfaces/Workout'
import { getWorkouts } from 'src/services/UserService'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({ name: 'TheHome' })

const { t: $t } = useI18n()

const workouts = ref<Workout[]>([])

onMounted(async () => {
  try {
    const result = await getWorkouts()
    workouts.value = result
  } catch (err) {
    console.error('Erro ao carregar workouts:', err)
  }
})
</script>
