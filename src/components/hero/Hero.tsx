import { ChevronDown, Download } from 'lucide-react'
import { heroData } from '../../data/resumeData'

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[75vh] flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[85vh] sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-4xl hero-enter-animation">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {heroData.name}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-sage-700 dark:text-sage-300 sm:mt-6 sm:text-lg sm:leading-loose [text-wrap:balance]">
          {heroData.professionalStatement}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-8">
          <ScrollToTimelineButton />
          <ResumeDownloadButton url={heroData.resumePdfUrl} />
        </div>
      </div>
      <ScrollToExplore />
    </section>
  )
}

function ScrollToExplore() {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <button
      type="button"
      onClick={scrollToTimeline}
      className="absolute bottom-6 left-1/2 flex flex-col items-center gap-2 -translate-x-1/2 text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-200 transition-colors sm:bottom-8"
      aria-label="Scroll to explore"
    >
      <span className="text-sm font-medium">Scroll to explore</span>
      <span className="bounce-arrow" aria-hidden>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </span>
    </button>
  )
}

function ScrollToTimelineButton() {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <button
      type="button"
      onClick={scrollToTimeline}
      className="inline-flex items-center gap-2 rounded-lg bg-sage-600 px-5 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-sage-700 dark:bg-sage-500 dark:hover:bg-sage-400"
    >
      View Timeline
      <ChevronDown className="h-4 w-4" aria-hidden />
    </button>
  )
}

function ResumeDownloadButton({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border-2 border-sage-600 px-5 py-2.5 text-sm font-medium text-sage-700 transition-colors hover:bg-sage-100 dark:border-sage-400 dark:text-sage-300 dark:hover:bg-sage-900"
    >
      <Download className="h-4 w-4" aria-hidden />
      Download Resume
    </a>
  )
}
