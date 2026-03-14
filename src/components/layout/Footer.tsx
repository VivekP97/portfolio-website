import { heroData } from '../../data/resumeData'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-sage-200 py-6 dark:border-sage-700"
      role="contentinfo"
    >
      <p className="text-center text-sm text-sage-600 dark:text-sage-400">
        © {year} {heroData.name}
      </p>
    </footer>
  )
}
