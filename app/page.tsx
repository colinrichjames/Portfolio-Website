import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { RoadJourney } from "@/components/road-journey"
import { AcademicCore } from "@/components/academic-core"
import { ProjectPortfolio } from "@/components/project-portfolio"
import { ContactFooter } from "@/components/contact-footer"
import { SectionDots } from "@/components/section-dots"
import { PageLoader } from "@/components/page-loader"

export default function Home() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-background" role="main">
        <SectionDots />
        <HeroSection />
        <AboutSection />
        <RoadJourney />
        <AcademicCore />
        <ProjectPortfolio />
        <ContactFooter />
      </main>
    </PageLoader>
  )
}
