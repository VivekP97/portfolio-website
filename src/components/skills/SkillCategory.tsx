import { useMemo } from 'react'
import type { SkillCategory as SkillCategoryType } from '../../types'

type SkillCategoryProps = {
  category: SkillCategoryType
}

export function SkillCategory({ category }: SkillCategoryProps) {
  const sortedSkills = useMemo(
    () => [...category.skills].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })),
    [category.skills]
  )

  return (
    <div className="rounded-xl border border-sage-200 bg-white p-5 shadow-sm dark:border-sage-700 dark:bg-white/5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-600 dark:text-sage-400">
        {category.name}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2.5">
        {sortedSkills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg bg-sage-100 px-4 py-2 text-sm text-sage-700 dark:bg-sage-800/60 dark:text-sage-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
