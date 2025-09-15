import type { MuscleGroup } from './enums/MuscleGroup'

export interface CreateExerciseDto {
  name: string
  category: MuscleGroup
}

export interface Exercise {
  id: number
  name: string
  category: string
  userId: number
  createdAt: string
  updatedAt: string
}
