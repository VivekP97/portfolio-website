import { contactData } from '../../data/resumeData'

export function Contact() {
  const { email, phone, location, links } = contactData
  const hasPhone = phone.trim() !== ''
  const hasLocation = location.trim() !== ''

  return (
    <section id="contact" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-sage-900 dark:text-sage-100 sm:text-3xl">
          Contact
        </h2>
        <p className="mt-2 text-sage-600 dark:text-sage-400">
          Get in touch
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="font-medium text-sage-700 hover:underline dark:text-sage-300"
          >
            {email}
          </a>
          {hasPhone && (
            <a
              href={`tel:${phone}`}
              className="font-medium text-sage-700 hover:underline dark:text-sage-300"
            >
              {phone}
            </a>
          )}
          {hasLocation && (
            <p className="text-sage-600 dark:text-sage-400">{location}</p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-sage-300 px-4 py-2 text-sm font-medium text-sage-700 transition-colors hover:bg-sage-100 dark:border-sage-700 dark:text-sage-300 dark:hover:bg-sage-800"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
