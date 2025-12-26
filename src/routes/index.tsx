import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad(ctx) {
    const {
      context: {
        auth: { isAuthenticated },
      },
    } = ctx ?? ''
    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
      })
    } else {
      throw redirect({ to: '/dashboard' })
    }
  },
})
