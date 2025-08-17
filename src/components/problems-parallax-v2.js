'use client'

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const gen1Features = [
  'High-precision CNC machining',
  'Advanced servo motor control',
  'Real-time quality monitoring',
  'Automated tool changing system',
  'Integrated safety protocols',
]

const gen2Features = [
  'AI-powered process optimization',
  'Predictive maintenance alerts',
  'Enhanced precision tolerances',
  'Multi-axis simultaneous control',
  'Cloud-based analytics platform',
]

export default function ProblemsParallaxV2() {
  const containerRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Only apply parallax on desktop screens
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const setupParallax = () => {
      if (mediaQuery.matches) {
        const cards = container.querySelectorAll('.parallax-card')
        const totalWidth = cards.length * 100

        timelineRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 20%',
            end: 'bottom 80%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })

        timelineRef.current.to('.parallax-container', {
          x: `-${totalWidth - 100}vw`,
          ease: 'none',
        })
      }
    }

    const cleanup = () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }

    setupParallax()
    mediaQuery.addEventListener('change', () => {
      cleanup()
      setupParallax()
    })

    return cleanup
  }, [])

  return (
    <>
      {/* Mobile and Tablet Layout */}
      <section className="block lg:hidden py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground">
              Advanced CAM technology for precision manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gen-1 CAM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-lg p-6 border shadow-lg"
            >
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/LogoFinal/OurProducts/Gen1.jpg"
                  alt="Gen-1 CAM System"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gen-1 CAM</h3>
              <p className="text-muted-foreground mb-6">
                Our foundational CAM system providing reliable precision manufacturing capabilities
                with industry-standard features.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Key Features:</h4>
                <ul className="space-y-2">
                  {gen1Features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Gen-2 CAM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-lg p-6 border shadow-lg"
            >
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/LogoFinal/OurProducts/Gen2.jpg"
                  alt="Gen-2 CAM System"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gen-2 CAM</h3>
              <p className="text-muted-foreground mb-6">
                Next-generation CAM technology featuring AI integration and advanced automation for
                superior performance and efficiency.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Key Features:</h4>
                <ul className="space-y-2">
                  {gen2Features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Desktop Parallax Layout */}
      <section ref={containerRef} className="hidden lg:block h-screen overflow-hidden">
        <div className="parallax-container flex h-full">
          {/* Gen-1 CAM Card */}
          <div className="parallax-card w-screen h-full flex items-center justify-center px-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-4">Gen-1 CAM</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Our foundational CAM system providing reliable precision manufacturing
                    capabilities with industry-standard features and proven performance.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Key Features:</h3>
                  <div className="grid gap-4">
                    {gen1Features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/LogoFinal/OurProducts/Gen1.jpg"
                    alt="Gen-1 CAM System"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Gen-2 CAM Card */}
          <div className="parallax-card w-screen h-full flex items-center justify-center px-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-4">Gen-2 CAM</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Next-generation CAM technology featuring AI integration and advanced automation
                    for superior performance and efficiency in modern manufacturing.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Key Features:</h3>
                  <div className="grid gap-4">
                    {gen2Features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/LogoFinal/OurProducts/Gen2.jpg"
                    alt="Gen-2 CAM System"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
