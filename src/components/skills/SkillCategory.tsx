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
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-sage-600 dark:text-sage-400">
        {category.name}
      </h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {sortedSkills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-sage-200 px-3 py-1 text-sm text-sage-800 dark:bg-sage-800 dark:text-sage-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
