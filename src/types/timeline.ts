export interface WorkExperience {
  id: string
  company: string
  jobTitle: string
  startDate: string
  endDate: string | null
  responsibilities: string[]
  skills?: string[]
  /** Optional PNG filename (e.g. "company.png") in public/timeline-logos/. When set, used instead of the default briefcase icon. */
  logo?: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate: string
  skills?: string[]
  /** Optional PNG filename (e.g. "institution.png") in public/timeline-logos/. When set, used instead of the default graduation cap icon. */
  logo?: string
}

export interface Certification {
  id: string
  name: string
  institution: string
  startDate: string
  endDate: string | null
  skills?: string[]
  /** Optional PNG filename (e.g. "issuer.png") in public/timeline-logos/. When set, used instead of the default award icon. */
  logo?: string
}

export interface TimelineData {
  workExperience: WorkExperience[]
  education: Education[]
  certifications: Certification[]
}

export type TimelineItemType = 'work' | 'education' | 'certification'

export interface TimelineEntry {
  type: TimelineItemType
  id: string
  startDate: string
  endDate: string | null
  title: string
  subtitle: string
  responsibilities?: string[]
  skills?: string[]
  /** Optional PNG filename in public/timeline-logos/. When set, displayed instead of the default type icon. */
  logo?: string
}
