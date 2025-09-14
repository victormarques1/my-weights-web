export interface Workout {
  id: number
  name: string
  userId: number
  exercises: ExerciseWorkout[]
}

export interface ExerciseWorkout {
  id: number
  exerciseId: number
  exerciseName: string
  exerciseCategory: string
  sets: number
  reps: number
  weight: number
  restTime: number
  notes?: string
}
