# Portfolio

My personal portfolio site, built to showcase who I am as a developer, what I've worked on, and how to reach me. It's a single-page React app with a hero intro, an about section breaking down what I do across the stack, my work experience, a few featured projects, and contact links.

**Live:** [chahnaportfolio.netlify.app](https://chahnaportfolio.netlify.app)

## Stack

React 19 with React Router, Tailwind CSS 4, and Vite for the dev server and build. No backend — it's a static site, deployed as-is.

## Running locally

```
npm install
npm run dev
```

Build for production with `npm run build`; preview that build with `npm run preview`.

## Repository layout

```
src/
  App.jsx              # page shell, assembles the sections in order
  main.jsx             # React entry point
  Components/
    Navbar.jsx          # sticky nav with mobile menu toggle
    Home.jsx             # hero section
    TextChange.jsx        # animated typing effect used in the hero
    About.jsx            # frontend/backend/database summary cards
    Experience.jsx       # tech stack icons + work history timeline
    Projects.jsx          # renders the project cards
    ProjectCards.jsx        # individual project card, links out to GitHub
    Contact.jsx           # GitHub/LinkedIn/email links
  assets/               # images and icons used throughout the site
```

Each section is its own component and `App.jsx` just stacks them vertically inside a `BrowserRouter`, so adding or reordering sections is a one-line change.
