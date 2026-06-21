import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-200 selection:bg-cyan-500 selection:text-white transition-colors duration-300">
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
