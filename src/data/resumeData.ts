import type { HeroData } from '../types'
import type { TimelineData } from '../types'
import type { ProjectsData } from '../types'
import type { SkillsData } from '../types'
import type { ContactData } from '../types'

import heroJson from '../../resume-data/hero.json'
import timelineJson from '../../resume-data/timeline.json'
import projectsJson from '../../resume-data/projects.json'
import skillsJson from '../../resume-data/skills.json'
import contactJson from '../../resume-data/contact.json'

export const heroData = heroJson as HeroData
export const timelineData = timelineJson as TimelineData
export const projectsData = projectsJson as ProjectsData
export const skillsData = skillsJson as SkillsData
export const contactData = contactJson as ContactData
