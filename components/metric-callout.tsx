"use client"

import { motion } from "framer-motion"

interface MetricCalloutProps {
  value: string
  label: string
  isVisible: boolean
  delay?: number
}

export function MetricCallout({ value, label, isVisible, delay = 0 }: MetricCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="p-6 bg-card border border-border rounded-xl text-center shadow-sm"
      role="figure"
      aria-label={`Impact metric: ${value} ${label}`}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
        className="text-3xl md:text-4xl font-bold text-primary mb-1"
      >
        {value}
      </motion.p>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </motion.div>
  )
}
