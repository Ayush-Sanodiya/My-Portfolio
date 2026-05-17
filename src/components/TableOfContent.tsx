import { useRef, useState } from "react";
import { motion } from "motion/react";

const tocItems = [
  { id: "01", category: "Branding", title: "Branding", desc: "Building bold identities that make brands memorable." },
  { id: "02", category: "Logo Design", title: "Logo Design", desc: "Crafting timeless logos with meaning and visual impact." },
  { id: "03", category: "Social Media", title: "Social Media", desc: "Creating scroll-stopping visuals for modern digital presence." },
  { id: "04", category: "Product Ads", title: "Product Ads", desc: "Designing high-converting product creatives that attract attention." },
  { id: "05", category: "Poster Design", title: "Poster Design", desc: "Turning ideas into eye-catching and impactful visual stories." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Cinematic delay between children
      delayChildren: 0.1,    // Subtle initial delay
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Cinematic 50px fade-up
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] // Smooth cinematic cubic bezier (out-expo)
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

    // Find center coordinate of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from cursor to center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      // Pull toward cursor
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

  const handleItemClick = (category: string) => {
    // Dispatch custom event to sync with the filter in ProjectsSection
    const event = new CustomEvent("setCategory", { detail: category });
    window.dispatchEvent(event);

    // Smooth scroll to the projects section
    const target = document.getElementById("works");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 md:px-16 py-20 sm:py-28 md:py-36 relative z-10 -mt-1 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Side: Sticky Header */}
        <div className="lg:col-span-5 flex flex-col justify-between lg:h-[400px] lg:sticky lg:top-32">
          <div className="flex flex-col gap-4">
            <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,6.5vw,80px)] leading-[0.9] font-display">
              Table of<br />Content
            </h2>
          </div>

          <div className="hidden lg:block">
            <p className="text-[#D7E2EA]/50 font-light max-w-sm text-sm leading-relaxed">
              Explore my primary creative areas of focus. Click any category to instantly scroll to and filter my matching portfolio work.
            </p>
          </div>
        </div>

        {/* Right Side: Clean Staggered List */}
        <motion.div
          className="lg:col-span-7 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {tocItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
            >
              <motion.div
                onClick={() => handleItemClick(item.category)}
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{
                  opacity: hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center justify-between py-6 sm:py-8 border-b border-[#D7E2EA]/10 cursor-pointer"
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  {/* Index Number */}
                  <span className="font-bold text-[#D7E2EA]/40 font-display text-lg sm:text-xl">
                    {item.id}
                  </span>

                  {/* Title and description */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold uppercase tracking-wider text-xl sm:text-2xl md:text-3xl text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/50 font-light max-w-md sm:max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Magnetic Diagonal Arrow Button */}
                <Magnetic range={65} strength={0.4}>
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/5 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-45"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </Magnetic>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
