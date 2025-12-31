# Colorful Portfolio 🎨

A personal portfolio built with Vite + React and Tailwind CSS that showcases selected projects and interactive micro-interactions using GSAP. This repo demonstrates component-driven design, responsive layout, and animated UI patterns.

---

## ⚡ Quick Overview

- **Purpose:** A modern, responsive portfolio site to showcase design and front-end projects.
- **Main pages:** Home, Projects, and selected project highlights.
- **Key behaviours:**
  - **Navbar:** Responsive, sticky header with a mobile menu and smooth-scroll links.
  - **Hero:** Full-bleed hero with an animated headline and prominent CTA to drive engagement.
  - **Marquee:** Subtle animated marquee for motion and emphasis on key text.
  - **Services:** Responsive feature grid/cards with hover and focus interactions.
  - **Work (Selected Work):** Horizontally scrolling, pinned showcase powered by GSAP (pin + scrub), with project cards that scale on hover and reveal labels.
  - **Projects page:** A responsive grid (2 columns on md and up) of project cards with images, titles and links.
  - **About:** Content section with text and visual highlights, plus simple reveal animations for polish.
  - **Footer & CTAs:** Consistent gradient CTAs and footer links with accessible focus states.
  - **General:** Responsive-first layout, optimized images, alt text on images, and keyboard focus considerations for accessibility.

---

## 🧰 Tech & Tools Used

- **Framework:** React (via Vite)
- **Styling:** Tailwind CSS
- **Animations:** GSAP + @gsap/react
- **Routing:** react-router-dom
- **Build tool:** Vite
- **Linting:** ESLint

---

## 🔧 Project Structure (high level)

- `src/` - Application source
  - `components/` - Reusable UI components (Navbar, Footer, Buttons, etc.)
  - `sections/` - Page sections used across pages (Hero, Work, About)
  - `pages/` - Top-level pages (Home, Projects)
  - `assets/` - Images and other static assets

---

## ✅ What I implemented

- **Selected Work (horizontal showcase)**

  - Horizontally scrolling, pinned section using GSAP + ScrollTrigger with `pin` and `scrub` for a smooth horizontal scroll experience.
  - Cards use min-widths (`min-w-[340px]`/`lg:min-w-xl`) and scale on hover; labels are overlaid for clarity.
  - Uses `invalidateOnRefresh` and window measurements to remain stable across resizes.

- **Reusable components & composition**

  - Built reusable components such as `Navbar`, `GradientButton`, `Footer`, and smaller UI pieces to keep the layout composable and maintainable.

- **Animations & transitions**

  - Lightweight CSS transitions for hover interactions and GSAP for scroll-driven animations and pinning.
  - `useGSAP` hook integrates with React components while keeping effects encapsulated.

- **Accessibility & UX**

  - Semantic headings, link-wrapped cards for keyboard access, and alt text on images.
  - Focus states present for interactive elements; planned improvements include ARIA attributes and keyboard navigation refinements.

- **Notes & future improvements**

  - Add project detail pages, image optimizations (srcset / lazy-loading / CDN), deeper accessibility audits (aria, prefers-reduced-motion), and automated tests.

---
