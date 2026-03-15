export interface Project {
  id: string
  title: string
  startDate: string
  endDate: string
  githubUrl: string
  tasks: string[]
  /** Optional icon name for the project type (e.g. "code", "web"). When omitted, a placeholder icon is used. */
  icon?: string
  /** When true, show a "This site!" badge to indicate the project is the current website. */
  isThisSite?: boolean
}

export interface ProjectsData {
  projects: Project[]
}
