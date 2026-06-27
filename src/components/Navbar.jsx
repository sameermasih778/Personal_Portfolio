import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Resume from '../assets/Resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];



  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm py-4'
          : 'bg-white dark:bg-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-lg group-hover:rotate-12 transition-transform">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400">
            Sameer<span className="text-slate-800 dark:text-white"> Masih</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-l font-semibold tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 dark:bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-yellow-400 hover:bg-slate-300 dark:hover:bg-white/20 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-yellow-400"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white dark:bg-slate-950 z-[60] flex flex-col p-6"
          >
            {/* Overlay Header */}
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-0">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-slate-800 dark:text-slate-200 py-5 border-b border-slate-100 dark:border-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Resume Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-8"
            >
              <a 
                href={Resume} 
                download
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all"
              >
                <Download size={20} />
                Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
