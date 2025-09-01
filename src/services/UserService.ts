import { api } from 'src/boot/axios'
import type { AuthResponse, LoginCredentials, RegisterCredentials, User } from 'src/interfaces/User'

export async function login(credentials: LoginCredentials): Promise<AuthResponse | null> {
  const { data } = await api.post<AuthResponse>('/auth/login', credentials)
  return data
}

export async function register(credentials: RegisterCredentials): Promise<User | null> {
  const { data } = await api.post('/users', credentials)
  return data
}
