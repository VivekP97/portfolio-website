import { skillsData } from '../../data/resumeData'
import { SkillCategory } from './SkillCategory'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-sage-900 dark:text-sage-100 sm:text-3xl">
          Skills
        </h2>
        <p className="mt-2 text-sage-600 dark:text-sage-400">
          Technical skills by category
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.categories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
