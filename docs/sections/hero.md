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

## Responsive behaviour

- **Typography and spacing**: Heading and statement scale by viewport: smaller base sizes on mobile (`text-4xl` / `text-base`), stepping up at `sm`, `md`, and `lg` breakpoints. Section padding and min-height are reduced on small screens (`min-h-[75vh]`, `py-12`) and increase at larger breakpoints.
- **Overlap prevention**: The main content (name, statement, CTA buttons) lives in a flex-1 wrapper that is vertically centered in the space *above* the “Scroll to explore” element. “Scroll to explore” is in the layout flow (not absolutely positioned) with reserved padding (`py-6` / `sm:py-8`), so the Download Resume button and Scroll to explore never overlap on short or narrow viewports (e.g. small phones).

## Notes

- Hero is the landing block; keep layout clean and aligned with the pastel mint-celadon theme and light/dark modes.
- Ensure the scroll target ID (e.g. `id="timeline"`) matches the Timeline section’s ID used in the navbar and scroll button.
