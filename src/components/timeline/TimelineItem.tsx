import { useState } from 'react'
import { Award, BriefcaseBusiness, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react'
import { formatDateRange } from '../../lib/dateUtils'
import type { TimelineItemType } from '../../types'

const TIMELINE_TYPE_STYLES: Record<
  TimelineItemType,
  { card: string; iconBox: string; icon: string }
> = {
  work: {
    card: 'border-blue-400/70 dark:border-blue-500/60',
    iconBox: 'border-blue-300 bg-blue-50 dark:border-blue-600/60 dark:bg-blue-950/50',
    icon: 'text-blue-600 dark:text-blue-400',
  },
  education: {
    card: 'border-amber-400/70 dark:border-amber-500/60',
    iconBox: 'border-amber-300 bg-amber-50 dark:border-amber-600/60 dark:bg-amber-950/40',
    icon: 'text-amber-600 dark:text-amber-400',
  },
  certification: {
    card: 'border-violet-400/70 dark:border-violet-500/60',
    iconBox: 'border-violet-300 bg-violet-50 dark:border-violet-600/60 dark:bg-violet-950/50',
    icon: 'text-violet-600 dark:text-violet-400',
  },
}

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
  const styles = TIMELINE_TYPE_STYLES[type]
  const showToggle = hasDetails && type === 'work'

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
      className={`w-full max-w-sm rounded-xl border bg-white p-4 text-left shadow-sm transition-shadow dark:bg-white/5 ${styles.card} ${
        hasDetails ? 'cursor-pointer hover:shadow-md' : ''
      }`}
      aria-expanded={hasDetails ? expanded : undefined}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${styles.iconBox}`}
          aria-hidden
        >
          <ItemIcon type={type} iconClassName={styles.icon} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
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
            {showToggle && (
              <div className="flex shrink-0 items-center gap-1 text-xs font-medium text-sage-600 dark:text-sage-400">
                <span>{expanded ? 'Less' : 'More'}</span>
                {expanded ? (
                  <ChevronUp className="h-3.5 w-3.5" aria-hidden />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {hasDetails && (
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
      )}
    </div>
  )
}

function ItemIcon({
  type,
  iconClassName,
}: {
  type: TimelineItemType
  iconClassName: string
}) {
  const className = `h-5 w-5 ${iconClassName}`
  switch (type) {
    case 'work':
      return <BriefcaseBusiness className={className} aria-hidden />
    case 'education':
      return <GraduationCap className={className} aria-hidden />
    case 'certification':
      return <Award className={className} aria-hidden />
    default:
      return null
  }
}
