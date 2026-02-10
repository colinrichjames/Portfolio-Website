"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"

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

export function AcademicCore() {
  return (
    <section
      id="core"
      className="py-16 md:py-24 bg-background md:snap-start md:min-h-screen md:flex md:flex-col md:justify-center"
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
          <h2
            id="academic-core-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
          >
            Skills & Experience
          </h2>
        </motion.div>

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
