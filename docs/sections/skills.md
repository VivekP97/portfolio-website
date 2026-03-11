# Skills Section – Implementation Details

## Purpose

The Skills section presents your technical skills in an organized way. Skills are grouped by category (e.g. “Languages”, “Tools”, “Concepts”) and listed in **alphabetical order** within each category. This makes it easy for employers to scan your competencies.

## Information Contained

- **Categories** – Named groups such as "Languages", "Tools", "Concepts", "Frameworks", etc.
- **Skills** – Per category, a list of skill names, displayed in alphabetical order.

## React Components

| Component | Purpose |
|-----------|--------|
| `Skills.tsx` | Section wrapper: title and rendering of category blocks. |
| `SkillCategory.tsx` | One category: category name (heading) and the list of skills. Reusable for each category. |
| `SkillList.tsx` (optional) | Renders a sorted list of skill names; sorting (alphabetical) can live here or in `SkillCategory`. |

Sorting (A–Z) should be applied when rendering; the JSON can be in any order to keep data entry flexible.

## Data Schema

Data is stored in `resume-data/skills.json`. Structure is modular so new categories and skills can be added without schema changes.

```json
{
  "categories": [
    {
      "id": "languages",
      "name": "Languages",
      "skills": ["JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      "id": "tools",
      "name": "Tools",
      "skills": ["Git", "Docker", "VS Code", "Figma"]
    },
    {
      "id": "concepts",
      "name": "Concepts",
      "skills": ["REST APIs", "CI/CD", "Agile", "Testing"]
    }
  ]
}
```

- **categories** (array of objects)
  - `id` (string, required) – Unique key for the category (e.g. for React keys or future filtering).
  - `name` (string, required) – Display name of the category (e.g. "Languages", "Tools").
  - `skills` (array of strings, required) – Skill names; display in alphabetical order in the UI.

## Display Rules

- Within each category, sort `skills` alphabetically (case-insensitive) before rendering.
- Categories can be displayed in the order they appear in the JSON, or in a fixed order (e.g. Languages first) if you define a category order in code.

## Notes

- Adding a new category or new skills is done by editing the JSON only; no schema change required.
- Optional: add `icon` or `description` per category later if the UI is built to support it.
