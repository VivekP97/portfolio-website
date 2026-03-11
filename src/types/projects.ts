export interface Project {
  id: string
  title: string
  startDate: string
  endDate: string
  githubUrl: string
  tasks: string[]
}

export interface ProjectsData {
  projects: Project[]
}
