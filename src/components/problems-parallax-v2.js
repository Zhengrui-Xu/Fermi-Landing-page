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
      image: '/LogoFinal/OurProducts/Gen1.jpg',
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
      image: '/LogoFinal/OurProducts/Gen2.jpg',
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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

      {/* Subtle Molecular Pattern Overlay */}
      <div
        className="absolute inset-0 z-5 opacity-5"
        style={{
          backgroundImage: 'url(/LogoFinal/OurProducts/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Subtle Red/Blue Animation Overlay with Very Low Opacity */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          background: [
            'radial-gradient(ellipse 51% 71% at 4% 47%, rgba(179,25,66,0.03) 0%, transparent 85%), radial-gradient(ellipse 49% 69% at 96% 53%, rgba(10,49,97,0.03) 0%, transparent 85%)',
            'radial-gradient(ellipse 49% 69% at 96% 53%, rgba(179,25,66,0.03) 0%, transparent 85%), radial-gradient(ellipse 51% 71% at 4% 47%, rgba(10,49,97,0.03) 0%, transparent 85%)',
            'radial-gradient(ellipse 51% 71% at 4% 47%, rgba(179,25,66,0.03) 0%, transparent 85%), radial-gradient(ellipse 49% 69% at 96% 53%, rgba(10,49,97,0.03) 0%, transparent 85%)',
          ],
        }}
        transition={{
          duration: 20.0,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      {/* Section Title */}
      <div className="absolute top-16 left-0 right-0 z-20">
        <div ref={titleRef} className="text-center">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
                {/* Left side: Content */}
                <div className="space-y-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
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
                <div className="h-full min-h-[400px] flex items-center">
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-contain p-4"
                      style={{ minHeight: '400px' }}
                    />
                  </div>
                </div>
              </div>

              {/* Page indicator */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-center space-x-3">
                  {productsData.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === index ? 'scale-125 shadow-lg' : 'opacity-50'
                      }`}
                      style={{
                        backgroundColor: idx === index ? colors.oldGloryRed : colors.white,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-700 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-xs mb-2 opacity-70">Scroll to explore products</span>
          <div
            className="w-5 h-8 border-2 rounded-full flex justify-center"
            style={{ borderColor: colors.oldGloryRed }}
          >
            <div
              className="w-1 h-2 rounded-full mt-1 animate-bounce"
              style={{ backgroundColor: colors.oldGloryRed }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProductsParallax
