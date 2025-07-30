'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function CleanNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'About Us', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <section className="absolute top-5 left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-full border bg-background/70 backdrop-blur-md lg:top-8">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <div className="w-10 h-10">
            <Image
              src="/LogoFinal/ONLY LOGO svgs/Only_Logo_High.svg"
              alt="Fermi Energy Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5">
          <Button variant="outline" className="hidden lg:inline-flex">
            Login
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="relative flex size-8 text-muted-foreground lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 ease-in-out lg:hidden mx-[5%] max-w-[90%]"
          >
            <nav className="flex flex-1 flex-col divide-y divide-border">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-4 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
