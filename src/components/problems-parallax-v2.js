'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Zap, Battery } from 'lucide-react'

const ProblemsParallaxV2 = () => {
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
      image: '/LogoFinal/OurProducts/gen1cam.png',
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
      image: '/LogoFinal/OurProducts/trial1.png',
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

  // Simple fade-in animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach(section => {
      if (section) {
        section.style.opacity = '0'
        section.style.transform = 'translateY(30px)'
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id="technology"
      className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-display text-center mb-4">Our Products</h1>
        </div>

        {/* Products - Vertical Layout */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {productsData.map((product, index) => (
            <div
              key={product.id}
              ref={el => {
                sectionsRef.current[index] = el
              }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10">
                {/* Left: Content */}
                <div className="space-y-6 lg:space-y-8 flex flex-col justify-center">
                  {/* Product Header */}
                  <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                    <div
                      className="p-3 lg:p-4 xl:p-5 rounded-xl shadow-lg"
                      style={{ backgroundColor: product.color }}
                    >
                      <product.icon className="h-6 w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg lg:text-2xl xl:text-3xl font-bold text-gray-900">
                        {product.title}
                      </h2>
                      <h3 className="text-sm lg:text-base xl:text-lg font-semibold text-gray-600">
                        {product.subtitle}
                      </h3>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-base lg:text-xl xl:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                      Key Features
                    </h4>
                    <ul className="space-y-3 lg:space-y-4">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg bg-gray-50/80 hover:bg-gray-100/80 transition-colors duration-200"
                        >
                          <div
                            className="w-2 h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"
                            style={{ backgroundColor: product.color }}
                          />
                          <span className="text-xs lg:text-sm xl:text-base text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="flex items-center justify-center order-first lg:order-last">
                  <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 transition-transform duration-300 hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={375}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemsParallaxV2
