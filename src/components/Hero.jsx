import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import ProfileImg from '../assets/Profile.jpg';
import Resume from '../assets/Resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-10 px-6 overflow-hidden relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 dark:bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="px-4 py-2 rounded-full glass text-cyan-600 dark:text-cyan-400 text-sm font-medium border-cyan-500/30 inline-block text-xl font-bold">
          Software Engineer  |  Web Developer
          </span>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-500">
              Sameer Masih
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed text-xl">
            I'm a Software Engineer passionate about building modern, responsive, and scalable web applications. I enjoy turning ideas into high-quality digital products through clean code and thoughtful design.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 md:pt-4">
            <a 
              href={Resume} 
              download 
              className="px-6 py-3 md:px-8 md:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 text-sm md:text-base"
            >
              <Download size={18} className="md:w-5 md:h-5" />
              Download CV
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 md:px-8 md:py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white transition-all flex items-center gap-2 text-sm md:text-base"
            >
              View Work
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          <div className="relative w-60 h-60 min-w-[240px] md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 backdrop-blur-sm overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
              <img 
                src={ProfileImg} 
                alt="Sameer Khokhar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
