import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
}

// Mock authentication - in a real app, this would call an API
const mockLogin = async (email: string, password: string): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock validation
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters')
  }

  // Return mock user
  return {
    id: '1',
    email,
    name: email.split('@')[0],
  }
}

const mockRegister = async (
  email: string,
  password: string,
  name: string,
): Promise<User> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock validation
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters')
  }
  if (name.length < 2) {
    throw new Error('Name must be at least 2 characters')
  }

  // Return mock user
  return {
    id: '1',
    email,
    name,
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        const user = await mockLogin(email, password)
        set({ user, isAuthenticated: true })
      },

      register: async (email: string, password: string, name: string) => {
        const user = await mockRegister(email, password, name)
        set({ user, isAuthenticated: true })
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
)
