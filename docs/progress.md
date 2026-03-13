# Portfolio Website – Progress Tracker

Use this checklist to track implementation. Update as features and components are completed.

---

## Project setup

- [x] Initialize React + TypeScript project (e.g. Vite)
- [x] Configure Tailwind CSS with sage green as primary theme color
- [x] Set up light/dark theme (CSS variables or Tailwind dark mode)
- [x] Ensure mobile-friendly viewport and responsive utilities
- [x] Create `resume-data` folder and placeholder/sample JSON files for each section

---

## Global components

- [x] **Header Navbar** – Sticky navbar with:
  - [x] Links to Hero, Timeline, Projects, Skills, Contact (smooth scroll or anchor links)
  - [x] Light/dark theme toggle
  - [x] Mobile-friendly menu (e.g. hamburger on small screens)
- [x] **Theme provider / context** (if needed) for theme toggle state

---

## Hero section

- [x] `resume-data/hero.json` created and filled (name, professionalStatement, resumePdfUrl)
- [x] `Hero.tsx` – section layout and content
- [x] Scroll-to-Timeline button (smooth scroll to Timeline section)
- [x] Resume download button (PDF)
- [x] Content rendered verbatim from JSON

---

## Timeline section

- [x] `resume-data/timeline.json` created (workExperience, education, certifications)
- [x] `Timeline.tsx` – section wrapper
- [x] Timeline list sorted by start date (descending)
- [x] `TimelineItem.tsx` (or Work/Education/Certification item components) with type-specific icons
- [x] Work experience: company, title, dates, responsibilities (verbatim)
- [x] Education: degree, institution, dates
- [x] Certifications: name, institution
- [x] Icons to differentiate work / education / certification

---

## Projects section

- [x] `resume-data/projects.json` created (projects array)
- [x] `Projects.tsx` – section wrapper
- [x] `ProjectCard.tsx` – title, dates, GitHub link, tasks list
- [x] Tasks rendered verbatim from JSON

---

## Skills section

- [x] `resume-data/skills.json` created (categories with skills)
- [x] `Skills.tsx` – section wrapper
- [x] `SkillCategory.tsx` – category name + skills list
- [x] Skills listed in alphabetical order within each category

---

## Contact section

- [x] `resume-data/contact.json` created (email, phone?, location?, links)
- [x] `Contact.tsx` – section wrapper
- [x] Contact details (email, phone, location) with optional fields omitted if empty
- [x] Social/external links (e.g. LinkedIn, GitHub) with labels and URLs

---

## Content and polish

- [x] All section content loaded from JSON; no hardcoded resume content
- [x] Text content (statements, responsibilities, tasks) copied verbatim – no summarization
- [x] Sage green primary theme applied; light and dark modes working
- [x] Responsive layout and navigation tested on mobile
- [ ] Resume PDF file added and download button tested (set `resumePdfUrl` in `hero.json` to your PDF path, e.g. `/Vivek Parmar - Resume.pdf` if the file is in `public/`)

---

## UI enhancements and animations

- [x] **Hero entrance animation** – Hero content fades in and slides up subtly on page load (CSS keyframes `hero-enter`, 0.6s ease-out, applied via `.hero-enter-animation` in `style.css` and Hero content wrapper)
- [x] **Hero name size** – Name in hero section increased (text-5xl / sm:text-6xl) for stronger presence
- [x] **Blurred background shapes** – Full-page depth with heavily blurred sage-colored orbs (`BlurredBackground.tsx`); four blobs at original size (e.g. 50–80vmax, 280–420px, blur 80–100px); CSS variables `--blob-1`–`--blob-4` for light/dark; fixed layer behind content (z-0), main content `relative z-10`
- [x] **Unified scrolling background** – Section backgrounds and top borders removed (Timeline, Skills, Projects, Contact); single page background so content scrolls over one continuous sage + blob layer
- [ ] Additional section or layout animations (to be added as we implement)

---

## Optional / future

- [ ] Add `docs/sections/navbar.md` if you want dedicated navbar implementation notes
- [ ] Extend schemas (e.g. certification URL, project liveUrl) as needed without breaking existing UI
