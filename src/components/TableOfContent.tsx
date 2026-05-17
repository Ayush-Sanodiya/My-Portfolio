import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tocItems = [
  { id: "01", title: "BRAND IDENTITY", subtitle: "Logo + Brand Guidelines + Stationery" },
  { id: "02", title: "LOGO SYSTEMS", subtitle: "Custom Logos + Variations + Source Files" },
  { id: "03", title: "SOCIAL MEDIA KITS", subtitle: "Posts + Stories + Reels Covers + Templates" },
  { id: "04", title: "AD CREATIVES", subtitle: "Product Ads + Banners + Campaign Visuals" },
  { id: "05", title: "PRINT DESIGN", subtitle: "Posters + Flyers + Brochures + Print-Ready Files" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Reusable Magnetic Hover Component
interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

function Magnetic({ children, range = 50, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function TableOfContent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleItemClick = () => {
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0C0C0C] text-[#D7E2EA] px-4 sm:px-8 md:px-16 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-16 relative z-10 -mt-1 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">

        {/* Desktop Design (Shown only on md and up) */}
        <div className="hidden md:flex flex-col items-center w-full">
          {/* Massive Hero Heading */}
          <div className="flex flex-col items-center mb-8 md:mb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="font-['Caveat'] text-xl sm:text-2xl md:text-3xl text-[#FF8A00] mb-1 sm:mb-2">What I offer</p>
              <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,90px)] leading-[0.85] font-display tracking-tighter">
                SERVICES
              </h2>
            </motion.div>
          </div>

          {/* Full-Width Architectural Index List */}
          <motion.div
            className="w-full flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {tocItems.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="w-full relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {/* Ambient Radial Glow Background (only visible on hover) */}
                  <div
                    className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(255,138,0,0.06) 0%, transparent 60%)'
                    }}
                  />

                  <motion.div
                    onClick={() => handleItemClick()}
                    animate={{
                      opacity: !isAnyHovered ? 1 : isHovered ? 1 : 0.2,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center justify-between py-3 sm:py-5 border-b border-white/5 cursor-default relative z-10 w-full group-hover:border-[#FF8A00]/30 transition-colors duration-500"
                  >
                    <div className="flex items-center gap-6 sm:gap-12 relative w-full overflow-hidden">

                      {/* Outline Index Number (Background Layer) */}
                      <motion.span
                        animate={{
                          x: isHovered ? 20 : 0,
                          opacity: isHovered ? 0.3 : 0.1
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="font-black font-display text-[clamp(2.2rem,5vw,68px)] leading-none text-transparent [-webkit-text-stroke:1.5px_white] select-none absolute left-0 sm:left-2 origin-left -z-10"
                      >
                        {item.id}
                      </motion.span>

                      {/* Title and Subtitle Container */}
                      <motion.div
                        animate={{ x: isHovered ? 40 : 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col pl-[12vw] sm:pl-[10vw] md:pl-[105px]"
                      >
                        <h3 className={`font-bold font-display uppercase tracking-tight text-[clamp(1.5rem,3.5vw,52px)] leading-[0.9] transition-all duration-500 ${isHovered ? 'bg-gradient-to-r from-[#FF8A00] to-[#FFC700] bg-clip-text text-transparent' : 'text-white'}`}>
                          {item.title}
                        </h3>

                        {/* Subtitle that slides in on hover */}
                        <div className="h-0 md:h-[clamp(1.2rem,2vw,32px)] mt-1">
                          <AnimatePresence>
                            {isHovered && (
                              <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="hidden md:block font-['Caveat'] text-[clamp(1rem,1.5vw,24px)] text-[#D7E2EA]/60 tracking-wide"
                              >
                                {item.subtitle}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>


                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Design (Shown only on mobile) */}
        <div className="md:hidden w-full flex flex-col items-center">
          <div className="flex flex-col items-center mb-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="font-['Caveat'] text-2xl text-[#FF8A00] mb-1">What I offer</p>
              <h2 className="font-black uppercase text-5xl sm:text-6xl leading-[0.8] font-display tracking-tighter text-white">
                SERVICES
              </h2>
            </motion.div>
          </div>

          <div className="w-full flex flex-col gap-4">
            {tocItems.map((item, index) => (
              <motion.div
                key={`mobile-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleItemClick()}
                className="w-full bg-[#111] border border-white/5 rounded-[24px] p-5 sm:p-6 flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer relative overflow-hidden group"
              >
                {/* Subtle gradient glow for mobile cards */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(255,138,0,0.08)_0%,transparent_70%)] pointer-events-none" />

                <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                  <span className="font-display font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] text-3xl sm:text-4xl">
                    {item.id}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-['Caveat'] text-[#D7E2EA]/60 text-base sm:text-lg">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#FF8A00] group-active:bg-[#FF8A00]/20 transition-colors relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-45">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
