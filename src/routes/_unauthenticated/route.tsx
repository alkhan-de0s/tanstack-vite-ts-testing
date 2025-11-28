import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'
import { useEffect } from 'react'

export const Route = createFileRoute('/_unauthenticated')({
  component: UnauthLayout,
})

function UnauthLayout() {
  const { isAuthenticated } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: '/dashboard' })
    }
  }, [isAuthenticated, navigate])

  if (isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}
