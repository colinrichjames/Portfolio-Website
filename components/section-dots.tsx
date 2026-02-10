"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "roadmap", label: "Roadmap" },
  { id: "core", label: "Core" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function SectionDots() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const visibilityMap = new Map<string, number>()

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibilityMap.set(id, entry.intersectionRatio)
          })

          // Find the section with the highest visibility
          let maxRatio = 0
          let maxId = "hero"
          visibilityMap.forEach((ratio, sectionId) => {
            if (ratio > maxRatio) {
              maxRatio = ratio
              maxId = sectionId
            }
          })
          setActiveSection(maxId)
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
      aria-label="Page sections"
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center justify-end"
            aria-label={`Scroll to ${label}`}
            aria-current={isActive ? "true" : undefined}
          >
            {/* Tooltip */}
            <span className="absolute right-5 px-2 py-1 rounded text-xs font-medium bg-card text-foreground border border-border shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {label}
            </span>

            {/* Dot */}
            <motion.div
              className="rounded-full"
              animate={{
                width: isActive ? 10 : 8,
                height: isActive ? 10 : 8,
                backgroundColor: isActive
                  ? "var(--primary)"
                  : "color-mix(in oklch, var(--muted-foreground) 30%, transparent)",
              }}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>
        )
      })}
    </nav>
  )
}
