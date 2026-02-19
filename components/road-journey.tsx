"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin } from "lucide-react"
import { CarIcon } from "@/components/car-icon"

const stops = [
  {
    city: "Seattle",
    title: "Engineering Product Lead",
    institute: "AT&T",
    date: "2024 - Present",
    description:
      "Product Owner and Strategic Lead for the Unified Front Door (UFD) ecosystem. I orchestrate cross-functional teams across Engineering, DevOps, and Data Science to manage the intake lifecycle for 16,000+ users. While leading without direct reports, I define the product vision, set the technical tone for our Software Delivery Lifecycle (SDLC), and bridge the gap between 6+ stakeholder groups and our core development teams.",
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
      { value: "HCI", label: "Specialization" },
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
      "Earned a Bachelor's degree in Management Information Systems, focusing on the critical intersection of business strategy and technical architecture.",
    metrics: [
      { value: "MIS", label: "Degree" },
      { value: "3.5", label: "GPA" },
    ],
  },
]

export function RoadJourney() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStop, setActiveStop] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  })

  // Car & gold line position: clamped 0-100% of the road container
  const carTop = useTransform(scrollYProgress, (v) =>
    `${Math.max(0, Math.min(100, v * 100))}%`
  )

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const cards = sectionRef.current.querySelectorAll("[data-stop]")
      const vcenter = window.innerHeight / 2
      let closest = 0
      let closestDist = Infinity

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const dist = Math.abs(center - vcenter)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })

      setActiveStop(closest)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-20 md:py-32 md:snap-start"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2
            id="journey-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter mb-2"
          >
            The Roadmap
          </h2>
          <p className="text-muted-foreground">
            A road trip through innovation and leadership
          </p>
        </motion.header>

        {/* Road container */}
        <div className="relative">
          {/* Gray dashed line (full height) */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2"
            style={{
              width: "2px",
              background:
                "repeating-linear-gradient(to bottom, var(--border) 0, var(--border) 8px, transparent 8px, transparent 16px)",
              opacity: 0.4,
            }}
            aria-hidden="true"
          />

          {/* Gold progress line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 md:-translate-x-1/2 z-[1]"
            style={{
              width: "2px",
              height: carTop,
              background: "var(--primary)",
              boxShadow:
                "0 0 8px var(--primary), 0 0 16px color-mix(in oklch, var(--primary) 30%, transparent)",
            }}
            aria-hidden="true"
          />

          {/* Ramblin' Wreck car */}
          <motion.div
            className="absolute left-6 md:left-1/2 z-20 pointer-events-none"
            style={{ top: carTop, x: "-50%", y: "-50%" }}
            aria-hidden="true"
          >
            <CarIcon className="w-14 md:w-20" />
          </motion.div>

          {/* Stop cards */}
          <div className="relative z-10 pl-16 md:pl-0 space-y-20 md:space-y-32">
            {stops.map((stop, i) => {
              const isActive = activeStop === i
              const isEven = i % 2 === 0

              return (
                <motion.article
                  key={stop.date}
                  data-stop
                  animate={{
                    scale: isActive ? 1.02 : 0.97,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`relative max-w-sm mx-auto md:mx-0 ${
                    isEven
                      ? "md:mr-auto md:pr-20"
                      : "md:ml-auto md:pl-20"
                  }`}
                >
                  {/* Connection dot — desktop */}
                  <div
                    className={`hidden md:flex absolute top-1/2 -translate-y-1/2 items-center justify-center ${
                      isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute w-6 h-6 rounded-full bg-primary/20 animate-ping" />
                    )}
                    <span
                      className={`relative w-3.5 h-3.5 rounded-full border-2 border-background transition-colors duration-300 ${
                        isActive ? "bg-primary" : "bg-muted-foreground/40"
                      }`}
                    />
                  </div>

                  {/* Connection dot — mobile */}
                  <div className="md:hidden absolute -left-10 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    {isActive && (
                      <span className="absolute w-6 h-6 rounded-full bg-primary/20 animate-ping" />
                    )}
                    <span
                      className={`relative w-3 h-3 rounded-full border-2 border-background transition-colors duration-300 ${
                        isActive ? "bg-primary" : "bg-muted-foreground/40"
                      }`}
                    />
                  </div>

                  {/* Location badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{stop.city}</span>
                  </div>

                  {/* Card */}
                  <motion.div
                    animate={{
                      boxShadow: isActive
                        ? "0 0 25px rgba(179, 163, 105, 0.2), 0 0 50px rgba(179, 163, 105, 0.1)"
                        : "0 1px 3px rgba(0,0,0,0.1)",
                      borderColor: isActive
                        ? "rgba(179, 163, 105, 0.4)"
                        : "var(--border)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="p-5 bg-card border rounded-2xl"
                  >
                    <header className="mb-3">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                        {stop.date}
                      </p>
                      <h3 className="text-lg font-semibold text-primary leading-tight text-balance">
                        {stop.title}
                      </h3>
                      <p className="text-sm text-foreground/80 font-medium mt-0.5">
                        {stop.institute}
                      </p>
                    </header>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {stop.description}
                    </p>

                    {stop.metrics && stop.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 justify-center">
                        {stop.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="flex-1 min-w-[100px] p-3 bg-secondary rounded-lg text-center"
                          >
                            <p className="text-lg font-bold text-primary">
                              {m.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
