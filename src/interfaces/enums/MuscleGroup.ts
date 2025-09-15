export enum MuscleGroup {
  Abs = 'Abs',
  Back = 'Back',
  Chest = 'Chest',
  Shoulders = 'Shoulders',
  Biceps = 'Biceps',
  Triceps = 'Triceps',
  Legs = 'Legs',
  Cardio = 'Cardio',
}

export const MUSCLE_GROUP_OPTIONS = Object.values(MuscleGroup)

export type MuscleGroupType = `${MuscleGroup}`
