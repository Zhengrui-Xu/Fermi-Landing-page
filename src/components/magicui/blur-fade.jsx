'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = 'down',
  inView = false,
  inViewMargin = '-50px',
  blur = '6px',
  ...props
}) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = !inView || inViewResult
  const defaultVariants = {
    hidden: {
      y: direction === 'down' ? offset : direction === 'up' ? -offset : 0,
      x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
      opacity: 0,
      filter: `blur(${blur})`,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      filter: `blur(0px)`,
    },
  }
  const combinedVariants = variant || defaultVariants
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: 'easeOut',
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
