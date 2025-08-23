import { lazy, Suspense } from 'react'
import MagicNavbar from '@/components/magic-navbar'
import Hero from '@/components/hero'
import Section from '@/components/section'

// Lazy load components below the fold for better performance
const ProblemsParallaxV2 = lazy(() => import('@/components/problems-parallax-v2'))
const ContactSection = lazy(() =>
  import('@/components/contact-section').then(module => ({ default: module.ContactSection }))
)
const NewsSection = lazy(() =>
  import('@/components/news-section').then(module => ({ default: module.NewsSection }))
)
const Team = lazy(() =>
  import('@/components/team-section').then(module => ({ default: module.Team }))
)
const About = lazy(() => import('@/components/about-section'))

export default function Home() {
  return (
    <>
      <MagicNavbar />
      <Hero />

      {/* <Section id="about" className="bg-accent/5">
        <div className="text-center">
          <h2 className="text-foreground mb-6">About Fermi Energy</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are at the forefront of energy innovation, developing cutting-edge solutions that
            harness the power of quantum mechanics and advanced materials science.
          </p>
        </div>
      </Section> */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-us-flag-blue mx-auto mb-4"></div>
              <p className="text-gray-600">Loading...</p>
            </div>
          </div>
        }
      >
        <About />
      </Suspense>

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-us-flag-blue mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          </div>
        }
      >
        <ProblemsParallaxV2 />
      </Suspense>

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-us-flag-blue mx-auto mb-4"></div>
              <p className="text-gray-600">Loading team...</p>
            </div>
          </div>
        }
      >
        <Team />
      </Suspense>

      {/* <Section id="news" className="bg-accent/5">
        <div className="text-center">
          <h2 className="text-foreground mb-6">Latest News</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest breakthroughs, research developments, and industry
            partnerships in the world of advanced energy technology.
          </p>
        </div>
      </Section> */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-us-flag-blue mx-auto mb-4"></div>
              <p className="text-gray-600">Loading news...</p>
            </div>
          </div>
        }
      >
        <NewsSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-us-flag-blue mx-auto mb-4"></div>
              <p className="text-gray-600">Loading contact...</p>
            </div>
          </div>
        }
      >
        <ContactSection />
      </Suspense>
    </>
  )
}
