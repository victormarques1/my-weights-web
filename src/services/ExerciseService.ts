import { api } from 'src/boot/axios'
import type { CreateExerciseDto, Exercise } from 'src/interfaces/Exercise'

export async function createExercise(data: CreateExerciseDto): Promise<Exercise | null> {
  try {
    const response = await api.post('/exercises', data)

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
