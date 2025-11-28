import { Outlet } from '@tanstack/react-router'

/**
 * Layout for public pages (about, contact)
 * No authentication required
 */
export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
