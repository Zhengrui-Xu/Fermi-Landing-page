'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Zap, Battery } from 'lucide-react'

const OurProductsParallax = () => {
  const containerRef = useRef()
  const sectionsRef = useRef([])
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(true) // Default to mobile
  const [isClient, setIsClient] = useState(false)

  // Client-side mounting check
  useEffect(() => {
    setIsClient(true)
  }, [])

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
      description:
        'Cuts energy use by 70% with proprietary low-temp calcination. Validated drop-in solutions for NMC & NCA chemistries. Delivers high energy density and long cycle life. Supports a secure domestic feedstock supply chain.',
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
      description:
        'Cuts CAM cost by 50% using abundant Mn & Fe. Enables ultra-fast charging. Performs reliably across a wide temperature range. Built on a secure domestic feedstock supply chain.',
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

  // Responsive detection
  useEffect(() => {
    if (!isClient) return

    const checkResponsive = () => {
      const isMobileOrTabletCheck = window.innerWidth <= 1024
      setIsMobileOrTablet(isMobileOrTabletCheck)
    }

    // Initial check
    checkResponsive()

    // Add event listener
    window.addEventListener('resize', checkResponsive)

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkResponsive)
    }
  }, [isClient])

  // Desktop scroll-based animation only
  useEffect(() => {
    if (!isClient || isMobileOrTablet) return

    const container = containerRef.current
    const sections = sectionsRef.current

    if (!container || sections.length === 0) return

    let cleanup = () => {}

    const loadGSAPAndAnimate = async () => {
      try {
        // Dynamically import GSAP only on desktop
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        // Register plugin
        gsap.registerPlugin(ScrollTrigger)

        // Clear any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === container) {
            trigger.kill()
          }
        })

        // Set initial positions for desktop
        gsap.set(sections, { x: '100%', opacity: 0 })
        gsap.set(sections[0], { x: '0%', opacity: 1 })

        // Original scroll-based animation for desktop
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            snap: {
              snapTo: 'labels',
              duration: { min: 0.3, max: 1.5 },
              delay: 0.1,
              ease: 'power2.inOut',
            },
          },
        })

        // Animate through each section
        sections.forEach((section, index) => {
          if (index === 0) return

          const label = `section${index}`

          tl.addLabel(label)
            .to(
              sections[index - 1],
              {
                x: '-100%',
                opacity: 0,
                duration: 0.8,
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
                duration: 0.8,
                ease: 'power2.inOut',
              },
              label
            )
        })

        // Setup cleanup
        cleanup = () => {
          tl.kill()
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.trigger === container) {
              trigger.kill()
            }
          })
        }
      } catch (error) {
        console.warn('GSAP ScrollTrigger setup failed:', error)
      }
    }

    loadGSAPAndAnimate()

    return cleanup
  }, [isClient, isMobileOrTablet])

  // Show loading during hydration
  if (!isClient) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-display text-center mb-4">Our Products</h1>
          <p className="text-lg md:text-xl font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    )
  }

  // Mobile Layout - Simple Vertical Sections
  if (isMobileOrTablet) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Section Title */}
        <div className="py-16 text-center">
          <h1 className="text-display text-center mb-4">Our Products</h1>
        </div>

        {/* Products Sections */}
        {productsData.map((product, index) => (
          <div key={product.id} className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
                {/* Product Header */}
                <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 rounded-xl shadow-lg"
                      style={{ backgroundColor: product.color }}
                    >
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {product.title}
                      </h2>
                      <h3 className="text-base md:text-lg font-semibold text-gray-600">
                        {product.subtitle}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 space-y-6">
                  {/* Product Image */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-gray-700 text-center">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 text-center">
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: product.color }}
                          />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Desktop Layout - Original Parallax
  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

      {/* Molecular Pattern Background */}
      <div className="absolute inset-0 z-5 opacity-40">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          className="w-full h-full"
          style={{ filter: 'blur(1px)' }}
        >
          <defs>
            {/* Molecule definitions with animation colors */}
            <circle id="atom-red" r="3" fill="rgba(179,25,66,0.3)" />
            <circle id="atom-blue" r="3" fill="rgba(10,49,97,0.3)" />
            <circle id="atom-light" r="2" fill="rgba(179,25,66,0.15)" />
            <circle id="bond" r="1" fill="rgba(10,49,97,0.2)" />
          </defs>

          {/* Molecular structure pattern */}
          <g opacity="0.6">
            {/* Molecule 1 */}
            <g transform="translate(100,150)">
              <use href="#atom-red" x="0" y="0" />
              <use href="#atom-blue" x="30" y="20" />
              <use href="#atom-light" x="60" y="0" />
              <line x1="0" y1="0" x2="30" y2="20" stroke="rgba(10,49,97,0.2)" strokeWidth="1" />
              <line x1="30" y1="20" x2="60" y2="0" stroke="rgba(179,25,66,0.2)" strokeWidth="1" />
            </g>

            {/* Additional molecules for visual appeal */}
            <g transform="translate(300,300)">
              <use href="#atom-blue" x="0" y="0" />
              <use href="#atom-red" x="40" y="30" />
              <use href="#atom-light" x="20" y="60" />
              <line x1="0" y1="0" x2="40" y2="30" stroke="rgba(179,25,66,0.2)" strokeWidth="1" />
              <line x1="40" y1="30" x2="20" y2="60" stroke="rgba(10,49,97,0.2)" strokeWidth="1" />
            </g>
          </g>
        </svg>
      </div>

      {/* Enhanced Animation Overlay */}
      <motion.div
        className="absolute inset-0 z-12"
        animate={{
          background: [
            'radial-gradient(circle 60% 80% at 20% 20%, rgba(179,25,66,0.20) 0%, transparent 60%)',
            'radial-gradient(circle 50% 70% at 80% 30%, rgba(10,49,97,0.20) 0%, transparent 60%)',
            'radial-gradient(circle 70% 60% at 50% 80%, rgba(179,25,66,0.19) 0%, transparent 55%)',
            'radial-gradient(circle 80% 50% at 10% 60%, rgba(10,49,97,0.22) 0%, transparent 65%)',
          ],
        }}
        transition={{
          duration: 8.0,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Section Title - Static */}
      <div className="absolute top-16 left-0 right-0 z-30 pointer-events-none">
        <div className="text-center">
          <h1 className="text-hero mb-2">Our Products</h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative h-full w-full">
        {productsData.map((product, index) => (
          <div
            key={product.id}
            ref={el => {
              sectionsRef.current[index] = el
            }}
            className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
          >
            <div className="max-w-6xl mx-auto w-full">
              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 h-full items-center">
                {/* Left side: Content */}
                <div className="space-y-6 bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/30">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-4 rounded-xl shadow-lg"
                        style={{ backgroundColor: product.color }}
                      >
                        <product.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {product.title}
                        </h2>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-600">
                          {product.subtitle}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed text-gray-700">{product.description}</p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: product.color }}
                          />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side: Product Image */}
                <div className="h-full min-h-[350px] md:min-h-[400px] flex items-center justify-center">
                  <div className="w-full aspect-[4/3] max-w-[450px] md:max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 transition-transform duration-300 hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={375}
                      className="w-full h-full object-contain p-4 md:p-6"
                      style={{
                        minHeight: '350px',
                        maxHeight: '375px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 z-40">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProductsParallax
