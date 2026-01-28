"use client"

import { motion } from "framer-motion"

interface CarIconProps {
  className?: string
}

export function CarIcon({ className }: CarIconProps) {
  return (
    <motion.svg
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ramblin' Wreck - Georgia Tech's iconic 1930 Ford Model A"
      role="img"
    >
      {/* Ramblin' Wreck - 1930 Ford Model A Style */}
      
      {/* Car Body - Classic Vintage Shape */}
      <motion.path
        d="M12 28 L12 20 L18 20 L22 14 L58 14 L62 20 L68 20 L68 28"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.9"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Hood - Long vintage hood */}
      <motion.rect
        x="8"
        y="20"
        width="20"
        height="8"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />
      
      {/* Hood Grille Lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <line x1="10" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <line x1="10" y1="24" x2="26" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
        <line x1="10" y1="26" x2="26" y2="26" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </motion.g>
      
      {/* Cabin */}
      <motion.path
        d="M28 20 L28 14 L32 10 L52 10 L56 14 L56 20 Z"
        fill="currentColor"
        fillOpacity="0.95"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      />
      
      {/* Windows */}
      <motion.rect
        x="33"
        y="12"
        width="8"
        height="6"
        rx="1"
        className="fill-background"
        fillOpacity="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.rect
        x="43"
        y="12"
        width="8"
        height="6"
        rx="1"
        className="fill-background"
        fillOpacity="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      
      {/* Running Board */}
      <motion.rect
        x="18"
        y="28"
        width="40"
        height="2"
        fill="currentColor"
        fillOpacity="0.8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
      
      {/* Rear fender */}
      <motion.path
        d="M56 20 L68 20 L68 28 L56 28"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      />
      
      {/* Front Wheel - Spoke style */}
      <motion.circle
        cx="22"
        cy="30"
        r="8"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.circle
        cx="22"
        cy="30"
        r="4"
        className="fill-background"
        fillOpacity="0.2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      
      {/* Rear Wheel - Spoke style */}
      <motion.circle
        cx="58"
        cy="30"
        r="8"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />
      <motion.circle
        cx="58"
        cy="30"
        r="4"
        className="fill-background"
        fillOpacity="0.2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      
      {/* Front Headlight */}
      <motion.circle
        cx="6"
        cy="22"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
      
      {/* Spare Tire on side (iconic Model A feature) */}
      <motion.circle
        cx="72"
        cy="24"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
    </motion.svg>
  )
}
