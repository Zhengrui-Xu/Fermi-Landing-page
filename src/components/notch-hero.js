'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useGSAP } from '@/hooks/useGSAP'

export default function NotchHero() {
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
          '.hero-stats',
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.2'
        )
        .from(
          '.hero-visual',
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
      style={{
        background: 'linear-gradient(135deg, #fafafa 0%, #f8fafc 50%, #f1f5f9 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Main Gradient Orbs */}
        <motion.div
          className="absolute"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(179,25,66,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          className="absolute"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            top: '60%',
            right: '15%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(10,49,97,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#B31942]/20 to-[#0A3161]/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'linear',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                ✨ Now Live: Advanced Energy Solutions
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="hero-title">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#B31942] to-[#0A3161] bg-clip-text text-transparent">
                  Next-Gen
                </span>
                <br />
                <span className="text-gray-900">Energy Solutions</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="hero-subtitle">
              <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">
                Revolutionizing power systems with quantum-enhanced efficiency and sustainable
                innovation
              </p>
            </div>

            {/* Description */}
            <div className="hero-description">
              <p className="text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10">
                Experience the future of energy with our cutting-edge quantum processors, advanced
                battery systems, and AI-driven optimization algorithms that deliver unparalleled
                performance and sustainability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#B31942] to-[#0A3161] hover:from-[#A01638] hover:to-[#08285A] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-50"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="hero-stats grid grid-cols-3 gap-8 text-center lg:text-left">
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#B31942] to-[#0A3161] bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm text-gray-500 font-medium">Uptime</div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#B31942] to-[#0A3161] bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-gray-500 font-medium">Active Users</div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#B31942] to-[#0A3161] bg-clip-text text-transparent">
                  85%
                </div>
                <div className="text-sm text-gray-500 font-medium">Energy Saved</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative bg-white/60 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-8 shadow-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
                  boxShadow:
                    '0 20px 60px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)',
                }}
              >
                {/* Card Content */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#B31942] to-[#0A3161] rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Energy Dashboard</h3>
                        <p className="text-sm text-gray-500">Real-time monitoring</p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50/50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="w-4 h-4 text-[#B31942]" />
                        <span className="text-sm font-medium text-gray-700">Efficiency</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">94.2%</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-gradient-to-r from-[#B31942] to-[#0A3161] h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '94%' }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>
                    </div>
                    <div className="bg-gray-50/50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Cpu className="w-4 h-4 text-[#0A3161]" />
                        <span className="text-sm font-medium text-gray-700">Performance</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">8.7x</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-gradient-to-r from-[#0A3161] to-[#B31942] h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '87%' }}
                          transition={{ duration: 2, delay: 1.5 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-gray-50/50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-700">Energy Output</span>
                      <span className="text-xs text-gray-500">Last 24h</span>
                    </div>
                    <div className="h-20 flex items-end space-x-1">
                      {[40, 65, 45, 80, 60, 95, 70, 85].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#B31942]/60 to-[#0A3161]/60 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 2 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#B31942] to-[#0A3161] rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Shield className="w-6 h-6 text-[#0A3161]" />
                </motion.div>
              </motion.div>

              {/* Background Decorations */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-[#B31942]/10 to-[#0A3161]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-[#0A3161]/10 to-[#B31942]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400/60 rounded-full flex justify-center cursor-pointer hover:border-gray-600 transition-colors">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-[#B31942] to-[#0A3161] rounded-full mt-2"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
