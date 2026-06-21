import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 text-xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider uppercase mb-3"
          >
            Introduction
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600 dark:to-indigo-500">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" 
          />
        </div>

        {/* Content */}
        <div className="grid gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight">
              Transforming concepts into <span className="text-cyan-600 dark:text-cyan-400">seamless digital experiences</span>.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg md:text-xl font-light">
              I'm <span className="text-slate-900 dark:text-white font-medium">Sameer Masih</span>, a developer who bridges the gap between design and engineering. 
              With a keen eye for detail and a passion for clean code, I build scalable web applications that perform as beautifully as they look.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="grid md:grid-cols-3 gap-6"
          >
            {[
              { 
                icon: Code2, 
                title: "Clean Code", 
                desc: "Readable, maintainable, and efficient code architectures.",
                color: "text-cyan-600 dark:text-cyan-400",
                bg: "group-hover:bg-cyan-500/10",
                border: "group-hover:border-cyan-500/30",
                iconBg: "bg-cyan-100 dark:bg-white/5"
              },
              { 
                icon: Globe, 
                title: "Modern Web", 
                desc: "Responsive, accessible, and high-performance web solutions.",
                color: "text-indigo-600 dark:text-indigo-400",
                bg: "group-hover:bg-indigo-500/10",
                border: "group-hover:border-indigo-500/30",
                iconBg: "bg-indigo-100 dark:bg-white/5"
              },
              { 
                icon: Cpu, 
                title: "Future Ready", 
                desc: "Leveraging the latest tech stack for scalable applications.",
                color: "text-purple-600 dark:text-purple-400",
                bg: "group-hover:bg-purple-500/10",
                border: "group-hover:border-purple-500/30",
                iconBg: "bg-purple-100 dark:bg-white/5"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`group p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/40 backdrop-blur-sm transition-all duration-300 ${item.bg} ${item.border} hover:-translate-y-2 shadow-sm hover:shadow-md dark:shadow-none`}
              >
                <div className={`p-4 rounded-2xl ${item.iconBg} w-fit mb-6 ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

          

        </div>
      </div>
    </section>
  );
};

export default About;
