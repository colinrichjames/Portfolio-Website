"use client"

import { motion } from "framer-motion"
import { FileText, X, Volume2, VolumeX } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  videoId: string
  device: "iphone" | "macbook"
  githubUrl: string
  pdfUrl: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: "mkrhome",
    title: "MKRHome",
    subtitle: "AI-Powered DIY Learning",
    description:
      'Developed a full-stack web application (React/Node.js) featuring an OpenAI-driven assistant named "Roger" to provide real-time DIY feedback based on adult learning theories.',
    videoId: "uYPU2nKgteI",
    device: "iphone",
    githubUrl: "https://github.com/colinrichjames/MKRHOME-Project",
    pdfUrl: "/mkrhome.pdf",
    tags: ["React", "Node.js", "OpenAI", "HCI"],
  },
  {
    id: "ramblin-city",
    title: "Ramblin' City",
    subtitle: "Video Game Design",
    description:
      "Led a cross-functional team of three to architect a real-time 2D simulation from the ground up. I engineered complex AI entity behaviors\u2014including hostile \u2018Yellow Jacket\u2019 swarms and \u2018Bulldog\u2019 pathfinding\u2014while implementing a robust game state ecosystem featuring resource management, health regeneration systems, and modular quest architecture.",
    videoId: "OvySUf1DCRs",
    device: "macbook",
    githubUrl: "https://github.com/colinrichjames/RamblinCity",
    pdfUrl: "#",
    tags: ["Unity", "C#", "Game Design", "Team Lead"],
  },
  {
    id: "iot-glove",
    title: "IoT Smart Glove",
    subtitle: "Ubiquitous Computing",
    description:
      "Developed a wearable IoT prototype designed to redefine human-computer interaction by replacing traditional remote controls with a seamless, gesture-based input system. We engineered a Random Forest classifier to recognize dynamic hand gestures in real-time.",
    videoId: "Ry99R262HbM",
    device: "iphone",
    githubUrl: "#",
    pdfUrl: "/smartglove.pdf",
    tags: ["Arduino", "ML", "Wearables", "HCI"],
  },
]

// ── YouTube IFrame API postMessage helper ────────────────────────────────────
function ytCmd(iframe: HTMLIFrameElement | null, func: string) {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func, args: [] }),
    "*"
  )
}

// ── Device Showcase ──────────────────────────────────────────────────────────

function DeviceShowcase({
  videoId,
  device,
  isLinkHovered,
}: {
  videoId: string
  device: "iphone" | "macbook"
  isLinkHovered: boolean
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  // Scroll-triggered play / pause at 30% viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Brief delay ensures iframe is ready to receive postMessage
          setTimeout(() => ytCmd(iframeRef.current, "playVideo"), 400)
        } else {
          ytCmd(iframeRef.current, "pauseVideo")
        }
      },
      { threshold: 0.3 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleMute = () => {
    ytCmd(iframeRef.current, isMuted ? "unMute" : "mute")
    setIsMuted((m) => !m)
  }

  // enablejsapi=1 required for postMessage control
  // loop=1&playlist=ID required for single-video loop
  const src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${videoId}&iv_load_policy=3`

  // Shared screen interior: video + overlays
  const screen = (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <iframe
        ref={iframeRef}
        src={src}
        title="Project demo video"
        allow="autoplay; encrypted-media"
        className="absolute inset-0 w-full h-full"
        style={{ border: "none", pointerEvents: "none" }}
      />

      {/* Code / Paper hover → backdrop blur dims the video */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.45)" }}
        animate={{ opacity: isLinkHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Gold sound toggle pill — floats over video */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold tracking-widest cursor-pointer"
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(179,163,105,0.65)",
          color: "#B3A369",
        }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-2.5 h-2.5" />
        ) : (
          <Volume2 className="w-2.5 h-2.5" />
        )}
        {isMuted ? "OFF" : "ON"}
      </motion.button>
    </div>
  )

  // ── iPhone frame ──────────────────────────────────────────────────────────
  if (device === "iphone") {
    return (
      <motion.div
        ref={containerRef}
        className="relative mx-auto"
        style={{ width: "clamp(130px, 46%, 160px)" }}
        animate={{ scale: isMuted ? 1 : 1.04 }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
      >
        {/* Body */}
        <div
          className="relative rounded-[2rem] bg-black overflow-hidden"
          style={{
            aspectRatio: "9 / 19.5",
            border: "2px solid #B3A369",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04), 0 0 20px rgba(179,163,105,0.4), 0 0 40px rgba(179,163,105,0.15)",
          }}
        >
          {/* Dynamic island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[38%] h-[4.5%] bg-black rounded-b-[1rem] z-30" />
          {/* Top status gradient */}
          <div className="absolute top-0 left-0 right-0 z-20 h-[8%] bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />
          {screen}
        </div>

        {/* Power button (right edge) */}
        <div
          className="absolute rounded-r-sm"
          style={{
            right: "-3px",
            top: "30%",
            width: "3px",
            height: "10%",
            background: "#B3A369",
          }}
        />
        {/* Volume up (left edge) */}
        <div
          className="absolute rounded-l-sm"
          style={{
            left: "-3px",
            top: "22%",
            width: "3px",
            height: "7%",
            background: "#B3A369",
          }}
        />
        {/* Volume down (left edge) */}
        <div
          className="absolute rounded-l-sm"
          style={{
            left: "-3px",
            top: "32%",
            width: "3px",
            height: "7%",
            background: "#B3A369",
          }}
        />
      </motion.div>
    )
  }

  // ── MacBook frame ─────────────────────────────────────────────────────────
  return (
    <motion.div
      ref={containerRef}
      className="relative w-full"
      animate={{ scale: isMuted ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      {/* Screen lid */}
      <div
        className="relative w-full rounded-t-xl bg-[#0D0D0D] overflow-hidden"
        style={{
          aspectRatio: "16 / 10",
          border: "2px solid #B3A369",
          borderBottom: "none",
          boxShadow: "0 0 24px rgba(179,163,105,0.18)",
        }}
      >
        {/* Camera dot */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 z-30 w-[6px] h-[6px] rounded-full bg-zinc-700 ring-1 ring-zinc-600" />
        {/* Bezel inset — leaves room for top camera bar */}
        <div className="absolute inset-x-2 bottom-[3px] overflow-hidden bg-black" style={{ top: "16px" }}>
          {screen}
        </div>
      </div>

      {/* Base / keyboard deck */}
      <div
        className="flex items-center justify-center rounded-b-lg"
        style={{
          height: "20px",
          background: "#141414",
          border: "2px solid #B3A369",
          borderTop: "1px solid rgba(179,163,105,0.25)",
        }}
      >
        {/* Trackpad */}
        <div
          className="rounded-sm"
          style={{
            width: "48px",
            height: "10px",
            background: "#1e1e1e",
            border: "1px solid #2a2a2a",
          }}
        />
      </div>

      {/* Ground shadow */}
      <div
        className="mx-auto rounded-b-full"
        style={{ height: "3px", width: "95%", background: "rgba(0,0,0,0.3)" }}
      />
    </motion.div>
  )
}

// ── PDF Modal ────────────────────────────────────────────────────────────────

function PdfModal({
  pdfUrl,
  title,
  onClose,
}: {
  pdfUrl: string
  title: string
  onClose: () => void
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} paper`}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-[90vw] h-[85vh] max-w-5xl bg-background rounded-xl border border-border shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">{title} — Paper</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <iframe src={pdfUrl} title={`${title} paper`} className="flex-1 w-full" />
      </div>
    </div>
  )
}

// ── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [pdfOpen, setPdfOpen] = useState(false)
  const [isLinkHovered, setIsLinkHovered] = useState(false)
  const hasPdf = project.pdfUrl !== "#"
  const hasGithub = project.githubUrl !== "#"

  return (
    <>
      {pdfOpen && hasPdf && (
        <PdfModal
          pdfUrl={project.pdfUrl}
          title={project.title}
          onClose={() => setPdfOpen(false)}
        />
      )}

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="flex flex-col h-full"
      >
        <div className="flex flex-col h-full bg-card/30 backdrop-blur-md rounded-3xl border border-white/10 shadow-lg overflow-hidden hover:border-primary/30 transition-colors duration-300">
          {/* Title */}
          <div className="p-5 pb-3 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wide text-balance">
              {project.title}
            </h3>
            <p className="text-sm text-primary/70 uppercase tracking-wider mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Device showcase */}
          <div
            className={`relative flex items-center justify-center ${
              project.device === "iphone"
                ? "py-7 bg-gradient-to-b from-zinc-950/70 via-zinc-900/40 to-zinc-950/70"
                : "px-5 pt-3 pb-1"
            }`}
          >
            <DeviceShowcase
              videoId={project.videoId}
              device={project.device}
              isLinkHovered={isLinkHovered}
            />
          </div>

          {/* Metadata */}
          <div className="flex flex-col flex-1 p-5 pt-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Links — hover triggers video backdrop blur */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  aria-label={`View ${project.title} on GitHub`}
                  onMouseEnter={() => setIsLinkHovered(true)}
                  onMouseLeave={() => setIsLinkHovered(false)}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="text-sm font-medium group-hover:underline">Code</span>
                </a>
              )}
              {hasPdf && (
                <button
                  onClick={() => setPdfOpen(true)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
                  aria-label={`View ${project.title} paper`}
                  onMouseEnter={() => setIsLinkHovered(true)}
                  onMouseLeave={() => setIsLinkHovered(false)}
                >
                  <FileText className="w-5 h-5" />
                  <span className="text-sm font-medium group-hover:underline">Paper</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────

export function ProjectPortfolio() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 bg-background scroll-mt-4 md:snap-start md:min-h-screen md:flex md:flex-col md:justify-center"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* View Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <motion.a
            href="/ColinJamesResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary text-primary text-sm font-medium tracking-wide hover:bg-primary/10 transition-colors cursor-pointer"
            aria-label="View Resume (PDF)"
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            View Resume
          </motion.a>
        </motion.div>

        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-sm md:text-base text-primary uppercase tracking-[0.2em] font-medium mb-3">
            Graduate Research
          </p>
          <motion.h2
            id="portfolio-heading"
            initial={{ letterSpacing: "-0.1em" }}
            whileInView={{ letterSpacing: "-0.05em" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
          >
            Project Portfolio
          </motion.h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my Georgia Tech MSCS projects bridging HCI research with practical
            engineering solutions.
          </p>
        </motion.header>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
