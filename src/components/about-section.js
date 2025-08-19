'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Optional helper (not used in the new reveal) */
function FadeFrom({ children, direction = 'up', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })
  const map = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...map[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  // HERO
  const heroRef = useRef(null)
  const heroImgRef = useRef(null)
  const heroTaglineRef = useRef(null)
  const heroOverlayRef = useRef(null)

  // PROBLEM (focus on text)
  const problemSectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const titleWrapRef = useRef(null)
  const paraRef = useRef(null)
  const underlineRef = useRef(null)
  const vignetteRef = useRef(null) // soft spotlight behind text
  const imgWrapRef = useRef(null)
  const imgDimRef = useRef(null) // dim overlay over image

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ----- HERO: pin ~2x scroll, zoom, fade tagline, fade video & overlay -----
      if (heroRef.current && heroImgRef.current && heroTaglineRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: true,
            pin: true,
          },
        })

        tl.to(heroImgRef.current, { scale: 1.6, ease: 'none' }, 0)
          .to(heroTaglineRef.current, { opacity: 0, y: -40, ease: 'none' }, 0)
          .to(heroImgRef.current, { opacity: 0, duration: 0.6, ease: 'none' }, 0.65)
          .to(heroOverlayRef.current, { opacity: 0, duration: 0.6, ease: 'none' }, 0.65)
      }

      // ----- PROBLEM: spotlight the statement (pin + word reveal + underline) -----
      if (problemSectionRef.current) {
        const words = gsap.utils.toArray('.problem-title-word')

        // initial states
        gsap.set([eyebrowRef.current], { opacity: 0, y: 16 })
        gsap.set(words, { opacity: 0, y: 36, filter: 'blur(6px)' })
        if (paraRef.current) gsap.set(paraRef.current, { opacity: 0, y: 20 })
        gsap.set(underlineRef.current, { scaleX: 0, transformOrigin: '0% 50%' })
        gsap.set(vignetteRef.current, { opacity: 0 })
        if (imgDimRef.current) gsap.set(imgDimRef.current, { opacity: 0 })
        if (imgWrapRef.current)
          gsap.set(imgWrapRef.current, { filter: 'grayscale(100%) brightness(0.8)' })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: problemSectionRef.current,
            start: 'top top',
            end: '+=160%',
            scrub: true,
            pin: true,
          },
        })

        tl.to(vignetteRef.current, { opacity: 1, duration: 0.4, ease: 'power1.out' }, 0.0)
          .to(imgDimRef.current, { opacity: 0.55, duration: 0.4, ease: 'power1.out' }, 0.0)
          .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, 0.05)
          .to(
            words,
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.55,
              ease: 'power3.out',
              stagger: 0.06,
            },
            0.12
          )
          .to(underlineRef.current, { scaleX: 1, duration: 0.5, ease: 'power3.out' }, 0.22)

        if (paraRef.current) {
          tl.to(paraRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 0.3)
        }

        // optional gentle ease back near the end (keeps focus but relaxes slightly)
        tl.to(imgDimRef.current, { opacity: 0.45, duration: 0.5, ease: 'none' }, 0.8).to(
          vignetteRef.current,
          { opacity: 0.9, duration: 0.5, ease: 'none' },
          0.8
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const problemTitle =
    'The U.S. relies on imported cathode active material (CAM) — the most critical and costly component of lithium-ion batteries — creating a fragile and insecure supply chain'

  return (
    <main id="about" className="bg-white text-[#0B1220]">
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <div ref={heroImgRef} className="absolute inset-0 will-change-transform">
          <video
            src="/battery_tech.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Overlay (fades out with the video) */}
        <div ref={heroOverlayRef} className="absolute inset-0 bg-black/30" />

        {/* Tagline */}
        <div
          ref={heroTaglineRef}
          className="relative z-10 h-full flex items-center justify-center text-center px-6 text-white"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-semibold"
            >
              Powering the Future with Advanced Cathodes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-4 text-lg md:text-2xl text-gray-200"
            >
              High performance. Built in the U.S. Designed for energy independence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT (pinned, text spotlight) */}
      <section ref={problemSectionRef} className="relative w-full bg-white text-[#0B1220]">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text (spotlighted) */}
            <div className="relative">
              {/* soft vignette behind text */}
              <div
                ref={vignetteRef}
                className="pointer-events-none absolute -inset-6 rounded-3xl blur-xl opacity-0
                           bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.55)_45%,rgba(255,255,255,0)_75%)]"
                style={{ zIndex: 0 }}
              />
              <div ref={titleWrapRef} className="relative z-10">
                <p
                  ref={eyebrowRef}
                  className="text-xs uppercase tracking-widest text-gray-500 mb-3"
                >
                  The Problem
                </p>

                {/* Title split to words for staggered reveal */}
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  {problemTitle.split(' ').map((w, i) => (
                    <span key={i} className="problem-title-word inline-block mr-2">
                      {w}
                    </span>
                  ))}
                </h2>

                {/* underline that grows */}
                <span
                  ref={underlineRef}
                  className="mt-3 block h-[3px] w-full bg-[#0B1220]/80 rounded-full origin-left"
                />

                {/* Optional paragraph — if you re-enable it, it will fade in too */}
                {/* <p ref={paraRef} className="mt-4 text-base md:text-lg text-gray-700">
                  Traditional cathode production is concentrated overseas. Building resilient U.S.
                  capacity shortens supply lines and reduces systemic risk.
                </p> */}
              </div>
            </div>

            {/* RIGHT: Image (dimmed to keep focus on text) */}
            <div ref={imgWrapRef} className="relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-gradient-to-br from-slate-50 to-sky-50">
                <Image
                  src="/about/problem_1.png"
                  alt="Global supply routes"
                  fill
                  className="object-cover"
                  priority={false}
                />
                {/* dim overlay that increases during the text focus */}
                <div ref={imgDimRef} className="absolute inset-0 bg-white opacity-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
