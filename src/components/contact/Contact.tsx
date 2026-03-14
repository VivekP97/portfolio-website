import { Github, Linkedin, Mail } from 'lucide-react'
import { contactData } from '../../data/resumeData'

const buttonClass =
  'inline-flex items-center gap-2 rounded-xl border border-sage-200 bg-white px-4 py-2.5 text-sm font-medium text-sage-800 shadow-sm transition-shadow hover:shadow-md dark:border-sage-700 dark:bg-white/5 dark:text-sage-100 dark:hover:bg-white/10'

export function Contact() {
  const { email, phone, location, links } = contactData
  const hasPhone = phone.trim() !== ''
  const hasLocation = location.trim() !== ''

  return (
    <section id="contact" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-sage-900 dark:text-sage-100 sm:text-3xl">
          Let's Connect — Reach Out via Email, LinkedIn, or GitHub.
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${email}`} className={buttonClass}>
            <Mail className="h-4 w-4" aria-hidden />
            Email me
          </a>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              {link.id === 'github' && (
                <Github className="h-4 w-4" aria-hidden />
              )}
              {link.id === 'linkedin' && (
                <Linkedin className="h-4 w-4" aria-hidden />
              )}
              {link.label}
            </a>
          ))}
        </div>

        {(hasPhone || hasLocation) && (
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-sage-600 dark:text-sage-400">
            {hasPhone && (
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            )}
            {hasLocation && <p>{location}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
