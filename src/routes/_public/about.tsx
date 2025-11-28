import { createFileRoute } from '@tanstack/react-router'
import { Target, Zap, Shield, Users } from 'lucide-react'

export const Route = createFileRoute('/_public/about')({
  component: About,
})

function About() {
  const features = [
    {
      icon: Target,
      title: 'Mission Driven',
      description:
        'We are committed to delivering exceptional value and innovation to our users.',
    },
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description:
        'Built with modern technologies for optimal performance and reliability.',
    },
    {
      icon: Shield,
      title: 'Secure',
      description:
        'Your data security and privacy are our top priorities.',
    },
    {
      icon: Users,
      title: 'Community First',
      description:
        'We build for our community and value every piece of feedback.',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're building the future of web applications with modern technologies
          and best practices. Our mission is to create scalable, testable, and
          maintainable solutions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Story Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="space-y-4 text-cyan-50 text-lg leading-relaxed">
          <p>
            Founded in 2024, we set out to create a comprehensive learning
            platform that demonstrates modern web development best practices.
          </p>
          <p>
            Our application showcases the power of React 19, TanStack Router,
            Vitest, and other cutting-edge technologies working together
            seamlessly.
          </p>
          <p>
            We believe in clean code, comprehensive testing, and building
            applications that are both beautiful and functional.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Built With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'React 19',
            'Vite 7',
            'TanStack Router',
            'Vitest',
            'TailwindCSS 4',
            'Zustand',
            'TypeScript',
            'Testing Library',
          ].map((tech) => (
            <div
              key={tech}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 text-center font-semibold text-gray-900 hover:from-cyan-100 hover:to-blue-100 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
