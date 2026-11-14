<div align="center">

# ⚡ Sameer Masih — Personal Portfolio & Engineering Showcase

**A high-performance, minimalist developer portfolio engineered with React 19, Vite 7, Tailwind CSS v4, and Framer Motion.**

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Preview-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sameer-personal-portfolio-699.vercel.app)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-zinc?style=for-the-badge)](LICENSE)

<br />

[Explore Live Demo](https://sameer-personal-portfolio-699.vercel.app) • [View Projects](#-featured-projects) • [Tech Stack](#%EF%B8%8F-technology-stack) • [Getting Started](#-getting-started) • [Contact](#-contact--connect)

</div>

---

## 📖 Overview

This repository contains the source code for the personal engineering portfolio of **Sameer Masih**, a Software Engineer and Full-Stack Developer based in Islamabad, Pakistan.

Engineered with a **Vercel-inspired Clean Platinum & Monochrome** aesthetic, this site showcases full-stack web applications, SaaS platforms, and computer vision systems with zero bloat, physics-based UI transitions, and an engineering-first technical specification layout.

### ✨ Key Architectural Highlights

- **Vercel Monochrome & Clean Platinum Aesthetic**: Meticulously balanced high-contrast palette (`bg-white dark:bg-black`) with subtle platinum glowing accents, micro-dot matrices, and hairline borders.
- **Floating Island Capsule Navigation**: Centered glassmorphic capsule navbar with reactive scroll spying and spring-animated active tabs (`Framer Motion`).
- **Engineering Specification Project Cards**: Text-dense, structured technical cards featuring domain categorization, architecture metrics, algorithmic implementation checklists, and direct source links without picture bloat.
- **Zero-Flash Theme Engine**: Instant dark/light mode toggle synchronized with `localStorage` and OS preferences to eliminate theme flashing.
- **Interactive Bento Showcase**: Skills grid categorized across Frontend, Backend & Database, and Developer Tools with categorized proficiency badges.
- **Mobile-First Responsive Engineering**: Tailored fluid layouts, touch targets, and collapsible mobile drawer navigation across all viewport sizes.
- **1-Click Communication**: Functional contact hub featuring direct mailto form dispatch and 1-click clipboard email copying.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | [React 19](https://react.dev/) (Hooks, Context API), [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/) (Oxide engine, CSS variables, utility-first) |
| **Physics & Animations** | [Framer Motion](https://www.framer.com/motion/) (Spring physics, layout animations, presence exits) |
| **Iconography** | [Lucide React](https://lucide.dev/) (Tree-shaken minimalist geometric icons) |
| **Build & Tooling** | [Vite 7](https://vitejs.dev/) (Rollup bundling, Fast Refresh), [ESLint 9](https://eslint.org/) |
| **Deployment & CI/CD** | [Vercel](https://vercel.com/) (Edge network caching, automatic preview deployments) |

---

## 🚀 Featured Projects

The portfolio highlights selected engineering systems across full-stack web development, SaaS, and AI:

| Project | Domain | Architecture Highlights | Source |
| :--- | :--- | :--- | :---: |
| **Suprema** | Full-Stack SaaS & Cloud | Drag-and-drop Kanban, JWT/RBAC auth, PostgreSQL/Supabase schemas, burndown analytics | [GitHub](https://github.com/sameermasih778) |
| **Face-Craft & Grooming AI** | Computer Vision & Full Stack | 468+ MediaPipe facial mesh landmarks, Random Forest classifier, cosmetic recommendation engine | [GitHub](https://github.com/sameermasih778) |
| **Food Delivery Web App** | Full-Stack & E-Commerce | End-to-end MERN stack, Stripe checkout integration, real-time dispatch dashboard | [GitHub](https://github.com/sameermasih778) |
| **ShopEase** | Frontend Architecture | 7-page commercial storefront, client-side cart state management, zero layout shift | [GitHub](https://github.com/sameermasih778) |
| **Car Rental Platform** | Web Booking Platform | Fleet specification matrices, date range validation workflows, responsive glassmorphism | [GitHub](https://github.com/sameermasih778) |
| **Engineering Portfolio** | Frontend Systems & Physics UI | Vercel monochrome design system, spring animations, zero-flash theme persistence | [GitHub](https://github.com/sameermasih778) |

---

## 📂 Project Directory Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg             # Custom dark terminal squircle favicon
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── Profile.png         # High-resolution headshot
│   │   └── Resume.pdf          # Professional CV document
│   ├── components/
│   │   ├── About.jsx           # Biography, timeline experience & certifications
│   │   ├── Contact.jsx         # Contact hub, 1-click email copy & form dispatch
│   │   ├── Footer.jsx          # Terminal-inspired footer & system metrics
│   │   ├── Hero.jsx            # Main headline, status pill, CTA links & avatar halo
│   │   ├── Navbar.jsx          # Centered floating capsule & responsive navigation
│   │   ├── Projects.jsx        # Technical specification cards with category filters
│   │   └── Skills.jsx          # Categorized bento skills grid
│   ├── context/
│   │   └── ThemeContext.jsx    # React Context provider for dark/light theme state
│   ├── App.css
│   ├── App.jsx                 # Application layout root
│   ├── index.css               # Tailwind CSS v4 directives & root theme definitions
│   └── main.jsx                # React DOM 19 entry point
├── index.html                  # HTML5 entry with metadata & font configuration
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Tailwind custom configuration
├── vite.config.js              # Vite bundling & plugin settings
└── README.md                   # Professional project documentation
```

---

## 💻 Getting Started

Follow these instructions to run the portfolio locally on your machine.

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** (v9+) or **pnpm** / **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/sameermasih778/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

### 4. Build for Production

To produce an optimized production build in the `dist/` directory:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

- **Personal Information**: Update personal information, bio, and social handles in [src/components/Hero.jsx](file:///c:/Users/Sameer%20Khokhar/Desktop/my-portfolio/src/components/Hero.jsx) and [src/components/About.jsx](file:///c:/Users/Sameer%20Khokhar/Desktop/my-portfolio/src/components/About.jsx).
- **Projects**: Edit or add new engineering items in the `projects` array within [src/components/Projects.jsx](file:///c:/Users/Sameer%20Khokhar/Desktop/my-portfolio/src/components/Projects.jsx).
- **Resume**: Replace [src/assets/Resume.pdf](file:///c:/Users/Sameer%20Khokhar/Desktop/my-portfolio/src/assets/Resume.pdf) with your updated resume file.
- **Theme Variables**: Customize the monochrome palette in [src/index.css](file:///c:/Users/Sameer%20Khokhar/Desktop/my-portfolio/src/index.css).

---

## 📬 Contact & Connect

- **Author**: Sameer Masih
- **Role**: Software Engineer & Full-Stack Developer
- **Location**: Islamabad, Pakistan
- **Email**: [sameermasih778@gmail.com](mailto:sameermasih778@gmail.com)
- **LinkedIn**: [linkedin.com/in/sameer-masih](https://linkedin.com)
- **GitHub**: [@sameermasih778](https://github.com/sameermasih778)
- **Portfolio**: [sameer-personal-portfolio-699.vercel.app](https://sameer-personal-portfolio-699.vercel.app)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, fork, and use it as a reference for your own projects.
