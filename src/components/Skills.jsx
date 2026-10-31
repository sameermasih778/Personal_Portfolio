import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Terminal,
  Layers
} from 'lucide-react';
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiFramer, 
  SiVite, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiSupabase, 
  SiMongodb, 
  SiMysql,
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiVercel, 
  SiLinux 
} from 'react-icons/si';

const Skills = () => {
  const skillDomains = [
    {
      title: 'Frontend Architecture',
      subtitle: 'Building responsive, accessible & high-performance user interfaces',
      icon: Code2,
      accent: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'React.js', spec: 'SPAs, Hooks & State Management', icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript (ES6+)', spec: 'Async/Await, DOM & Algorithms', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', spec: 'Responsive Design & Custom Systems', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Framer Motion', spec: 'Fluid Physics & Micro-Interactions', icon: SiFramer, color: '#EA4C89' },
        { name: 'Vite', spec: 'Next-Gen Bundling & Fast HMR', icon: SiVite, color: '#646CFF' },
        { name: 'HTML5 & CSS3', spec: 'Semantic Layouts, Flex & Grid', icon: SiHtml5, color: '#E34F26' },
      ]
    },
    {
      title: 'Backend & API Engineering',
      subtitle: 'Engineering robust server-side business logic and secure RESTful endpoints',
      icon: Server,
      accent: 'from-blue-600 to-indigo-600',
      skills: [
        { name: 'Node.js', spec: 'Server Runtime & Asynchronous I/O', icon: SiNodedotjs, color: '#5FA04E' },
        { name: 'Express.js', spec: 'RESTful Routing & Middleware Architecture', icon: SiExpress, color: '#94A3B8' },
        { name: 'JWT & RBAC', spec: 'Role-Based Access Control & Route Guards', icon: ShieldCheck, color: '#10B981' },
        { name: 'API Security', spec: 'Input Validation, Rate Limiting & Helmet', icon: ShieldCheck, color: '#38BDF8' },
        { name: 'RESTful APIs', spec: 'CRUD Endpoints, Error Handling & Status Codes', icon: Zap, color: '#F59E0B' },
      ]
    },
    {
      title: 'Databases & Cloud Storage',
      subtitle: 'Designing normalized schemas, indexing, and scalable data layers',
      icon: Database,
      accent: 'from-indigo-600 to-purple-600',
      skills: [
        { name: 'PostgreSQL', spec: 'Relational Schemas, Foreign Keys & Queries', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Supabase', spec: 'Cloud PostgreSQL, Row Security & Realtime', icon: SiSupabase, color: '#3ECF8E' },
        { name: 'MongoDB', spec: 'NoSQL Document Storage & Mongoose Models', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', spec: 'Relational Database Architecture & Integrity', icon: SiMysql, color: '#00758F' },
      ]
    },
    {
      title: 'DevOps, Workflow & Testing',
      subtitle: 'Disciplined version control, automated deployments, and API validation',
      icon: Terminal,
      accent: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'Git & GitHub', spec: 'Branching, Pull Requests & Versioning', icon: SiGithub, color: '#E2E8F0' },
        { name: 'Postman', spec: 'API Endpoint Validation & Testing', icon: SiPostman, color: '#FF6C37' },
        { name: 'Vercel', spec: 'Continuous Deployment & Edge CDN', icon: SiVercel, color: '#FFFFFF' },
        { name: 'Linux / CLI', spec: 'Command Line, Environment Config & Scripting', icon: SiLinux, color: '#FCC624' },
      ]
    }
  ];

  const standards = [
    { title: 'Clean Architecture', desc: 'Modular, maintainable & decoupled codebases', icon: Code2 },
    { title: 'Security-First', desc: 'JWT, sanitized inputs & role-based route guards', icon: ShieldCheck },
    { title: 'Responsive Design', desc: 'Pixel-perfect across mobile, tablet & desktop', icon: Layers },
    { title: 'Automated CI/CD', desc: 'Seamless Git workflow & Vercel deployment', icon: Zap },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-[550px] h-72 sm:h-[550px] bg-cyan-500/5 dark:bg-cyan-900/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-[550px] h-72 sm:h-[550px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase mb-2 text-xs sm:text-sm font-mono flex items-center gap-1.5"
          >
            <Sparkles size={16} /> Technical Arsenal
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base md:text-lg">
            A battle-tested stack of modern frameworks, databases, and engineering workflows I leverage to build scalable, production-grade applications.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
        </div>

        {/* 4 Distinct Bento Domains */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillDomains.map((domain, domainIdx) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: domainIdx * 0.1, duration: 0.5 }}
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
            >
              {/* Top ambient glow */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.accent} opacity-70 group-hover:opacity-100 transition-opacity`} />

              <div>
                {/* Domain Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${domain.accent} text-white shadow-md shadow-cyan-500/20 shrink-0`}>
                    <domain.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {domain.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {domain.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Micro-Cards Inside Domain */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
                  {domain.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-white/5 hover:border-cyan-500/40 dark:hover:border-cyan-400/30 hover:bg-white dark:hover:bg-slate-800/80 transition-all duration-200 flex items-center gap-3 group/skill cursor-default"
                    >
                      {/* Icon */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm group-hover/skill:scale-105 transition-transform">
                        <skill.icon 
                          size={18} 
                          style={{ color: skill.color }}
                          className="drop-shadow-sm sm:w-5 sm:h-5"
                        />
                      </div>

                      {/* Name & Spec */}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate group-hover/skill:text-cyan-600 dark:group-hover/skill:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5 font-normal">
                          {skill.spec}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500" /> Production Verified
                </span>
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">Industry Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Standards Strip */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-200 dark:border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {standards.map((std, idx) => (
              <motion.div
                key={std.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 flex items-start gap-3 shadow-sm"
              >
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <std.icon size={16} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{std.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{std.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
