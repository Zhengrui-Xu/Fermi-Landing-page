'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ---------------- Person card ---------------- */
const PersonCard = ({ person }) => {
  return (
    <div className="person-card w-full h-full flex flex-col rounded-[24px] shadow-md overflow-hidden bg-transparent">
      <div className="relative w-full aspect-[4/5]">
        <Image
          src={person.img}
          alt={person.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-[24px]"
        />
      </div>

      <div className="bg-[#F0EFEB] rounded-b-[24px] p-3">
        <div className="text-subtitle text-[#0a3161]">{person.name}</div>
        <div className="mt-1 text-body-small text-[#0a3161] opacity-80">{person.role}</div>
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-2"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" className="fill-[#0A66C2]" />
              <path
                d="M9.4 17.5H7.2V9.8h2.2v7.7ZM8.3 8.8c-.7 0-1.2-.5-1.2-1.1s.5-1.1 1.2-1.1 1.2.5 1.2 1.1-.5 1.1-1.2 1.1Zm10.5 8.7h-2.2v-3.7c0-1.1-.4-1.9-1.4-1.9-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v3.8h-2.2V9.8h2.1v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 2.8 1.1 2.8 3.3v4.6Z"
                className="fill-white"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

/* ---------------- Investor card ---------------- */
const InvestorCard = ({ img }) => {
  return (
    <div className="w-full h-full rounded-[24px] bg-[#F2F3F5] shadow-sm p-6 flex items-center justify-center">
      <Image
        src={img}
        alt="Investor"
        width={200}
        height={64}
        className="w-full h-14 md:h-16 object-contain"
        style={{ width: 'auto' }}
      />
    </div>
  )
}

export const Team = () => {
  const investorTrackRef = useRef(null)

  // Reveal animation for person cards
  useEffect(() => {
    const triggers = []
    const animations = []

    gsap.utils.toArray('.person-card').forEach((card, i) => {
      const anim = gsap.fromTo(
        card,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          delay: i * 0.06,
          scrollTrigger: { trigger: card, start: 'top 90%', once: true },
        }
      )
      animations.push(anim)
      if (anim.scrollTrigger) triggers.push(anim.scrollTrigger)
    })

    return () => {
      animations.forEach(anim => anim.kill())
      triggers.forEach(trigger => trigger.kill())
    }
  }, [])

  // Auto-scroll investors
  useEffect(() => {
    const track = investorTrackRef.current
    if (!track) return

    let isScrolling = false
    let rafId

    const speedPxPerFrame = 1.25

    const step = () => {
      if (isScrolling) {
        track.scrollLeft += speedPxPerFrame
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
          track.scrollLeft = 0
        }
      }
      rafId = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isScrolling = entry.isIntersecting
      },
      { threshold: 0.1 }
    )

    observer.observe(track)
    rafId = requestAnimationFrame(step)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  const FOUNDERS = [
    {
      name: 'Zhengrui "Ray" Xu',
      role: 'Co-founder and CEO',
      img: '/team/founders/Zhengrui_Ray_Xu.webp',
      linkedin: 'https://www.linkedin.com/in/zhengrui-xu/',
    },
    {
      name: 'Feng Lin',
      role: 'Co-founder and CTO',
      img: '/team/founders/Feng_Lin.webp',
      linkedin: 'https://www.linkedin.com/in/feng-lin-34108825/',
    },
  ]
  const ADVISORS = [
    {
      name: 'Richard Delmerico',
      role: 'Advisor',
      img: '/team/advisors/Richard_Delmerico_advisor.webp',
      linkedin: 'https://www.linkedin.com/in/rdelmerico/',
    },
    {
      name: 'Dr. Marca Doeff',
      role: 'Advisor',
      img: '/team/advisors/Marca_Doeff_advisor.webp',
      linkedin: 'https://www.linkedin.com/in/marca-doeff-445677/',
    },
    {
      name: 'Scott Tudman',
      role: 'Advisor',
      img: '/team/advisors/Scott_Tudman_advisor.webp',
      linkedin: 'https://www.linkedin.com/in/scott-tudman/',
    },
  ]
  const INVESTORS = [
    '/team/investors/ARPAE.webp',
    '/team/investors/DOE_EERE.jpeg',
    '/team/investors/activate.webp',
    '/team/investors/NENY.jpg',
    '/team/investors/DOE_SBIR.png',
    '/team/investors/NSF.png',
    '/team/investors/NextCorp.webp',
    '/team/investors/VIPC.png',
  ]

  return (
    <>
      {/* Background section */}
      <section id="team" className="bg-white">
        {/* Hero Subsection */}
        <div className="bg-fermi-gradient py-24 px-6 text-white">
          <div className="min-h-[12rem] sm:min-h-[16rem] flex items-center justify-center">
            <div>
              <h1 className="text-display text-center">Our Team</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24 px-6">
        {/* Founders */}
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8 mb-10 md:mb-14">
          <div className="text-center mb-8">
            <h3 className="text-title">Meet The Founders</h3>
          </div>
        </div>

        <div
          className="
            mx-auto w-full max-w-5xl px-6 md:px-8 mb-28
            [--card-w:260px]
            grid grid-cols-1 md:grid-cols-2 place-items-center justify-center
            gap-y-16 lg:gap-y-24
            gap-x-14 lg:gap-x-20
          "
        >
          {FOUNDERS.map((p, i) => (
            <div key={`founder-${i}`} className="w-[var(--card-w)]">
              <PersonCard person={p} />
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8 mb-10 md:mb-14">
          <div className="text-center mb-8">
            <h3 className="text-title">Meet The Advisors</h3>
          </div>
        </div>

        <div
          className="
            mx-auto w-full max-w-7xl px-6 md:px-8 mb-28
            [--card-w:260px]
            grid grid-cols-1 md:grid-cols-3 place-items-center
            gap-y-16 lg:gap-y-24
            gap-x-14 lg:gap-x-20
          "
        >
          {ADVISORS.map((p, i) => (
            <div key={`advisor-${i}`} className="w-[var(--card-w)]">
              <PersonCard person={p} />
            </div>
          ))}
        </div>

        {/* Investors */}
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8 mb-10 md:mb-14">
          <div className="text-center mb-8">
            <h3 className="text-title">Supported By</h3>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FCF9FF] to-transparent z-10" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FCF9FF] to-transparent z-10" />

            {/* Track */}
            <div ref={investorTrackRef} className="overflow-hidden py-6">
              <div className="flex gap-10 md:gap-16">
                {INVESTORS.concat(INVESTORS).map((img, i) => (
                  <div
                    key={`investor-${i}`}
                    className="shrink-0 basis-1/4 flex items-center justify-center"
                  >
                    <Image
                      src={img}
                      alt={`Investor ${i + 1}`}
                      width={220}
                      height={70}
                      className="h-14 md:h-16 object-contain"
                      style={{ width: 'auto' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
