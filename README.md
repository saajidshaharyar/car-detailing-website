# ARS Auto-Detailing Website
A web application designed to provide my personal car detailing business with a modern, responsive website that informs customers and boosts online presence.

## Description
### Problem Statement
Local car detailing businesses often lack a professional, digital presence — missing out on customer engagement and trust.

### Why This Program Solves the Problem
This project provides a fully customizable website template built with modern technologies (React, TypeScript, Vite), giving small businesses an easy-to-maintain, attractive platform to showcase their services.

### Why Users Should Care
A visually appealing, responsive, and structured website helps build credibility and increases conversion rates for local service businesses, especially in highly competitive urban markets like Toronto.

### What does this project primarily use?
This website was built using the following technologies:
1. React.js - Frontend JavaScript library for building user interfaces
2. TypeScript - Adds static typing to JavaScript
3. Tailwind CSS - Utility-first CSS framework
4. HTML5 - Structure and semantic markup
5. CSS3 - Custom styling and animations
No backend languages were used in this implementation, though the contact form
is prepared to connect to a backend service.

---

## Installation & Development Timeline

### Development Progress
#### May 18-19:
- **Project setup** using Vite + React + TypeScript
- **Folder structure organized** into `components/Layout` and `components/Pages`
- **Routing** implemented with `react-router-dom` for Home, About Us, Gallery, and Contact pages
- **Dark/Light mode toggle** with `useState`, `localStorage`, and live DOM updates
- **Header and footer** components created and rendered on every page
- **Basic placeholder content** added to all pages
- **First Git commit and push to GitHub**

#### May 20-21:
- **Header and footer** components created and rendered on every page
- **Home page** built with hero section, video background, pricing plans, and CTA (did not build AI-Generated Video just yet)
- **Reusable UI components** (`Button`, `PricePlan`) completed
- **Responsive layout confirmed**
- **Codebase cleaned and fully commented for GitHub readability**

#### May 22-23:
- Completed the **About Us**, **Gallery**, and **Contact Us** pages
- About Us includes brand mission and team summary
- Gallery page template created for future image uploads
- Contact Us page includes business hours, email, phone, and embedded Google Map

### Next Steps
- Add videos and images to each page
  - Adding AI videos to enhance marketing on Homepage and Gallery
  - Making logo look transparent
  - Help showcase work by adding before and after pictures of past detailing jobs
  - Adding 'Refund Policy' on footer and creating a seperate page
  - Creating a 'FAQ' Page

---

## Usage

- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server
- Visit `http://localhost:5174` in browser
- Use navigation links to visit all pages
- Toggle light/dark mode via the header button

---

## Coding Style

- **React** functional components with hooks
- **TypeScript** for type safety and scalability
- Consistent file structure (Pages and Layout)
- Component-based development
- Organized and descriptive commit messages

---

## Test

Manual testing in local development:
- Navigation and routing tested via `react-router-dom`
- Dark/light mode tested through toggle functionality and DOM inspection
- File paths and routing checked via console and browser dev tools

(Automated testing not yet implemented)

---

## License

MIT License (To be finalized before project deployment)

---

*This README will be updated continuously as new features are developed.*
