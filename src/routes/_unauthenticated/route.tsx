import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticated')({
  component: UnauthLayout,
  beforeLoad(ctx) {
    const {
      context: {
        auth: { isAuthenticated },
      },
    } = ctx ?? ''
    if (isAuthenticated) throw redirect({ to: '/dashboard' })
  },
})

function UnauthLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}
