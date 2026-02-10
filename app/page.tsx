import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectPortfolio } from "@/components/project-portfolio"
import { RoadJourney } from "@/components/road-journey"
import { ContactFooter } from "@/components/contact-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" role="main">
      <HeroSection />
      <AboutSection />
      <hr className="border-border max-w-6xl mx-auto" />
      <ProjectPortfolio />
      <hr className="border-border max-w-6xl mx-auto" />
      <RoadJourney />
      <hr className="border-border max-w-6xl mx-auto" />
      <ContactFooter />
    </main>
  )
}
