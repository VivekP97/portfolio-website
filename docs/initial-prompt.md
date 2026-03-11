# Personal Portfolio Website

## System Prompt

You are an experienced full-stack software developer creating a portfolio website to demonstrate the experiences and achievements of my career. The website should have a modern and elegant design. It should present information in a clean and organized way without clutter. 

The content for items like work experience and certifications should be copied verbatim from the JSON files where their content is stored. Do not summarize or modify the text content.

## Website Design

The following are some notes about the user experience and user interface:

- The website should have a modern and elegant theme. Use sage green as the primary theme color.
- The website should be mobile-friendly.
- The website should have light and dark theme modes which can be toggled from the navbar.
- Use React, Typescript, and Tailwind CSS to create the website.

## Website Sections

The website will contain the following sections:

1. Hero Section -> Introductory information such as my name and professional statement.
2. Timeline Section -> A timeline of my education, work experience, and certifications.
3. Projects Section -> Lists side projects I have worked on in my free time.
4. Skills Section -> Lists my technical skills, organized by categories.
5. Contact Section -> Provides my contact details and links to social media profiles.

The data for these sections will be contained in JSON files in the `resume-data` folder, with separate files for each section of the website.

In addition to the above, the website will have the following components:

- Header Navbar -> A sticky navbar which contains links to the different sections of the website.

## Starting Plan

Follow the below steps to begin creating the portfolio website. These instructions will get you started with creating some documentation detailing the implementation. Then, you can use that documentation to iterate and complete the assignment.

### Create Implementation Details

If the files in the `docs/sections` folder are not empty, then you can skip this step.

For each file in the `docs/sections` folder, fill in the following information:

- Define the purpose of the section and what information will be contained in it.
- Define the React components that will be created to support the implementation (for example, a `WorkExperience.tsx` component that can be re-used for every work experience item).
- Define the data schema for the information displayed in the section. The schema should be defined with JSON and will be stored in a file in the `resume-data` folder.

### Apply the plan

Use the implementation details defined in the markdown files (in `docs/sections`) to create a well-designed portfolio website that loads its information from the JSON files in the `resume-data` folder.

### Track your progress during implementation

In the `docs/progress.md` file, create a checklist for each section of the website to keep track of the features and components that have been implemented and still need to be implemented. This file will act as your progress tracker as we create the website to ensure that all requirements are met.

As new features and components are completed, update the `progress.md` file as appropriate to keep it up-to-date with your current progress.

## Implementation Considerations

### General Notes

- As my career progresses, I will want to add more experiences and achievements. The website design and data schemas must be modular such that it facilitates adding new items.
- Define data schemas that are maintainable, extendable, and organized.
- Always write code with maintainability, extendability, and organization in mind.
- Create React components as necessary to reduce duplicated code when appropriate.

### Hero Section

- Include a button to automatically scroll to the Timeline section, as that is one of the most important sections that employers will want to view when considering my qualifications.
- Include a button to download my resume as a PDF file.

### Timeline Section

- Work Experience should include the name of the company, job title, start and end dates (end date is optional since I may be working in that position currently), and a list of responsibilities for that job.
- Education should include the degree, institution name, and start/end dates.
- Certifications should include the certification name and institution name.
- Use icons to differentiate work experience, certifications, and education items.
- Timeline items should be listed in descending order by start date.

### Project Section

- Projects should include a title, start/end dates, a link to a Github repository, and a list of tasks involved in the project.

### Skills Section

- There will be multiple lists of skills, organized by categories such as "Tools", "Languages", and "Concepts".
- Skills should be listed in alphabetical order.