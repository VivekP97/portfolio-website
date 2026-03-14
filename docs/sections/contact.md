# Contact Section – Implementation Details

## Purpose

The Contact section provides your contact details and links to your professional or social profiles. It makes it easy for employers and visitors to reach you or learn more about you.

## Information Contained

- **Section title** – Displayed as: "Let's Connect — Reach Out via Email, LinkedIn, or GitHub." (In the repo this section is still referred to as the "Contact section.")
- **Primary actions** – "Email me" button (mailto), plus social links (LinkedIn, GitHub, etc.) as buttons with icons. Buttons use a white/contrasting background so they stand out from the page background.
- **Contact details** – Phone and location shown below the buttons when present; email is available via the "Email me" button.

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

- **email** (string, required) – Primary email; used for the "Email me" button (mailto).
- **phone** (string, optional) – Shown below the buttons and rendered as a `tel:` link if present.
- **location** (string, optional) – Shown below the buttons when present.
- **links** (array of objects, required)
  - `id` (string, required) – Unique key (e.g. for React keys or icon mapping).
  - `label` (string, required) – Display text (e.g. "LinkedIn", "GitHub").
  - `url` (string, required) – Full URL to the profile or page.

## Notes

- Omit rendering `phone` or `location` if values are empty or null.
- Optional: map `id` to icons (e.g. LinkedIn icon, GitHub icon) for a polished look while keeping the schema generic.
