import { useState, useEffect } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { heroData } from '../../data/resumeData'
import { ThemeToggle } from './ThemeToggle'

const SECTION_LINKS = [
  { href: '#timeline', label: 'Timeline' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const

const SCROLL_THRESHOLD = 16

type NavbarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll() // run once for initial state
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-200 ${
        scrolled
          ? 'bg-sage-50/50 backdrop-blur-md dark:bg-sage-950/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6" aria-label="Main navigation">
        <a href="#hero" className="text-lg font-semibold text-black dark:text-white">
          VP
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {SECTION_LINKS.map(({ href, label }) => {
            const isActive = activeSection !== null && href === `#${activeSection}`
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-sage-200 hover:text-sage-900 dark:hover:bg-sage-800 dark:hover:text-sage-100 ${
                    isActive
                      ? 'font-semibold text-sage-900 dark:text-sage-100'
                      : 'font-medium text-sage-700 dark:text-sage-300'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href={heroData.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 text-sm font-medium text-sage-700 transition-colors hover:bg-sage-200 hover:text-sage-900 dark:text-sage-300 dark:hover:bg-sage-800 dark:hover:text-sage-100"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-2 md:hidden hover:bg-sage-200 dark:hover:bg-sage-800"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`border-t border-sage-200 dark:border-sage-800 md:hidden ${menuOpen ? 'block' : 'hidden'}`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-0 px-4 py-2">
          {SECTION_LINKS.map(({ href, label }) => {
            const isActive = activeSection !== null && href === `#${activeSection}`
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`block rounded-md px-3 py-2 text-sm hover:bg-sage-200 dark:hover:bg-sage-800 ${
                    isActive
                      ? 'font-semibold text-sage-900 dark:text-sage-100'
                      : 'font-medium text-sage-700 dark:text-sage-300'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href={heroData.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 text-sm font-medium text-sage-700 hover:bg-sage-200 dark:text-sage-300 dark:hover:bg-sage-800"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}
