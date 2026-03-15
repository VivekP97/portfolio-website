import type { ReactNode } from 'react'

/**
 * Parses a string for **keyword** segments and returns an array of React nodes
 * (plain strings and <strong> wrapped segments). Use for timeline responsibilities,
 * title, subtitle, or any copy that may contain bold markup.
 */
export function renderWithBold(text: string): ReactNode[] {
  if (typeof text !== 'string' || text === '') return [text]
  const segments = text.split(/(\*\*(?:.+?)\*\*)/g)
  return segments.map((segment, i) => {
    const boldMatch = segment.match(/^\*\*(.+)\*\*$/)
    if (boldMatch) {
      return <strong key={i}>{boldMatch[1]}</strong>
    }
    return segment
  })
}
