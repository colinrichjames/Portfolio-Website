"use client"

import { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"

/* ─── Abstract Tech Backgrounds — Charcoal & Silver palette ─── */

function GradBackground() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="gradBg1" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#475569" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#475569" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gradBg2" cx="20%" cy="70%" r="45%">
          <stop offset="0%" stopColor="#64748b" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
        </radialGradient>
        <filter id="gradGlow">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="gradBlur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="#0a0b10" />
      <rect width="400" height="300" fill="url(#gradBg1)" />
      <rect width="400" height="300" fill="url(#gradBg2)" />
      {/* Constellation lines */}
      <g opacity="0.25" filter="url(#gradBlur)">
        <line x1="80" y1="60" x2="160" y2="100" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="160" y1="100" x2="240" y2="60" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="240" y1="60" x2="320" y2="120" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="160" y1="100" x2="180" y2="180" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="180" y1="180" x2="300" y2="200" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="60" y1="180" x2="180" y2="180" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="80" y1="60" x2="60" y2="180" stroke="#94a3b8" strokeWidth="0.5" />
        <line x1="120" y1="240" x2="60" y2="180" stroke="#94a3b8" strokeWidth="0.7" />
        <line x1="120" y1="240" x2="300" y2="200" stroke="#94a3b8" strokeWidth="0.5" />
        <line x1="350" y1="250" x2="300" y2="200" stroke="#94a3b8" strokeWidth="0.7" />
      </g>
      {/* Stars */}
      <g filter="url(#gradGlow)">
        <circle cx="80" cy="60" r="2.5" fill="#cbd5e1" opacity="0.9" />
        <circle cx="160" cy="100" r="3.5" fill="#94a3b8" opacity="0.95" />
        <circle cx="240" cy="60" r="2" fill="#cbd5e1" opacity="0.8" />
        <circle cx="320" cy="120" r="3" fill="#94a3b8" opacity="0.85" />
        <circle cx="180" cy="180" r="4.5" fill="#64748b" opacity="0.95" />
        <circle cx="60" cy="180" r="2.5" fill="#94a3b8" opacity="0.75" />
        <circle cx="300" cy="200" r="3" fill="#cbd5e1" opacity="0.8" />
        <circle cx="120" cy="240" r="2" fill="#94a3b8" opacity="0.7" />
        <circle cx="350" cy="250" r="2.5" fill="#94a3b8" opacity="0.75" />
      </g>
      {/* Academic orbit rings */}
      <ellipse cx="200" cy="150" rx="100" ry="70" stroke="#94a3b8" strokeWidth="0.4" fill="none" opacity="0.12" />
      <ellipse cx="200" cy="150" rx="155" ry="112" stroke="#94a3b8" strokeWidth="0.3" fill="none" opacity="0.06" />
    </svg>
  )
}

function ExperienceBackground() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="expBg1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#52525b" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#52525b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="expBg2" cx="80%" cy="20%" r="40%">
          <stop offset="0%" stopColor="#71717a" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#71717a" stopOpacity="0" />
        </radialGradient>
        <filter id="expGlow">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="300" fill="#0d0e0d" />
      <rect width="400" height="300" fill="url(#expBg1)" />
      <rect width="400" height="300" fill="url(#expBg2)" />
      {/* Radar rings */}
      <g stroke="#a1a1aa" fill="none" opacity="0.1">
        <circle cx="200" cy="150" r="40" />
        <circle cx="200" cy="150" r="80" />
        <circle cx="200" cy="150" r="120" />
        <circle cx="200" cy="150" r="160" />
      </g>
      {/* Radar spokes */}
      <g stroke="#a1a1aa" strokeWidth="0.5" opacity="0.1">
        <line x1="200" y1="0" x2="200" y2="300" />
        <line x1="0" y1="150" x2="400" y2="150" />
        <line x1="62" y1="12" x2="338" y2="288" />
        <line x1="338" y1="12" x2="62" y2="288" />
      </g>
      {/* Data points */}
      <g filter="url(#expGlow)">
        <circle cx="200" cy="90" r="3.5" fill="#a1a1aa" opacity="0.9" />
        <circle cx="268" cy="125" r="3" fill="#71717a" opacity="0.9" />
        <circle cx="268" cy="190" r="2.5" fill="#a1a1aa" opacity="0.85" />
        <circle cx="200" cy="220" r="3.5" fill="#d4d4d8" opacity="0.9" />
        <circle cx="132" cy="190" r="2.5" fill="#a1a1aa" opacity="0.85" />
        <circle cx="132" cy="125" r="3" fill="#71717a" opacity="0.9" />
        <circle cx="200" cy="150" r="5" fill="#a1a1aa" opacity="0.95" />
      </g>
      {/* Connecting polygon */}
      <polygon
        points="200,90 268,125 268,190 200,220 132,190 132,125"
        stroke="#a1a1aa"
        strokeWidth="0.8"
        fill="rgba(161,161,170,0.06)"
        opacity="0.5"
      />
      {/* Sweep line */}
      <line x1="200" y1="150" x2="200" y2="10" stroke="#e4e4e7" strokeWidth="0.5" opacity="0.15" />
    </svg>
  )
}

function CertBackground() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="certBg1" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#b8a278" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#b8a278" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="certBg2" cx="25%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#78716c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#78716c" stopOpacity="0" />
        </radialGradient>
        <filter id="certGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="certBlur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="#0f0d0a" />
      <rect width="400" height="300" fill="url(#certBg1)" />
      <rect width="400" height="300" fill="url(#certBg2)" />
      {/* Star-burst rays */}
      <g stroke="#c8b88a" strokeWidth="0.6" opacity="0.18" filter="url(#certBlur)">
        <line x1="200" y1="150" x2="200" y2="0" />
        <line x1="200" y1="150" x2="400" y2="150" />
        <line x1="200" y1="150" x2="200" y2="300" />
        <line x1="200" y1="150" x2="0" y2="150" />
        <line x1="200" y1="150" x2="354" y2="4" />
        <line x1="200" y1="150" x2="354" y2="296" />
        <line x1="200" y1="150" x2="46" y2="296" />
        <line x1="200" y1="150" x2="46" y2="4" />
        <line x1="200" y1="150" x2="350" y2="60" />
        <line x1="200" y1="150" x2="350" y2="240" />
        <line x1="200" y1="150" x2="50" y2="240" />
        <line x1="200" y1="150" x2="50" y2="60" />
      </g>
      {/* Concentric diamonds */}
      <g fill="none" stroke="#c8b88a" opacity="0.12">
        <polygon points="200,100 250,150 200,200 150,150" strokeWidth="0.8" />
        <polygon points="200,60 280,150 200,240 120,150" strokeWidth="0.6" />
        <polygon points="200,20 320,150 200,280 80,150" strokeWidth="0.4" />
      </g>
      {/* Nodes */}
      <g filter="url(#certGlow)">
        <circle cx="200" cy="150" r="6" fill="#d4b896" opacity="0.9" />
        <circle cx="200" cy="100" r="2.5" fill="#c8b88a" opacity="0.8" />
        <circle cx="250" cy="150" r="2" fill="#c8b88a" opacity="0.75" />
        <circle cx="200" cy="200" r="2.5" fill="#c8b88a" opacity="0.8" />
        <circle cx="150" cy="150" r="2" fill="#c8b88a" opacity="0.75" />
        <circle cx="340" cy="80" r="1.5" fill="#e2d5b8" opacity="0.6" />
        <circle cx="340" cy="220" r="1.5" fill="#e2d5b8" opacity="0.6" />
        <circle cx="60" cy="220" r="1.5" fill="#e2d5b8" opacity="0.6" />
        <circle cx="60" cy="80" r="1.5" fill="#e2d5b8" opacity="0.6" />
      </g>
    </svg>
  )
}

/* ─── Stats Data ─── */

type StatBack =
  | { type: "courses"; items: string[] }
  | { type: "text"; content: string }

const stats: {
  number: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  Background: () => React.ReactElement
  back: StatBack
}[] = [
  {
    number: "10",
    label: "Graduate CS Courses",
    icon: GraduationCap,
    Background: GradBackground,
    back: {
      type: "courses",
      items: [
        "Human-Computer Interaction",
        "Machine Learning",
        "Natural Language Processing",
        "Mobile Ubiquitous Computing",
        "Game AI",
        "AI Ethics",
        "Video Game Design",
        "Educational Technology",
        "Global Entrepreneurship",
        "Digital Marketing",
      ],
    },
  },
  {
    number: "5+",
    label: "Years of Professional Experience",
    icon: Briefcase,
    Background: ExperienceBackground,
    back: {
      type: "text",
      content:
        "Diverse roles in product management, software engineering, and UX design. Graduate of AT&T's elite Technology Development Program.",
    },
  },
  {
    number: "4",
    label: "Technology Certifications",
    icon: Award,
    Background: CertBackground,
    back: {
      type: "text",
      content:
        "Udacity Nanodegrees in Programming & UX, SAFe Product Owner / Product Manager, and SAFe Agilist.",
    },
  },
]

/* ─── SkillFlipCard ─── */

function SkillFlipCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0]
  index: number
}) {
  const [flipped, setFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)

  const Icon = stat.icon

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const bgX = useSpring(useTransform(rawX, [-1, 1], [-14, 14]), { stiffness: 120, damping: 18 })
  const bgY = useSpring(useTransform(rawY, [-1, 1], [-10, 10]), { stiffness: 120, damping: 18 })
  const tiltX = useSpring(useTransform(rawY, [-1, 1], [4, -4]), { stiffness: 150, damping: 20 })
  const tiltY = useSpring(useTransform(rawX, [-1, 1], [-4, 4]), { stiffness: 150, damping: 20 })

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
      className="cursor-pointer rounded-xl relative isolate"
      style={{ perspective: "1200px", rotateX: tiltX, rotateY: tiltY }}
      onClick={handleFlip}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      role="button"
      tabIndex={0}
      aria-label={`${stat.label} — click to flip`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleFlip() }}
    >
      {/* Rotating wrapper */}
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
          {/* Parallax background */}
          <div className="absolute" style={{ inset: "-20px" }}>
            <motion.div className="w-full h-full" style={{ x: bgX, y: bgY }}>
              <stat.Background />
            </motion.div>
          </div>
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
          {/* Centered stat content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <Icon className="w-9 h-9 text-primary mb-3 opacity-85" />
            <div className="text-5xl font-light text-white mb-2 leading-none tracking-tight">
              {stat.number}
            </div>
            <p className="text-xs font-medium text-white/55 uppercase tracking-[0.18em] leading-snug max-w-[160px]">
              {stat.label}
            </p>
          </div>
          {/* Flip affordance */}
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/25 text-[10px] tracking-[0.15em] uppercase">
            Tap to flip
          </p>
        </div>

        {/* ── Back Face ── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl flex flex-col justify-center items-center p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          <div className="absolute inset-0">
            <stat.Background />
          </div>
          <div className="absolute inset-0 backdrop-blur-md bg-black/60" />
          <div className="absolute inset-0 rounded-xl border border-white/10" />
          <div className="relative z-10 w-full">
            <p className="text-[10px] font-medium text-primary/80 uppercase tracking-[0.2em] text-center mb-3">
              {stat.label}
            </p>
            {stat.back.type === "courses" ? (
              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                {stat.back.items.map((course) => (
                  <p key={course} className="text-[10px] text-white/72 leading-tight">
                    · {course}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-sm text-white/85 leading-relaxed text-center">
                {stat.back.content}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Cursor-tracked radial glow */}
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

export function AcademicCore() {
  return (
    <section
      id="core"
      className="py-20 md:py-28 bg-background md:snap-start md:min-h-screen md:flex md:flex-col md:justify-center"
      aria-labelledby="academic-core-heading"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-sm md:text-base text-primary uppercase tracking-[0.2em] font-medium mb-3">
            Professional & Academic Core
          </p>
          <motion.h2
            id="academic-core-heading"
            initial={{ letterSpacing: "-0.1em" }}
            whileInView={{ letterSpacing: "-0.05em" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
          >
            Skills & Experience
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <SkillFlipCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
