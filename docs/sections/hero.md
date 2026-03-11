# Hero Section – Implementation Details

## Purpose

The Hero section is the first thing visitors see. It introduces you by name and with a short professional statement (tagline or summary). It also provides primary calls-to-action: scrolling to the Timeline section and downloading your resume as a PDF.

## Information Contained

- **Name** – Your full name or preferred display name.
- **Professional statement** – A brief, copy-pasted statement (from data) that describes your role, focus, or value proposition.
- **Resume PDF** – Path or URL to the PDF file used for the download button.

## React Components

| Component | Purpose |
|-----------|--------|
| `Hero.tsx` | Main section wrapper: layout, background, and composition of hero content. |
| `HeroContent.tsx` (optional) | Encapsulates name, statement, and CTA buttons for clarity. |
| `ScrollToTimelineButton.tsx` | Button that smooth-scrolls to the Timeline section (e.g. using `document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })` or a ref). |
| `ResumeDownloadButton.tsx` | Button that triggers download of the resume PDF (uses `resumeUrl` from data; can be `<a href={resumeUrl} download>` or programmatic download). |

Components can be merged (e.g. both buttons inside `Hero.tsx`) if the file stays maintainable; the above is a suggested split for reusability and clarity.

## Data Schema

Data is stored in `resume-data/hero.json`. Content (e.g. professional statement) must be used verbatim; do not summarize or modify.

```json
{
  "name": "Your Full Name",
  "professionalStatement": "Your professional statement or tagline, copied verbatim from this file.",
  "resumePdfUrl": "/path/to/resume.pdf"
}
```

- `name` (string, required) – Display name in the hero.
- `professionalStatement` (string, required) – Full statement; render as-is.
- `resumePdfUrl` (string, required) – Path or URL to the resume PDF for the download button.

## Notes

- Hero is the landing block; keep layout clean and aligned with the sage green theme and light/dark modes.
- Ensure the scroll target ID (e.g. `id="timeline"`) matches the Timeline section’s ID used in the navbar and scroll button.
