"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import Image from "next/image"

const pillars = [
  {
    title: "People",
    image: "/images/pillar-people.jpg",
    description: "Building inclusive teams where engineers thrive."
  },
  {
    title: "Process",
    image: "/images/pillar-process.jpg",
    description: "Agile delivery with velocity and quality."
  },
  {
    title: "Product",
    image: "/images/pillar-product.jpg",
    description: "User-centered design meets engineering."
  }
]

const stats = [
  {
    number: "10",
    label: "Graduate CS Courses",
    icon: GraduationCap,
    description: "Human Computer Interaction, ML, Natural Language Processing, Mobile Ubiquitous Computing, Game AI, AI Ethics, Video Game Design, Educational Technology, Global Entrepreneurship, Digital Marketing."
  },
  {
    number: "5+",
    label: "Years of Professional Experience",
    icon: Briefcase,
    description: "Held diverse roles in product management, software engineering, and user experience design. As a participant in AT&T's Technology Development Program, I gained hands-on experience across multiple technology domains."
  },
  {
    number: "4",
    label: "Technology Certifications",
    icon: Award,
    description: "Earned certifications, including Udacity Nanodegrees in programming and user experience, as well as SAFe Product Owner / Product Manager and Agilist from Scaled Agile."
  }
]

export function AboutSection() {
  return (
    <section 
      id="about"
      className="relative py-16 md:py-24 bg-background overflow-hidden scroll-mt-4"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6"
        >
          About Colin
        </motion.p>

        {/* Main About Content - Simplified */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight tracking-tight"
            >
              <span className="text-primary">Leadership</span> That{" "}
              <span className="block">Inspires Change</span>
            </h2>
          </motion.div>

          {/* Right - Simplified Description */}
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

        {/* People, Process, Product - Visual Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pillar.image || "/placeholder.svg"}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-light text-primary tracking-wide mb-2">
                  {pillar.title}
                </h3>
                <p className="text-foreground/80 text-sm">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats - Card Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border/50 bg-card/50"
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-light text-primary">
                    {stat.number}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
