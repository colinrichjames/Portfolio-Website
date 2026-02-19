"use client"

import { motion } from "framer-motion"

interface CarIconProps {
  className?: string
}

export function CarIcon({ className }: CarIconProps) {
  return (
    <motion.svg
      width="200"
      height="120"
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ramblin' Wreck — Georgia Tech's iconic 1930 Ford Model A"
      role="img"
      // ── Entrance: drive in from the left ──
      initial={{ x: -60, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        // ── Engine vibration: subtle y-axis rumble (starts after entry) ──
        y: [0, -1.5, 0, 1.5, 0],
      }}
      transition={{
        x:       { type: "spring", stiffness: 180, damping: 22 },
        opacity: { duration: 0.35 },
        y:       { duration: 0.12, repeat: Infinity, ease: "easeInOut", delay: 0.65 },
      }}
      style={{
        filter: "drop-shadow(0 0 10px rgba(179, 163, 105, 0.5))",
      }}
    >
      {/* ── Car body ── */}
      <path
        d="M40 70H160C165 70 170 65 170 60V50C170 45 165 40 160 40H60C55 40 50 45 50 50V60C50 65 45 70 40 70Z"
        fill="#B3A369"
      />
      {/* ── Roof / cab ── */}
      <path
        d="M65 40H140C140 30 135 20 125 20H80C70 20 65 30 65 40Z"
        fill="#FFFFFF"
      />
      {/* ── Running board / body stripe ── */}
      <rect x="50" y="70" width="100" height="6" rx="3" fill="#FFFFFF" />
      {/* ── Front wheel ── */}
      <circle cx="65" cy="85" r="15" fill="#1A1A1A" stroke="#B3A369" strokeWidth="2" />
      {/* ── Rear wheel ── */}
      <circle cx="135" cy="85" r="15" fill="#1A1A1A" stroke="#B3A369" strokeWidth="2" />
      {/* ── Headlight ── */}
      <circle cx="165" cy="55" r="5" fill="#B3A369" />
      {/* ── Front bumper / fender ── */}
      <rect x="30" y="65" width="20" height="4" fill="#B3A369" />
    </motion.svg>
  )
}
