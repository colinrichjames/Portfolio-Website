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
      aria-label="Ramblin' Wreck — Georgia Tech's 1930 Ford Model A Sport Coupe"
      role="img"
      // ── Entrance: drive in from the left ──
      initial={{ x: -60, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        // ── Heavy 1930s idle: slow loping rumble ──
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
      {/* ── Fender arc — swooping white curve over both wheels ── */}
      <path
        d="M30 80C30 70 50 65 70 65H130C150 65 170 70 170 80"
        stroke="#FFFFFF"
        strokeWidth="4"
        fill="none"
      />

      {/* ── Running board ── */}
      <rect x="35" y="80" width="130" height="3" rx="1.5" fill="#FFFFFF" />

      {/* ── Gold car body ── */}
      <path
        d="M40 80H160V65C160 62 155 60 150 60H125V80H40Z"
        fill="#B3A369"
      />

      {/* ── Vertical radiator grille ── */}
      <rect x="160" y="58" width="6" height="22" fill="#B3A369" stroke="#FFFFFF" strokeWidth="0.5" />

      {/* ── Front cap / bumper ── */}
      <rect x="166" y="56" width="4" height="24" fill="#B3A369" stroke="#B3A369" strokeWidth="1" />

      {/* ── White soft top — rear-set Sport Coupe cabin ── */}
      <path d="M55 60H115L105 38H70L55 60Z" fill="#FFFFFF" />

      {/* ── Front wheel (cx=60, r=14) ── */}
      <circle cx="60" cy="85" r="14" fill="#1A1A1A" stroke="#B3A369" strokeWidth="2" />
      <motion.g
        style={{ transformOrigin: "60px 85px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <line x1="60" y1="72" x2="60" y2="98" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="47" y1="85" x2="73" y2="85" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="51" y1="76" x2="69" y2="94" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="69" y1="76" x2="51" y2="94" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
      </motion.g>
      <circle cx="60" cy="85" r="4" fill="#B3A369" opacity="0.85" />

      {/* ── Rear wheel (cx=140, r=14) ── */}
      <circle cx="140" cy="85" r="14" fill="#1A1A1A" stroke="#B3A369" strokeWidth="2" />
      <motion.g
        style={{ transformOrigin: "140px 85px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <line x1="140" y1="72" x2="140" y2="98" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="127" y1="85" x2="153" y2="85" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="131" y1="76" x2="149" y2="94" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
        <line x1="149" y1="76" x2="131" y2="94" stroke="#B3A369" strokeWidth="1.5" opacity="0.6" />
      </motion.g>
      <circle cx="140" cy="85" r="4" fill="#B3A369" opacity="0.85" />

      {/* ── Headlight ── */}
      <circle cx="168" cy="64" r="5" fill="#B3A369" stroke="#FFFFFF" strokeWidth="1" />
    </motion.svg>
  )
}
