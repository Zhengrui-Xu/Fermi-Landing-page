'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useGSAP } from '@/hooks/useGSAP'

export default function Hero() {
  const heroRef = useRef()

  // GSAP Animation
  useGSAP(element => {
    if (typeof window !== 'undefined') {
      const { gsap } = require('gsap')

      const tl = gsap.timeline()

      tl.from('.hero-title', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
      })
        .from(
          '.hero-subtitle',
          {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .from(
          '.hero-description',
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          '.hero-buttons',
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          '.hero-image',
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1'
        )
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            // Start with intermediate colors for smooth blending
            'linear-gradient(90deg, rgba(255,182,193,0.7) 0%, rgba(255,240,245,0.8) 25%, rgba(255,255,255,1) 50%, rgba(240,248,255,0.8) 75%, rgba(173,216,230,0.7) 100%)',
            // First breathe - gentle increase with pink/blue intermediates
            'linear-gradient(90deg, rgba(255,105,135,0.5) 0%, rgba(255,182,193,0.6) 25%, rgba(255,255,255,1) 50%, rgba(173,216,230,0.6) 75%, rgba(135,206,250,0.5) 100%)',
            // Peak intensity with full intermediate spectrum
            'linear-gradient(90deg, rgba(255,105,135,0.8) 0%, rgba(255,140,165,0.7) 25%, rgba(255,255,255,1) 50%, rgba(154,191,240,0.7) 75%, rgba(135,206,250,0.8) 100%)',
            // Smooth transition back
            'linear-gradient(90deg, rgba(255,140,165,0.6) 0%, rgba(255,200,215,0.5) 25%, rgba(255,255,255,1) 50%, rgba(200,225,250,0.5) 75%, rgba(154,191,240,0.6) 100%)',
            // Gentle dip with soft intermediates
            'linear-gradient(90deg, rgba(255,182,193,0.4) 0%, rgba(255,220,230,0.5) 25%, rgba(255,255,255,1) 50%, rgba(220,235,250,0.5) 75%, rgba(173,216,230,0.4) 100%)',
            // Back to start with smooth fade
            'linear-gradient(90deg, rgba(255,182,193,0.7) 0%, rgba(255,240,245,0.8) 25%, rgba(255,255,255,1) 50%, rgba(240,248,255,0.8) 75%, rgba(173,216,230,0.7) 100%)',
          ],
        }}
        transition={{
          duration: 5,
          ease: [0.4, 0.0, 0.2, 1],
          repeat: Infinity,
          repeatType: 'loop',
          times: [0, 0.15, 0.35, 0.55, 0.75, 1],
        }}
      />

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="hero-title">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Lorem Ipsum
                <span className="text-black block">Dolor Sit</span>
              </h1>
            </div>

            <div className="hero-subtitle mt-6">
              <p className="text-xl md:text-2xl text-black font-light">
                Consectetur Adipiscing Elit
              </p>
            </div>

            <div className="hero-description mt-6">
              <p className="text-lg text-black max-w-2xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="hero-buttons mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Lorem Ipsum
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Dolor Sit
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-[#0A3161]">123+</div>
                <div className="text-sm text-gray-500">Lorem Ipsum</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0A3161]">45.6%</div>
                <div className="text-sm text-gray-500">Dolor Sit Amet</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0A3161]">78/9</div>
                <div className="text-sm text-gray-500">Consectetur Elit</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="hero-image relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Placeholder for hero image - replace with actual image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#B31942]/8 to-[#0A3161]/8 border border-gray-200 flex items-center justify-center backdrop-blur-sm">
                <div className="text-6xl text-[#0A3161]/30">⚡</div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#B31942]/8 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#0A3161]/8 rounded-full animate-pulse animation-delay-200"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#B31942]/12 rounded-full animate-pulse animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  )
}
