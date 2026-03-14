import { Github } from 'lucide-react'
import { formatDateRange } from '../../lib/dateUtils'
import type { Project } from '../../types'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-sage-200 bg-white p-5 shadow-sm dark:border-sage-700 dark:bg-white/5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-sage-900 dark:text-sage-100">
          {project.title}
        </h3>
        <span className="text-sm text-sage-600 dark:text-sage-400">
          {formatDateRange(project.startDate, project.endDate)}
        </span>
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-sage-600 hover:underline dark:text-sage-400"
      >
        <Github className="h-4 w-4" aria-hidden />
        View on GitHub
      </a>
      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-sage-700 dark:text-sage-300">
        {project.tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </article>
  )
}
