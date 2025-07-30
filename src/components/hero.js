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
            // 0% - START/END: Red left, Blue right baseline
            'radial-gradient(ellipse 50% 70% at 5% 50%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 95% 50%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // First breathing cycle - ALL THE WAY UP
            'radial-gradient(ellipse 65% 90% at 5% 5%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 95% 95%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // First breathing cycle - ALL THE WAY DOWN
            'radial-gradient(ellipse 65% 90% at 5% 95%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 95% 5%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Second breathing cycle - ALL THE WAY UP
            'radial-gradient(ellipse 65% 90% at 5% 5%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 95% 95%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Second breathing cycle - ALL THE WAY DOWN
            'radial-gradient(ellipse 65% 90% at 5% 95%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 95% 5%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Third breathing cycle - ALL THE WAY UP
            'radial-gradient(ellipse 65% 90% at 5% 5%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 95% 95%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Third breathing cycle - ALL THE WAY DOWN
            'radial-gradient(ellipse 65% 90% at 5% 95%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 95% 5%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // SWITCH - Red moves right, Blue moves left
            'radial-gradient(ellipse 50% 70% at 95% 50%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 5% 50%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // Fourth breathing cycle (switched) - ALL THE WAY UP
            'radial-gradient(ellipse 65% 90% at 95% 5%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 5% 95%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fourth breathing cycle (switched) - ALL THE WAY DOWN
            'radial-gradient(ellipse 65% 90% at 95% 95%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 5% 5%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fifth breathing cycle (switched) - ALL THE WAY UP
            'radial-gradient(ellipse 65% 90% at 95% 5%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 5% 95%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fifth breathing cycle (switched) - ALL THE WAY DOWN
            'radial-gradient(ellipse 65% 90% at 95% 95%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 5% 5%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Sixth breathing cycle (switched) - ALL THE WAY UP
            'radial-gradient(ellipse 65% 90% at 95% 5%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 5% 95%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Sixth breathing cycle (switched) - ALL THE WAY DOWN
            'radial-gradient(ellipse 65% 90% at 95% 95%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 65% 90% at 5% 5%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 50% 50%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // RETURN TO START - Perfect loop
            'radial-gradient(ellipse 50% 70% at 5% 50%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 95% 50%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 35.0,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          times: [
            0, 0.07, 0.14, 0.21, 0.28, 0.35, 0.42, 0.5, 0.57, 0.64, 0.71, 0.78, 0.85, 0.92, 1.0,
          ],
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
