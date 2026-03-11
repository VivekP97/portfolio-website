export interface ContactLink {
  id: string
  label: string
  url: string
}

export interface ContactData {
  email: string
  phone: string
  location: string
  links: ContactLink[]
}
