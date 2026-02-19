"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { ChevronDown, MapPin } from "lucide-react"
import Image from "next/image"

const SESSION_KEY = "hero-animated"

// ── Timeline delays (seconds) — mirrors gsap.timeline() sequencing ──
const T_IRIS      = 0       // background zoom-out starts immediately
const T_HEADSHOT  = 0.25    // headshot enters while iris is still going
const T_TEXT      = 0.60    // text cascade begins after headshot lands

// ── Stagger container ──
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: T_TEXT,
    },
  },
}

const liftItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
}

// Bouncier spring for magnetic typography (vs the gentler original)
const springBounce = {
  type:      "spring" as const,
  stiffness: 280,
  damping:   17,
}

const fadeUp = {
  duration: 0.5,
  ease:     "easeOut" as const,
}

const waveHand = {
  hidden: { rotate: 0 },
  show: {
    rotate: [0, 20, -15, 20, -10, 15, -10, 20, -15, 10, 0],
    transition: { duration: 1.4, ease: "easeInOut" as const },
  },
}

export function HeroSection() {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [checked, setChecked] = useState(false)

  // ── Cursor parallax motion values ──
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Background drifts with cursor (same direction — distant layer)
  const bgX = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), { stiffness: 55, damping: 28 })
  const bgY = useSpring(useTransform(mouseY, [-1, 1], [-8, 8]),   { stiffness: 55, damping: 28 })

  // Headshot drifts against cursor (opposite — foreground layer)
  const headX = useSpring(useTransform(mouseX, [-1, 1], [10, -10]), { stiffness: 55, damping: 28 })
  const headY = useSpring(useTransform(mouseY, [-1, 1], [6, -6]),   { stiffness: 55, damping: 28 })

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY)
    if (!alreadyPlayed) {
      setShouldAnimate(true)
      sessionStorage.setItem(SESSION_KEY, "1")
    }
    setChecked(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width  * 2 - 1)
    mouseY.set((e.clientY - r.top)  / r.height * 2 - 1)
  }
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  if (!checked) {
    return (
      <section
        id="hero"
        className="min-h-[100svh] flex flex-col relative md:snap-start"
        aria-labelledby="hero-heading"
      />
    )
  }

  const initial = shouldAnimate ? "hidden" : "show"

  return (
    <section
      id="hero"
      className="min-h-[100svh] flex flex-col relative md:snap-start"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Background — Iris zoom-out entrance ── */}
      <div className="relative h-[35vh] md:h-[50vh] w-full overflow-hidden">
        {/* Zoom-out wrapper: 1.15 → 1 over 1.4s */}
        <motion.div
          className="absolute inset-0"
          initial={shouldAnimate ? { scale: 1.15, opacity: 0 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.4,
            delay: shouldAnimate ? T_IRIS : 0,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Parallax inner layer — inset -20px gives edge buffer for cursor drift */}
          <motion.div
            className="absolute"
            style={{ inset: "-20px", x: bgX, y: bgY }}
          >
            <Image
              src="/images/colin-graduation.jpeg"
              alt=""
              fill
              className="object-cover object-top"
              priority
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
        {/* Gradient overlay — always on top */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* ── Content ── */}
      <div className="relative flex-1 flex flex-col items-center justify-start pt-0 md:pt-0 md:justify-start px-6 pb-16">

        {/* Headshot — parallax outer, entrance inner */}
        <motion.div
          className="-mt-16 md:-mt-24 mb-4 md:mb-6"
          style={{ x: headX, y: headY }}
        >
          <motion.div
            className="relative"
            initial={shouldAnimate ? { opacity: 0, scale: 0.85, y: 14 } : false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: shouldAnimate ? T_HEADSHOT : 0,
              // cubic-bezier with y > 1 creates an overshoot "pop"
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* Breathing glow — gold pulse, 4s loop */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              animate={{
                scale:           [1.1, 1.38, 1.1],
                opacity:         [0.38, 0.62, 0.38],
                backgroundColor: [
                  "rgba(179, 163, 105, 0.65)",
                  "rgba(212, 192, 120, 0.75)",
                  "rgba(179, 163, 105, 0.65)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Circular headshot */}
            <div
              className="relative w-36 h-36 md:w-60 md:h-60 rounded-full border-4 border-background overflow-hidden"
              style={{
                boxShadow:
                  "0 0 20px rgba(179, 163, 105, 0.4), 0 0 40px rgba(179, 163, 105, 0.2)",
              }}
            >
              <Image
                src="/images/colin-headshot.jpeg"
                alt="Colin James - Engineering Leader"
                fill
                className="object-cover scale-150 object-top"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ── Staggered magnetic text cascade ── */}
        <motion.div
          variants={staggerContainer}
          initial={initial}
          animate="show"
          className="text-center max-w-md mx-auto"
        >
          {/* 1. Greeting + wave */}
          <motion.p
            variants={liftItem}
            transition={fadeUp}
            className="text-lg md:text-xl text-primary font-medium mb-1.5 md:mb-3 flex items-center justify-center gap-1.5"
          >
            {"Hey!"}
            <motion.span
              variants={waveHand}
              style={{ transformOrigin: "70% 80%" }}
              className="inline-block text-xl md:text-2xl"
              aria-hidden="true"
            >
              👋
            </motion.span>
          </motion.p>

          {/* 2. Name — spring bounce */}
          <motion.h1
            id="hero-heading"
            variants={liftItem}
            transition={springBounce}
            className="text-2xl md:text-3xl font-medium text-foreground mb-4 tracking-tight"
          >
            {"I'm "}
            <span className="font-bold text-primary">Colin James</span>
            <span className="text-primary/70 text-lg md:text-xl font-normal">, MSCS</span>
          </motion.h1>

          {/* 3. Headline + location — spring bounce */}
          <motion.div variants={liftItem} transition={springBounce}>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-pretty mb-2">
              <span className="font-semibold text-primary">Engineering Leader</span>
              {" with a "}
              <span className="font-semibold text-primary">Business Core</span>
            </p>
            <div className="flex items-center justify-center gap-1.5 text-muted-foreground">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm">Seattle, Washington</span>
            </div>
          </motion.div>

          {/* 4. CTA — infinite vertical float */}
          <motion.div
            variants={liftItem}
            transition={fadeUp}
            className="mt-8"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              animate={{ y: [0, 7, 0] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                y:     { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 400, damping: 15 },
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary text-primary text-sm font-medium tracking-wide hover:bg-primary/10 transition-colors cursor-pointer"
            >
              View Portfolio & Resume
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
