import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 pt-20 pb-10 px-6 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          {[Facebook, Linkedin, Twitter, Instagram, Github].map((Icon, index) => (
            <a 
              key={index} 
              href="#" 
              className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-cyan-600 dark:hover:bg-cyan-600 transition-all duration-300 shadow-sm hover:shadow-cyan-500/30"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <ul className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-slate-600 dark:text-slate-400 font-medium">
          <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">FAQ</a></li>
          <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About Me</a></li>
          <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
        </ul>

        <p className="text-slate-500 text-sm text-center">
          &copy; 2026 Sameer Developer | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
