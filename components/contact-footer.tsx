"use client"

import { motion } from "framer-motion"
import { Globe, Mail, MapPin } from "lucide-react"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const links = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/colin-r-james/",
  },
  {
    icon: Globe,
    label: "colinrjames.com",
    href: "https://colinrjames.com",
  },
  {
    icon: GitHubIcon,
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
      className="py-20 md:py-28 px-6 bg-secondary/30 md:snap-start md:min-h-screen md:flex md:flex-col md:justify-center"
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
          <motion.h2
            id="contact-heading"
            initial={{ letterSpacing: "-0.1em" }}
            whileInView={{ letterSpacing: "-0.05em" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
          >
            {"Let's Build the Future Together"}
          </motion.h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Engineering Leader with an MSCS from Georgia Tech and a UW Management Information Systems degree. With 5+ years of experience leading high-impact teams at AT&T, I am seeking Product Management roles in the Seattle area.
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
