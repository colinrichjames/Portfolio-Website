"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { MapPin } from "lucide-react"

const ROAD_PATH =
  "M 115 75 C 130 220, 370 440, 520 400 C 600 380, 680 310, 740 320 C 830 340, 320 10, 115 75"

// Chronological order: oldest → newest (the car drives forward through time)
const stops = [
  {
    city: "Seattle, WA",
    title: "Business & Technical Foundation",
    institute: "UW Foster School of Business",
    date: "2017 - 2020",
    description:
      "Earned a Bachelor's in Management Information Systems, focusing on the critical intersection of business strategy and technical architecture.",
    metrics: [
      { value: "MIS", label: "Degree" },
      { value: "3.5", label: "GPA" },
    ],
  },
  {
    city: "Dallas, TX",
    title: "Technology Development Program",
    institute: "AT&T",
    date: "2021 - 2023",
    description:
      "Selected for AT&T's elite Technology Development Program. Executed a 1.5-year residency focused on Technical Business Management (TBM). Managed high-stakes rotations in Software Engineering and UX Design, architecting a $18M Azure migration and self-install fiber journeys.",
    metrics: [
      { value: "$18M", label: "Cost Savings" },
      { value: "2", label: "Rotations" },
    ],
  },
  {
    city: "Atlanta, GA",
    title: "Master of Science in CS: Engineering & Design Strategy",
    institute: "Georgia Tech",
    date: "2023 - 2025",
    description:
      "MSCS with a specialization in Human-Computer Interaction (HCI). Mastered the intersection of backend architecture and user-centered design through advanced coursework.",
    metrics: [
      { value: "3.8", label: "GPA" },
      { value: "MSCS", label: "Degree" },
    ],
  },
  {
    city: "Seattle, WA",
    title: "Engineering Product Lead",
    institute: "AT&T",
    date: "2024 - Present",
    description:
      "Product Owner and Strategic Lead for the Unified Front Door (UFD) ecosystem. I orchestrate cross-functional teams across Engineering, DevOps, and Data Science to manage the intake lifecycle for 16,000+ users. While leading without direct reports, I define the product vision, set the technical tone for our SDLC, and bridge the gap between 6+ stakeholder groups and our core development teams.",
    metrics: [
      { value: "16K+", label: "Users" },
      { value: "6+", label: "Stakeholder Groups" },
    ],
  },
]

const cityMarkers = [
  { name: "Seattle, WA", cx: 115, cy: 75, labelY: -18 },
  { name: "Dallas, TX", cx: 520, cy: 400, labelY: 28 },
  { name: "Atlanta, GA", cx: 740, cy: 320, labelY: -18 },
]

// Which city marker index corresponds to each stop
const stopCityIndex = [0, 1, 2, 0]

export function RoadJourney() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  const [state, setState] = useState({
    carX: 115,
    carY: 75,
    isGoingLeft: false,
    activeStop: 0,
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const totalLength = path.getTotalLength()

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const currentLength = progress * totalLength
      const point = path.getPointAtLength(currentLength)
      const nextPoint = path.getPointAtLength(
        Math.min(currentLength + 5, totalLength)
      )

      let activeStop: number
      if (progress < 0.25) activeStop = 0
      else if (progress < 0.5) activeStop = 1
      else if (progress < 0.75) activeStop = 2
      else activeStop = 3

      setState({
        carX: point.x,
        carY: point.y,
        isGoingLeft: nextPoint.x < point.x,
        activeStop,
      })
    })

    return unsubscribe
  }, [scrollYProgress])

  const activeCityIdx = stopCityIndex[state.activeStop]
  const activeStopData = stops[state.activeStop]

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative md:snap-start"
      style={{ height: "300vh" }}
      aria-labelledby="journey-heading"
    >
      <div className="sticky top-0 h-[100dvh] flex flex-col px-4 py-6 md:py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-3 md:mb-6 shrink-0"
        >
          <h2
            id="journey-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tighter mb-1"
          >
            The Roadmap
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            A road trip through innovation and leadership
          </p>
        </motion.div>

        {/* Map + Card area */}
        <div className="flex-1 flex flex-col min-h-0 max-w-5xl mx-auto w-full">
          {/* SVG Map */}
          <div className="flex-1 min-h-0">
            <svg
              viewBox="0 0 900 480"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Road trip map showing career journey from Seattle to Dallas to Atlanta and back to Seattle"
            >
              <defs>
                <filter
                  id="gold-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Full road — dim gray dashed */}
              <path
                d={ROAD_PATH}
                fill="none"
                stroke="var(--border)"
                strokeWidth="3"
                strokeDasharray="10 6"
                opacity="0.35"
              />

              {/* Progress road — gold with glow */}
              <motion.path
                ref={pathRef}
                d={ROAD_PATH}
                fill="none"
                stroke="var(--primary)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#gold-glow)"
                style={{ pathLength: scrollYProgress }}
              />

              {/* City markers */}
              {cityMarkers.map((city, i) => {
                const isActive = activeCityIdx === i
                return (
                  <g key={city.name + i}>
                    {/* Pulse ring */}
                    {isActive && (
                      <circle
                        cx={city.cx}
                        cy={city.cy}
                        r="14"
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="2"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          values="8;20;8"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0;0.4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    {/* Dot */}
                    <circle
                      cx={city.cx}
                      cy={city.cy}
                      r={isActive ? 7 : 5}
                      fill={
                        isActive
                          ? "var(--primary)"
                          : "var(--muted-foreground)"
                      }
                      opacity={isActive ? 1 : 0.4}
                      style={{ transition: "all 0.3s ease" }}
                    />
                    {/* Label */}
                    <text
                      x={city.cx}
                      y={city.cy + city.labelY}
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight={isActive ? 600 : 400}
                      opacity={isActive ? 1 : 0.45}
                      className="fill-foreground"
                      style={{
                        fontFamily: "var(--font-sans)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {city.name}
                    </text>
                  </g>
                )
              })}

              {/* Ramblin' Wreck */}
              <g
                transform={`translate(${state.carX}, ${state.carY})`}
                style={{ transition: "transform 0.05s linear" }}
              >
                <image
                  href="/images/ramblinwreck.png"
                  x="-28"
                  y="-18"
                  width="56"
                  height="36"
                  transform={state.isGoingLeft ? "scale(-1, 1)" : ""}
                />
              </g>
            </svg>
          </div>

          {/* Active Stop Card */}
          <div className="relative h-52 md:h-56 shrink-0 mt-1">
            {stops.map((stop, i) => (
              <motion.div
                key={`${stop.institute}-${stop.date}`}
                initial={false}
                animate={{
                  opacity: state.activeStop === i ? 1 : 0,
                  y: state.activeStop === i ? 0 : 15,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`absolute inset-0 ${
                  state.activeStop !== i ? "pointer-events-none" : ""
                }`}
              >
                <div className="bg-card border border-border rounded-2xl p-4 md:p-5 shadow-sm h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin
                      className="w-4 h-4 text-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-primary">
                      {stop.city}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto whitespace-nowrap">
                      {stop.date}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-primary leading-tight mb-0.5 text-balance">
                    {stop.title}
                  </h3>
                  <p className="text-sm text-foreground/80">{stop.institute}</p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-2 line-clamp-2 md:line-clamp-3">
                    {stop.description}
                  </p>
                  {stop.metrics && (
                    <div className="flex gap-6 mt-3">
                      {stop.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <p className="text-lg font-bold text-primary">
                            {m.value}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
