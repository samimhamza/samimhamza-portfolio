# Ahmad Samim Hamza — Personal Portfolio

[![Live Website](https://img.shields.io/badge/Live%20Website-samimhamza.com-0284c7?style=flat&logo=google-chrome&logoColor=white)](https://www.samimhamza.com/)
[![Built with Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Tailwind%20UI-emerald.svg)](LICENSE.md)

Source code for [samimhamza.com](https://www.samimhamza.com/), the personal portfolio of **Ahmad Samim Hamza** (Software Engineer | Applied AI).

---

## Overview

- **Next.js 14 App Router**: Server and client components with static page generation.
- **Centralized Content (`src/data/portfolio.js`)**: All experience, education, skills, and project details live in one file so updates stay in sync across pages.
- **Project Case Studies**: Expandable project cards covering the problem, architecture, key decisions, testing, and outcome.
- **Category Filtering**: Client-side filtering across project categories (_Applied AI_, _Full-Stack_, _Backend & Systems_).
- **Dark / Light Mode**: Theme switching using `next-themes` and Tailwind CSS.
- **SEO & Accessibility**: OpenGraph metadata, semantic HTML, and `/cv` routing.

---

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), `@tailwindcss/typography`, PostCSS
- **UI Components**: [@headlessui/react](https://headlessui.com/), [clsx](https://github.com/lukeed/clsx)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Content & Markdown**: MDX, `@mapbox/rehype-prism`, `remark-gfm`
- **Deployment**: [Vercel](https://vercel.com/)

---

## Repository Structure

```
samimhamza-portfolio/
├── public/                  # Static assets and downloadable CV (cv.pdf)
├── src/
│   ├── app/                 # Next.js 14 App Router routes
│   │   ├── layout.jsx       # Root layout, global SEO metadata & OpenGraph
│   │   ├── page.jsx         # Home page (Hero, Capabilities, Featured Projects, Experience)
│   │   ├── about/           # About page (Bio, Experience, Education, Languages)
│   │   ├── projects/        # Projects page
│   │   └── skills/          # Technical skills breakdown
│   ├── components/          # Reusable UI components (Header, Footer, Card, ProjectList)
│   ├── data/
│   │   └── portfolio.js     # Central data file for projects, career & skills
│   ├── images/              # Avatars and company/project logos
│   └── styles/              # Global styles and Tailwind imports
└── next.config.mjs          # Next.js configuration and redirect rules
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17 or higher)
- `npm`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samimhamza/samimhamza-portfolio.git
   cd samimhamza-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server locally.
- `npm run lint`: Runs ESLint checks.

---

## Author

**Ahmad Samim Hamza**  
_Software Engineer | Applied AI_

- **Website**: [samimhamza.com](https://www.samimhamza.com/)
- **LinkedIn**: [linkedin.com/in/ahmadsamimhamza](https://www.linkedin.com/in/ahmadsamimhamza/)
- **GitHub**: [@samimhamza](https://github.com/samimhamza)
- **Email**: [samim.hamza7@gmail.com](mailto:samim.hamza7@gmail.com)
