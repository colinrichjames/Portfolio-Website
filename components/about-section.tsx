"use client"

import { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion"

/* ─── Abstract Tech Backgrounds ─── */

function PeopleBackground() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="pg1" cx="35%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pg2" cx="75%" cy="65%" r="45%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </radialGradient>
        <filter id="pglow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="pblur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="#080d1a" />
      <rect width="400" height="300" fill="url(#pg1)" />
      <rect width="400" height="300" fill="url(#pg2)" />
      {/* Network connections */}
      <g opacity="0.3" filter="url(#pblur)">
        <line x1="60" y1="80" x2="160" y2="120" stroke="#60a5fa" strokeWidth="0.8" />
        <line x1="160" y1="120" x2="240" y2="80" stroke="#60a5fa" strokeWidth="0.8" />
        <line x1="240" y1="80" x2="340" y2="150" stroke="#60a5fa" strokeWidth="0.8" />
        <line x1="160" y1="120" x2="200" y2="200" stroke="#818cf8" strokeWidth="0.8" />
        <line x1="200" y1="200" x2="340" y2="150" stroke="#818cf8" strokeWidth="0.8" />
        <line x1="60" y1="80" x2="200" y2="200" stroke="#60a5fa" strokeWidth="0.5" />
        <line x1="100" y1="220" x2="200" y2="200" stroke="#60a5fa" strokeWidth="0.8" />
        <line x1="280" y1="240" x2="340" y2="150" stroke="#60a5fa" strokeWidth="0.8" />
        <line x1="280" y1="240" x2="200" y2="200" stroke="#818cf8" strokeWidth="0.8" />
        <line x1="60" y1="80" x2="100" y2="220" stroke="#818cf8" strokeWidth="0.5" />
      </g>
      {/* Glowing nodes */}
      <g filter="url(#pglow)">
        <circle cx="60" cy="80" r="3" fill="#60a5fa" opacity="0.9" />
        <circle cx="160" cy="120" r="4" fill="#3b82f6" opacity="0.95" />
        <circle cx="240" cy="80" r="2.5" fill="#60a5fa" opacity="0.8" />
        <circle cx="340" cy="150" r="3.5" fill="#818cf8" opacity="0.9" />
        <circle cx="200" cy="200" r="5" fill="#6366f1" opacity="0.95" />
        <circle cx="100" cy="220" r="2.5" fill="#60a5fa" opacity="0.7" />
        <circle cx="280" cy="240" r="3" fill="#818cf8" opacity="0.85" />
      </g>
      {/* Long-exposure light trails */}
      <line x1="-20" y1="190" x2="430" y2="90" stroke="#bfdbfe" strokeWidth="0.5" opacity="0.12" />
      <line x1="-20" y1="210" x2="430" y2="110" stroke="#bfdbfe" strokeWidth="1.5" opacity="0.05" />
    </svg>
  )
}

function ProcessBackground() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="prg1" cx="20%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="prg2" cx="85%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="prt1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
          <stop offset="40%" stopColor="#06b6d4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="prt2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
          <stop offset="60%" stopColor="#14b8a6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
        </linearGradient>
        <filter id="prglow">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="prblur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="#04100d" />
      <rect width="400" height="300" fill="url(#prg1)" />
      <rect width="400" height="300" fill="url(#prg2)" />
      {/* Flow paths */}
      <g opacity="0.5" filter="url(#prblur)">
        <path d="M 0,130 C 80,130 100,95 185,95 C 265,95 285,130 400,130" stroke="#06b6d4" strokeWidth="1" fill="none" />
        <path d="M 0,155 C 70,155 110,115 195,115 C 275,115 290,155 400,155" stroke="#0891b2" strokeWidth="0.8" fill="none" />
        <path d="M 0,175 C 60,175 130,200 210,160 C 285,122 325,175 400,175" stroke="#14b8a6" strokeWidth="0.8" fill="none" />
        <path d="M 0,200 C 50,200 90,170 170,185 C 250,200 310,200 400,195" stroke="#0e7490" strokeWidth="0.6" fill="none" />
      </g>
      {/* Light trail streaks */}
      <rect x="0" y="128" width="400" height="2" fill="url(#prt1)" opacity="0.9" />
      <rect x="0" y="153" width="400" height="1.5" fill="url(#prt2)" opacity="0.7" />
      {/* Nodes */}
      <g filter="url(#prglow)">
        <circle cx="80" cy="130" r="4" fill="#06b6d4" opacity="0.9" />
        <circle cx="185" cy="95" r="3.5" fill="#0891b2" opacity="0.95" />
        <circle cx="210" cy="160" r="5" fill="#14b8a6" opacity="0.9" />
        <circle cx="285" cy="130" r="3.5" fill="#06b6d4" opacity="0.85" />
        <circle cx="325" cy="175" r="3" fill="#14b8a6" opacity="0.8" />
        <circle cx="130" cy="75" r="2.5" fill="#67e8f9" opacity="0.7" />
        <circle cx="310" cy="215" r="2.5" fill="#5eead4" opacity="0.7" />
      </g>
      {/* Subtle vertical grid */}
      <g opacity="0.1">
        <line x1="80" y1="50" x2="80" y2="250" stroke="#06b6d4" strokeWidth="0.5" />
        <line x1="200" y1="30" x2="200" y2="270" stroke="#14b8a6" strokeWidth="0.5" />
        <line x1="320" y1="50" x2="320" y2="250" stroke="#06b6d4" strokeWidth="0.5" />
      </g>
    </svg>
  )
}

function ProductBackground() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="pdg1" cx="62%" cy="38%" r="50%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pdg2" cx="25%" cy="72%" r="45%">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pdt" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
        <filter id="pdglow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="300" fill="#06080f" />
      <rect width="400" height="300" fill="url(#pdg1)" />
      <rect width="400" height="300" fill="url(#pdg2)" />
      {/* Diagonal light wash */}
      <rect x="0" y="0" width="400" height="300" fill="url(#pdt)" />
      {/* Circuit traces — dim */}
      <g stroke="#38bdf8" strokeWidth="0.7" fill="none" opacity="0.25">
        <polyline points="0,245 55,245 55,185 115,185 115,145 200,145" />
        <polyline points="200,145 265,145 265,105 340,105 340,55 400,55" />
        <polyline points="0,75 40,75 40,115 100,115 100,165 160,165 160,205 245,205 245,245 400,245" />
        <polyline points="175,0 175,55 240,55 240,105" />
        <polyline points="295,300 295,225 365,225 365,165 400,165" />
      </g>
      {/* Circuit traces — bright highlight */}
      <g stroke="#7dd3fc" strokeWidth="0.5" fill="none" opacity="0.5">
        <polyline points="0,245 55,245 55,185 115,185 115,145 200,145" />
        <polyline points="200,145 265,145 265,105 340,105" />
      </g>
      {/* Circuit nodes */}
      <g filter="url(#pdglow)">
        <rect x="113" y="143" width="4" height="4" rx="0.5" fill="#38bdf8" opacity="0.95" />
        <rect x="198" y="143" width="4" height="4" rx="0.5" fill="#0ea5e9" opacity="0.95" />
        <rect x="263" y="103" width="4" height="4" rx="0.5" fill="#38bdf8" opacity="0.9" />
        <rect x="338" y="103" width="4" height="4" rx="0.5" fill="#7dd3fc" opacity="0.85" />
        <circle cx="55" cy="185" r="3" fill="#38bdf8" opacity="0.9" />
        <circle cx="100" cy="115" r="2.5" fill="#94a3b8" opacity="0.8" />
        <circle cx="245" cy="205" r="3" fill="#38bdf8" opacity="0.85" />
        <circle cx="295" cy="225" r="2.5" fill="#7dd3fc" opacity="0.8" />
      </g>
    </svg>
  )
}

/* ─── Pillar Data ─── */

const pillars = [
  {
    title: "People",
    description: "Building inclusive teams where engineers thrive.",
    achievement: "Led and mentored a cross-functional organization of 80+ engineers to drive a 20% productivity increase.",
    Background: PeopleBackground,
  },
  {
    title: "Process",
    description: "Agile delivery with velocity and quality.",
    achievement: "Modernized enterprise intake for 2,000+ apps and 16k+ users by developing a Unified Front Door (UFD) system.",
    Background: ProcessBackground,
  },
  {
    title: "Product",
    description: "User-centered design meets engineering.",
    achievement: "Optimized the self-install user journey for 500,000+ customers by architecting a custom mobile application.",
    Background: ProductBackground,
  },
]

/* ─── FlipCard ─── */

function FlipCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Normalized mouse position: -1 to 1
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Parallax background translation
  const bgX = useSpring(useTransform(rawX, [-1, 1], [-14, 14]), { stiffness: 120, damping: 18 })
  const bgY = useSpring(useTransform(rawY, [-1, 1], [-10, 10]), { stiffness: 120, damping: 18 })

  // Magnetic tilt — small angle so it reads as depth, not distraction
  const tiltX = useSpring(useTransform(rawY, [-1, 1], [4, -4]), { stiffness: 150, damping: 20 })
  const tiltY = useSpring(useTransform(rawX, [-1, 1], [-4, 4]), { stiffness: 150, damping: 20 })

  // Cursor glow: 0–100% for the radial gradient center
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const glowBg = useMotionTemplate`radial-gradient(130px circle at ${glowX}% ${glowY}%, rgba(179, 163, 105, 0.22), transparent 70%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - r.left) / r.width
    const ny = (e.clientY - r.top) / r.height
    rawX.set(nx * 2 - 1)
    rawY.set(ny * 2 - 1)
    glowX.set(nx * 100)
    glowY.set(ny * 100)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
    setHovered(false)
  }

  const handleFlip = () => {
    // Spring tilt back to centre before flip for a clean rotation
    rawX.set(0)
    rawY.set(0)
    setFlipped(f => !f)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      // No overflow-hidden here — tilt transforms + overflow-hidden conflict on composited layers.
      // Each face clips itself via overflow-hidden + WebkitMaskImage.
      className="cursor-pointer rounded-xl relative isolate"
      style={{ perspective: "1200px", rotateX: tiltX, rotateY: tiltY }}
      onClick={handleFlip}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      role="button"
      tabIndex={0}
      aria-label={`${pillar.title} — click to flip`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleFlip() }}
    >
      {/* Rotating wrapper — establishes shared dimensions for both faces */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full aspect-[4/3]"
      >
        {/* ── Front Face ── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          {/* Parallax background — oversized to allow movement without edge bleed */}
          <div className="absolute" style={{ inset: "-20px" }}>
            <motion.div className="w-full h-full" style={{ x: bgX, y: bgY }}>
              <pillar.Background />
            </motion.div>
          </div>
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/65" />
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-light text-primary tracking-wide mb-2">
              {pillar.title}
            </h3>
            <p className="text-white/70 text-sm">{pillar.description}</p>
            <p className="text-white/30 text-xs mt-3 tracking-[0.15em] uppercase">Tap to flip</p>
          </div>
        </div>

        {/* ── Back Face ── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl flex flex-col justify-center items-center p-8"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          {/* Same background, blurred so text stands out */}
          <div className="absolute inset-0">
            <pillar.Background />
          </div>
          <div className="absolute inset-0 backdrop-blur-md bg-black/55" />
          <div className="absolute inset-0 rounded-xl border border-white/10" />
          {/* Content */}
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-light text-primary tracking-wide mb-5">
              {pillar.title}
            </h3>
            <p className="text-white/90 text-base leading-relaxed">{pillar.achievement}</p>
          </div>
        </div>
      </motion.div>

      {/* Cursor-tracked radial glow — painted after the 3D wrapper so it composites on top */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ background: glowBg }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  )
}

/* ─── Section ─── */

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-background overflow-hidden scroll-mt-4 md:snap-start md:min-h-screen md:flex md:flex-col md:justify-center"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2
              id="about-heading"
              initial={{ letterSpacing: "-0.1em" }}
              whileInView={{ letterSpacing: "-0.05em" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tighter"
            >
              <span className="text-primary">Leadership</span> That{" "}
              <span className="block">Inspires Change</span>
            </motion.h2>
          </motion.div>

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

        {/* People, Process, Product — Flip Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <FlipCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
