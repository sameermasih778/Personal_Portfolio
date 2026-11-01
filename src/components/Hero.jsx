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
      className="relative min-h-[auto] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Vercel Dot Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)] pointer-events-none opacity-80 dark:opacity-60" />
      
      {/* Ambient Platinum Backlight Spotlights */}
      <div className="absolute top-1/4 right-[5%] w-72 sm:w-[480px] h-72 sm:h-[480px] bg-zinc-400/10 dark:bg-zinc-700/15 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-72 sm:w-[480px] h-72 sm:h-[480px] bg-zinc-300/15 dark:bg-zinc-800/15 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Right Column (Avatar): Proportionate on Mobile, Large on Desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex justify-center order-1 md:order-2 my-2 sm:my-0"
          >
            {/* Ambient Platinum Halo Glow */}
            <div className="absolute w-52 h-52 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tr from-zinc-400/15 via-zinc-200/20 to-transparent dark:from-white/10 dark:via-zinc-600/15 dark:to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none" />

            <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px]">
              {/* Outer Circular Dashed Halo in Monochrome */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-400/60 dark:border-zinc-500/50 animate-[spin_10s_linear_infinite]" />
              
              {/* Inner Circular Frame */}
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 backdrop-blur-sm overflow-hidden border border-zinc-200/90 dark:border-white/10 shadow-2xl">
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
            {/* Vercel Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/10 bg-zinc-100/90 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm"
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
              <span className="text-zinc-600 dark:text-zinc-400 font-semibold tracking-wider uppercase text-xs sm:text-sm font-mono flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles size={14} className="text-zinc-900 dark:text-white" /> Software Engineer & Full-Stack Developer
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Hi, I'm <br className="hidden sm:block" />
                <span className="text-gradient">Sameer Masih</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
              I specialize in engineering modern, responsive web applications that balance 
              <span className="font-semibold text-zinc-900 dark:text-white"> scalable architecture </span> 
              with <span className="font-semibold text-zinc-900 dark:text-white">clean code and intuitive design</span>.
            </p>
            
            {/* CTAs and Social Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto sm:gap-3.5">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={Resume} 
                  download 
                  className="px-5 sm:px-6 py-3 rounded-full bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold shadow-md shadow-black/10 dark:shadow-white/10 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Download size={15} />
                  <span>Download CV</span>
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects" 
                  className="px-5 sm:px-6 py-3 rounded-full border border-zinc-300 dark:border-white/15 bg-zinc-50 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-semibold backdrop-blur-md transition-all flex items-center justify-center gap-1.5 text-xs sm:text-sm cursor-pointer"
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
                  className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/sameermasih778" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#contact"
                  className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Metrics & Highlights Strip */}
            <div className="pt-6 w-full border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-white/[0.08] text-center sm:text-left flex flex-col justify-center shadow-sm">
                    <span className="text-xl sm:text-3xl font-bold font-display text-zinc-900 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
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
