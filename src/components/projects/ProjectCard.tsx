import { Box, BicepsFlexed, Code2, FolderGit2, Github, Layout, type LucideIcon } from 'lucide-react'
import { formatDateRange } from '../../lib/dateUtils'
import type { Project } from '../../types'

const PLACEHOLDER_ICONS: LucideIcon[] = [Code2, FolderGit2, Layout, Box]

/** Map icon names (e.g. "biceps-flexed") to Lucide icon components. Add entries here as needed. */
const NAMED_ICONS: Record<string, LucideIcon> = {
  'biceps-flexed': BicepsFlexed,
  'code': Code2,
  'folder-git': FolderGit2,
  'layout': Layout,
  'box': Box,
}

const ICON_BOX_CLASS =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sage-200 bg-sage-100 dark:border-sage-700 dark:bg-sage-800/50'
const ICON_CLASS = 'h-5 w-5 text-sage-600 dark:text-sage-400'

type ProjectCardProps = {
  project: Project
  placeholderIconIndex: number
}

function ProjectIcon({ project, placeholderIconIndex }: { project: Project; placeholderIconIndex: number }) {
  const IconComponent =
    project.icon != null && NAMED_ICONS[project.icon]
      ? NAMED_ICONS[project.icon]
      : PLACEHOLDER_ICONS[placeholderIconIndex % PLACEHOLDER_ICONS.length]
  return (
    <span className={ICON_BOX_CLASS} aria-hidden>
      <IconComponent className={ICON_CLASS} aria-hidden />
    </span>
  )
}

export function ProjectCard({ project, placeholderIconIndex }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-sage-200 bg-white p-5 shadow-sm dark:border-sage-700 dark:bg-white/5">
      <div className="flex items-start gap-3">
        <ProjectIcon project={project} placeholderIconIndex={placeholderIconIndex} />
        <div className="min-w-0 flex-1">
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
        </div>
      </div>
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
