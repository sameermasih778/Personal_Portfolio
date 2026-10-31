import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import SupremaImg from '../assets/suprema.png';
import FaceCraftImg from '../assets/facecraft.png';
import Project1 from '../assets/1.png';
import Project2 from '../assets/2.png';
import Project3 from '../assets/3.png';
import Project4 from '../assets/4.png';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full-Stack', 'Frontend & SaaS', 'E-Commerce'];

  const projects = [
    { 
      title: 'Suprema — Task Management SaaS', 
      category: 'Full-Stack',
      tag: 'Featured Flagship',
      img: SupremaImg, 
      desc: 'Full-stack task management SaaS with drag-and-drop Kanban, workspaces, analytics dashboards, and JWT/RBAC secured APIs.',
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778',
      color: '#06B6D4'
    },
    { 
      title: 'FaceCraft — AI Grooming Assistant', 
      category: 'Full-Stack',
      tag: 'AI Integrated',
      img: FaceCraftImg, 
      desc: 'AI-assisted grooming web app analyzing facial geometry to recommend customized hair styles, beard cuts, and skincare products.',
      tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'REST APIs'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778',
      color: '#A855F7'
    },
    { 
      title: 'Food Delivery Web App', 
      category: 'Full-Stack',
      tag: 'MERN Stack',
      img: Project1, 
      desc: 'Full-stack food ordering platform with customer storefront, cart, Stripe checkout integration, and live admin management dashboard.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'JWT Auth'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778',
      color: '#3B82F6'
    },
    { 
      title: 'ShopEase — E-Commerce Storefront', 
      category: 'E-Commerce',
      tag: 'Storefront',
      img: Project2, 
      desc: 'Responsive seven-page e-commerce storefront with dynamic product catalog, interactive cart counter, feedback toasts, and checkout.',
      tags: ['JavaScript', 'Tailwind CSS', 'HTML5', 'Responsive UI'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778',
      color: '#10B981'
    },
    { 
      title: 'Car Rental Booking Platform', 
      category: 'Frontend & SaaS',
      tag: 'Web Platform',
      img: Project4, 
      desc: 'Automotive booking website featuring vehicle catalog filtering, reservation scheduling workflows, and inquiry channels.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778',
      color: '#F59E0B'
    },
    { 
      title: 'Personal Portfolio & Showcase', 
      category: 'Frontend & SaaS',
      tag: 'Portfolio',
      img: Project3, 
      desc: 'High-performance developer portfolio featuring custom Bento grids, dynamic dark/light theme switching, and fluid spring physics.',
      tags: ['React 19', 'Tailwind v4', 'Framer Motion', 'Vite'],
      liveUrl: 'https://sameer-personal-portfolio-699.vercel.app',
      githubUrl: 'https://github.com/sameermasih778',
      color: '#EC4899'
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase mb-2 text-xs sm:text-sm font-mono flex items-center gap-1.5">
            <Sparkles size={16} /> Selected Engineering Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-xs sm:text-sm md:text-base">
            Compact showcase of full-stack web applications, SaaS platforms, and responsive interfaces.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-3.5" />
        </div>

        {/* Compact Segmented Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 sm:mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCompactTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Compact, Professional 3-Column Studio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
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
                className="group relative rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/50 dark:hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Hover Accent Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  style={{ backgroundColor: project.color }}
                />

                <div>
                  {/* Compact Screenshot Preview Frame */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative h-44 sm:h-48 overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-white/[0.06] cursor-pointer"
                  >
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Tag Badge */}
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-900/80 text-cyan-300 backdrop-blur-md border border-white/10 shadow-sm">
                      {project.tag}
                    </span>
                  </a>

                  {/* Compact Body Content */}
                  <div className="p-4 sm:p-5">
                    {/* Category */}
                    <span className="text-[10px] font-mono font-medium text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1 mb-1.5">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3">
                      {project.desc}
                    </p>

                    {/* Compact Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-white/5 text-[10px] font-mono text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-400">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Compact, Professional Button Bar */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
                    {/* Live Demo Button */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-cyan-600 dark:bg-white dark:hover:bg-cyan-400 text-white dark:text-slate-950 dark:hover:text-slate-950 text-xs font-semibold shadow-sm transition-all duration-200 cursor-pointer group/live"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                    </a>

                    {/* Source Code Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium transition-all duration-200 cursor-pointer"
                    >
                      <Github size={13} />
                      <span>Source</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist GitHub Banner */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Explore more code architectures on GitHub</h4>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">Full backend APIs, database models, and open repositories.</p>
          </div>
          <a
            href="https://github.com/sameermasih778"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all shrink-0 cursor-pointer shadow-sm w-full sm:w-auto justify-center"
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
