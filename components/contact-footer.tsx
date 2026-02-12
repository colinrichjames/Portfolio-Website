"use client"

import { motion } from "framer-motion"
import { Linkedin, Globe, Github, Mail, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/colin-r-james/",
  },
  {
    icon: Globe,
    label: "colinrjames.com",
    href: "https://colinrjames.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/colinrichjames",
  },
  {
    icon: Mail,
    label: "colinrichjames@gmail.com",
    href: "mailto:colinrichjames@gmail.com",
  },
]

export function ContactFooter() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 bg-secondary/30 md:snap-start md:min-h-screen md:flex md:flex-col md:justify-center"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base text-primary uppercase tracking-[0.2em] font-medium mb-3">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
          >
            {"Let's Build the Future Together"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Engineering Leader with an MSCS from Georgia Tech specializing in HCI and AI. Open to Software Engineering management roles in the Seattle area.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">Seattle, WA</span>
          </span>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Button variant="default" size="lg" className="gap-2 min-h-[44px]" asChild>
            <a href="/ColinJamesResume.pdf" download aria-label="Download Resume (PDF)">
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 pt-8 border-t border-border text-center"
      >
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Colin Richard James.
        </p>
      </motion.footer>
    </section>
  )
}
