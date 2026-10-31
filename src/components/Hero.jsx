import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import ProfileImg from '../assets/Profile.png';
import Resume from '../assets/Resume.pdf';

const Hero = () => {
  const stats = [
    { value: '10+', label: 'Projects Built' },
    { value: 'Full-Stack', label: 'Web Applications' },
    { value: 'Clean Code', label: 'Architecture & UI' },
    { value: '100%', label: 'Responsive Design' },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[auto] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none opacity-60 dark:opacity-40" />
      
      <div className="absolute top-1/4 right-[5%] w-72 sm:w-[450px] h-72 sm:h-[450px] bg-indigo-500/10 dark:bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-72 sm:w-[450px] h-72 sm:h-[450px] bg-cyan-500/15 dark:bg-cyan-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Right Column (Avatar): Proportionate on Mobile, Large on Desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex justify-center order-1 md:order-2 my-2 sm:my-0"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute w-52 h-52 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

            <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px]">
              {/* Outer Circular Dashed Halo */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/35 dark:border-cyan-400/30 animate-[spin_10s_linear_infinite]" />
              
              {/* Inner Circular Frame */}
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 backdrop-blur-sm overflow-hidden border border-white/30 dark:border-white/10 shadow-2xl">
                <img 
                  src={ProfileImg} 
                  alt="Sameer Masih" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Column: Headline, Bio, CTAs & Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 sm:space-y-6 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden sm:inline">Available for Full-Time Roles & Freelance Projects</span>
              <span className="inline sm:hidden">Available for Roles & Projects</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-xs sm:text-sm font-mono flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles size={14} className="sm:w-4 sm:h-4" /> Software Engineer & Full-Stack Developer
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <br className="hidden sm:block" />
                <span className="text-gradient">Sameer Masih</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
              I specialize in engineering modern, responsive web applications that balance 
              <span className="font-semibold text-slate-900 dark:text-white"> scalable architecture </span> 
              with <span className="font-semibold text-slate-900 dark:text-white">clean code and intuitive design</span>.
            </p>
            
            {/* CTAs and Social Icons (Fully Mobile Responsive) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto sm:gap-3.5">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={Resume} 
                  download 
                  className="px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Download size={15} />
                  <span>Download CV</span>
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects" 
                  className="px-5 sm:px-6 py-3 rounded-full border border-slate-300 dark:border-white/15 bg-white/70 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold backdrop-blur-md transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm cursor-pointer"
                >
                  <span>View Work</span>
                  <ArrowRight size={15} />
                </motion.a>
              </div>

              {/* Social Quick-Access */}
              <div className="flex items-center justify-center gap-2.5 pt-1 sm:pt-0 sm:pl-2">
                <a 
                  href="https://github.com/sameermasih778" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/sameermasih778" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#contact"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Metrics & Highlights Strip (Clean Micro-Cards on Mobile) */}
            <div className="pt-6 w-full border-t border-slate-200 dark:border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 text-center sm:text-left flex flex-col justify-center">
                    <span className="text-xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
