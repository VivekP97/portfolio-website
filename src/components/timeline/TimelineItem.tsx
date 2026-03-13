import { useState } from 'react'
import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { formatDateRange } from '../../lib/dateUtils'
import type { TimelineItemType } from '../../types'

type TimelineItemProps = {
  type: TimelineItemType
  title: string
  subtitle: string
  startDate: string
  endDate: string | null
  responsibilities?: string[]
}

export function TimelineItem({
  type,
  title,
  subtitle,
  startDate,
  endDate,
  responsibilities,
}: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false)
  const hasDetails = responsibilities && responsibilities.length > 0

  return (
    <div
      role={hasDetails ? 'button' : undefined}
      tabIndex={hasDetails ? 0 : undefined}
      onClick={hasDetails ? () => setExpanded((e) => !e) : undefined}
      onKeyDown={
        hasDetails
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setExpanded((e) => !e)
              }
            }
          : undefined
      }
      className={`w-full max-w-sm rounded-xl border border-sage-200 bg-sage-50/90 p-4 text-left shadow-sm transition-shadow dark:border-sage-800 dark:bg-sage-900/50 ${
        hasDetails ? 'cursor-pointer hover:shadow-md' : ''
      }`}
      aria-expanded={hasDetails ? expanded : undefined}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sage-300 bg-sage-100 dark:border-sage-700 dark:bg-sage-800" aria-hidden>
          <ItemIcon type={type} />
        </span>
        <div className="min-w-0 flex-1">
          {startDate && (
            <p className="text-xs font-medium uppercase tracking-wide text-sage-600 dark:text-sage-400">
              {formatDateRange(startDate, endDate)}
            </p>
          )}
          <h3 className={`font-semibold text-sage-900 dark:text-sage-100 ${startDate ? 'mt-0.5' : ''}`}>
            {title}
          </h3>
          <p className="text-sage-700 dark:text-sage-300">{subtitle}</p>
        </div>
      </div>

      {hasDetails && (
        <>
          <div
            className={`grid transition-[grid-template-rows] duration-200 ease-out ${
              expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
            aria-hidden={!expanded}
          >
            <div className="min-h-0 overflow-hidden">
              <ul className="mt-3 list-inside list-disc space-y-1 border-t border-sage-200 pt-3 text-sm text-sage-700 dark:border-sage-700 dark:text-sage-300">
                {responsibilities!.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-2 text-xs font-medium text-sage-600 dark:text-sage-400">
            {expanded ? 'Less' : 'More'}
          </p>
        </>
      )}
    </div>
  )
}

const iconClassName = 'h-5 w-5 text-sage-600 dark:text-sage-400'

function ItemIcon({ type }: { type: TimelineItemType }) {
  switch (type) {
    case 'work':
      return <BriefcaseBusiness className={iconClassName} aria-hidden />
    case 'education':
      return <GraduationCap className={iconClassName} aria-hidden />
    case 'certification':
      return <Award className={iconClassName} aria-hidden />
    default:
      return null
  }
}
