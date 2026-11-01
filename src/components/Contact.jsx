import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sameermasih778@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sameermasih778@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="absolute top-[-10%] right-[-5%] w-72 sm:w-96 h-72 sm:h-96 bg-zinc-300/10 dark:bg-zinc-800/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-72 sm:w-96 h-72 sm:h-96 bg-zinc-400/10 dark:bg-zinc-800/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-zinc-600 dark:text-zinc-400 font-semibold tracking-wider uppercase mb-2 text-xs sm:text-sm font-mono flex items-center gap-1.5">
            <Sparkles size={16} /> Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl text-xs sm:text-sm md:text-base">
            Have a project in mind, an open full-time role, or an interesting engineering challenge? I'd love to connect.
          </p>
          <div className="w-16 sm:w-20 h-1 bg-zinc-900 dark:bg-white rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 glass-card p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-zinc-200/90 dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-950/70">
          
          {/* Left Column: Direct Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">
                Let's Talk About Your Next Initiative
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs sm:text-sm md:text-base">
                I'm open to discussing full-time software engineering roles, hybrid opportunities in Islamabad/Rawalpindi, and global remote contracts.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-5">
              {/* Email with 1-Click Copy */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.06] group">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white shrink-0">
                    <Mail size={20} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Email Address</p>
                    <a 
                      href="mailto:sameermasih778@gmail.com"
                      className="text-zinc-900 dark:text-zinc-100 font-semibold text-xs sm:text-base hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors truncate block"
                    >
                      sameermasih778@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 sm:p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-all cursor-pointer text-xs flex items-center gap-1.5 shrink-0 ml-2 shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-500" />
                      <span className="text-[11px] font-mono text-emerald-500 font-medium hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="text-[11px] font-mono font-medium hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.06]">
                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white shrink-0">
                  <Phone size={20} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Phone / WhatsApp</p>
                  <a 
                    href="tel:+923184519994"
                    className="text-zinc-900 dark:text-zinc-100 font-semibold text-xs sm:text-base hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    +92 318 4519994
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.06]">
                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white shrink-0">
                  <MapPin size={20} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Location & Timezone</p>
                  <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-xs sm:text-base">
                    Islamabad, Pakistan (UTC+5)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300 dark:border-white/[0.08] text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white animate-pulse shrink-0"></span>
              Fast response turnaround guaranteed (under 24 hours).
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900/50 p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-zinc-200/80 dark:border-white/[0.06]"
          >
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl px-3.5 py-2.5 sm:py-3 text-zinc-900 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors placeholder:text-zinc-400 shadow-sm" 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl px-3.5 py-2.5 sm:py-3 text-zinc-900 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors placeholder:text-zinc-400 shadow-sm" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-1">Phone (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="+92 300 0000000" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl px-3.5 py-2.5 sm:py-3 text-zinc-900 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors placeholder:text-zinc-400 shadow-sm" 
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Opportunity / Inquiry" 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl px-3.5 py-2.5 sm:py-3 text-zinc-900 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors placeholder:text-zinc-400 shadow-sm" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-1">Message</label>
                <textarea 
                  rows="4" 
                  required
                  placeholder="Tell me about your project, timeline, or open opportunity..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl px-3.5 py-2.5 sm:py-3 text-zinc-900 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors resize-none placeholder:text-zinc-400 shadow-sm"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 sm:py-3.5 rounded-xl bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black font-semibold shadow-md transition-all flex justify-center items-center gap-2 cursor-pointer text-xs sm:text-base"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>

              {isSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={15} /> Opening your email client to send message!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
