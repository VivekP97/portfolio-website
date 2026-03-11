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
  return (
    <li className="relative flex gap-4 pb-8 last:pb-0">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sage-500 bg-sage-50 dark:bg-sage-900" aria-hidden>
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
        <p className="text-sage-700 dark:text-sage-300">
          {subtitle}
        </p>
        {responsibilities && responsibilities.length > 0 && (
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-sage-700 dark:text-sage-300">
            {responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

function ItemIcon({ type }: { type: TimelineItemType }) {
  const className = "h-5 w-5 text-sage-600 dark:text-sage-400"
  switch (type) {
    case 'work':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 'education':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5z" />
        </svg>
      )
    case 'certification':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 010-4.438 3.42 3.42 0 001.946-.806 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    default:
      return null
  }
}
