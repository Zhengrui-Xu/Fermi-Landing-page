'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Zap, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Floating Modern Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-6"
      >
        <motion.div
          className={`relative transition-all duration-700 ease-out ${
            scrolled
              ? 'bg-white/20 backdrop-blur-3xl border border-white/30 shadow-2xl shadow-black/20'
              : 'bg-white/15 backdrop-blur-2xl border border-white/20 shadow-xl shadow-black/10'
          } rounded-[2rem] overflow-hidden`}
          style={{
            background: scrolled
              ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
          }}
        >
          {/* Dynamic Background Effect */}
          <div
            className="absolute inset-0 opacity-30 transition-all duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(179, 25, 66, 0.1) 0%, transparent 50%)`,
            }}
          />

          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />

          <div className="relative flex justify-between items-center px-8 py-6">
            {/* Enhanced Logo Section */}
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#B31942]/30 to-[#0A3161]/30 rounded-full blur-xl scale-150" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#B31942]/20 to-[#0A3161]/20 rounded-full blur-lg scale-125" />

                <div className="relative w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl p-2.5 shadow-lg border border-white/40">
                  <Image
                    src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
                    alt="Fermi Energy Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-[#B31942] to-[#0A3161] bg-clip-text text-transparent">
                  Fermi Energy
                </span>
                <span className="text-xs text-gray-600/80 font-medium -mt-1">
                  Turn feedback into Growth
                </span>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-6 py-3 text-sm font-semibold text-gray-700 hover:text-[#B31942] transition-all duration-300 rounded-2xl group"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Multi-layer hover effects */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-all duration-300 backdrop-blur-sm" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B31942]/10 to-[#0A3161]/10 rounded-2xl scale-0 group-hover:scale-100 transition-all duration-300 delay-75" />

                  {/* Active dot indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-[#B31942] to-[#0A3161] rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Notification Bell */}
              <motion.button
                className="relative p-3 text-gray-600 hover:text-[#B31942] transition-colors duration-300 rounded-2xl hover:bg-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#B31942] rounded-full border-2 border-white"></span>
              </motion.button>

              {/* Premium CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button className="relative bg-gradient-to-r from-[#B31942] to-[#0A3161] hover:from-[#a91539] hover:to-[#072442] text-white font-bold px-8 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-white/20">
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                  <span className="relative flex items-center">
                    <Zap className="mr-2 h-4 w-4" />
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-2xl text-gray-700 hover:text-[#B31942] hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="lg:hidden mt-6"
            >
              <div className="bg-white/20 backdrop-blur-3xl border border-white/30 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
                <div className="px-8 py-6 space-y-2">
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-6 py-4 text-base font-semibold text-gray-700 hover:text-[#B31942] hover:bg-white/20 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  <div className="pt-6 border-t border-white/20">
                    <Button
                      className="w-full bg-gradient-to-r from-[#B31942] to-[#0A3161] hover:from-[#a91539] hover:to-[#072442] text-white font-bold py-4 rounded-2xl shadow-lg group"
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

      {/* Spacer */}
      <div className="h-44" />
    </>
  )
}
