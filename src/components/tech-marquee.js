'use client'

import Marquee from '@/components/ui/marquee'

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Framer Motion', icon: '🎬' },
  { name: 'GSAP', icon: '🚀' },
  { name: 'Node.js', icon: '💚' },
  { name: 'AI/ML', icon: '🤖' },
]

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="mb-4 text-center">
        <p className="text-sm text-gray-500 font-medium">Powered by modern technologies</p>
      </div>
      <Marquee className="[--duration:30s]" pauseOnHover>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 mx-4 px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-full"
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
