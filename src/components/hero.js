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
            // PATTERN 1 START: Red top-left, blue bottom-right - classic position
            'radial-gradient(ellipse 50% 70% at 5% 42%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 95% 58%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',
            // Red breathes to full potential, blue stays moderate
            'radial-gradient(ellipse 75% 95% at 10% 25%, rgba(255,65,105,0.9) 0%, transparent 75%), radial-gradient(ellipse 50% 70% at 95% 58%, rgba(115,186,230,0.8) 0%, transparent 80%), radial-gradient(ellipse 320% 160% at 50% 50%, rgba(255,255,255,1) 0%, rgba(248,250,255,0.95) 85%, transparent 100%)',
            // Red moves down slightly, blue moves up slightly - gentle shift with size variation
            'radial-gradient(ellipse 55% 80% at 7% 65%, rgba(255,120,150,0.6) 0%, transparent 82%), radial-gradient(ellipse 70% 85% at 93% 35%, rgba(140,195,240,0.6) 0%, transparent 82%), radial-gradient(ellipse 310% 155% at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(250,252,255,0.92) 82%, transparent 100%)',
            // Blue breathes to full potential, red moderate - opposite corner dominance
            'radial-gradient(ellipse 50% 70% at 3% 75%, rgba(255,150,175,0.5) 0%, transparent 88%), radial-gradient(ellipse 80% 100% at 97% 25%, rgba(95,166,210,0.9) 0%, transparent 70%), radial-gradient(ellipse 330% 165% at 50% 50%, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 88%, transparent 100%)',
            // Both moderate, creating balanced center moment with subtle asymmetry
            'radial-gradient(ellipse 60% 75% at 8% 50%, rgba(255,130,160,0.65) 0%, transparent 83%), radial-gradient(ellipse 65% 80% at 92% 50%, rgba(125,185,230,0.65) 0%, transparent 83%), radial-gradient(ellipse 305% 152% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(252,253,255,0.9) 81%, transparent 100%)',
            // Return to start with slight variation - different ellipse proportions
            'radial-gradient(ellipse 52% 72% at 6% 40%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 48% 68% at 94% 60%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 298% 148% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // PATTERN 2 START: More complex breathing with multiple peaks
            // Red moderate top-left, blue moderate bottom-right
            'radial-gradient(ellipse 55% 75% at 8% 35%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 55% 75% at 92% 65%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',
            // Red reaches FULL POTENTIAL at top-left, blue moderate bottom-right
            'radial-gradient(ellipse 80% 100% at 12% 20%, rgba(255,45,85,1.0) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 88% 70%, rgba(115,186,230,0.8) 0%, transparent 80%), radial-gradient(ellipse 320% 160% at 50% 50%, rgba(255,255,255,1) 0%, rgba(248,250,255,0.95) 85%, transparent 100%)',
            // Red moves to center-right, blue moves to center-left - both moderate
            'radial-gradient(ellipse 60% 80% at 75% 45%, rgba(255,120,150,0.6) 0%, transparent 82%), radial-gradient(ellipse 60% 80% at 25% 55%, rgba(140,195,240,0.6) 0%, transparent 82%), radial-gradient(ellipse 310% 155% at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(250,252,255,0.92) 82%, transparent 100%)',
            // Blue reaches FULL POTENTIAL at top-right, red moderate bottom-left
            'radial-gradient(ellipse 60% 80% at 15% 75%, rgba(255,150,175,0.8) 0%, transparent 85%), radial-gradient(ellipse 80% 100% at 88% 25%, rgba(65,146,190,1.0) 0%, transparent 70%), radial-gradient(ellipse 330% 165% at 50% 50%, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 88%, transparent 100%)',
            // Red moves to bottom-right, blue to top-left - crossing paths with moderate intensity
            'radial-gradient(ellipse 65% 85% at 85% 80%, rgba(255,85,120,0.7) 0%, transparent 80%), radial-gradient(ellipse 65% 85% at 15% 20%, rgba(115,186,230,0.7) 0%, transparent 80%), radial-gradient(ellipse 315% 158% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(248,252,255,0.9) 83%, transparent 100%)',
            // Red reaches FULL POTENTIAL at bottom-right, blue moderate top-left
            'radial-gradient(ellipse 80% 100% at 88% 85%, rgba(255,25,65,1.0) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 12% 15%, rgba(140,195,240,0.8) 0%, transparent 80%), radial-gradient(ellipse 325% 162% at 50% 50%, rgba(255,255,255,1) 0%, rgba(250,248,255,0.95) 86%, transparent 100%)',
            // Return to moderate - preparing for loop restart
            'radial-gradient(ellipse 50% 70% at 5% 42%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 95% 58%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 15.5,
          ease: [0.4, 0.0, 0.6, 1.0],
          repeat: Infinity,
          repeatType: 'loop',
          times: [0, 0.08, 0.15, 0.23, 0.31, 0.38, 0.46, 0.54, 0.62, 0.69, 0.77, 0.85, 0.92, 1],
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
