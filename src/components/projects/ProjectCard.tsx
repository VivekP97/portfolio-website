import { Github } from 'lucide-react'
import { formatDateRange } from '../../lib/dateUtils'
import type { Project } from '../../types'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-sage-200 bg-white p-5 shadow-sm dark:border-sage-700 dark:bg-white/5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-sage-900 dark:text-sage-100">
          {project.title}
        </h3>
        <span className="text-sm text-sage-600 dark:text-sage-400">
          {formatDateRange(project.startDate, project.endDate)}
        </span>
      </div>
      <ul className="mt-3 mb-4 list-inside list-disc space-y-1 text-sm text-sage-700 dark:text-sage-300">
        {project.tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View on GitHub"
        className="mt-auto inline-flex w-fit shrink-0 items-center justify-center self-start rounded-lg p-2.5 text-sage-700 transition-colors hover:bg-sage-200 dark:text-sage-300 dark:hover:bg-sage-800"
      >
        <Github className="h-5 w-5" aria-hidden />
      </a>
    </article>
  )
}
