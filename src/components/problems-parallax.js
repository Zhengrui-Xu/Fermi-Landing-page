'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ProblemsParallax = () => {
  const containerRef = useRef()
  const sectionsRef = useRef([])
  const titleRef = useRef()

  const problemsData = [
    {
      id: 1,
      title: 'Energy Storage Crisis',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 2,
      title: 'Grid Instability',
      content:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      id: 3,
      title: 'Environmental Impact',
      content:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.',
      gradient: 'from-green-500 to-teal-500',
    },
  ]

  useEffect(() => {
    const container = containerRef.current
    const sections = sectionsRef.current
    const title = titleRef.current

    if (!container || sections.length === 0) return

    // Set initial positions
    gsap.set(sections, { x: '100%', opacity: 0 })
    gsap.set(sections[0], { x: '0%', opacity: 1 })

    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 3 },
          delay: 0.2,
          ease: 'power1.inOut',
        },
      },
    })

    // Title animation
    tl.from(
      title,
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
      },
      0
    )

    // Animate through each section
    sections.forEach((section, index) => {
      if (index === 0) return // Skip first section as it's already visible

      const label = `section${index}`

      tl.addLabel(label)
        .to(
          sections[index - 1],
          {
            x: '-100%',
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
          },
          label
        )
        .fromTo(
          sections[index],
          {
            x: '100%',
            opacity: 0,
          },
          {
            x: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          },
          label
        )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90" />

      {/* Section Title */}
      <div className="absolute top-20 left-0 right-0 z-20">
        <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-white text-center">
          Problems We Address
        </h2>
      </div>

      {/* Content Sections */}
      <div className="relative h-full w-full">
        {problemsData.map((problem, index) => (
          <div
            key={problem.id}
            ref={el => {
              sectionsRef.current[index] = el
            }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Background card with gradient */}
              <div className={`bg-gradient-to-r ${problem.gradient} p-1 rounded-2xl shadow-2xl`}>
                <div className="bg-black/90 backdrop-blur-sm rounded-xl p-8 md:p-12">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    {problem.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    {problem.content}
                  </p>

                  {/* Page indicator */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {problemsData.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          idx === index ? 'bg-white scale-125' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsParallax
