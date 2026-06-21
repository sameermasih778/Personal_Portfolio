import { motion } from 'framer-motion';
import Project1 from '../assets/1.png';
import Project2 from '../assets/2.png';
import Project3 from '../assets/3.png';
import Project4 from '../assets/4.png';
import Project5 from '../assets/5.png';
import Project6 from '../assets/6.png';

const Projects = () => {
  const projects = [
    { 
      title: 'Food Delivery Web App', 
      img: Project1, 
      desc: 'Seamless shopping experience with secure payments.',
      color: 'from-blue-400 to-cyan-400',
    },
    { 
      title: 'E-commerce Web App', 
      img: Project2, 
      desc: 'Online Shopping Website For Clothes and Accessories.',
      color: 'from-purple-400 to-pink-400',
    },
    { 
      title: 'Portfolio V2', 
      img: Project3, 
      desc: 'Immersive personal showcase with motion effects.',
      color: 'from-emerald-400 to-teal-400',
    },
    { 
      title: 'Car Rental System', 
      img: Project4, 
      desc: ' Car Rental System Web App',
      color: 'from-orange-400 to-red-400',
    },
    { 
      title: 'Calculator Web App', 
      img: Project5, 
      desc: 'Complex financial modeling and projections.',
      color: 'from-indigo-400 to-blue-400',
    },
    { 
      title: 'Product Launch', 
      img: Project6, 
      desc: 'High-conversion landing page framework.',
      color: 'from-rose-400 to-pink-400',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-widest uppercase mb-3 text-sm"
          >
            My Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Works</span>
          </motion.h2>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "100px" }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" 
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 overflow-hidden hover:border-cyan-500/50 transition-colors duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800/50">
                 <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                 />
              </div>

              {/* Content Section */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Decorative Gradient Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${project.color} group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
