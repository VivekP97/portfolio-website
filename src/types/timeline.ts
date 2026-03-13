export interface WorkExperience {
  id: string
  company: string
  jobTitle: string
  startDate: string
  endDate: string | null
  responsibilities: string[]
  skills?: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate: string
  skills?: string[]
}

export interface Certification {
  id: string
  name: string
  institution: string
  startDate: string
  endDate: string | null
  skills?: string[]
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
}
