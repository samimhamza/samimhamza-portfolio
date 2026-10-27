# Ahmad Samim Hamza — Personal Portfolio & Engineering Showcase

[![Live Website](https://img.shields.io/badge/Live%20Website-samimhamza.com-0284c7?style=flat&logo=google-chrome&logoColor=white)](https://www.samimhamza.com/)
[![Built with Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Tailwind%20UI-emerald.svg)](LICENSE.md)

The production codebase for [samimhamza.com](https://www.samimhamza.com/), the personal portfolio and engineering case-study showcase of **Ahmad Samim Hamza**, AI Engineer & Senior Software Engineer.

---

## 🌟 Highlights & Architecture

- **Next.js 14 App Router**: Hybrid server and client component architecture with fully optimized static page generation.
- **Centralized Data Layer (`src/data/portfolio.js`)**: Single source of truth driving career timelines, education, technical skills, and project case studies across all pages to prevent content drift.
- **Interactive Project Case Studies**: Expandable project deep dives with problem definitions, architectural components, engineering trade-offs, and evaluation details.
- **Dynamic Category Filtering**: Client-side filtering across capabilities (*AI & GenAI*, *Full-Stack*, *Backend & Business Systems*).
- **Responsive Dark/Light Mode**: Smooth theme transitions via `next-themes` and Tailwind CSS.
- **Accessible & SEO-Optimized**: OpenGraph metadata, accessible semantic HTML, keyboard-navigable controls, and automated `/cv` routing.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), `@tailwindcss/typography`, PostCSS
- **UI Components**: [@headlessui/react](https://headlessui.com/), [clsx](https://github.com/lukeed/clsx)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Content & Markdown**: MDX, `@mapbox/rehype-prism`, `remark-gfm`
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Repository Structure

```
samimhamza-portfolio/
├── public/                  # Static assets and downloadable CV (cv.pdf)
├── src/
│   ├── app/                 # Next.js 14 App Router routes
│   │   ├── layout.jsx       # Root layout, global SEO metadata & OpenGraph
│   │   ├── page.jsx         # Home page (Hero, Capabilities, Featured Projects, Experience)
│   │   ├── about/           # About page (Bio, Experience, Education, Languages)
│   │   ├── projects/        # Selected Projects page
│   │   └── skills/          # Technical skills & capabilities breakdown
│   ├── components/          # Reusable UI components (Header, Footer, Card, ProjectList)
│   ├── data/
│   │   └── portfolio.js     # Unified data source for projects, career & skills
│   ├── images/              # Optimized avatars and company/project logos
│   └── styles/              # Global styles and Tailwind imports
└── next.config.mjs          # Next.js configuration and redirect rules
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17 or higher recommended)
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

## 🧪 Available Scripts

- `npm run dev`: Starts the Next.js local development server.
- `npm run build`: Compiles and generates an optimized production build.
- `npm run start`: Starts the local production server.
- `npm run lint`: Runs ESLint checks across the codebase.

---

## 👤 Author

**Ahmad Samim Hamza**  
*AI Engineer & Senior Software Engineer*

- **Website**: [samimhamza.com](https://www.samimhamza.com/)
- **LinkedIn**: [linkedin.com/in/ahmadsamimhamza](https://www.linkedin.com/in/ahmadsamimhamza/)
- **GitHub**: [@samimhamza](https://github.com/samimhamza)
- **Email**: [samim.hamza7@gmail.com](mailto:samim.hamza7@gmail.com)
