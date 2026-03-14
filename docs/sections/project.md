# Projects Section – Implementation Details

## Purpose

The Projects section showcases side projects you have worked on in your free time. Each project is presented with a title, timeframe, a link to the GitHub repository, and a list of tasks or highlights. This gives employers insight into your initiative and technical interests.

## Information Contained

- **Title** – Project name.
- **Start and end dates** – When the project was (or was actively) worked on.
- **GitHub repository link** – URL to the repo (shown as an icon button in the bottom-left of each card).
- **Tasks** – List of tasks, features, or responsibilities involved in the project (copied verbatim from data); bullets align with the title.
- **Icon** (optional) – Per-project icon type; when omitted, a placeholder icon is used (e.g. by index).

## React Components

| Component | Purpose |
|-----------|--------|
| `Projects.tsx` | Section wrapper: title and grid/list of project cards. |
| `ProjectCard.tsx` | Single project: icon (top-left), title, dates, task list (aligned with title), and GitHub link as an icon button (bottom-left). Reusable for each project entry. |
| `ProjectTaskList.tsx` (optional) | Renders the list of tasks/bullets; can be inlined in `ProjectCard` if preferred. |

`ProjectCard` should accept one project object from the schema and render all fields; keep the structure modular so adding a new project is just adding an object to the JSON array.

## Data Schema

Data is stored in `resume-data/projects.json`. Content for tasks must be used verbatim.

```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "Project Title",
      "startDate": "2023-01",
      "endDate": "2024-03",
      "githubUrl": "https://github.com/username/repo-name",
      "tasks": [
        "First task or highlight, copied verbatim.",
        "Second task or highlight, copied verbatim."
      ]
    }
  ]
}
```

- **projects** (array of objects)
  - `id` (string, required) – Unique key.
  - `title` (string, required).
  - `startDate` (string, required) – e.g. `"YYYY-MM"`.
  - `endDate` (string, required).
  - `githubUrl` (string, required) – Full URL to the GitHub repository.
  - `tasks` (array of strings, required) – Rendered verbatim.
  - `icon` (string, optional) – Icon type for the project; when omitted, a placeholder icon is used.

## Notes

- Design should support multiple projects and scale if you add more later.
- Each card shows an icon in the top-left (placeholder or from `icon` when set); the task list is aligned with the title; the GitHub link is an icon-only button in the bottom-left with hover state.
- Optional: add `liveUrl` or `description` to the schema later without breaking existing cards if the UI handles missing fields.
