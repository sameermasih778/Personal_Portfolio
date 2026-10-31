import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, Download, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Resume from '../assets/Resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll Spy for active nav item
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4">
      <div 
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled 
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40' 
            : 'bg-white/50 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-white/5'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Code2 size={18} />
          </div>
          <span className="text-base sm:text-lg font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Sameer<span className="text-cyan-500">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links with Active Spring Pill */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & CV Download */}
        <div className="hidden md:flex items-center gap-2.5">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} className="text-slate-700" />}
          </button>

          <a 
            href={Resume}
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-cyan-600 dark:bg-white dark:hover:bg-cyan-400 text-white dark:text-slate-950 dark:hover:text-slate-950 transition-all shadow-sm cursor-pointer group"
          >
            <Download size={13} className="transition-transform group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-amber-400"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300"
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Luxury Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[70] flex flex-col justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/10 p-6 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500 flex items-center justify-center text-white">
                    <Code2 size={16} />
                  </div>
                  <span className="font-bold font-display text-slate-900 dark:text-white">Navigation</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col py-2">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">0{idx + 1}</span>
                  </a>
                ))}
              </div>

              {/* Footer with CV download & Socials */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-3">
                <a
                  href={Resume}
                  download
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <a 
                    href="https://github.com/sameermasih778" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/sameermasih778" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="mailto:sameermasih778@gmail.com" 
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
