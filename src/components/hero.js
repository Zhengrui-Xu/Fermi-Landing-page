'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useGSAP } from '@/hooks/useGSAP'
import GradientAnimation from 'react-gradient-animation'

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F8F9FF] overflow-hidden">
        {/* Large vibrant gradient areas with stronger colors */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-50"
          style={{
            background:
              'radial-gradient(circle, #B22234 0%, rgba(178,34,52,0.6) 25%, rgba(178,34,52,0.3) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 200, -150, 100, 0],
            y: [0, -100, 120, -80, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(circle, #3C3B6E 0%, rgba(60,59,110,0.5) 25%, rgba(60,59,110,0.2) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -180, 140, -100, 0],
            y: [0, 160, -110, 80, 0],
            scale: [1, 0.8, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full opacity-35"
          style={{
            background:
              'radial-gradient(circle, #B22234 0%, rgba(178,34,52,0.4) 30%, rgba(178,34,52,0.1) 60%, transparent 80%)',
            filter: 'blur(100px)',
          }}
          animate={{
            x: [0, 220, -80, 140, 0],
            y: [0, -90, 140, -60, 0],
            scale: [1, 1.1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-45"
          style={{
            background:
              'radial-gradient(circle, #3C3B6E 0%, rgba(60,59,110,0.4) 30%, rgba(60,59,110,0.1) 60%, transparent 80%)',
            filter: 'blur(90px)',
          }}
          animate={{
            x: [0, -160, 110, -90, 0],
            y: [0, 120, -90, 50, 0],
            scale: [1, 0.9, 1.4, 0.8, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Center flowing gradient */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'conic-gradient(from 0deg, #B22234 0%, #3C3B6E 50%, #B22234 100%)',
            filter: 'blur(120px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 0.7, 1.1, 1],
            x: [0, 40, -40, 20, 0],
            y: [0, -30, 30, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Additional flowing elements */}
        <motion.div
          className="absolute top-20 left-1/3 w-[300px] h-[300px] rounded-full opacity-25"
          style={{
            background:
              'radial-gradient(ellipse 80% 50%, #3C3B6E 0%, rgba(60,59,110,0.3) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, -140, 60, 0],
            y: [0, -50, 80, -30, 0],
            scaleX: [1, 1.4, 0.7, 1.2, 1],
            scaleY: [1, 0.8, 1.4, 0.9, 1],
            rotate: [0, 180, -90, 90, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* New moving gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[250px] h-[250px] rounded-full opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(178,34,52,0.4) 0%, rgba(178,34,52,0.2) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
          animate={{
            x: [0, -80, 120, -60, 0],
            y: [0, 140, -100, 70, 0],
            scale: [1, 0.7, 1.4, 0.9, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[280px] h-[280px] rounded-full opacity-25"
          style={{
            background:
              'radial-gradient(circle, rgba(60,59,110,0.3) 0%, rgba(60,59,110,0.15) 50%, transparent 80%)',
            filter: 'blur(85px)',
          }}
          animate={{
            x: [0, 130, -100, 80, 0],
            y: [0, -80, 120, -50, 0],
            scale: [1, 1.2, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="hero-title">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Powering the
                <span className="text-[#B22234] block">Future</span>
              </h1>
            </div>

            <div className="hero-subtitle mt-6">
              <p className="text-xl md:text-2xl text-gray-700 font-light">
                Revolutionary Energy Solutions
              </p>
            </div>

            <div className="hero-description mt-6">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Fermi Energy is pioneering breakthrough technologies in sustainable energy,
                efficiency, and next-generation power systems that will transform how the world
                thinks about energy.
              </p>
            </div>

            <div className="hero-buttons mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-[#3C3B6E]">500+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#3C3B6E]">99.9%</div>
                <div className="text-sm text-gray-500">Efficiency Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#3C3B6E]">24/7</div>
                <div className="text-sm text-gray-500">Support Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="hero-image relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Placeholder for hero image - replace with actual image */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#B22234]/8 to-[#3C3B6E]/8 border border-gray-200 flex items-center justify-center backdrop-blur-sm">
                <div className="text-6xl text-[#3C3B6E]/30">⚡</div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#B22234]/8 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#3C3B6E]/8 rounded-full animate-pulse animation-delay-200"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#B22234]/12 rounded-full animate-pulse animation-delay-500"></div>
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
