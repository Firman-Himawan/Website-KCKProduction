import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Mail, Phone, MapPin, Instagram, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: isMobile ? "-40px" : "-100px" });

  return (
    <section id="contact" className="relative py-20 overflow-hidden border-t border-white/5 bg-background">
      {/* Ambient background light */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(38 80% 55% / 0.07) 0%, transparent 70%)" }} />

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 justify-center mb-6 motion-gpu">
            <div className="h-[1px] w-8 bg-primary/50" />
            <p className="font-body text-fluid-small uppercase tracking-[0.3em] text-primary">Get In Touch</p>
            <div className="h-[1px] w-8 bg-primary/50" />
          </div>
          <h2 className="font-display text-fluid-h2 font-black text-foreground tracking-tight sm:tracking-tighter motion-gpu">
            LET'S <span className="text-gradient-gold">COLLABORATE</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:gap-24 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-fluid-h3 font-display font-bold text-white mb-6">Start a Project</h3>
              <p className="font-body text-fluid-body leading-relaxed text-muted-foreground mb-10 border-l-2 border-primary/30 pl-4">
                Siap untuk mewujudkan event memukau Anda bersama KCK Production? Tim kami menunggu untuk mendiskusikan visi dan ide Anda.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, text: "info@kckproduction.com", label: "Email Us" },
                  { icon: Phone, text: "+62 812 3456 7890", label: "Call Us" },
                  { icon: Instagram, text: "@kckproduction", label: "Follow Us" },
                  { icon: MapPin, text: "Jakarta Selatan, Indonesia", label: "Visit Us" },
                ].map((item, i) => (
                  <motion.div 
                    key={item.text} 
                    className="group flex items-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + (i * 0.04) }}
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full glass border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                      <item.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-body text-muted-foreground mb-1">{item.label}</p>
                      <span className="font-body text-base font-semibold text-white group-hover:text-primary transition-colors">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 overflow-hidden motion-gpu"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-fluid-small uppercase tracking-widest font-body text-primary/80">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-background/50 px-5 py-4 font-body text-fluid-small text-white placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-fluid-small uppercase tracking-widest font-body text-primary/80">Email Address</label>
              <input 
                type="email" 
                placeholder="john@company.com"
                className="w-full rounded-xl border border-white/10 bg-background/50 px-5 py-4 font-body text-fluid-small text-white placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-fluid-small uppercase tracking-widest font-body text-primary/80">Project Details</label>
              <textarea 
                rows={5}
                placeholder="Ceritakan tentang visi event Anda..."
                className="w-full resize-none rounded-xl border border-white/10 bg-background/50 px-5 py-4 font-body text-fluid-small text-white placeholder:text-muted-foreground/50 focus:border-primary focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-6 py-4 font-body text-fluid-button font-bold uppercase tracking-widest text-primary-foreground transition-all motion-gpu"
            >
              <span className="relative z-10 font-bold">Send Inquiry</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-3d-right" />
              <div className="absolute inset-0 z-0 bg-white/20 translate-y-3d-down group-hover:translate-y-3d-zero transition-transform duration-300" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
