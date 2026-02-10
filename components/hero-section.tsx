"use client"

import { motion } from "framer-motion"
import { ChevronDown, MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col relative md:snap-start"
      aria-labelledby="hero-heading"
    >
      {/* Background Image - B&W Graduation Photo */}
      <div className="relative h-[45vh] md:h-[50vh] w-full overflow-hidden">
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
      <div className="relative flex-1 flex flex-col items-center px-6 pb-12">
        {/* Circular Headshot - Overlapping the banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative -mt-20 md:-mt-24 mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-110" />
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-background overflow-hidden shadow-xl">
            <Image
              src="/images/colin-headshot.jpeg"
              alt="Colin James - Engineering Leader"
              fill
              className="object-cover scale-150 object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-md mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-lg md:text-xl text-primary font-medium mb-3"
          >
            {"Hey, y'all!"}
          </motion.p>

          {/* Name with Credential */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-foreground mb-4 tracking-tight"
          >
            {"I'm "}
            <span className="font-bold text-primary">Colin James</span>
            <span className="text-primary/70 text-lg md:text-xl font-normal">, MSCS</span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-foreground/90 leading-relaxed text-pretty mb-4"
          >
            <span className="font-semibold text-primary">Engineering Leader</span>
            {" with a "}
            <span className="font-semibold text-primary">Business Core</span>
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-1.5 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm">Seattle, Washington</span>
          </motion.div>
        </motion.div>

        {/* View Portfolio button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary text-primary text-sm font-medium tracking-wide hover:bg-primary/10 transition-colors cursor-pointer"
          >
            View Portfolio
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
