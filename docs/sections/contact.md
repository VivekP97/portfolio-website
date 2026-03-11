# Contact Section – Implementation Details

## Purpose

The Contact section provides your contact details and links to your professional or social profiles. It makes it easy for employers and visitors to reach you or learn more about you.

## Information Contained

- **Contact details** – Email, phone (optional), location (optional), or other direct contact info.
- **Social / external links** – Links to LinkedIn, GitHub, Twitter/X, portfolio, or other profiles. Each link has a label and URL.

Content should be used as provided in the data (e.g. email and link labels copied verbatim).

## React Components

| Component | Purpose |
|-----------|--------|
| `Contact.tsx` | Section wrapper: title, contact details block, and social links. |
| `ContactDetails.tsx` | Renders email, phone, location, etc., with appropriate icons or labels. |
| `SocialLinks.tsx` | Renders a list of links (e.g. LinkedIn, GitHub) as buttons or icons with labels; each item is a link. |

You can merge `ContactDetails` and `SocialLinks` into `Contact.tsx` if the section stays small; splitting keeps the section maintainable and testable.

## Data Schema

Data is stored in `resume-data/contact.json`. Structure is extendable for new contact methods or links.

```json
{
  "email": "your.email@example.com",
  "phone": "+1 234 567 8900",
  "location": "City, Country",
  "links": [
    {
      "id": "linkedin",
      "label": "LinkedIn",
      "url": "https://linkedin.com/in/yourprofile"
    },
    {
      "id": "github",
      "label": "GitHub",
      "url": "https://github.com/yourusername"
    }
  ]
}
```

- **email** (string, required) – Primary email; can be rendered as a `mailto:` link.
- **phone** (string, optional) – Rendered as a `tel:` link if present.
- **location** (string, optional) – Free text (e.g. city/country).
- **links** (array of objects, required)
  - `id` (string, required) – Unique key (e.g. for React keys or icon mapping).
  - `label` (string, required) – Display text (e.g. "LinkedIn", "GitHub").
  - `url` (string, required) – Full URL to the profile or page.

## Notes

- Omit rendering `phone` or `location` if values are empty or null.
- Optional: map `id` to icons (e.g. LinkedIn icon, GitHub icon) for a polished look while keeping the schema generic.
