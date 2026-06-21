import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaJs, 
  FaReact, 
  FaDatabase, 
  FaGithub, 
  FaLinux, 
  FaPhp 
} from 'react-icons/fa6';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', level: 'Advanced', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Bootstrap', level: 'Intermediate', icon: FaBootstrap, color: '#7952B3' },
    { name: 'JavaScript', level: 'Intermediate', icon: FaJs, color: '#F7DF1E' },
    { name: 'React', level: 'Intermediate', icon: FaReact, color: '#61DAFB' },
    { name: 'SQL', level: 'Basic', icon: FaDatabase, color: '#4479A1' },
    { name: 'GitHub', level: 'Intermediate', icon: FaGithub, color: '#181717' }, // Changed to black/white friendly
    { name: 'Linux', level: 'Basic', icon: FaLinux, color: '#FCC624' },
    { name: 'PHP', level: 'Basic', icon: FaPhp, color: '#777BB4' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider uppercase mb-3 text-xl font-bold">My Expertise</span>
          <h2 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Skills</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                borderColor: `rgba(${parseInt(skill.color.slice(1,3),16)}, ${parseInt(skill.color.slice(3,5),16)}, ${parseInt(skill.color.slice(5,7),16)}, 0.4)`,
                backgroundColor: `rgba(${parseInt(skill.color.slice(1,3),16)}, ${parseInt(skill.color.slice(3,5),16)}, ${parseInt(skill.color.slice(5,7),16)}, 0.05)`,
                boxShadow: `0 0 20px rgba(${parseInt(skill.color.slice(1,3),16)}, ${parseInt(skill.color.slice(3,5),16)}, ${parseInt(skill.color.slice(5,7),16)}, 0.1)`
              }}
              initial={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
              className="glass p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />

              <div className="flex items-center gap-6">
                <div 
                  className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 group-hover:bg-transparent group-hover:border-transparent transition-all duration-300 relative"
                >
                  <skill.icon 
                    size={48} 
                    style={{ color: skill.color }}
                    className="filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
                  />
                  {/* Icon Glow */}
                  <div 
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" 
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">{skill.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-wide">{skill.level}</p>
                </div>
              </div>

              {/* Decorative background logo */}
              <skill.icon 
                className="absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.03] transform rotate-[-12deg] group-hover:opacity-[0.08] group-hover:rotate-0 transition-all duration-500 pointer-events-none text-slate-900 dark:text-white" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
