import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Code2, 
  Layers, 
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const About = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Khawaja Labs',
      period: '09/2026 – Present',
      desc: 'Developing responsive React & Tailwind interfaces for Suprema SaaS, building drag-and-drop Kanban boards, role dashboards, and securing Node/Express REST APIs with JWT & RBAC.',
      badge: 'Current Role'
    },
    {
      role: 'Web Development Intern',
      company: 'Maroof International Hospital',
      period: '07/2025 – 11/2025',
      desc: 'Built and refined responsive web pages, crafted modular reusable UI components, and fixed cross-device layouts for hospital web portals.',
      badge: 'Healthcare Web'
    }
  ];

  const certifications = [
    {
      title: 'JavaScript Specialist',
      issuer: 'Certiport (Pearson VUE)',
      desc: 'International certification validating DOM manipulation, algorithms, async programming, and modern ES6+ development.'
    },
    {
      title: 'MERN Stack Certification',
      issuer: 'NAVTTC (Adan Institute, Islamabad)',
      desc: 'Specialized training in building end-to-end full-stack architectures with MongoDB, Express, React, Node.js, and REST APIs.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase mb-2 text-xs sm:text-sm font-mono flex items-center gap-1.5"
          >
            <Sparkles size={16} /> Biography & Background
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            About <span className="text-gradient">Sameer Masih</span>
          </motion.h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base md:text-lg">
            Software Engineering graduate with hands-on production experience in Full-Stack Web Development, SaaS platforms, and secure APIs.
          </p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" 
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">

          {/* Card 1 (Span 8): Academic & Engineering Foundation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                <GraduationCap size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400 font-semibold block">
                  Education & Credentials
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  BS Software Engineering (2022 – 2026)
                </h3>
              </div>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-base leading-relaxed mb-5 sm:mb-6">
              Educated at the <span className="font-semibold text-slate-900 dark:text-white">International Islamic University, Islamabad</span>. 
              My degree provided a rigorous foundation in algorithms, software architecture, object-oriented design, database systems, and software quality assurance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
              {[
                { label: 'Clean Architecture', icon: Code2 },
                { label: 'Full-Stack Mastery', icon: Layers },
                { label: 'RESTful APIs', icon: ShieldCheck },
                { label: 'Agile & QA Testing', icon: CheckCircle2 },
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-300">
                  <pill.icon size={14} className="text-cyan-500 shrink-0" />
                  <span className="truncate">{pill.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 (Span 4): Location, Timezone & Remote Readiness */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Remote Ready
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                Islamabad, Pakistan
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3 sm:mb-4 flex items-center gap-1.5">
                <Clock size={13} /> Timezone: PKT (UTC+5)
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Available for full-time on-site, hybrid in Islamabad/Rawalpindi, and global remote developer contracts across all time zones.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              <span>English & Urdu Fluency</span>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Fast Response</span>
            </div>
          </motion.div>

          {/* Card 3 (Span 7): Practical Production Work Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-7 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <Briefcase size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400 font-semibold block">
                  Track Record
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Industry Experience
                </h3>
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-5 sm:pl-6 border-l-2 border-cyan-500/40 pb-2 last:pb-0">
                  <span className="absolute -left-[6px] sm:-left-[7px] top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-950" />
                  
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="text-cyan-600 dark:text-cyan-400">@ {exp.company}</span>
                    </h4>
                    <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800/60 px-2 py-0.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-1">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4 (Span 5): Verified Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-5 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  <Award size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400 font-semibold block">
                    Qualifications
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Certified Expertise
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                      <ShieldCheck size={15} className="text-cyan-500 shrink-0" />
                      <span>{cert.title}</span>
                    </h4>
                    <p className="text-[11px] sm:text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-white/10">
              <a 
                href="https://linkedin.com/in/sameermasih778"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                <span>Verify Credentials on LinkedIn</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
