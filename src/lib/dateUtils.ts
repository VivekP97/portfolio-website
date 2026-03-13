/**
 * Formats a YYYY-MM date string for display (e.g. "Jan 2022", "Jun 2024").
 */
export function formatMonthYear(dateStr: string): string {
  const [year, month] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

/**
 * Formats a timeline date range for display. Use null for endDate to show "Present".
 */
export function formatDateRange(startDate: string, endDate: string | null): string {
  if (endDate && startDate === endDate) {
    return formatMonthYear(startDate)
  }
  const start = formatMonthYear(startDate)
  const end = endDate ? formatMonthYear(endDate) : 'Present'
  return `${start} – ${end}`
}
