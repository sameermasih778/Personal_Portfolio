import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black min-h-screen text-zinc-900 dark:text-zinc-200 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300 relative">
        {/* Vercel Crisp Laser Scroll Line */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-400 via-zinc-900 to-zinc-400 dark:from-zinc-600 dark:via-white dark:to-zinc-500 origin-left z-[100]"
        />
        
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
