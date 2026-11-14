import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Zap, Sun, Moon, Download } from 'lucide-react';
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
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {/* ════════════════════ NAVBAR BAR ════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
        <div 
          className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto ${
            scrolled 
              ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200/90 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/60' 
              : 'bg-white/80 dark:bg-zinc-950/70 backdrop-blur-md border border-zinc-200/70 dark:border-white/10 shadow-sm'
          }`}
        >
          {/* ── LEFT: Logo + Name ── */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
              <Terminal size={15} className="text-white dark:text-black" />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-bold font-display tracking-tight text-zinc-900 dark:text-white whitespace-nowrap">
                  Sameer Masih
                </span>
                <span className="inline-block relative flex-shrink-0 w-2 h-2 mt-px">
                  <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-70" />
                  <span className="absolute inset-0 rounded-full bg-emerald-500" />
                </span>
              </div>
              {/* Subtitle only on sm+ */}
              <span className="hidden sm:block text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 font-mono tracking-wide mt-0.5 whitespace-nowrap">
                Software &amp; Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* ── CENTER: Desktop Nav Links (md+) ── */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-white dark:text-black'
                      : 'text-black dark:text-white hover:opacity-70'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-black dark:bg-white rounded-full z-0 shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* ── RIGHT: Desktop actions (md+) ── */}
          <div className="hidden md:flex items-center gap-2 lg:gap-2.5 flex-shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
              <span className="inline-block relative flex-shrink-0 w-1.5 h-1.5">
                <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                <span className="absolute inset-0 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[9px] lg:text-[10px] font-mono font-semibold tracking-widest uppercase">
                Available for Hire
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer flex-shrink-0"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-[13px] font-semibold transition-all shadow-sm cursor-pointer group whitespace-nowrap flex-shrink-0"
            >
              <Zap size={13} className="group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* ── MOBILE RIGHT: Theme + Hamburger only ── */}
          <div className="flex items-center gap-1.5 md:hidden flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 active:scale-90 transition-transform cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 active:scale-90 transition-transform cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════════ INSTANT MOBILE BOTTOM DRAWER ════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-[200] flex flex-col justify-end md:hidden"
            style={{ backgroundColor: 'rgba(0,0,0,0.65)' }}
            onClick={closeDrawer}
          >
            {/* Sheet panel — slides up from bottom INSTANTLY */}
            <motion.div
              key="drawer-panel"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 shadow-2xl rounded-t-3xl will-change-transform"
              style={{ maxHeight: '90vh', overflowY: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-zinc-200 dark:bg-zinc-700" />
              </div>

              <div className="px-5 pb-10 pt-1">
                {/* Identity row + Close button */}
                <div className="flex items-center justify-between py-3 border-b border-zinc-100 dark:border-zinc-800 mb-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                      <Terminal size={16} className="text-white dark:text-black" />
                    </div>
                    <div className="flex flex-col leading-none">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold font-display text-zinc-900 dark:text-white">Sameer Masih</span>
                        <span className="inline-block relative flex-shrink-0 w-2 h-2">
                          <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-70" />
                          <span className="absolute inset-0 rounded-full bg-emerald-500" />
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                        Software &amp; Full-Stack Engineer
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 flex-shrink-0 active:scale-90 transition-transform cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X size={17} />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col py-2 mb-2">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => {
                          setActiveSection(link.id);
                          closeDrawer();
                        }}
                        className={`flex items-center justify-between py-3.5 px-4 rounded-full transition-colors text-sm font-semibold ${
                          isActive
                            ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                            : 'text-black dark:text-white hover:opacity-70'
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className={`text-[10px] font-mono ${isActive ? 'text-zinc-400 dark:text-zinc-500' : 'text-zinc-400 dark:text-zinc-600'}`}>0{idx + 1}</span>
                      </a>
                    );
                  })}
                </div>

                {/* Footer: Available badge + Action buttons */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60">
                    <span className="inline-block relative flex-shrink-0 w-1.5 h-1.5">
                      <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                      <span className="absolute inset-0 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-zinc-700 dark:text-zinc-300">
                      Available for Hire
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href="#contact"
                      onClick={closeDrawer}
                      className="flex items-center justify-center gap-1.5 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold text-sm shadow-sm active:scale-95 transition-transform"
                    >
                      <Zap size={14} />
                      <span>Get in Touch</span>
                    </a>
                    <a
                      href={Resume}
                      download
                      onClick={closeDrawer}
                      className="flex items-center justify-center gap-1.5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-semibold text-sm active:scale-95 transition-transform"
                    >
                      <Download size={14} />
                      <span>Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
