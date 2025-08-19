'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function MagicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        scrolled
          ? 'border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-lg'
          : 'bg-transparent border-transparent'
      )}
    >
      <div
        className={cn(
          'container flex items-center justify-between transition-all duration-500',
          scrolled ? 'h-16' : 'h-28'
        )}
      >
        {/* Logo Section - Left */}
        <div className="flex">
          <a className="flex items-center space-x-4 py-1" href="/">
            <div
              className={cn(
                'relative transition-all duration-500',
                scrolled ? 'h-12 w-12' : 'h-24 w-24'
              )}
            >
              <Image
                src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
                alt="Fermi Energy Logo"
                width={96}
                height={96}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <div
              className={cn(
                'relative transition-all duration-500',
                scrolled ? 'h-10 w-auto' : 'h-20 w-auto'
              )}
            >
              <Image
                src="/LogoFinal/TextLogo/text_logo_mid.svg"
                alt="Fermi Energy"
                width={400}
                height={80}
                priority
                className="h-full w-auto object-contain"
              />
            </div>
          </a>
        </div>

        {/* Navigation Links - Right */}
        <div className="flex items-center space-x-8">
          <nav className="hidden items-center space-x-8 lg:flex">
            {navigation.map(item => (
              <a
                key={item.name}
                className="nav-link transition-colors hover:text-foreground/80 text-foreground/60"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur"
          >
            <div className="container py-4">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
                    alt="Fermi Energy Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-10 w-auto relative">
                  <Image
                    src="/LogoFinal/TextLogo/text_logo_mid.svg"
                    alt="Fermi Energy"
                    width={200}
                    height={40}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    className="nav-link transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
