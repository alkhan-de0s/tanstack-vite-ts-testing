import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/authStore'
import { User, Mail, Calendar, LogOut } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/_authenticated/profile')({
  component: Profile,
})

function Profile() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)

  const handleLogout = () => {
    logout()
    navigate({ to: '/login' })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-4xl font-bold mb-2">Profile</h1>
        <p className="text-cyan-100 text-lg">Manage your account information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

        {/* Profile Content */}
        <div className="relative px-8 pb-8">
          {/* Avatar */}
          <div className="absolute -top-16 left-8">
            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-xl flex items-center justify-center">
              <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                {user?.name.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end pt-4 gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Profile Info */}
          <div className="mt-20 space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <User className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Full Name</p>
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={user?.name}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg font-semibold text-gray-900">
                    {user?.name}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <Mail className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Email</p>
                {isEditing ? (
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-lg font-semibold text-gray-900">
                    {user?.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <Calendar className="w-6 h-6 text-cyan-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">
                  Member Since
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  January 2024
                </p>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end pt-4">
                <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium">
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
