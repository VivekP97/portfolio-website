import { useMemo } from 'react'
import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react'
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
      skills: w.skills,
      logo: w.logo,
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
      skills: e.skills,
      logo: e.logo,
    })
  }
  for (const c of timelineData.certifications) {
    entries.push({
      type: 'certification',
      id: c.id,
      startDate: c.startDate,
      endDate: c.endDate,
      title: c.name,
      subtitle: c.institution,
      skills: c.skills,
      logo: c.logo,
    })
  }
  return entries
}

export function Timeline() {
  const sortedEntries = useMemo(() => {
    const entries = toEntries()
    return entries.sort((a, b) => {
      const aOngoing = a.endDate == null
      const bOngoing = b.endDate == null
      if (aOngoing && !bOngoing) return -1
      if (!aOngoing && bOngoing) return 1
      if (aOngoing && bOngoing)
        return (b.startDate ?? '').localeCompare(a.startDate ?? '')
      return (b.endDate ?? '').localeCompare(a.endDate ?? '')
    })
  }, [])

  return (
    <section id="timeline" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-sage-900 dark:text-sage-100 sm:text-3xl">
          Timeline
        </h2>
        <p className="mt-2 text-sage-600 dark:text-sage-400">
          Click or tap cards to expand experience details.
        </p>
        <ul
          className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-sage-700 dark:text-sage-300"
          aria-label="Timeline item types"
        >
          {(
            [
              { type: 'work' as const, label: 'Work experience' },
              { type: 'education' as const, label: 'Education' },
              { type: 'certification' as const, label: 'Certification' },
            ]
          ).map(({ type, label }) => (
            <li
              key={type}
              className="flex items-center gap-2 rounded-full border border-sage-200 bg-white px-4 py-1.5 shadow-sm dark:border-sage-700 dark:bg-sage-900/40"
            >
              <LegendIcon type={type} />
              <span className="font-medium text-sage-800 dark:text-sage-100">{label}</span>
            </li>
          ))}
        </ul>

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
                        skills={entry.skills}
                        logo={entry.logo}
                      />
                    </div>
                  ) : (
                    <div />
                  )}
                  <div className="relative z-10 flex justify-center" aria-hidden>
                    <TimelineDot type={entry.type} />
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
                        skills={entry.skills}
                        logo={entry.logo}
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

const DOT_GRADIENT: Record<TimelineEntry['type'], string> = {
  work: 'from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700',
  education: 'from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700',
  certification: 'from-violet-400 to-violet-600 dark:from-violet-500 dark:to-violet-700',
}

const LEGEND_ICON_STYLES: Record<
  TimelineEntry['type'],
  { box: string; icon: string }
> = {
  work: {
    box: 'border-blue-300 bg-blue-50 dark:border-blue-600/60 dark:bg-blue-950/50',
    icon: 'text-blue-600 dark:text-blue-400',
  },
  education: {
    box: 'border-amber-300 bg-amber-50 dark:border-amber-600/60 dark:bg-amber-950/40',
    icon: 'text-amber-600 dark:text-amber-400',
  },
  certification: {
    box: 'border-violet-300 bg-violet-50 dark:border-violet-600/60 dark:bg-violet-950/50',
    icon: 'text-violet-600 dark:text-violet-400',
  },
}

function TimelineDot({
  type,
  size = 'default',
}: {
  type: TimelineEntry['type']
  size?: 'sm' | 'default'
}) {
  const gradient = DOT_GRADIENT[type]
  const isSm = size === 'sm'
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} ${
        isSm ? 'h-3 w-3 p-[2px]' : 'h-5 w-5 p-[4px]'
      }`}
    >
      <span className="h-full w-full rounded-full bg-white dark:bg-sage-950" />
    </span>
  )
}

function LegendIcon({ type }: { type: TimelineEntry['type'] }) {
  const styles = LEGEND_ICON_STYLES[type]
  const baseBox =
    'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs'

  switch (type) {
    case 'work':
      return (
        <span className={`${baseBox} ${styles.box}`} aria-hidden>
          <BriefcaseBusiness className={`h-4 w-4 ${styles.icon}`} />
        </span>
      )
    case 'education':
      return (
        <span className={`${baseBox} ${styles.box}`} aria-hidden>
          <GraduationCap className={`h-4 w-4 ${styles.icon}`} />
        </span>
      )
    case 'certification':
      return (
        <span className={`${baseBox} ${styles.box}`} aria-hidden>
          <Award className={`h-4 w-4 ${styles.icon}`} />
        </span>
      )
    default:
      return null
  }
}
