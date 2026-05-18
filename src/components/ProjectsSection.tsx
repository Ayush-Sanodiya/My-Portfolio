import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import LiveProjectButton from "./LiveProjectButton";

interface Project {
  id: string;
  category: string;
  title: string;
  images: string[];
  layoutData?: {
    titleTop1: string;
    titleTop2: string;
    titleBottom: string;
    subtitleMiddle: string;
    subtitleEnd: string;
  };
}

const defaultProjects: Project[] = [
  {
    id: "01",
    category: "Branding",
    title: "Branding",
    images: [],
    layoutData: {
      titleTop1: "Brand",
      titleTop2: "",
      titleBottom: "Identity",
      subtitleMiddle: "Identity Meets",
      subtitleEnd: "Strategy"
    }
  },
  {
    id: "02",
    category: "Logo Design",
    title: "Logo Design",
    images: [],
    layoutData: {
      titleTop1: "Logo",
      titleTop2: "",
      titleBottom: "Design",
      subtitleMiddle: "Vision Meets",
      subtitleEnd: "Symbol"
    }
  },
  {
    id: "03",
    category: "Social Media",
    title: "Social Media",
    images: [],
    layoutData: {
      titleTop1: "Social",
      titleTop2: "Media",
      titleBottom: "Creatives",
      subtitleMiddle: "Creativity Meets",
      subtitleEnd: "Conversation"
    }
  },
  {
    id: "04",
    category: "Product Ads",
    title: "Products Ads",
    images: [],
    layoutData: {
      titleTop1: "Product",
      titleTop2: "",
      titleBottom: "Ads",
      subtitleMiddle: "Product Meets",
      subtitleEnd: "Market"
    }
  },
  {
    id: "05",
    category: "Poster Design",
    title: "Poster Design",
    images: [],
    layoutData: {
      titleTop1: "Poster",
      titleTop2: "",
      titleBottom: "Design",
      subtitleMiddle: "Art Meets",
      subtitleEnd: "Message"
    }
  },
];

const categories = ["All", "Branding", "Logo Design", "Social Media", "Product Ads", "Poster Design"];

interface ProjectsSectionProps {
  id?: string;
  title?: string;
  projects?: Project[];
}

export default function ProjectsSection({
  id = "works",
  title = "Works",
  projects: initialProjects = defaultProjects
}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handleSetCategory = (e: Event) => {
      const category = (e as CustomEvent).detail;
      if (categories.includes(category)) {
        setActiveCategory(category);
      }
    };
    window.addEventListener("setCategory", handleSetCategory);
    return () => window.removeEventListener("setCategory", handleSetCategory);
  }, []);

  const filteredProjects = activeCategory === "All"
    ? initialProjects
    : initialProjects.filter(p => p.category === activeCategory);

  return (
    <section id={id} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[60px] -mt-10 sm:-mt-16 md:-mt-20 pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-32 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] mb-6 font-display">
          {title}
        </h2>
        <p className="text-[#D7E2EA] font-medium text-center max-w-3xl mx-auto px-6 mb-12 text-[clamp(0.9rem,2.5vw,1.25rem)] opacity-80 leading-relaxed">
          A collection of digital experiences, visual identities and creative campaigns crafted for brands that want to stand out.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20 px-6">
          {categories.map((cat) => (
            <button
              id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${activeCategory === cat
                  ? "bg-[#D7E2EA] text-[#0C0C0C] border-[#D7E2EA]"
                  : "bg-transparent text-[#D7E2EA] border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-24 md:gap-32 px-4 min-h-[60vh]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                total={filteredProjects.length}
              />
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-[#D7E2EA]/40"
            >
              <p className="text-xl font-medium uppercase tracking-widest">No projects in this category yet</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number; key?: any }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1) * 0.03]);

  return (
    <motion.div
      layout
      key={project.id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        layout: { duration: 0.4 }
      }}
      ref={container}
      className="sticky top-0 h-screen w-full max-w-6xl flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          willChange: "transform"
        }}
        className="w-full h-[65vh] sm:h-[80vh] md:h-[85vh] bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[30px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-8 shadow-2xl relative"
      >
        {/* Top row - Live Project Button Only */}
        <div className="flex justify-end items-center w-full relative z-20">
          <div className="scale-75 sm:scale-100 origin-right flex-shrink-0">
            <LiveProjectButton />
          </div>
        </div>

        {/* Custom Layout for all cards */}
        {(() => {
          const fallbackTitleWords = project.title.split(' ');
          const titleTop1 = project.layoutData?.titleTop1 || fallbackTitleWords[0] || '';
          const titleTop2 = project.layoutData?.titleTop2 || (fallbackTitleWords.length > 2 ? fallbackTitleWords[1] : '');
          const titleBottom = project.layoutData?.titleBottom || (fallbackTitleWords.length > 2 ? fallbackTitleWords.slice(2).join(' ') : (fallbackTitleWords.length > 1 ? fallbackTitleWords.slice(1).join(' ') : 'Works'));

          const subtitleMiddle = project.layoutData?.subtitleMiddle || "Creativity Meets";
          const subtitleEnd = project.layoutData?.subtitleEnd || "Conversation";

          return (
            <div className="flex-1 min-h-0 relative overflow-hidden bg-[#0C0C0C] rounded-[15px] sm:rounded-[30px] md:rounded-[40px] border border-white/5 flex flex-col">
              {/* Premium ambient radial glows */}
              <div className="absolute left-0 bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,138,0,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
              <div className="absolute right-0 top-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-[radial-gradient(circle_at_top_right,rgba(215,226,234,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

              <div className="w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 relative z-10">
                {/* Top Row: Heading and Outlined Numbering */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 w-full">
                  {/* Outline Slide Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold text-[clamp(3rem,8vw,120px)] leading-none text-transparent [-webkit-text-stroke:2px_white] select-none self-start"
                  >
                    {project.id}
                  </motion.div>

                  {/* Main Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col select-none sm:items-end sm:text-right"
                  >
                    <h3 className="font-display font-black uppercase text-[clamp(2rem,6vw,90px)] leading-[0.85] tracking-tight">
                      <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFC700] bg-clip-text text-transparent">
                        {titleTop1}
                      </span>{" "}
                      {titleTop2 && (
                        <span className="text-white">
                          {titleTop2}
                        </span>
                      )}
                    </h3>
                    <h3 className="font-display font-black uppercase text-[clamp(2rem,6vw,90px)] leading-[0.85] tracking-tight bg-gradient-to-r from-[#D7E2EA] to-[#D7E2EA]/30 bg-clip-text text-transparent mt-1">
                      {titleBottom}
                    </h3>
                  </motion.div>
                </div>

                {/* Bottom Row: Elegant Caveat Cursive Subtitle */}
                <div className="flex justify-end w-full mt-auto pt-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-['Caveat'] text-[clamp(1.4rem,2.5vw,40px)] leading-tight text-[#D7E2EA] tracking-wide select-none text-right"
                  >
                    <span>Where </span>
                    <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFC700] bg-clip-text text-transparent">
                      {subtitleMiddle}
                    </span>{" "}
                    <span>{subtitleEnd}</span>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })()}
      </motion.div>
    </motion.div>
  );
}
