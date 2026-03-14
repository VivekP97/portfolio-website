import { projectsData } from '../../data/resumeData'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-sage-900 dark:text-sage-100 sm:text-3xl">
          Projects
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {projectsData.projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
