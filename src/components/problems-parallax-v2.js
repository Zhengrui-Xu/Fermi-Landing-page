'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Zap, Battery } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ProblemsParallaxV2 = () => {
  const containerRef = useRef()
  const sectionsRef = useRef([])

  // US Flag Color Scheme
  const colors = {
    oldGloryRed: '#B31942',
    oldGloryBlue: '#0A3161',
    white: '#FFFFFF',
  }

  // Product Data
  const productsData = [
    {
      id: 1,
      title: 'Gen-1 CAM',
      subtitle: "Fermi Energy's Gen-1 CAM",
      image: '/LogoFinal/OurProducts/Gen1After.png',
      features: [
        'Cuts energy use by 70% with proprietary low-temp calcination',
        'Validated drop-in solutions for NMC & NCA chemistries',
        'Delivers high energy density and long cycle life',
        'Supports a secure domestic feedstock supply chain',
      ],
      icon: Battery,
      color: colors.oldGloryBlue,
    },
    {
      id: 2,
      title: 'Gen-2 CAM',
      subtitle: "Fermi Energy's Gen-2 CAM",
      image: '/LogoFinal/OurProducts/Gen2After.png',
      features: [
        'Cuts CAM cost by 50% using abundant Mn & Fe',
        'Enables ultra-fast charging',
        'Performs reliably across a wide temperature range',
        'Built on a secure domestic feedstock supply chain',
      ],
      icon: Zap,
      color: colors.oldGloryRed,
    },
  ]

  useEffect(() => {
    const container = containerRef.current
    const sections = sectionsRef.current

    if (!container || sections.length === 0) return

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === container) {
        trigger.kill()
      }
    })

    // Check if laptop/desktop - 1280px breakpoint for XL screens
    const isLaptopOrDesktop = window.innerWidth >= 1280

    if (!isLaptopOrDesktop) {
      // Mobile & iPad: Reset styles for grid layout
      gsap.set(sections, { x: 0, opacity: 1, clearProps: 'all' })

      // Simple entrance animations for mobile/iPad
      sections.forEach((section, index) => {
        if (section) {
          gsap.from(section, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          })
        }
      })
    } else {
      // Laptop & Desktop: Horizontal parallax
      gsap.set(sections[0], { x: '0%', opacity: 1 })
      gsap.set(sections[1], { x: '100%', opacity: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            gsap.set(sections[0], { x: '0%', opacity: 1 })
            gsap.set(sections[1], { x: '100%', opacity: 1 })
          },
        },
      })

      // Gen-1 slides out left, Gen-2 slides in from right
      tl.to(
        sections[0],
        {
          x: '-100%',
          opacity: 1,
          duration: 1,
          ease: 'none',
        },
        0
      ).to(
        sections[1],
        {
          x: '0%',
          opacity: 1,
          duration: 1,
          ease: 'none',
        },
        0
      )
    }

    // Handle resize
    const handleResize = () => {
      // Kill existing triggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })

      // Re-setup with new breakpoint
      setTimeout(() => {
        const newIsLaptopOrDesktop = window.innerWidth >= 1280

        if (!newIsLaptopOrDesktop) {
          gsap.set(sections, { x: 0, opacity: 1, clearProps: 'all' })
        } else {
          gsap.set(sections[0], { x: '0%', opacity: 1 })
          gsap.set(sections[1], { x: '100%', opacity: 1 })

          const newTl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })

          newTl
            .to(sections[0], { x: '-100%', opacity: 1, duration: 1, ease: 'none' }, 0)
            .to(sections[1], { x: '0%', opacity: 1, duration: 1, ease: 'none' }, 0)
        }
      }, 100)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <>
      {/* Mobile & iPad: 2-Column Layout */}
      <section className="block xl:hidden py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Products</h1>
            <p className="text-base md:text-lg font-medium text-gray-700 max-w-3xl mx-auto px-2">
              Advanced cathode active materials powering the future of energy storage
            </p>
          </div>

          {/* Products Grid - 1 col mobile, 2 col iPad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {productsData.map((product, index) => (
              <div
                key={product.id}
                ref={el => {
                  sectionsRef.current[index] = el
                }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Product Header */}
                <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 md:p-4 rounded-xl shadow-lg"
                      style={{ backgroundColor: product.color }}
                    >
                      <product.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        {product.title}
                      </h2>
                      <h3 className="text-sm md:text-base font-semibold text-gray-600">
                        {product.subtitle}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  {/* Product Image */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-full max-w-xs md:max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={225}
                        className="w-full h-full object-contain p-3 md:p-4"
                      />
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-gray-900 text-center">Key Features</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/80"
                        >
                          <div
                            className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: product.color }}
                          />
                          <span className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop & Desktop: Horizontal Parallax */}
      <section
        id="technology"
        ref={containerRef}
        className="hidden xl:block relative h-screen w-full overflow-hidden"
      >
        {/* Smooth gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(179,25,66,0.1) 0%, rgba(255,255,255,0.95) 30%, rgba(10,49,97,0.1) 100%)',
              'linear-gradient(135deg, rgba(10,49,97,0.1) 0%, rgba(255,255,255,0.95) 30%, rgba(179,25,66,0.1) 100%)',
              'linear-gradient(135deg, rgba(179,25,66,0.1) 0%, rgba(255,255,255,0.95) 30%, rgba(10,49,97,0.1) 100%)',
            ],
          }}
          transition={{
            duration: 12,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Static Title */}
        <div className="absolute top-16 left-0 right-0 z-30 pointer-events-none">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">Our Products</h1>
            <p className="text-lg md:text-xl font-medium text-gray-700">
              Advanced cathode active materials powering the future of energy storage
            </p>
          </div>
        </div>

        {/* Product Sections */}
        <div className="relative h-full w-full">
          {productsData.map((product, index) => (
            <div
              key={product.id}
              ref={el => {
                sectionsRef.current[index] = el
              }}
              className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
            >
              <div className="max-w-7xl mx-auto w-full h-full flex items-center">
                {/* Desktop: Side-by-side Layout */}
                <div className="grid grid-cols-2 gap-16 h-full items-center w-full">
                  {/* Left: Content */}
                  <div className="space-y-8 bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 h-fit">
                    <div className="flex items-center gap-6 mb-8">
                      <div
                        className="p-5 rounded-xl shadow-lg"
                        style={{ backgroundColor: product.color }}
                      >
                        <product.icon className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900">{product.title}</h2>
                        <h3 className="text-xl font-semibold text-gray-600">{product.subtitle}</h3>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
                      <ul className="space-y-4">
                        {product.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-4 p-4 rounded-lg bg-gray-50/80 hover:bg-gray-100/80 transition-colors duration-200"
                          >
                            <div
                              className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: product.color }}
                            />
                            <span className="text-base text-gray-700 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 transition-transform duration-300 hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={375}
                        className="w-full h-full object-contain p-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 z-40">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProblemsParallaxV2
