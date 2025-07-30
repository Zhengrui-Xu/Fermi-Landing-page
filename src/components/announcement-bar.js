'use client'

import { useState } from 'react'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#B31942] to-[#0A3161] text-white"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                className="flex items-center space-x-2 text-sm font-medium"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
                <span>✨ New Feature Released: Advanced Analytics Dashboard</span>
                <motion.div
                  className="flex items-center space-x-1 text-white/80 hover:text-white cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xs">Learn more</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </motion.div>
            </div>
            <motion.button
              onClick={() => setIsVisible(false)}
              className="p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
