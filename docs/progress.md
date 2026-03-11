# Portfolio Website – Progress Tracker

Use this checklist to track implementation. Update as features and components are completed.

---

## Project setup

- [ ] Initialize React + TypeScript project (e.g. Vite)
- [ ] Configure Tailwind CSS with sage green as primary theme color
- [ ] Set up light/dark theme (CSS variables or Tailwind dark mode)
- [ ] Ensure mobile-friendly viewport and responsive utilities
- [ ] Create `resume-data` folder and placeholder/sample JSON files for each section

---

## Global components

- [ ] **Header Navbar** – Sticky navbar with:
  - [ ] Links to Hero, Timeline, Projects, Skills, Contact (smooth scroll or anchor links)
  - [ ] Light/dark theme toggle
  - [ ] Mobile-friendly menu (e.g. hamburger on small screens)
- [ ] **Theme provider / context** (if needed) for theme toggle state

---

## Hero section

- [ ] `resume-data/hero.json` created and filled (name, professionalStatement, resumePdfUrl)
- [ ] `Hero.tsx` – section layout and content
- [ ] Scroll-to-Timeline button (smooth scroll to Timeline section)
- [ ] Resume download button (PDF)
- [ ] Content rendered verbatim from JSON

---

## Timeline section

- [ ] `resume-data/timeline.json` created (workExperience, education, certifications)
- [ ] `Timeline.tsx` – section wrapper
- [ ] Timeline list sorted by start date (descending)
- [ ] `TimelineItem.tsx` (or Work/Education/Certification item components) with type-specific icons
- [ ] Work experience: company, title, dates, responsibilities (verbatim)
- [ ] Education: degree, institution, dates
- [ ] Certifications: name, institution
- [ ] Icons to differentiate work / education / certification

---

## Projects section

- [ ] `resume-data/projects.json` created (projects array)
- [ ] `Projects.tsx` – section wrapper
- [ ] `ProjectCard.tsx` – title, dates, GitHub link, tasks list
- [ ] Tasks rendered verbatim from JSON

---

## Skills section

- [ ] `resume-data/skills.json` created (categories with skills)
- [ ] `Skills.tsx` – section wrapper
- [ ] `SkillCategory.tsx` – category name + skills list
- [ ] Skills listed in alphabetical order within each category

---

## Contact section

- [ ] `resume-data/contact.json` created (email, phone?, location?, links)
- [ ] `Contact.tsx` – section wrapper
- [ ] Contact details (email, phone, location) with optional fields omitted if empty
- [ ] Social/external links (e.g. LinkedIn, GitHub) with labels and URLs

---

## Content and polish

- [ ] All section content loaded from JSON; no hardcoded resume content
- [ ] Text content (statements, responsibilities, tasks) copied verbatim – no summarization
- [ ] Sage green primary theme applied; light and dark modes working
- [ ] Responsive layout and navigation tested on mobile
- [ ] Resume PDF file added and download button tested

---

## Optional / future

- [ ] Add `docs/sections/navbar.md` if you want dedicated navbar implementation notes
- [ ] Extend schemas (e.g. certification URL, project liveUrl) as needed without breaking existing UI
