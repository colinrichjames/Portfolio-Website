"use client"

import { motion } from "framer-motion"
import { Github, FileText, Play, X } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  videoId: string
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
      "Developed a full-stack web application (React/Node.js) featuring an OpenAI-driven assistant named \"Roger\" to provide real-time DIY feedback based on adult learning theories.",
    videoId: "uYPU2nKgteI",
    githubUrl: "https://github.com/colinrichjames/MKRHOME-Project",
    pdfUrl: "/mkrhome.pdf",
    tags: ["React", "Node.js", "OpenAI", "HCI"],
  },
  {
    id: "ramblin-city",
    title: "Ramblin' City",
    subtitle: "Video Game Design",
    description:
      "Led a cross-functional team of three to architect a real-time 2D simulation from the ground up. I engineered complex AI entity behaviors\u2014including hostile 'Yellow Jacket' swarms and 'Bulldog' pathfinding\u2014while implementing a robust game state ecosystem featuring resource management, health regeneration systems, and modular quest architecture. This project serves as a technical deep dive into real-time state synchronization and user-centered interaction design within a high-stakes, adversarial environment.",
    videoId: "OvySUf1DCRs",
    githubUrl: "#",
    pdfUrl: "#",
    tags: ["Unity", "C#", "Game Design", "Team Lead"],
  },
  {
    id: "iot-glove",
    title: "IoT Smart Glove",
    subtitle: "Ubiquitous Computing",
    description:
      "Developed a wearable IoT prototype designed to redefine human-computer interaction by replacing traditional remote controls with a seamless, gesture-based input system. We engineered a Random Forest classifier to recognize dynamic hand gestures in real-time, facilitating intuitive control over smart home ecosystems.",
    videoId: "Ry99R262HbM",
    githubUrl: "#",
    pdfUrl: "/smartglove.pdf",
    tags: ["Arduino", "ML", "Wearables", "HCI"],
  },
]

function VideoThumbnail({ videoId, title }: { videoId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-secondary/50"
      aria-label={`Play ${title} video`}
    >
      {/* YouTube Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`${title} video thumbnail`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          // Fallback to hqdefault if maxresdefault doesn't exist
          e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  )
}

function PdfModal({ pdfUrl, title, onClose }: { pdfUrl: string; title: string; onClose: () => void }) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose],
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-[90vw] h-[85vh] max-w-5xl bg-background rounded-xl border border-border shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
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

        {/* PDF iframe */}
        <iframe
          src={pdfUrl}
          title={`${title} paper`}
          className="flex-1 w-full"
        />
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [pdfOpen, setPdfOpen] = useState(false)
  const hasPdf = project.pdfUrl !== "#"

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
      {/* Card Container */}
      <div className="flex flex-col h-full bg-card/30 backdrop-blur-md rounded-3xl border border-white/10 shadow-lg overflow-hidden hover:border-primary/30 transition-colors duration-300">
        {/* Header */}
        <div className="p-5 pb-3 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wide text-balance">
            {project.title}
          </h3>
          <p className="text-sm text-primary/70 uppercase tracking-wider mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Video */}
        <div className="px-4">
          <VideoThumbnail videoId={project.videoId} title={project.title} />
        </div>

        {/* Content */}
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

          {/* Links */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium group-hover:underline">Code</span>
            </a>
            {hasPdf && (
              <button
                onClick={() => setPdfOpen(true)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
                aria-label={`View ${project.title} paper`}
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

export function ProjectPortfolio() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 bg-background scroll-mt-4 md:snap-start md:min-h-screen md:flex md:flex-col md:justify-center"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
          <h2
            id="portfolio-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter"
          >
            Project Portfolio
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my Georgia Tech MSCS projects bridging HCI research with practical engineering solutions.
          </p>
        </motion.header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
