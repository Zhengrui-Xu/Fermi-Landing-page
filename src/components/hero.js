'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
            // 0% - START/END: Red left, Blue right baseline with gentle wave
            'radial-gradient(ellipse 51% 71% at 4% 47%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 49% 69% at 96% 53%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // First breathing cycle - Wavy float up with left drift
            'radial-gradient(ellipse 66% 87% at 1% 9%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 64% 93% at 99% 91%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 328% 172% at 51% 49%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // First breathing cycle - Wavy float down with right drift
            'radial-gradient(ellipse 64% 89% at 9% 91%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 66% 91% at 91% 9%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 332% 178% at 49% 51%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Second breathing cycle - Wave up with center drift
            'radial-gradient(ellipse 67% 88% at 3% 8%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 63% 92% at 97% 92%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 325% 168% at 52% 48%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Second breathing cycle - Wave down with side drift
            'radial-gradient(ellipse 63% 86% at 7% 92%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 67% 94% at 93% 8%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 338% 182% at 48% 52%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Third breathing cycle - Pronounced wave up with left curve
            'radial-gradient(ellipse 69% 91% at 0% 7%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 61% 89% at 100% 93%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 53% 47%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Third breathing cycle - Graceful wave down with right curve
            'radial-gradient(ellipse 61% 88% at 10% 93%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 69% 92% at 90% 7%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 334% 179% at 47% 53%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // SWITCH - Orbital exchange with floating S-curve
            'radial-gradient(ellipse 49% 69% at 96% 53%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 51% 71% at 4% 47%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // Fourth breathing cycle (switched) - Wavy float up with right drift
            'radial-gradient(ellipse 64% 93% at 99% 9%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 66% 87% at 1% 91%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 332% 178% at 49% 51%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fourth breathing cycle (switched) - Floating wave down with left drift
            'radial-gradient(ellipse 66% 91% at 91% 91%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 64% 89% at 9% 9%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 328% 172% at 51% 49%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fifth breathing cycle (switched) - Wave up with center drift
            'radial-gradient(ellipse 63% 92% at 97% 8%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 67% 88% at 3% 92%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 325% 168% at 48% 52%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fifth breathing cycle (switched) - Organic wave down with side drift
            'radial-gradient(ellipse 67% 94% at 93% 92%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 63% 86% at 7% 8%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 338% 182% at 52% 48%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Sixth breathing cycle (switched) - Final wave up with right curve
            'radial-gradient(ellipse 61% 89% at 100% 7%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 69% 91% at 0% 93%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 47% 53%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Sixth breathing cycle (switched) - Return wave down with left curve
            'radial-gradient(ellipse 69% 92% at 90% 93%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 61% 88% at 10% 7%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 334% 179% at 53% 47%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // RETURN TO START - Perfect wavy S-curve loop back to beginning
            'radial-gradient(ellipse 51% 71% at 4% 47%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 49% 69% at 96% 53%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',
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
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="text-center max-w-6xl px-2">
            <div className="hero-title">
              <h1 className="text-black font-medium leading-relaxed mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl normal-case">
                <div className="mb-4">High-Performance Cathode Active Materials</div>
                <div>Made in the U.S. for Tomorrow&apos;s Batteries</div>
              </h1>
            </div>

            <div className="hero-buttons mt-8 md:mt-16">
              <Button
                size="default"
                className="group btn-text bg-us-flag-blue hover:bg-us-flag-red text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => {
                  document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore Our Breakthrough
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
