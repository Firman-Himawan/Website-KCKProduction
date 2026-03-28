import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between gap-4">
          <button
  onClick={() => scrollTo("home")}
  className={`group font-display font-black tracking-tighter flex items-center gap-1 motion-gpu shrink-0 transition-opacity duration-200 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
  style={{ fontSize: "clamp(0.9rem, 2vw, 1.4rem)" }}
>
            <span className="text-gradient-gold group-hover:brightness-125 transition-all">KCK</span>
            <span className="text-white whitespace-nowrap"> PRODUCTION</span>
          </button>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className="relative font-body text-fluid-button font-bold tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-white group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block shrink-0">
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-primary/50 text-primary px-5 py-2 font-body text-fluid-button font-bold uppercase tracking-widest transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_0_hsl(38_80%_55%/_0.4)] motion-gpu"
            >
              Start Project
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden relative z-50 p-2 shrink-0"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden overflow-y-auto"
          >
            <ul className="flex flex-col items-center justify-center gap-6 min-h-full pt-28 pb-16 w-full">
              {navItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.2, ease: "easeOut" }}
                >
                  <button
                    onClick={() => scrollTo(item)}
                    className="font-display text-fluid-h2 font-bold uppercase tracking-tight text-white transition-colors hover:text-primary motion-gpu"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <button
                  onClick={() => scrollTo("contact")}
                  className="rounded-full bg-primary px-10 py-4 font-body text-fluid-button font-bold uppercase tracking-widest text-primary-foreground active:scale-95 transition-transform duration-100 motion-gpu"
                >
                  Let's Talk
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
