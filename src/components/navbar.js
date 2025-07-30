'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import NavbarParticles from './navbar-particles'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { name: 'Platform', href: '#platform' },
    { name: 'Product', href: '#product' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Company', href: '#company' },
    { name: 'Use Cases', href: '#use-cases' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Modern Notch Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6"
      >
        <div
          className={`relative transition-all duration-500 ease-out ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border border-gray-200/60 shadow-2xl shadow-black/10'
              : 'bg-white/80 backdrop-blur-lg border border-gray-200/40 shadow-xl shadow-black/5'
          } rounded-3xl overflow-hidden`}
        >
          {/* Animated Background Particles */}
          <NavbarParticles />

          {/* Gradient overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/70 pointer-events-none" />

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#B31942]/5 via-transparent to-[#0A3161]/5 pointer-events-none" />

          <div className="relative flex justify-between items-center px-8 py-5">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                {/* Glow effect around logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#B31942]/20 to-[#0A3161]/20 rounded-full blur-md" />
                <div className="relative w-full h-full bg-white rounded-full p-2 shadow-lg">
                  <Image
                    src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
                    alt="Fermi Energy Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-[#B31942] to-[#0A3161] bg-clip-text text-transparent">
                  Fermi Energy
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1">
                  Turn feedback into Growth
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-3 text-sm font-medium text-gray-700 hover:text-[#B31942] transition-all duration-300 rounded-2xl group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B31942]/8 to-[#0A3161]/8 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  {/* Active indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-[#B31942] to-[#0A3161] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button className="relative bg-gradient-to-r from-[#B31942] to-[#0A3161] hover:from-[#9d1538] hover:to-[#082647] text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B31942] to-[#0A3161] opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                  <span className="relative flex items-center">
                    <Zap className="mr-2 h-4 w-4" />
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-2xl text-gray-700 hover:text-[#B31942] hover:bg-gray-100/60 transition-all duration-300 backdrop-blur-sm"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden mt-4"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-3xl shadow-2xl shadow-black/10 overflow-hidden">
                <div className="px-8 py-6 space-y-2">
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-5 py-4 text-base font-medium text-gray-700 hover:text-[#B31942] hover:bg-gradient-to-r hover:from-[#B31942]/8 hover:to-[#0A3161]/8 rounded-2xl transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <div className="pt-6 border-t border-gray-200/60">
                    <Button
                      className="w-full bg-gradient-to-r from-[#B31942] to-[#0A3161] hover:from-[#9d1538] hover:to-[#082647] text-white font-semibold py-4 rounded-2xl shadow-lg group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-40" />
    </>
  )
}
