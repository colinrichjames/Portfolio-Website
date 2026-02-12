"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LINE_DURATION = 600
const FADE_DURATION = 200

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading")

  useEffect(() => {
    // Line finishes at 600ms, then fade content in
    const lineTimer = setTimeout(() => setPhase("revealing"), LINE_DURATION)
    // Content fade completes at 800ms, clean up loader
    const doneTimer = setTimeout(() => setPhase("done"), LINE_DURATION + FADE_DURATION)
    return () => {
      clearTimeout(lineTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  return (
    <>
      {/* Gold loading line */}
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="loader-line"
            className="fixed top-0 left-0 right-0 z-[100] h-[2px]"
            style={{ backgroundColor: "#B3A369", transformOrigin: "left" }}
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{
              scaleX: phase === "loading" ? 1 : 1,
              opacity: phase === "revealing" ? 0 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={
              phase === "loading"
                ? { scaleX: { duration: LINE_DURATION / 1000, ease: [0.65, 0, 0.35, 1] } }
                : { opacity: { duration: FADE_DURATION / 1000 } }
            }
          />
        )}
      </AnimatePresence>

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "loading" ? 0 : 1 }}
        transition={{ duration: FADE_DURATION / 1000 }}
      >
        {children}
      </motion.div>
    </>
  )
}
