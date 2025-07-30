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
            // START: Red far left, Blue far right (SAME AS END)
            'radial-gradient(ellipse 50% 70% at 5% 42%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 95% 58%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // BREATHE UP/DOWN: Red moves WAY up, Blue moves WAY down - flowing expansion
            'radial-gradient(ellipse 68% 88% at 8% 18%, rgba(255,88,122,0.83) 0%, transparent 79%), radial-gradient(ellipse 68% 88% at 92% 82%, rgba(118,188,232,0.83) 0%, transparent 79%), radial-gradient(ellipse 328% 168% at 50% 50%, rgba(255,255,255,1) 0%, rgba(248,250,255,0.95) 86%, transparent 100%)',

            // PEAK: Red at VERY top, Blue at VERY bottom - maximum but flowing through
            'radial-gradient(ellipse 78% 98% at 9% 10%, rgba(255,68,108,0.92) 0%, transparent 74%), radial-gradient(ellipse 78% 98% at 91% 90%, rgba(98,168,212,0.92) 0%, transparent 74%), radial-gradient(ellipse 348% 178% at 50% 50%, rgba(255,255,255,1) 0%, rgba(246,249,255,1) 91%, transparent 100%)',

            // BREATHE BACK: Red moves WAY down, Blue moves WAY up - flowing return (no pause)
            'radial-gradient(ellipse 72% 92% at 6% 82%, rgba(255,118,148,0.68) 0%, transparent 81%), radial-gradient(ellipse 72% 92% at 94% 18%, rgba(138,192,238,0.68) 0%, transparent 81%), radial-gradient(ellipse 322% 162% at 50% 50%, rgba(255,255,255,0.97) 0%, rgba(249,251,255,0.92) 83%, transparent 100%)',

            // SWITCH: Red floats right, Blue floats left - smooth flowing horizontal movement
            'radial-gradient(ellipse 62% 82% at 35% 48%, rgba(255,102,132,0.72) 0%, transparent 84%), radial-gradient(ellipse 62% 82% at 65% 52%, rgba(132,202,248,0.72) 0%, transparent 84%), radial-gradient(ellipse 312% 157% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(248,250,255,0.88) 81%, transparent 100%)',

            // SWITCHED: Red far right, Blue far left - flowing into new positions
            'radial-gradient(ellipse 52% 72% at 94% 44%, rgba(255,108,138,0.71) 0%, transparent 84%), radial-gradient(ellipse 52% 72% at 6% 56%, rgba(138,208,252,0.71) 0%, transparent 84%), radial-gradient(ellipse 302% 152% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(249,250,255,0.89) 79%, transparent 100%)',

            // BREATHE UP/DOWN SWITCHED: Red moves WAY up from right, Blue moves WAY down from left - flowing
            'radial-gradient(ellipse 68% 88% at 92% 18%, rgba(255,88,122,0.83) 0%, transparent 79%), radial-gradient(ellipse 68% 88% at 8% 82%, rgba(118,188,232,0.83) 0%, transparent 79%), radial-gradient(ellipse 328% 168% at 50% 50%, rgba(255,255,255,1) 0%, rgba(248,250,255,0.95) 86%, transparent 100%)',

            // PEAK SWITCHED: Red at VERY top-right, Blue at VERY bottom-left - flowing through peak
            'radial-gradient(ellipse 78% 98% at 91% 10%, rgba(255,68,108,0.92) 0%, transparent 74%), radial-gradient(ellipse 78% 98% at 9% 90%, rgba(98,168,212,0.92) 0%, transparent 74%), radial-gradient(ellipse 348% 178% at 50% 50%, rgba(255,255,255,1) 0%, rgba(246,249,255,1) 91%, transparent 100%)',

            // BREATHE BACK SWITCHED: Red moves WAY down, Blue moves WAY up - flowing return
            'radial-gradient(ellipse 72% 92% at 94% 82%, rgba(255,118,148,0.68) 0%, transparent 81%), radial-gradient(ellipse 72% 92% at 6% 18%, rgba(138,192,238,0.68) 0%, transparent 81%), radial-gradient(ellipse 322% 162% at 50% 50%, rgba(255,255,255,0.97) 0%, rgba(249,251,255,0.92) 83%, transparent 100%)',

            // SECOND UP/DOWN CYCLE SWITCHED: Red goes up AGAIN, Blue goes down AGAIN - flowing motion
            'radial-gradient(ellipse 76% 96% at 89% 14%, rgba(255,78,118,0.88) 0%, transparent 76%), radial-gradient(ellipse 76% 96% at 11% 86%, rgba(108,178,222,0.88) 0%, transparent 76%), radial-gradient(ellipse 338% 173% at 50% 50%, rgba(255,255,255,1) 0%, rgba(247,250,255,1) 89%, transparent 100%)',

            // SECOND BREATHE BACK SWITCHED: Red down again, Blue up again - flowing
            'radial-gradient(ellipse 67% 87% at 91% 74%, rgba(255,112,142,0.69) 0%, transparent 83%), radial-gradient(ellipse 67% 87% at 9% 26%, rgba(132,192,237,0.69) 0%, transparent 83%), radial-gradient(ellipse 317% 167% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(248,250,255,0.90) 82%, transparent 100%)',

            // RETURN SWITCH: Red floats back left, Blue back right - flowing return movement
            'radial-gradient(ellipse 62% 82% at 65% 48%, rgba(255,102,132,0.72) 0%, transparent 84%), radial-gradient(ellipse 62% 82% at 35% 52%, rgba(132,202,248,0.72) 0%, transparent 84%), radial-gradient(ellipse 312% 157% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(248,250,255,0.88) 81%, transparent 100%)',

            // FINAL UP/DOWN BEFORE RETURN: One last flowing breath before going home
            'radial-gradient(ellipse 66% 86% at 26% 22%, rgba(255,98,128,0.74) 0%, transparent 83%), radial-gradient(ellipse 66% 86% at 74% 78%, rgba(128,188,232,0.74) 0%, transparent 83%), radial-gradient(ellipse 316% 166% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(247,250,255,0.91) 82%, transparent 100%)',

            // RETURN TO START: Perfect loop back to beginning
            'radial-gradient(ellipse 50% 70% at 5% 42%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 95% 58%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 30.0,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          times: [
            0, 0.083, 0.167, 0.25, 0.333, 0.417, 0.5, 0.583, 0.667, 0.75, 0.833, 0.867, 0.9, 0.933,
            1.0,
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
