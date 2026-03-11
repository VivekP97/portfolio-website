import { useMemo } from 'react'
import { timelineData } from '../../data/resumeData'
import type { TimelineEntry } from '../../types'
import { TimelineItem } from './TimelineItem'

function toEntries(): TimelineEntry[] {
  const entries: TimelineEntry[] = []
  for (const w of timelineData.workExperience) {
    entries.push({
      type: 'work',
      id: w.id,
      startDate: w.startDate,
      endDate: w.endDate,
      title: w.jobTitle,
      subtitle: w.company,
      responsibilities: w.responsibilities,
    })
  }
  for (const e of timelineData.education) {
    entries.push({
      type: 'education',
      id: e.id,
      startDate: e.startDate,
      endDate: e.endDate,
      title: e.degree,
      subtitle: e.institution,
    })
  }
  for (const c of timelineData.certifications) {
    entries.push({
      type: 'certification',
      id: c.id,
      startDate: '',
      endDate: null,
      title: c.name,
      subtitle: c.institution,
    })
  }
  return entries
}

export function Timeline() {
  const sortedEntries = useMemo(() => {
    const entries = toEntries()
    return entries.sort((a, b) => {
      if (!a.startDate) return 1
      if (!b.startDate) return -1
      return b.startDate.localeCompare(a.startDate)
    })
  }, [])

  return (
    <section id="timeline" className="scroll-mt-16 border-t border-sage-200 bg-white py-16 dark:border-sage-800 dark:bg-sage-950/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-sage-900 dark:text-sage-100 sm:text-3xl">
          Timeline
        </h2>
        <p className="mt-2 text-sage-600 dark:text-sage-400">
          Education, experience, and certifications
        </p>
        <ul className="mt-8 list-none">
          {sortedEntries.map((entry) => (
            <TimelineItem
              key={entry.id}
              type={entry.type}
              title={entry.title}
              subtitle={entry.subtitle}
              startDate={entry.startDate}
              endDate={entry.endDate}
              responsibilities={entry.responsibilities}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
