"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CarIcon } from "./car-icon"
import { PitStopCard } from "./pit-stop-card"

const pitStops = [
  {
    city: "Seattle",
    title: "Engineering Product Lead",
    institute: "AT&T",
    date: "2024 - Present",
    description:
      "Product Owner and Strategic Lead for the Unified Front Door (UFD) ecosystem. I orchestrate cross-functional teams across Engineering, DevOps, and Data Science to manage the intake lifecycle for 16,000+ users. While leading without direct reports, I define the product vision, set the technical tone for our SDLC, and bridge the gap between 6+ stakeholder groups and our core development teams.",
    metrics: [
      { value: "16K+", label: "Users" },
      { value: "6+", label: "Stakeholder Groups" },
    ],
  },
  {
    city: "Atlanta",
    title: "Master of Science in CS: Engineering & Design Strategy",
    institute: "Georgia Tech",
    date: "2023 - 2025",
    description:
      "MSCS with a specialization in Human-Computer Interaction (HCI). Mastered the intersection of backend architecture and user-centered design through advanced coursework.",
    metrics: [
      { value: "3.8", label: "GPA" },
      { value: "MSCS", label: "Degree" },
    ],
  },
  {
    city: "Dallas",
    title: "Technology Development Program",
    institute: "AT&T",
    date: "2021 - 2023",
    description:
      "Selected for AT&T's elite Technology Development Program. Executed a 1.5-year residency focused on Technical Business Management (TBM). Managed high-stakes rotations in Software Engineering and UX Design, architecting a $18M Azure migration and self-install fiber journeys.",
    metrics: [
      { value: "$18M", label: "Cost Savings" },
      { value: "2", label: "Rotations" },
    ],
  },
  {
    city: "Seattle",
    title: "Business & Technical Foundation",
    institute: "UW Foster School of Business",
    date: "2017 - 2020",
    description:
      "Earned a Bachelor's in Management Information Systems, focusing on the critical intersection of business strategy and technical architecture.",
    metrics: [
      { value: "MIS", label: "Degree" },
      { value: "3.5", label: "GPA" },
    ],
  },
]

export function RoadJourney() {
  const containerRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(pitStops.length).fill(false))

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Car position along the road (0 to 100%)
  const carProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Growing line height
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const viewportHeight = window.innerHeight

      // Calculate which cards should be visible based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - containerTop) / (containerHeight + viewportHeight)))
      
      const newVisibleCards = pitStops.map((_, index) => {
        const cardThreshold = (index + 0.3) / pitStops.length
        return scrollProgress > cardThreshold * 0.6
      })

      setVisibleCards(newVisibleCards)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 px-4"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 id="journey-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter mb-2">
            The Roadmap
          </h2>
          <p className="text-muted-foreground">A journey through innovation and leadership</p>
        </motion.header>

        {/* Road container */}
        <div className="relative">
          {/* The Road (dotted line track) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0"
            aria-hidden="true"
          >
            <div className="w-full h-full border-l-2 border-dashed border-border/40" />
          </div>

          {/* Growing line (scroll-driven) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 z-[1] bg-primary origin-top"
            aria-hidden="true"
          />

          {/* Animated Car */}
          <motion.div
            style={{ top: `${carProgress.get()}%` }}
            className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block"
            aria-hidden="true"
          >
            <motion.div
              style={{
                top: useTransform(carProgress, (value) => `${value}%`),
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
                <CarIcon className="w-6 h-6" />
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Car (fixed position indicator) */}
          <div className="md:hidden sticky top-4 z-30 flex justify-center mb-8">
            <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
              <CarIcon className="w-5 h-5" />
            </div>
          </div>

          {/* Pit Stop Cards */}
          <div className="relative z-10 space-y-16 md:space-y-24">
            {pitStops.map((stop, index) => (
              <PitStopCard
                key={`${stop.city}-${stop.date}`}
                {...stop}
                index={index}
                isVisible={visibleCards[index]}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
