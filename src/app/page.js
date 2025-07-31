import MagicNavbar from '@/components/magic-navbar'
import Hero from '@/components/hero'
import Section from '@/components/section'

export default function Home() {
  return (
    <>
      <MagicNavbar />
      <Hero />

      <Section id="about" className="bg-accent/5">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Fermi Energy</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are at the forefront of energy innovation, developing cutting-edge solutions that
            harness the power of quantum mechanics and advanced materials science.
          </p>
        </div>
      </Section>

      <Section id="services">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From quantum energy research to sustainable power solutions, we provide comprehensive
            energy services for the future.
          </p>
        </div>
      </Section>

      <Section id="technology" className="bg-accent/5">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Technology</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proprietary technology stack includes quantum processors, advanced battery systems,
            and AI-driven energy optimization algorithms.
          </p>
        </div>
      </Section>

      <Section id="contact">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to power your future? Get in touch with our team of energy experts.
          </p>
        </div>
      </Section>
    </>
  )
}
