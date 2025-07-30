'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotchNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'About Us', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Main Notch Navbar */}
      {/* Big Logo - Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-8 left-8 z-50"
      >
        <Link href="/" className="block group">
          <div className="relative w-24 h-24 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
              alt="Fermi Energy"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </Link>
      </motion.div>

      {/* Notch Navbar - Right Side */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 right-8 z-50 transition-all duration-500 ${
          scrolled ? 'mt-4 w-auto' : 'mt-6 w-auto'
        }`}
      >
        <div
          className={`relative bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-2xl transition-all duration-500 ${
            scrolled ? 'rounded-[28px] px-6 py-3' : 'rounded-[32px] px-8 py-4'
          }`}
          style={{
            background: scrolled
              ? 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(250,250,250,0.8) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
              : '0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation - No Logo */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-full group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gray-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 rounded-full transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 rounded-full transition-all duration-300"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* CTA Button */}
              <div className="hidden sm:block">
                <Button
                  size="sm"
                  className="relative bg-gradient-to-r from-[#B31942] to-[#0A3161] hover:from-[#A01638] hover:to-[#08285A] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Get Started
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 rounded-full transition-all duration-300"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-24 right-8 w-80 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-3xl shadow-2xl z-50 lg:hidden overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
                boxShadow:
                  '0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
              }}
            >
              <div className="p-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-1 mb-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-300 font-medium"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-[#B31942] to-[#0A3161] hover:from-[#A01638] hover:to-[#08285A] text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Button>
                </motion.div>

                {/* Mobile Actions */}
                <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-gray-200/60">
                  <button className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-300">
                    <Search className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 rounded-xl transition-all duration-300"
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
