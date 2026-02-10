"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

interface PitStopCardProps {
  city: string
  title: string
  institute: string
  date: string
  description: string
  metrics?: { value: string; label: string }[]
  index: number
  isVisible: boolean
}

export function PitStopCard({
  city,
  title,
  institute,
  date,
  description,
  metrics,
  index,
  isVisible,
}: PitStopCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative w-full max-w-sm mx-auto md:mx-0 ${
        isEven ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
      }`}
      aria-label={`Career stop ${index + 1}: ${title} at ${institute}`}
    >
      {/* Location badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-sm font-medium rounded-full bg-primary/10 text-primary"
      >
        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
        <span>{city}</span>
      </motion.div>

      {/* Card content */}
      <div className="p-5 bg-card border border-border rounded-2xl shadow-sm">
        <header className="mb-3">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
            {date}
          </p>
          <h3 className="text-lg font-semibold text-primary leading-tight text-balance">
            {title}
          </h3>
          <p className="text-sm text-foreground/80 font-medium mt-0.5">{institute}</p>
        </header>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex-1 min-w-[100px] p-3 bg-secondary rounded-lg text-center"
                role="figure"
                aria-label={`${metric.value} ${metric.label}`}
              >
                <p className="text-lg font-bold text-primary">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Connection dot to road */}
      <div
        className={`hidden md:block absolute top-1/2 ${
          isEven ? "right-0" : "left-0"
        } w-3 h-3 bg-primary rounded-full border-2 border-background transform -translate-y-1/2`}
        aria-hidden="true"
      />
    </motion.article>
  )
}
