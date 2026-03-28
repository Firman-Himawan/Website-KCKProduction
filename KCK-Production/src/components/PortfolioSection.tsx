import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import boothImg from "@/assets/service-booth.jpg";
import eventImg from "@/assets/service-event.jpg";
import design3dImg from "@/assets/service-3d.jpg";
import multimediaImg from "@/assets/service-multimedia.jpg";

const projects = [
  { title: "Corporate Gala Night", category: "Event Production", image: eventImg },
  { title: "Exhibition Booth XYZ", category: "Custom Booth", image: boothImg },
  { title: "3D Stage Visualization", category: "3D Design", image: design3dImg },
  { title: "LED Immersive Show", category: "Multimedia", image: multimediaImg },
];

export const PortfolioSection = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "50%"]);

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden bg-background" ref={sectionRef}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center motion-gpu"
        >
          <p className="font-body text-fluid-small uppercase tracking-[0.4em] text-primary mb-4">Selected Works</p>
          <h2 className="font-display text-fluid-h2 font-black text-foreground tracking-tighter sm:tracking-normal">
            OUR <span className="text-gradient-gold">PORTFOLIO</span>
          </h2>
          <div className="mt-6 mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.25, delay: i * 0.06, ease: "easeOut" }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image with grayscale to color flip and zoom */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover grayscale brightness-75 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
              />
              
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />

              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    className="motion-gpu"
                  >
                    <p className="font-body text-fluid-small font-bold uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </p>
                  </motion.div>
                  <h3 className="mt-2 font-display text-fluid-h3 font-bold text-white tracking-tight drop-shadow-lg motion-gpu">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              {/* Animated Corner Borders on Hover */}
              <div className="absolute top-6 left-6 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-16" />
              <div className="absolute top-6 left-6 w-[2px] h-0 bg-primary transition-all duration-300 delay-75 group-hover:h-16" />
              <div className="absolute bottom-6 right-6 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-16" />
              <div className="absolute bottom-6 right-6 w-[2px] h-0 bg-primary transition-all duration-300 delay-75 group-hover:h-16" />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <button className="group relative overflow-hidden rounded-full border-2 border-primary/50 px-8 py-3 font-body text-fluid-button font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary-foreground motion-gpu">
            <span className="relative z-10 transition-colors group-hover:text-black">View All Projects</span>
            <div className="absolute inset-0 z-0 bg-primary translate-y-3d-down transition-transform duration-300 group-hover:translate-x-3d-zero" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
