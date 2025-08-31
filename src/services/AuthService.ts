import { api } from 'src/boot/axios'
import type { AuthResponse, LoginCredentials } from 'src/interfaces/Auth'

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/auth/login', credentials)
  return data
}
