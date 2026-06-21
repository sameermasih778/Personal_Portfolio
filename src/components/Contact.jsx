import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wider uppercase mb-2 text-xl font-bold">Get In Touch</span>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 glass p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/50">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Let's Talk About Your Project</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, text: 'sameermasih778@gmail.com', label: 'Email' },
                { icon: Phone, text: '+92 318451994', label: 'Phone' },
                { icon: MapPin, text: 'Islamabad, Pakistan', label: 'Location' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 group-hover:bg-cyan-500/20 transition-colors text-cyan-600 dark:text-cyan-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-slate-800 dark:text-slate-200 font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-white/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="text" placeholder="Full Name" className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                </div>
                <div className="relative">
                  <input type="email" placeholder="Email Address" className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input type="text" placeholder="Phone Number" className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                </div>
                <div className="relative">
                  <input type="text" placeholder="Subject" className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                </div>
              </div>

              <textarea rows="4" placeholder="Your Message" className="w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"></textarea>
              
              <button className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex justify-center items-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
