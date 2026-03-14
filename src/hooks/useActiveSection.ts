import { useEffect, useRef, useState } from 'react'

const SECTION_IDS = ['hero', 'timeline', 'projects', 'skills', 'contact'] as const
export type SectionId = (typeof SECTION_IDS)[number]

/**
 * Returns the id of the section that is currently most visible in the viewport.
 * Uses Intersection Observer; the section with the largest intersection ratio is active.
 */
export function useActiveSection(): SectionId | null {
  const [activeId, setActiveId] = useState<SectionId | null>(null)
  const ratiosRef = useRef<Record<string, number>>({})

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el != null
    )
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (SECTION_IDS.includes(id as SectionId)) {
            ratiosRef.current[id] = entry.intersectionRatio
          }
        }
        const ratios = ratiosRef.current
        let best: SectionId | null = null
        let bestRatio = 0
        for (const id of SECTION_IDS) {
          const ratio = ratios[id] ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        setActiveId(best)
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // focus on upper portion of viewport
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return activeId
}
