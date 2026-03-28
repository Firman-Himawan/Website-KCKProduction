import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import boothImg from "@/assets/service-booth.jpg";
import design3dImg from "@/assets/service-3d.jpg";
import multimediaImg from "@/assets/service-multimedia.jpg";
import eventImg from "@/assets/service-event.jpg";

const services = [
  {
    title: "Custom Booth & Exhibition",
    desc: "Desain dan konstruksi booth pameran yang memukau. Dari konsep awal hingga eksekusi akhir, menciptakan pengalaman interaktif yang mencerminkan jiwa brand Anda secara sempurna.",
    image: boothImg,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "3D Visualization",
    desc: "Rendering fotorealistik untuk stage & environment, memastikan visi Anda terlihat nyata sebelum produksi dimulai.",
    image: design3dImg,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Multimedia & Visuals",
    desc: "Produksi motion graphics, LED mapping, dan animasi high-end untuk memperkuat presentasi acara Anda.",
    image: multimediaImg,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Event Management",
    desc: "Manajemen acara skala besar secara end-to-end dengan standar eksekusi internasional dan presisi tinggi.",
    image: eventImg,
    className: "md:col-span-2 md:row-span-1",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
      whileHover="hover"
      className={`group relative overflow-hidden rounded-2xl glass-card border border-white/5 ${service.className}`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-8">
        <motion.div
          variants={{ hover: { y: -8 } }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full glass border border-primary/30 motion-gpu">
            <span className="font-display text-fluid-h3 font-bold text-primary">0{index + 1}</span>
          </div>
          <h3 className="font-display text-fluid-h3 font-bold tracking-tight text-white group-hover:text-gradient-gold transition-colors duration-200">
            {service.title}
          </h3>
          <p className="mt-3 font-body text-fluid-small leading-relaxed text-muted-foreground line-clamp-3 group-hover:text-white/80 transition-colors">
            {service.desc}
          </p>
        </motion.div>
      </div>

      {/* Decorative Gold Glow on Hover */}
      <motion.div 
        className="absolute -inset-px rounded-2xl border border-primary/0 pointer-events-none"
        variants={{ hover: { borderColor: "hsl(38 80% 55% / 0.5)", boxShadow: "inset 0 0 20px hsl(38 80% 55% / 0.2)" } }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
};

export const ServicesSection = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "20%"]);

  return (
    <section id="services" className="relative py-20 overflow-hidden" ref={containerRef}>
      {/* Decorative ambient glow — radial gradient only, no blur filter */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -right-64 top-0 h-[600px] w-[600px] pointer-events-none"
        aria-hidden
      >
        <div className="h-full w-full rounded-full" style={{ background: "radial-gradient(circle, hsl(38 80% 55% / 0.08) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.3 }}
          className="mb-12 flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <p className="font-body text-fluid-small uppercase tracking-[0.3em] text-primary font-semibold">Specialization</p>
          </div>
          <h2 className="font-display text-fluid-h2 font-black text-foreground tracking-tighter sm:tracking-normal motion-gpu">
            OUR <span className="text-gradient-gold">EXPERTISE</span>
          </h2>
        </motion.div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
