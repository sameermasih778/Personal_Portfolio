import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, CheckCircle2, Cpu, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full-Stack', 'Computer Vision & AI', 'Frontend & SaaS'];

  const projects = [
    { 
      title: 'Suprema — Task Management SaaS', 
      domain: 'Full-Stack SaaS & Cloud Systems',
      subtitle: 'Production SaaS Platform (Khawaja Labs)',
      category: 'Full-Stack',
      highlights: 'Drag-and-Drop Kanban • JWT & RBAC Auth • Burndown Analytics',
      desc: 'Enterprise-grade task management and sprint orchestration platform featuring multi-tenant workspaces, drag-and-drop Kanban sprint boards, productivity analytics dashboards, and role-guarded REST APIs.',
      bullets: [
        'Architected interactive Kanban sprint boards with optimistic UI updates and fluid drag-and-drop task state management.',
        'Engineered secure Node.js & Express RESTful API micro-services fortified with JWT authentication and strict Role-Based Access Control (RBAC).',
        'Designed normalized relational database schemas on PostgreSQL and Supabase with foreign-key constraints and query indexing.',
        'Implemented role-based analytics dashboards tracking team velocity, milestone burndown charts, and automated activity audit logging.'
      ],
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Supabase', 'Express.js', 'Tailwind CSS', 'JWT Auth', 'REST APIs'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778'
    },
    { 
      title: 'Face-Craft & Grooming AI', 
      domain: 'Computer Vision & Full Stack',
      subtitle: 'Final Year Capstone Project',
      category: 'Computer Vision & AI',
      highlights: '468+ facial landmarks • Sub-second inference • Full auth & payment pipeline',
      desc: 'An intelligent web application that performs real-time facial landmark analysis, facial shape detection, personalized grooming and cosmetic product recommendations, and AI-powered virtual try-on.',
      bullets: [
        'Integrated MediaPipe Face Mesh for 468+ 3D facial landmarks and trained Random Forest classifiers for face-shape detection (round, oval, oblong, heart).',
        'Applied MTCNN-based computer vision for skin analysis detecting acne, pores, wrinkles, and skin tone variations.',
        'Implemented virtual try-on modules for hairstyles and beard styles, paired with an intelligent conversational AI advisor.',
        'Architected complete web platform with authentication, MySQL database, role-based admin panel, notifications, and subscription workflows.'
      ],
      tags: ['MediaPipe', 'Python', 'MTCNN', 'Random Forest', 'React.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778'
    },
    { 
      title: 'Food Delivery Web App', 
      domain: 'Full-Stack & E-Commerce Engineering',
      subtitle: 'End-to-End MERN Stack Architecture',
      category: 'Full-Stack',
      highlights: 'Stripe Checkout • Real-time Order Tracking • Atomic Cart Management',
      desc: 'Full-scale food ordering and logistics platform with customer storefront, interactive cart state management, Stripe payment processing, and real-time vendor order fulfillment dashboard.',
      bullets: [
        'Built end-to-end MERN stack application with MongoDB document schemas, Mongoose models, and atomic cart operations.',
        'Integrated Stripe Payment Gateway with webhook listener for secure transactional processing and automated invoice generation.',
        'Developed responsive real-time order tracking dashboard with automated status transitions (Received, Preparing, Dispatched).',
        'Implemented secure JWT session management, input validation, and password encryption using bcrypt.'
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'Tailwind CSS', 'JWT Auth', 'REST APIs'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778'
    },
    { 
      title: 'ShopEase — E-Commerce Storefront', 
      domain: 'Frontend Architecture & Performance',
      subtitle: 'Multi-Page Commercial Storefront',
      category: 'Frontend & SaaS',
      highlights: '7-Page Responsive Storefront • Client-side Cart State • Optimized Web Vitals',
      desc: 'High-performance, multi-page commercial storefront featuring dynamic catalog browsing, instant cart counter calculations, customer feedback toasts, and streamlined checkout UX.',
      bullets: [
        'Constructed modular, reusable UI component hierarchy using semantic HTML5, modern ES6+ JavaScript, and Tailwind CSS.',
        'Implemented robust client-side state handling for product quantity counters, active discount calculations, and persistent cart state.',
        'Integrated dynamic filtering by category, price ranges, and customer ratings with instant DOM updates.',
        'Optimized core web vitals and mobile touch targets for sub-second page loads across all device form factors.'
      ],
      tags: ['JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'Responsive Design', 'DOM API', 'State Management'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778'
    },
    { 
      title: 'Car Rental Booking Platform', 
      domain: 'Web Platform & Booking Systems',
      subtitle: 'Automotive Booking Solution',
      category: 'Frontend & SaaS',
      highlights: 'Fleet Catalog Filtering • Date Validation Workflows • Direct Inquiry Channels',
      desc: 'Automotive booking website featuring interactive vehicle fleet browsing, specification filtering, reservation date scheduling workflows, and direct customer inquiry channels.',
      bullets: [
        'Designed modular catalog viewing with dynamic vehicle specifications, pricing matrices, and transmission filters.',
        'Implemented date range validation workflows preventing double bookings and validating user scheduling constraints.',
        'Structured clean form state validation with real-time field error messaging and direct inquiry dispatch integration.',
        'Applied responsive glassmorphic cards and mobile-first responsive grid layouts.'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web', 'Form Validation', 'UI Architecture'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778'
    },
    { 
      title: 'Personal Portfolio & Architecture Showcase', 
      domain: 'Frontend Systems & Physics UI',
      subtitle: 'Developer Portfolio & Brand Identity',
      category: 'Frontend & SaaS',
      highlights: 'Fluid Spring Physics • Dark/Light Mode Engine • 100% Responsive Bento Grids',
      desc: 'High-performance developer portfolio featuring custom Bento grid architecture, dynamic theme switching engine, spring physics, and zero-layout-shift responsive performance.',
      bullets: [
        'Engineered floating glass capsule navbar with reactive scroll spy and spring pill animations via Framer Motion.',
        'Implemented theme persistence engine with zero-flash localStorage detection and system dark/light synchronization.',
        'Built custom SVG branding favicon and responsive mobile bottom-sheet navigation.',
        'Optimized asset bundling and production build pipeline via Vite 7, Tailwind v4, and tree-shaken Lucide icons.'
      ],
      tags: ['React 19', 'Vite 7', 'Tailwind v4', 'Framer Motion', 'Lucide Icons', 'Context API'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778'
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-zinc-50/70 dark:bg-black transition-colors duration-300 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-zinc-300/10 dark:bg-zinc-800/10 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-zinc-400/10 dark:bg-zinc-800/10 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-zinc-600 dark:text-zinc-400 font-semibold tracking-wider uppercase mb-2 text-xs sm:text-sm font-mono flex items-center gap-1.5">
            <Sparkles size={16} /> Selected Engineering Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl text-xs sm:text-sm md:text-base">
            Detailed engineering breakdown of full-stack web applications, AI platforms, and cloud systems.
          </p>
          <div className="w-16 h-1 bg-zinc-900 dark:bg-white rounded-full mt-3.5" />
        </div>

        {/* Vercel Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 sm:mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white dark:text-black shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCompactTabPill"
                    className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Technical Specification Engineering Cards Grid (2-Column Studio Grid) */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-950/70 border border-zinc-200/90 dark:border-white/[0.08] hover:border-zinc-400 dark:hover:border-white/25 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/60 overflow-hidden"
              >
                {/* Top Subtle Hover Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-zinc-900 dark:bg-white"
                />

                <div>
                  {/* 1. Domain Badge */}
                  <div className="mb-3.5">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300">
                      {project.domain}
                    </span>
                  </div>

                  {/* 2. Highlights / Metrics strip */}
                  <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 mb-5 text-[11px] sm:text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    <Cpu size={15} className="text-zinc-900 dark:text-white shrink-0" />
                    <span className="truncate">{project.highlights}</span>
                  </div>

                  {/* 3. Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* 4. Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* 5. TECHNICAL IMPLEMENTATION: */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-500 dark:text-zinc-400 uppercase block mb-3">
                      TECHNICAL IMPLEMENTATION:
                    </span>
                    <ul className="space-y-2.5">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          <CheckCircle2 size={16} className="text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* 6. Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-white/5 mb-5">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-white/[0.08] text-[11px] font-mono text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 7. Footer: Verified Project + Action Links */}
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-100 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-mono text-[11px]">
                      <Sparkles size={13} className="text-zinc-900 dark:text-white" />
                      Verified Project
                    </span>

                    <div className="flex items-center gap-3">
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                      >
                        <Github size={14} />
                        <span>Source</span>
                      </a>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-zinc-900 dark:text-white hover:underline cursor-pointer"
                      >
                        
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist GitHub Banner */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-7 rounded-2xl bg-white dark:bg-zinc-950/70 border border-zinc-200/90 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">Explore more code architectures on GitHub</h4>
            <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Full backend APIs, database models, and open repositories.</p>
          </div>
          <a
            href="https://github.com/sameermasih778"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shrink-0 cursor-pointer shadow-sm w-full sm:w-auto justify-center"
          >
            <Github size={14} />
            <span>github.com/sameermasih778</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
