"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section
      className="py-16 md:py-24 px-6 bg-secondary/30"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold text-primary mb-4">
          {"Let's Connect"}
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {"Interested in discussing engineering leadership, cloud architecture, or AI integration? I'd love to hear from you."}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="default"
            size="lg"
            className="gap-2 min-h-[44px]"
            asChild
          >
            <a
              href="mailto:hello@colinjames.dev"
              aria-label="Send email to Colin"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Get in Touch
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 min-h-[44px] bg-transparent"
            asChild
          >
            <a
              href="https://linkedin.com/in/colinjames"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Colin's LinkedIn profile (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 min-h-[44px] bg-transparent"
            asChild
          >
            <a
              href="https://github.com/colinjames"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Colin's GitHub profile (opens in new tab)"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              GitHub
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 pt-8 border-t border-border text-center"
      >
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Colin Richard James. Built with accessibility in mind.
        </p>
      </motion.footer>
    </section>
  )
}
