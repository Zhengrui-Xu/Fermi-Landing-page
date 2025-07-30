'use client'

import { useState } from 'react'
import { Menu, X, Search, Sun, Moon, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function MagicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const navigation = [
    { name: 'Docs', href: '#docs' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo Section */}
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2 py-1" href="/">
            <div className="h-8 w-8 relative">
              <Image
                src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
                alt="Fermi Energy Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="hidden font-bold md:inline-block tracking-tight text-xl">
              Fermi Energy
            </span>
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden text-foreground hover:bg-accent hover:text-accent-foreground">
              Pro
            </span>
          </a>
          <nav className="hidden items-center space-x-6 text-sm font-medium xl:flex">
            {navigation.map(item => (
              <a
                key={item.name}
                className="flex items-center justify-center transition-colors hover:text-foreground/80 text-foreground/60"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
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

        {/* Right Side - Search and Actions */}
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          {/* Search */}
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button className="inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
              <span className="hidden lg:inline-flex">Search documentation...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Actions */}
          <nav className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-9 px-2"
              type="button"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <Moon className="size-[1.2rem]" /> : <Sun className="size-[1.2rem]" />}
            </button>

            {/* Login Button */}
            <a
              className="items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 rounded-xl text-xs px-4 hidden md:flex"
              href="/login"
            >
              Login
            </a>

            {/* Animated CTA Button */}
            <div className="relative group">
              {/* Animated border background */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#B31942] via-purple-500 to-[#0A3161] opacity-75 animate-gradient-x group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B31942] via-purple-500 to-[#0A3161] animate-gradient-x" />
              
              <a
                className="relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-white h-8 rounded-xl px-3 text-xs bg-black hover:bg-black/90 group-hover:scale-105"
                href="#pricing"
              >
                <div className="inline md:hidden">Get Access</div>
                <div className="hidden md:inline">Get Unlimited Access</div>
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </nav>
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-6 w-6">
                  <Image
                    src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
                    alt="Fermi Energy Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-lg">Fermi Energy</span>
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium">
                  Pro
                </span>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-3">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
