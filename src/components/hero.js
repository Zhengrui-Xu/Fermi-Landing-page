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
            // START: Red left, Blue right - baseline positions
            'radial-gradient(ellipse 50% 70% at 5% 45%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 95% 55%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // UP/DOWN 1 FLOW: Gentle wave start - Red drifts up-left, Blue flows down-right
            'radial-gradient(ellipse 55% 75% at 3% 32%, rgba(255,98,128,0.73) 0%, transparent 83%), radial-gradient(ellipse 55% 75% at 97% 68%, rgba(128,198,243,0.73) 0%, transparent 83%), radial-gradient(ellipse 310% 155% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(249,251,255,0.91) 81%, transparent 100%)',

            // UP/DOWN 1 RISE: Floating higher with gentle curve - wavy orbital motion
            'radial-gradient(ellipse 60% 80% at 2% 20%, rgba(255,90,120,0.76) 0%, transparent 80%), radial-gradient(ellipse 60% 80% at 98% 80%, rgba(120,190,235,0.76) 0%, transparent 80%), radial-gradient(ellipse 318% 162% at 50% 50%, rgba(255,255,255,0.97) 0%, rgba(248,250,255,0.93) 82%, transparent 100%)',

            // UP/DOWN 1 PEAK: Gentle peak with orbital drift - like floating on water surface
            'radial-gradient(ellipse 64% 84% at 1% 12%, rgba(255,85,115,0.78) 0%, transparent 78%), radial-gradient(ellipse 64% 84% at 99% 88%, rgba(115,185,230,0.78) 0%, transparent 78%), radial-gradient(ellipse 325% 167% at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(247,249,255,0.94) 84%, transparent 100%)',

            // UP/DOWN 1 DRIFT: Gentle drift back with wavy motion - like water current
            'radial-gradient(ellipse 58% 78% at 2% 28%, rgba(255,92,122,0.75) 0%, transparent 81%), radial-gradient(ellipse 58% 78% at 98% 72%, rgba(122,192,237,0.75) 0%, transparent 81%), radial-gradient(ellipse 315% 160% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(248,250,255,0.92) 82%, transparent 100%)',

            // UP/DOWN 1 SETTLE: Flowing back to baseline with gentle curve
            'radial-gradient(ellipse 52% 72% at 4% 38%, rgba(255,100,130,0.72) 0%, transparent 83%), radial-gradient(ellipse 52% 72% at 96% 62%, rgba(130,200,245,0.72) 0%, transparent 83%), radial-gradient(ellipse 308% 154% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(249,250,255,0.90) 80%, transparent 100%)',

            // UP/DOWN 2 FLOW: Opposite wave - Red flows down-left, Blue drifts up-right
            'radial-gradient(ellipse 56% 76% at 3% 68%, rgba(255,95,125,0.74) 0%, transparent 82%), radial-gradient(ellipse 56% 76% at 97% 32%, rgba(125,195,240,0.74) 0%, transparent 82%), radial-gradient(ellipse 312% 157% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(248,251,255,0.91) 81%, transparent 100%)',

            // UP/DOWN 2 SINK: Gentle descent with orbital curve - like underwater current
            'radial-gradient(ellipse 62% 82% at 2% 80%, rgba(255,88,118,0.77) 0%, transparent 79%), radial-gradient(ellipse 62% 82% at 98% 20%, rgba(118,188,232,0.77) 0%, transparent 79%), radial-gradient(ellipse 320% 165% at 50% 50%, rgba(255,255,255,0.97) 0%, rgba(247,250,255,0.93) 83%, transparent 100%)',

            // UP/DOWN 2 DEPTH: Maximum depth with gentle sway - floating at bottom
            'radial-gradient(ellipse 66% 86% at 1% 88%, rgba(255,82,112,0.79) 0%, transparent 77%), radial-gradient(ellipse 66% 86% at 99% 12%, rgba(112,182,227,0.79) 0%, transparent 77%), radial-gradient(ellipse 328% 170% at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(246,249,255,0.95) 85%, transparent 100%)',

            // UP/DOWN 2 RISE: Gentle ascent with wavy motion - surfacing gracefully
            'radial-gradient(ellipse 60% 80% at 2% 72%, rgba(255,90,120,0.76) 0%, transparent 80%), radial-gradient(ellipse 60% 80% at 98% 28%, rgba(120,190,235,0.76) 0%, transparent 80%), radial-gradient(ellipse 322% 164% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(248,250,255,0.92) 82%, transparent 100%)',

            // UP/DOWN 2 SETTLE: Flowing return with gentle orbital curve
            'radial-gradient(ellipse 54% 74% at 4% 58%, rgba(255,98,128,0.73) 0%, transparent 82%), radial-gradient(ellipse 54% 74% at 96% 42%, rgba(128,198,243,0.73) 0%, transparent 82%), radial-gradient(ellipse 316% 159% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(249,250,255,0.90) 81%, transparent 100%)',

            // SWITCH START: Red moves up and right, Blue moves down and left - smooth separation
            'radial-gradient(ellipse 56% 76% at 25% 25%, rgba(255,100,130,0.72) 0%, transparent 83%), radial-gradient(ellipse 56% 76% at 75% 75%, rgba(130,200,245,0.72) 0%, transparent 83%), radial-gradient(ellipse 310% 155% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(249,251,255,0.89) 80%, transparent 100%)',

            // SWITCH MID: Red above center, Blue below center - over/under positioning
            'radial-gradient(ellipse 54% 74% at 50% 30%, rgba(255,105,135,0.71) 0%, transparent 84%), radial-gradient(ellipse 54% 74% at 50% 70%, rgba(135,206,250,0.71) 0%, transparent 84%), radial-gradient(ellipse 305% 152% at 50% 50%, rgba(255,255,255,0.93) 0%, rgba(249,250,255,0.88) 78%, transparent 100%)',

            // SWITCH END: Red completes move to right and down, Blue to left and up
            'radial-gradient(ellipse 56% 76% at 75% 60%, rgba(255,100,130,0.72) 0%, transparent 83%), radial-gradient(ellipse 56% 76% at 25% 40%, rgba(130,200,245,0.72) 0%, transparent 83%), radial-gradient(ellipse 310% 155% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(249,251,255,0.89) 80%, transparent 100%)',

            // SWITCHED: Completed position switch - Red now right, Blue now left
            'radial-gradient(ellipse 52% 72% at 95% 45%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 52% 72% at 5% 55%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(250,250,255,0.89) 79%, transparent 100%)',

            // SWITCHED UP/DOWN 1 FLOW: Gentle wave from new positions - Red drifts up-right, Blue flows down-left
            'radial-gradient(ellipse 57% 77% at 97% 32%, rgba(255,98,128,0.73) 0%, transparent 83%), radial-gradient(ellipse 57% 77% at 3% 68%, rgba(128,198,243,0.73) 0%, transparent 83%), radial-gradient(ellipse 312% 157% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(249,251,255,0.91) 81%, transparent 100%)',

            // SWITCHED UP/DOWN 1 RISE: Floating higher with gentle orbital curve
            'radial-gradient(ellipse 62% 82% at 98% 20%, rgba(255,90,120,0.76) 0%, transparent 80%), radial-gradient(ellipse 62% 82% at 2% 80%, rgba(120,190,235,0.76) 0%, transparent 80%), radial-gradient(ellipse 320% 165% at 50% 50%, rgba(255,255,255,0.97) 0%, rgba(248,250,255,0.93) 82%, transparent 100%)',

            // SWITCHED UP/DOWN 1 PEAK: Gentle peak with wavy drift - floating on water surface
            'radial-gradient(ellipse 66% 86% at 99% 12%, rgba(255,85,115,0.78) 0%, transparent 78%), radial-gradient(ellipse 66% 86% at 1% 88%, rgba(115,185,230,0.78) 0%, transparent 78%), radial-gradient(ellipse 327% 169% at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(247,249,255,0.94) 84%, transparent 100%)',

            // SWITCHED UP/DOWN 1 DRIFT: Gentle drift back with wavy current motion
            'radial-gradient(ellipse 60% 80% at 98% 28%, rgba(255,92,122,0.75) 0%, transparent 81%), radial-gradient(ellipse 60% 80% at 2% 72%, rgba(122,192,237,0.75) 0%, transparent 81%), radial-gradient(ellipse 318% 162% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(248,250,255,0.92) 82%, transparent 100%)',

            // SWITCHED UP/DOWN 1 SETTLE: Flowing back with gentle orbital curve
            'radial-gradient(ellipse 54% 74% at 96% 38%, rgba(255,100,130,0.72) 0%, transparent 83%), radial-gradient(ellipse 54% 74% at 4% 62%, rgba(130,200,245,0.72) 0%, transparent 83%), radial-gradient(ellipse 314% 158% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(249,250,255,0.90) 80%, transparent 100%)',

            // SWITCHED UP/DOWN 2 FLOW: Opposite wave - Red flows down-right, Blue drifts up-left
            'radial-gradient(ellipse 58% 78% at 97% 68%, rgba(255,95,125,0.74) 0%, transparent 82%), radial-gradient(ellipse 58% 78% at 3% 32%, rgba(125,195,240,0.74) 0%, transparent 82%), radial-gradient(ellipse 316% 160% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(248,251,255,0.91) 81%, transparent 100%)',

            // SWITCHED UP/DOWN 2 SINK: Gentle descent with underwater current feel
            'radial-gradient(ellipse 64% 84% at 98% 80%, rgba(255,88,118,0.77) 0%, transparent 79%), radial-gradient(ellipse 64% 84% at 2% 20%, rgba(118,188,232,0.77) 0%, transparent 79%), radial-gradient(ellipse 324% 167% at 50% 50%, rgba(255,255,255,0.97) 0%, rgba(247,250,255,0.93) 83%, transparent 100%)',

            // SWITCHED UP/DOWN 2 DEPTH: Maximum depth with gentle floating sway
            'radial-gradient(ellipse 68% 88% at 99% 88%, rgba(255,82,112,0.79) 0%, transparent 77%), radial-gradient(ellipse 68% 88% at 1% 12%, rgba(112,182,227,0.79) 0%, transparent 77%), radial-gradient(ellipse 332% 172% at 50% 50%, rgba(255,255,255,0.98) 0%, rgba(246,249,255,0.95) 85%, transparent 100%)',

            // SWITCHED UP/DOWN 2 RISE: Graceful surfacing with wavy orbital motion
            'radial-gradient(ellipse 62% 82% at 98% 72%, rgba(255,90,120,0.76) 0%, transparent 80%), radial-gradient(ellipse 62% 82% at 2% 28%, rgba(120,190,235,0.76) 0%, transparent 80%), radial-gradient(ellipse 326% 166% at 50% 50%, rgba(255,255,255,0.96) 0%, rgba(248,250,255,0.92) 82%, transparent 100%)',

            // SWITCHED UP/DOWN 2 SETTLE: Flowing return to baseline with gentle curve
            'radial-gradient(ellipse 56% 76% at 96% 58%, rgba(255,98,128,0.73) 0%, transparent 82%), radial-gradient(ellipse 56% 76% at 4% 42%, rgba(128,198,243,0.73) 0%, transparent 82%), radial-gradient(ellipse 320% 163% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(249,250,255,0.90) 81%, transparent 100%)',

            // RETURN SWITCH START: Red moves down and left, Blue moves up and right - smooth separation
            'radial-gradient(ellipse 58% 78% at 75% 60%, rgba(255,100,130,0.72) 0%, transparent 83%), radial-gradient(ellipse 58% 78% at 25% 40%, rgba(130,200,245,0.72) 0%, transparent 83%), radial-gradient(ellipse 315% 162% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(249,251,255,0.89) 81%, transparent 100%)',

            // RETURN SWITCH MID: Red below center, Blue above center - over/under positioning
            'radial-gradient(ellipse 56% 76% at 50% 70%, rgba(255,105,135,0.71) 0%, transparent 84%), radial-gradient(ellipse 56% 76% at 50% 30%, rgba(135,206,250,0.71) 0%, transparent 84%), radial-gradient(ellipse 310% 155% at 50% 50%, rgba(255,255,255,0.93) 0%, rgba(249,250,255,0.88) 80%, transparent 100%)',

            // RETURN SWITCH END: Red completes move to left and up, Blue to right and down
            'radial-gradient(ellipse 54% 74% at 25% 40%, rgba(255,100,130,0.72) 0%, transparent 83%), radial-gradient(ellipse 54% 74% at 75% 60%, rgba(130,200,245,0.72) 0%, transparent 83%), radial-gradient(ellipse 308% 156% at 50% 50%, rgba(255,255,255,0.94) 0%, rgba(249,250,255,0.90) 80%, transparent 100%)',

            // RETURN TO START: Perfect loop back to beginning
            'radial-gradient(ellipse 50% 70% at 5% 45%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 50% 70% at 95% 55%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 17.0,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          times: [
            0, 0.04, 0.08, 0.12, 0.16, 0.2, 0.24, 0.28, 0.32, 0.36, 0.4, 0.44, 0.48, 0.52, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.84, 0.88, 0.92, 0.96, 1.0,
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
