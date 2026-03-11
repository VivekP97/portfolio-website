import { heroData } from '../../data/resumeData'

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-sage-900 dark:text-sage-100 sm:text-5xl">
          {heroData.name}
        </h1>
        <p className="mt-4 text-lg text-sage-700 dark:text-sage-300">
          {heroData.professionalStatement}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ScrollToTimelineButton />
          <ResumeDownloadButton url={heroData.resumePdfUrl} />
        </div>
      </div>
    </section>
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
      className="rounded-lg bg-sage-600 px-5 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-sage-700 dark:bg-sage-500 dark:hover:bg-sage-400"
    >
      View timeline
    </button>
  )
}

function ResumeDownloadButton({ url }: { url: string }) {
  return (
    <a
      href={url}
      download
      className="rounded-lg border-2 border-sage-600 px-5 py-2.5 text-sm font-medium text-sage-700 transition-colors hover:bg-sage-100 dark:border-sage-400 dark:text-sage-300 dark:hover:bg-sage-900"
    >
      Download resume
    </a>
  )
}
