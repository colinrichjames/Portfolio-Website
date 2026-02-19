"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const pillars = [
  {
    title: "People",
    image: "/images/pillar-people.jpg",
    description: "Building inclusive teams where engineers thrive.",
    achievement: "Led and mentored a cross-functional organization of 80+ engineers to drive a 20% productivity increase."
  },
  {
    title: "Process",
    image: "/images/pillar-process.jpg",
    description: "Agile delivery with velocity and quality.",
    achievement: "Modernized enterprise intake for 2,000+ apps by architecting a Unified Front Door (UFD) system."
  },
  {
    title: "Product",
    image: "/images/pillar-product.jpg",
    description: "User-centered design meets engineering.",
    achievement: "Directed a $2.5B technology portfolio, migrating 360+ legacy apps to Azure for $18M in annual savings."
  }
]

function FlipCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-pointer rounded-xl"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      aria-label={`${pillar.title} — click to flip`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setFlipped(!flipped) }}
    >
      {/* Rotating wrapper — sets shared dimensions for both faces */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full aspect-[4/3]"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 24px 2px rgba(179, 163, 105, 0.25)",
        }}
      >
        {/* Front Face — absolute inset-0 so it fills the wrapper exactly */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={pillar.image || "/placeholder.svg"}
            alt={pillar.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-light text-primary tracking-wide mb-2">
              {pillar.title}
            </h3>
            <p className="text-foreground/80 text-sm">
              {pillar.description}
            </p>
            <p className="text-foreground/40 text-xs mt-3 tracking-wide uppercase">Tap to flip</p>
          </div>
        </div>

        {/* Back Face — same absolute inset-0 + same rounded-xl so corners match exactly */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl bg-card/60 backdrop-blur-md border border-primary/20 flex flex-col justify-center items-center p-8"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-2xl font-light text-primary tracking-wide mb-6 text-center">
            {pillar.title}
          </h3>
          <p className="text-foreground/90 text-base leading-relaxed text-center">
            {pillar.achievement}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-background overflow-hidden scroll-mt-4 md:snap-start md:min-h-screen md:flex md:flex-col md:justify-center"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6"
        >
          About Colin
        </motion.p>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tighter"
            >
              <span className="text-primary">Leadership</span> That{" "}
              <span className="block">Inspires Change</span>
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I bridge engineering and business to build technology that truly serves users. My approach connects technical strategy with real-world impact.
            </p>
          </motion.div>
        </div>

        {/* People, Process, Product - Flip Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <FlipCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
