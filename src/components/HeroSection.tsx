import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-event.png";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const isMobile = useIsMobile();

  const imgY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-[-15%] z-0 will-change-transform"
        style={{ y: imgY }}
      >
        <img
          src={heroImg}
          alt="Premium Event Production Stage"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Static gradient overlay */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/40 to-background"
        style={{ opacity: overlayOpacity }}
      />

      {/* Static ambient glow — no blur animation, uses radial-gradient only */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 20%, hsl(38 80% 55% / 0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 70% 10%, hsl(45 90% 70% / 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Edge fades */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-[5] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background via-background/80 to-transparent z-[5] pointer-events-none" />

      {/* Main Content */}
      <motion.div
        className="container relative z-10 flex flex-col items-center justify-center text-center mt-20"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/30 px-4 py-1.5 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.9)] motion-gpu"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_2px_hsl(38_80%_55%/_0.8)] animate-pulse" />
          <span className="font-body text-fluid-button font-semibold uppercase tracking-[0.2em] text-primary" style={{ textShadow: "0 1px 3px rgba(0,0,0,1)" }}>
            A New Era of Event Production
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-fluid-h1 font-black leading-[1.05] tracking-tight max-w-[92vw] mx-auto text-center motion-gpu"
          style={{ filter: isMobile ? "none" : "drop-shadow(0 6px 15px rgba(0,0,0,1)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))", wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          <motion.span variants={itemVariants} className="block text-gradient-gold glow-gold-text">INNOVATION</motion.span>
          <motion.span variants={itemVariants} className="block text-foreground mt-1 sm:mt-2">BEYOND</motion.span>
          <motion.span variants={itemVariants} className="block text-foreground">IMAGINATION</motion.span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mx-auto mt-6 max-w-xl px-4 motion-gpu">
          <p className="font-body text-fluid-body text-white leading-relaxed" style={{ textShadow: "0 2px 8px rgba(0,0,0,1), 0 1px 3px rgba(0,0,0,0.9)" }}>
            <strong className="text-primary font-black tracking-wide">KCK Production</strong>. Transforming visions into unforgettable, high-end experiences through custom-made designs, multimedia production, and world-class management.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px -5px hsl(38 80% 55% / 0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            href="#services"
            className="group relative flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-7 sm:px-10 py-4 font-body text-fluid-button font-bold uppercase tracking-widest text-primary-foreground shadow-[0_4px_15px_rgba(0,0,0,0.8)] motion-gpu"
          >
            <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Discover Excellence →
            </span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-3d-left group-hover:translate-x-3d-right transition-transform duration-500 ease-in-out" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "hsl(0 0% 10%)" }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="w-full sm:w-auto text-center rounded-full glass px-7 sm:px-10 py-4 font-body text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.9)",
              boxShadow: "0 6px 20px rgba(0,0,0,1), inset 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            View Portfolio
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
