import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 pt-16 pb-12 px-6 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          {[
            { icon: Github, href: 'https://github.com/sameermasih778', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/sameermasih778', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sameermasih778@gmail.com', label: 'Email' }
          ].map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="p-3 bg-white dark:bg-slate-900 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-white hover:bg-cyan-600 dark:hover:bg-cyan-600 transition-all duration-300 shadow-sm hover:shadow-cyan-500/25 border border-slate-200/80 dark:border-white/5"
            >
              <item.icon size={20} />
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 text-sm text-slate-600 dark:text-slate-400 font-medium">
          <li><a href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a></li>
        </ul>

        {/* Copyright & Back to Top */}
        <div className="w-full pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-700 dark:text-slate-300">Sameer Masih</span> • Software Engineer & Full-Stack Developer
          </p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
