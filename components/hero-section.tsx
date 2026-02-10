"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, MapPin } from "lucide-react"
import Image from "next/image"

const SESSION_KEY = "hero-animated"

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.5,
    },
  },
}

const liftItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
}

const defaultTransition = {
  duration: 0.5,
  ease: "easeOut" as const,
}

const waveHand = {
  hidden: { rotate: 0 },
  show: {
    rotate: [0, 20, -15, 20, -10, 15, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
}

export function HeroSection() {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY)
    if (!alreadyPlayed) {
      setShouldAnimate(true)
      sessionStorage.setItem(SESSION_KEY, "1")
    }
    setChecked(true)
  }, [])

  // Don't render until we've checked sessionStorage to avoid flash
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
  const animate = "show"

  return (
    <section
      id="hero"
      className="min-h-[100svh] flex flex-col relative md:snap-start"
      aria-labelledby="hero-heading"
    >
      {/* Background Image - B&W Graduation Photo */}
      <div className="relative h-[35vh] md:h-[50vh] w-full overflow-hidden">
        <Image
          src="/images/colin-graduation.jpeg"
          alt=""
          fill
          className="object-cover object-top"
          priority
          aria-hidden="true"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content Container */}
      <div className="relative flex-1 flex flex-col items-center justify-start pt-0 md:pt-0 md:justify-start px-6 pb-16">
        {/* Circular Headshot - Overlapping the banner */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: shouldAnimate ? 0.1 : 0 }}
          className="relative -mt-16 md:-mt-24 mb-4 md:mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-110" />
          <div className="relative w-36 h-36 md:w-60 md:h-60 rounded-full border-4 border-background overflow-hidden shadow-xl">
            <Image
              src="/images/colin-headshot.jpeg"
              alt="Colin James - Engineering Leader"
              fill
              className="object-cover scale-150 object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content — staggered reveal */}
        <motion.div
          variants={staggerContainer}
          initial={initial}
          animate={animate}
          className="text-center max-w-md mx-auto"
        >
          {/* 1. Greeting + Cowboy Hat */}
          <motion.p
            variants={liftItem}
            transition={defaultTransition}
            className="text-lg md:text-xl text-primary font-medium mb-1.5 md:mb-3 flex items-center justify-center gap-1.5"
          >
            {"Hey, y'all!"}
            <motion.span
              variants={waveHand}
              style={{ transformOrigin: "70% 80%" }}
              className="inline-block text-xl md:text-2xl"
              aria-hidden="true"
            >
              👋
            </motion.span>
          </motion.p>

          {/* 2. Name with Credential */}
          <motion.h1
            id="hero-heading"
            variants={liftItem}
            transition={springTransition}
            className="text-2xl md:text-3xl font-medium text-foreground mb-4 tracking-tight"
          >
            {"I'm "}
            <span className="font-bold text-primary">Colin James</span>
            <span className="text-primary/70 text-lg md:text-xl font-normal">, MSCS</span>
          </motion.h1>

          {/* 3. Headline + Location */}
          <motion.div variants={liftItem} transition={springTransition}>
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

          {/* 4. View Portfolio Button */}
          <motion.div
            variants={liftItem}
            transition={defaultTransition}
            className="mt-8"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              animate={{ y: [0, 6, 0] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 400, damping: 15 },
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary text-primary text-sm font-medium tracking-wide hover:bg-primary/10 transition-colors cursor-pointer"
            >
              View Portfolio
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
