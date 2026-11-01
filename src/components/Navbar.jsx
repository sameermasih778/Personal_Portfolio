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
            ? 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl border border-zinc-200/90 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/60' 
            : 'bg-white/60 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/60 dark:border-white/5'
        }`}
      >
        {/* Vercel Studio Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Code2 size={17} />
          </div>
          <span className="text-base sm:text-lg font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Sameer<span className="text-gradient">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links with Active Spring Pill */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-100/980 dark:bg-zinc-900/980 border border-zinc-200/80 dark:border-white/[0.06]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                  isActive 
                    ? 'text-white dark:text-black' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-full -z-10 shadow-sm"
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
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a 
            href={Resume}
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black transition-all shadow-sm cursor-pointer group"
          >
            <Download size={13} className="transition-transform group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Vercel Studio Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/75 backdrop-blur-md z-[70] flex flex-col justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="w-full bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-white/10 p-6 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-white/10 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
                    <Code2 size={16} />
                  </div>
                  <span className="font-bold font-display text-zinc-900 dark:text-white">Navigation</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
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
                    className="flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-semibold text-base transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 font-bold">0{idx + 1}</span>
                  </a>
                ))}
              </div>

              {/* Footer with CV download & Socials */}
              <div className="pt-4 border-t border-zinc-100 dark:border-white/10 space-y-3">
                <a
                  href={Resume}
                  download
                  className="w-full py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <a 
                    href="https://github.com/sameermasih778" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/sameermasih778" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="mailto:sameermasih778@gmail.com" 
                    className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300"
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
