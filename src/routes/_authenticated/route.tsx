import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  component: AuthLayout,
  beforeLoad(ctx) {
    const {
      context: {
        auth: { isAuthenticated },
      },
    } = ctx ?? ''
    if (!isAuthenticated) throw redirect({ to: '/login' })
  },
})

function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
