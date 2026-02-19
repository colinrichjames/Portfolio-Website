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
        // ── Engine vibration: vintage bounce (starts after entry settles) ──
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
      {/* ── White running board stripe ── */}
      <rect x="45" y="75" width="110" height="6" rx="3" fill="#FFFFFF" />

      {/* ── Gold car body ── */}
      <path
        d="M50 75H155V60C155 55 150 50 145 50H60C55 50 50 55 50 60V75Z"
        fill="#B3A369"
      />

      {/* ── Front hood / engine compartment ── */}
      <path
        d="M155 75H170V65C170 60 165 58 160 58H155V75Z"
        fill="#B3A369"
      />

      {/* ── White soft top / cab ── */}
      <path d="M65 50H135L125 30H75L65 50Z" fill="#FFFFFF" />

      {/* ── Front wheel ── */}
      <circle cx="65" cy="85" r="18" fill="#1A1A1A" stroke="#B3A369" strokeWidth="3" />
      <motion.g
        style={{ transformOrigin: "65px 85px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <line x1="65" y1="68" x2="65" y2="102" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="48" y1="85" x2="82" y2="85" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="53" y1="73" x2="77" y2="97" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="77" y1="73" x2="53" y2="97" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
      </motion.g>
      <circle cx="65" cy="85" r="5" fill="#B3A369" opacity="0.85" />

      {/* ── Rear wheel ── */}
      <circle cx="135" cy="85" r="18" fill="#1A1A1A" stroke="#B3A369" strokeWidth="3" />
      <motion.g
        style={{ transformOrigin: "135px 85px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <line x1="135" y1="68" x2="135" y2="102" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="118" y1="85" x2="152" y2="85" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="123" y1="73" x2="147" y2="97" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="147" y1="73" x2="123" y2="97" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
      </motion.g>
      <circle cx="135" cy="85" r="5" fill="#B3A369" opacity="0.85" />

      {/* ── Headlight ── */}
      <circle cx="168" cy="62" r="6" fill="#B3A369" stroke="#FFFFFF" strokeWidth="1" />

      {/* ── Grille bar ── */}
      <rect x="153" y="55" width="4" height="20" fill="#B3A369" />
    </motion.svg>
  )
}
