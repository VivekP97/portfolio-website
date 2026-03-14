import { skillsData } from '../../data/resumeData'
import { SkillCategory } from './SkillCategory'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-sage-900 dark:text-sage-100 sm:text-3xl">
          Skills
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skillsData.categories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
