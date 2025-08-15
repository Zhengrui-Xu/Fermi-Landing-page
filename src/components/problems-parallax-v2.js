'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Zap, Battery } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const OurProductsParallax = () => {
  const containerRef = useRef()
  const sectionsRef = useRef([])
  const titleRef = useRef()

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

  useEffect(() => {
    const container = containerRef.current
    const sections = sectionsRef.current
    const title = titleRef.current

    if (!container || sections.length === 0) return

    // Check if device is mobile or tablet
    const isMobileOrTablet = window.innerWidth <= 1024

    // Set initial positions
    gsap.set(sections, { x: '100%', opacity: 0 })
    gsap.set(sections[0], { x: '0%', opacity: 1 })

    if (isMobileOrTablet) {
      // Auto-slide for mobile and tablets every 5 seconds
      let currentIndex = 0
      const autoSlide = setInterval(() => {
        // Hide current section
        gsap.to(sections[currentIndex], {
          x: '-100%',
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
        })

        // Move to next section
        currentIndex = (currentIndex + 1) % sections.length

        // Show next section
        gsap.fromTo(
          sections[currentIndex],
          { x: '100%', opacity: 0 },
          {
            x: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut',
          }
        )
      }, 5000)

      return () => {
        clearInterval(autoSlide)
      }
    } else {
      // Original scroll-based animation for desktop with improved smoothness
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8, // Smoother scrubbing
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.3, max: 1.5 }, // Faster snapping
            delay: 0.1,
            ease: 'power2.inOut',
          },
        },
      })

      // Remove title animation to keep it static
      // Title will remain static and not be affected by scroll animations

      // Animate through each section with improved timing
      sections.forEach((section, index) => {
        if (index === 0) return // Skip first section as it's already visible

        const label = `section${index}`

        tl.addLabel(label)
          .to(
            sections[index - 1],
            {
              x: '-100%',
              opacity: 0,
              duration: 0.8, // Faster transitions
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
              duration: 0.8, // Faster transitions
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
    }
  }, [])

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

            {/* Molecule 2 */}
            <g transform="translate(300,300)">
              <use href="#atom-blue" x="0" y="0" />
              <use href="#atom-red" x="40" y="30" />
              <use href="#atom-light" x="20" y="60" />
              <line x1="0" y1="0" x2="40" y2="30" stroke="rgba(179,25,66,0.2)" strokeWidth="1" />
              <line x1="40" y1="30" x2="20" y2="60" stroke="rgba(10,49,97,0.2)" strokeWidth="1" />
            </g>

            {/* Molecule 3 */}
            <g transform="translate(600,100)">
              <use href="#atom-red" x="0" y="0" />
              <use href="#atom-blue" x="25" y="40" />
              <use href="#atom-light" x="50" y="20" />
              <use href="#atom-red" x="75" y="50" />
              <line x1="0" y1="0" x2="25" y2="40" stroke="rgba(10,49,97,0.2)" strokeWidth="1" />
              <line x1="25" y1="40" x2="50" y2="20" stroke="rgba(179,25,66,0.2)" strokeWidth="1" />
              <line x1="50" y1="20" x2="75" y2="50" stroke="rgba(10,49,97,0.2)" strokeWidth="1" />
            </g>

            {/* Molecule 4 */}
            <g transform="translate(900,250)">
              <use href="#atom-blue" x="0" y="0" />
              <use href="#atom-light" x="35" y="25" />
              <use href="#atom-red" x="70" y="10" />
              <line x1="0" y1="0" x2="35" y2="25" stroke="rgba(179,25,66,0.2)" strokeWidth="1" />
              <line x1="35" y1="25" x2="70" y2="10" stroke="rgba(10,49,97,0.2)" strokeWidth="1" />
            </g>

            {/* Additional scattered molecules */}
            <g transform="translate(200,500)">
              <use href="#atom-red" x="0" y="0" />
              <use href="#atom-blue" x="20" y="30" />
              <line x1="0" y1="0" x2="20" y2="30" stroke="rgba(179,25,66,0.15)" strokeWidth="1" />
            </g>

            <g transform="translate(500,450)">
              <use href="#atom-blue" x="0" y="0" />
              <use href="#atom-light" x="30" y="15" />
              <use href="#atom-red" x="60" y="30" />
              <line x1="0" y1="0" x2="30" y2="15" stroke="rgba(10,49,97,0.15)" strokeWidth="1" />
              <line x1="30" y1="15" x2="60" y2="30" stroke="rgba(179,25,66,0.15)" strokeWidth="1" />
            </g>

            <g transform="translate(800,400)">
              <use href="#atom-red" x="0" y="0" />
              <use href="#atom-blue" x="40" y="20" />
              <line x1="0" y1="0" x2="40" y2="20" stroke="rgba(10,49,97,0.15)" strokeWidth="1" />
            </g>

            <g transform="translate(150,700)">
              <use href="#atom-blue" x="0" y="0" />
              <use href="#atom-light" x="25" y="35" />
              <use href="#atom-red" x="50" y="10" />
              <line x1="0" y1="0" x2="25" y2="35" stroke="rgba(179,25,66,0.15)" strokeWidth="1" />
              <line x1="25" y1="35" x2="50" y2="10" stroke="rgba(10,49,97,0.15)" strokeWidth="1" />
            </g>
          </g>
        </svg>
      </div>

      {/* Enhanced Red/Blue Animation Overlay - Below Content */}
      <motion.div
        className="absolute inset-0 z-12"
        animate={{
          background: [
            'radial-gradient(circle 60% 80% at 20% 20%, rgba(179,25,66,0.20) 0%, transparent 60%), radial-gradient(circle 70% 60% at 80% 80%, rgba(10,49,97,0.18) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 50% 10%, rgba(179,25,66,0.12) 0%, transparent 50%)',
            'radial-gradient(circle 50% 70% at 80% 30%, rgba(10,49,97,0.20) 0%, transparent 60%), radial-gradient(circle 80% 50% at 10% 70%, rgba(179,25,66,0.18) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 50% 90%, rgba(10,49,97,0.12) 0%, transparent 50%)',
            'radial-gradient(circle 70% 60% at 50% 80%, rgba(179,25,66,0.19) 0%, transparent 55%), radial-gradient(circle 60% 80% at 30% 20%, rgba(10,49,97,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 90% 50%, rgba(179,25,66,0.10) 0%, transparent 45%)',
            'radial-gradient(circle 80% 50% at 10% 60%, rgba(10,49,97,0.22) 0%, transparent 65%), radial-gradient(circle 50% 70% at 90% 40%, rgba(179,25,66,0.19) 0%, transparent 70%), radial-gradient(ellipse 45% 55% at 20% 80%, rgba(10,49,97,0.14) 0%, transparent 55%)',
          ],
        }}
        transition={{
          duration: 8.0,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Section Title - Static and always visible */}
      <div className="absolute top-16 left-0 right-0 z-30 pointer-events-none">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-gray-900">Our Products</h1>
          <p className="text-lg md:text-xl font-medium text-gray-700">
            Advanced cathode active materials powering the future of energy storage
          </p>
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
    </section>
  )
}

export default OurProductsParallax
