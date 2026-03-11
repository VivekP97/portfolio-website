export interface SkillCategory {
  id: string
  name: string
  skills: string[]
}

export interface SkillsData {
  categories: SkillCategory[]
}
