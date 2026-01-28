import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectPortfolio } from "@/components/project-portfolio"
import { RoadJourney } from "@/components/road-journey"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" role="main">
      <HeroSection />
      <AboutSection />
      <ProjectPortfolio />
      <RoadJourney />
      <ContactSection />
    </main>
  )
}
