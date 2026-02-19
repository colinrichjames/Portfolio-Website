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
      aria-label="Ramblin' Wreck — Georgia Tech's iconic 1930 Ford Sport Coupe"
      role="img"
      // ── Entrance: drive in from the left ──
      initial={{ x: -60, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        // ── Idle physics: heavy 1930s engine — 50% slower than before ──
        y: [0, -1.5, 0, 1.5, 0],
      }}
      transition={{
        x:       { type: "spring", stiffness: 180, damping: 22 },
        opacity: { duration: 0.35 },
        y:       { duration: 0.24, repeat: Infinity, ease: "easeInOut", delay: 0.65 },
      }}
      style={{
        filter: "drop-shadow(0 0 10px rgba(179, 163, 105, 0.5))",
      }}
    >
      {/* ── White running board stripe ── */}
      <rect x="35" y="78" width="130" height="4" rx="2" fill="#FFFFFF" />

      {/* ── Gold car body ── */}
      <path
        d="M40 78H165V65C165 60 160 58 155 58H130V78H40Z"
        fill="#B3A369"
      />

      {/* ── Front hood extension ── */}
      <path d="M165 78V62H172V78H165Z" fill="#B3A369" />

      {/* ── Grille / front cap ── */}
      <rect x="172" y="60" width="5" height="18" fill="#B3A369" stroke="#FFFFFF" strokeWidth="0.5" />

      {/* ── White soft top / cab ── */}
      <path d="M60 58H120L110 35H75L60 58Z" fill="#FFFFFF" />

      {/* ── Front wheel (r=14) ── */}
      <circle cx="65" cy="85" r="14" fill="#1A1A1A" stroke="#B3A369" strokeWidth="2" />
      <motion.g
        style={{ transformOrigin: "65px 85px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <line x1="65" y1="72" x2="65" y2="98" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="52" y1="85" x2="78" y2="85" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="56" y1="76" x2="74" y2="94" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="74" y1="76" x2="56" y2="94" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
      </motion.g>
      <circle cx="65" cy="85" r="4" fill="#B3A369" opacity="0.85" />

      {/* ── Rear wheel (r=14) ── */}
      <circle cx="135" cy="85" r="14" fill="#1A1A1A" stroke="#B3A369" strokeWidth="2" />
      <motion.g
        style={{ transformOrigin: "135px 85px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <line x1="135" y1="72" x2="135" y2="98" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="122" y1="85" x2="148" y2="85" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="126" y1="76" x2="144" y2="94" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="144" y1="76" x2="126" y2="94" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
      </motion.g>
      <circle cx="135" cy="85" r="4" fill="#B3A369" opacity="0.85" />

      {/* ── Headlight ── */}
      <circle cx="170" cy="65" r="5" fill="#B3A369" stroke="#FFFFFF" strokeWidth="1" />
    </motion.svg>
  )
}
