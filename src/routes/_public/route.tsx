import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  component: () => (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  ),
})
