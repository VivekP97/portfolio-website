# Timeline Section – Implementation Details

## Purpose

The Timeline section presents your education, work experience, and certifications in a single, chronological view. It helps employers quickly see your qualifications. Items are ordered by start date in **descending order** (most recent first). Each type (work, education, certification) is visually distinguished with icons.

## Information Contained

- **Work experience** – Company name, job title, start date, optional end date (omit if current), a list of responsibilities (text copied verbatim from data), and an optional list of skills/tools (rendered as badges on expand).
- **Education** – Degree name, institution name, start and end dates, and an optional list of skills (e.g. coursework, technologies; rendered as badges on expand).
- **Certifications** – Certification name, issuing institution, start/end date (for correct chronological placement), and an optional list of skills/domains (rendered as badges on expand).

All narrative content (e.g. responsibility bullets) must be copied verbatim from the JSON files; do not summarize or modify.

## React Components

| Component | Purpose |
|-----------|--------|
| `Timeline.tsx` | Section wrapper: title, container, and rendering of sorted timeline entries. |
| `TimelineList.tsx` | Renders the list of timeline items; handles sorting by start date (descending). |
| `TimelineItem.tsx` | Single entry: icon (by type), dates, title/subtitle, and optional list (e.g. responsibilities). Reusable for work, education, and certification. |
| `WorkExperienceItem.tsx` | Specialization of or wrapper around `TimelineItem` for work: company, job title, start/end dates, list of responsibilities. |
| `EducationItem.tsx` | Specialization for education: degree, institution, start/end dates. |
| `CertificationItem.tsx` | Specialization for certifications: certification name, institution. |
| `TimelineIcon.tsx` (optional) | Renders the appropriate icon (work / education / certification) based on item type. |

Use a single `TimelineItem` with a `type` prop and optional `responsibilities` to reduce duplication, or keep separate item components that all consume a shared type and schema.

## Data Schema

Data is stored in `resume-data/timeline.json`. Structure is modular so new entries can be added without changing the schema.

```json
{
  "workExperience": [
    {
      "id": "work-1",
      "company": "Company Name",
      "jobTitle": "Job Title",
      "startDate": "2022-01",
      "endDate": "2024-06",
        "responsibilities": [
        "First responsibility, copied verbatim.",
        "Second responsibility, copied verbatim."
        ],
        "skills": ["Docker", "Kubernetes", "React"]
    },
    {
      "id": "work-2",
      "company": "Current Company",
      "jobTitle": "Current Role",
      "startDate": "2024-07",
      "endDate": null,
        "responsibilities": [
        "Current role responsibility one.",
        "Current role responsibility two."
        ],
        "skills": ["TypeScript", "React", "Tailwind CSS"]
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "degree": "Degree Name",
      "institution": "Institution Name",
      "startDate": "2018-09",
      "endDate": "2022-05",
      "skills": ["Python", "Java", "Data Structures"]
    }
  ],
  "certifications": [
    {
      "id": "cert-1",
      "name": "Certification Name",
      "institution": "Issuing Institution",
      "startDate": "2023-03",
      "endDate": "2023-03",
      "skills": ["Cloud Architecture", "Security"]
    }
  ]
}
```

- **workExperience**
  - `id` (string, required) – Unique key for the entry.
  - `company` (string, required).
  - `jobTitle` (string, required).
  - `startDate` (string, required) – e.g. `"YYYY-MM"` for sorting and display.
  - `endDate` (string | null) – optional; null means “current” or “present”.
  - `responsibilities` (array of strings, required) – Rendered verbatim.
  - `skills` (array of strings, optional) – Technical skills/tools used in this role; rendered as badges when the item is expanded.

- **education**
  - `id` (string, required).
  - `degree` (string, required).
  - `institution` (string, required).
  - `startDate`, `endDate` (strings, required).
  - `skills` (array of strings, optional) – e.g. coursework, technologies; rendered as badges when the item is expanded.

- **certifications**
  - `id` (string, required).
  - `name` (string, required).
  - `institution` (string, required).
  - `startDate` (string, required) – e.g. `"YYYY-MM"`.
  - `endDate` (string | null, required) – for one-off certifications, `startDate` and `endDate` are typically the same month.
  - `skills` (array of strings, optional) – e.g. domains or topics covered; rendered as badges when the item is expanded.

## Display Rules

- **Sorting**: Merge work, education, and certifications into one list and sort by `startDate` descending (certifications may use a derived or optional date; if none, place per design, e.g. at end).
- **Icons**: Use distinct icons for “work”, “education”, and “certification” so employers can scan quickly.
- **Dates**: Format for display (e.g. “Jan 2022 – Jun 2024” or “Jul 2024 – Present”) in the UI; keep storage format consistent (e.g. `YYYY-MM`). If `startDate` and `endDate` are the same month/year, display a single date (e.g. “Mar 2023”).

## Notes

- Schema is extendable (e.g. add `url` for certifications later) without breaking existing components.
- Responsibility text must be displayed exactly as in the JSON.
