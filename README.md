# Asmaa | Data Science & Front-End Portfolio

A personal portfolio by Asmaa, a second-year Data Science student learning front-end development. The site presents her introduction, skills, projects, and contact information.

## Built with

- HTML
- CSS
- JavaScript
- Inline SVG for the AI neural-network visual

## Features

- Responsive portfolio sections: Home, About, Skills, Projects, and Contact
- A custom SVG neural-network brain with a subtle mouse-follow tilt
- Reduced-motion support for the mouse interaction
- Project links and an email contact link
- Keyboard-accessible skip link and labeled main navigation
- Responsive footer with a back-to-top link

The portfolio is a static website. It does not currently require a backend or build step.

## Project structure

```text
.
├── index.html
├── style.css
├── script.js
└── images/
    └── asmaa.jpg
```

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a browser, or use the Live Server extension in Visual Studio Code.

No package installation is required.

## Publish on GitHub Pages

This site uses plain HTML, CSS, and JavaScript, so it can be published from the repository root without a build step.

1. Create a GitHub repository and add the project files. Keep `index.html` at the repository root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/(root)` folder, then save.
5. When GitHub finishes deploying, open the site link shown in the Pages settings. Later pushes to the selected branch publish updates.

The published site is public on the internet. See the [GitHub Pages publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for the current steps.

## Progress

### Completed

- Created the Home, About, Skills, Projects, and Contact sections.
- Added responsive styling, the interactive AI brain visual, and project cards for the restaurant concept and Wix birthday site.
- Added a semantic main landmark, a clear heading order, a keyboard skip link, and a labeled navigation menu.
- Kept the decorative AI brain SVG out of assistive technology while leaving its visible label available.
- Added a responsive footer and a 44px minimum height for call-to-action buttons.

### Next steps

- Add a project preview image for the birthday website.
- Review the page in a browser at desktop and mobile widths.
- Create or connect a GitHub repository and publish the static site.

A backend is not needed yet. The portfolio currently displays static content and uses an email link for contact. Revisit a backend if a future feature needs to receive or store form submissions.

## Featured projects

**Restaurant Website Concept** is a fictional restaurant demo with an interactive menu, shopping cart, and WhatsApp order flow. Its page is included at `projects/restaurant-website/index.html` so the project link works after publishing.

**How Well Do You Know Me?** is a birthday-themed Wix website featuring a memories gallery and a 19-question quiz. The live site is linked from the portfolio's Projects section.