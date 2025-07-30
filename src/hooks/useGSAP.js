'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAP(animation, dependencies = []) {
  const ref = useRef()

  // Memoize the animation function to prevent unnecessary re-renders
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedAnimation = useCallback(animation, [animation, ...dependencies])

  useEffect(() => {
    if (ref.current && typeof memoizedAnimation === 'function') {
      const ctx = gsap.context(() => {
        memoizedAnimation(ref.current)
      }, ref)

      return () => ctx.revert()
    }
  }, [memoizedAnimation])

  return ref
}
