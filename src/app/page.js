import MagicNavbar from '@/components/magic-navbar'
import Hero from '@/components/hero'
import Section from '@/components/section'
import { ContactSection } from '@/components/contact-section'
import {NewsSection} from '@/components/news-section'
import {Team} from '@/components/team-section'
import About from '@/components/about-section'


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
      <About/>
     

     <Team/>

      {/* <Section id="news" className="bg-accent/5">
        <div className="text-center">
          <h2 className="text-foreground mb-6">Latest News</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest breakthroughs, research developments, and industry
            partnerships in the world of advanced energy technology.
          </p>
        </div>
      </Section> */}
      <NewsSection/>

      <ContactSection />
    </>
  )
}
