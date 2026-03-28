import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Calendar, Lightbulb } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Award, value: "500+", label: "Events Delivered" },
  { icon: Users, value: "250+", label: "Trusted Clients" },
  { icon: Lightbulb, value: "1K+", label: "Designs Realized" },
];

export const AboutSection = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "30%"]);

  return (
    <section id="about" className="relative py-20 overflow-hidden border-t border-white/5" ref={containerRef}>
      {/* Decorative ambient glow — radial gradient only, no blur filter */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -left-64 top-1/4 h-[800px] w-[800px] pointer-events-none"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle, hsl(38 80% 55% / 0.07) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <p className="font-body text-fluid-small uppercase tracking-[0.3em] text-primary font-semibold">About Us</p>
            </div>
            
            <h2 className="font-display text-fluid-h2 font-bold text-foreground leading-tight motion-gpu">
              Crafting <br className="hidden sm:block"/>
              <span className="text-gradient-gold">Extraordinary</span> <br className="hidden sm:block"/>
              Experiences
            </h2>
            
            <div className="mt-8 space-y-6 motion-gpu">
              <p className="font-body text-fluid-body leading-relaxed text-muted-foreground">
                <strong className="text-white">PT Kreativika Cipta Kreasi (KCK Production)</strong> adalah perusahaan event production & creative design papan atas yang berdedikasi untuk menghadirkan pengalaman tak terlupakan bergaya premium.
              </p>
              <p className="font-body text-fluid-body leading-relaxed text-muted-foreground/80 border-l-2 border-primary/50 pl-6">
                Kami menggabungkan seni desain tingkat tinggi, teknologi multimedia mutakhir, dan eksekusi produksi presisi untuk menciptakan mahakarya event yang mendobrak batasan normal.
              </p>
            </div>
            
            <motion.div 
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group relative overflow-hidden rounded-full border-2 border-primary/50 px-8 py-3 font-body text-fluid-button font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary-foreground motion-gpu">
                <span className="relative z-10 transition-colors group-hover:text-black">Our Story</span>
                <div className="absolute inset-0 z-0 bg-primary translate-y-3d-down transition-transform duration-300 group-hover:translate-y-3d-zero" />
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.06, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 10px 30px -10px hsl(38 80% 55% / 0.25)" }}
                className="glass-card relative overflow-hidden rounded-2xl p-4 sm:p-6 lg:p-8 text-center group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 rounded-full bg-primary/10 p-4 ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300 group-hover:bg-primary/20">
                    <stat.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <motion.p 
                    className="font-display text-fluid-h2 font-extrabold text-white motion-gpu"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (i * 0.05) }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="mt-2 font-body text-fluid-small font-medium uppercase tracking-widest text-primary/80">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
