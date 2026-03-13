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
    <section id="timeline" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-sage-900 dark:text-sage-100 sm:text-3xl">
          Timeline
        </h2>
        <p className="mt-2 text-sage-600 dark:text-sage-400">
          Click or tap cards to expand experience details.
        </p>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-sage-300 dark:bg-sage-700"
            aria-hidden
          />
          <ul className="space-y-0">
            {sortedEntries.map((entry, index) => {
              const isLeft = index % 2 === 0
              return (
                <li
                  key={entry.id}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-6 first:pt-0"
                  style={{ gridTemplateColumns: '1fr auto 1fr' }}
                >
                  {isLeft ? (
                    <div className="flex justify-end pr-4">
                      <TimelineItem
                        type={entry.type}
                        title={entry.title}
                        subtitle={entry.subtitle}
                        startDate={entry.startDate}
                        endDate={entry.endDate}
                        responsibilities={entry.responsibilities}
                      />
                    </div>
                  ) : (
                    <div />
                  )}
                  <div className="relative z-10 flex justify-center" aria-hidden>
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sage-400 to-sage-600 p-[3px] dark:from-sage-500 dark:to-sage-700">
                      <span className="h-full w-full rounded-full bg-sage-50 dark:bg-sage-950" />
                    </span>
                  </div>
                  {!isLeft ? (
                    <div className="flex justify-start pl-4">
                      <TimelineItem
                        type={entry.type}
                        title={entry.title}
                        subtitle={entry.subtitle}
                        startDate={entry.startDate}
                        endDate={entry.endDate}
                        responsibilities={entry.responsibilities}
                      />
                    </div>
                  ) : (
                    <div />
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
