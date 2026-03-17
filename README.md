# My Portfolio Website

## Description

This repository contains the code for my personal portfolio website which includes notable experiences and achievements throughout my career.

## Approach

I chose to complete this project to practise AI development strategies. I had spoken with former colleagues about different approaches to prompting AI models and ideas for how to leverage them effectively. For this particular project, I wanted to start off with a relatively open-ended prompt (see `docs/initial-prompt.md`) and let AI devise a detailed plan for the implementation, creating more thorough documentation for itself to reference.

The theory behind this documentation-first strategy was the following:

- Having the AI create the documentation enforces its understanding of the requirements and it may explore some of the implementation details in depth before actually creating the website.
- The documentation can always be referenced to help the AI model regain context on certain parts of the code and the implementation details. This theoretically addresses the issue with the model losing context when exceeding the context window size.

## Learnings

This project enabled me to experiment and gain some experience with prompting strategies. The following are my takeaways from this project:

- With the documentation-first strategy, AI did a good job in making correct technical decisions to adhere to the requirements.
- When advised to define data schemas that are extendable, it correctly designed a system that makes it convenient to add new data such as work experience, certifications, and projects.
- I provided very minimal guidance for the UI/UX of the website and this resulted in a design that required a lot of iteration to tweak to my liking.
  - The website was fully functional, so the model definitely succeeded in the given task.
  - Part of the issue was that I didn't have a vision for what I wanted the website to be, so I expected that I would need to iterate to create the final product. However, the model was able to make a lot of adjustments to layouts, styles, and features without major refactoring which tells me that it had a good foundation.
