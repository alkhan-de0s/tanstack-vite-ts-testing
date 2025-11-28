import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'
import { useEffect } from 'react'

export const Route = createFileRoute('/_authenticated')({
  component: AuthLayout,
})

function AuthLayout() {
  const { isAuthenticated } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: '/login' })
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
