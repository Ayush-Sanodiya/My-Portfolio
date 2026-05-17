import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import LiveProjectButton from "./LiveProjectButton";

interface Project {
  id: string;
  category: string;
  title: string;
  images: string[];
}

const defaultProjects: Project[] = [
  {
    id: "01",
    category: "Branding",
    title: "Branding",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
  },
  {
    id: "02",
    category: "Logo Design",
    title: "Logo Design",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
  },
  {
    id: "03",
    category: "Social Media",
    title: "Social Media",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ],
  },
  {
    id: "04",
    category: "Product Ads",
    title: "Products Ads",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1280&auto=format&fit=crop",
    ],
  },
  {
    id: "05",
    category: "Poster Design",
    title: "Poster Design",
    images: [
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518137-903383a60a01?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1280&auto=format&fit=crop",
    ],
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
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,10vw,140px)] mb-6">
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
              className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${
                activeCategory === cat 
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

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - index) * 0.03]);

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
      className={`sticky top-20 md:top-32 w-full max-w-6xl flex items-center justify-center py-4 ${project.images.length > 0 ? "h-auto min-h-[60vh] sm:h-[80vh] md:h-[85vh]" : "h-auto"}`}
    >
      <motion.div 
        style={{ 
          scale, 
          top: `calc(4vh + ${index * 20}px)`,
          willChange: "transform" 
        }} 
        className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[30px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-8 shadow-2xl"
      >
        {/* Top row */}
        <div className="flex flex-nowrap justify-between items-center gap-1.5 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-6 min-w-0">
            <span 
              className="font-black text-transparent text-[clamp(1rem,5vw,80px)] leading-none italic flex-shrink-0"
              style={{ WebkitTextStroke: '1px rgba(215, 226, 234, 0.4)' }}
            >
              {project.id}
            </span>
            <div className="flex flex-col min-w-0">
              <h3 className="text-[#D7E2EA] font-medium uppercase text-[clamp(1.2rem,4vw,3.5rem)] whitespace-nowrap overflow-hidden text-ellipsis">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="scale-75 sm:scale-100 origin-right flex-shrink-0">
            <LiveProjectButton />
          </div>
        </div>

        {/* Image Grid */}
        {project.images.length > 0 && (
          <div className="flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-10 gap-3 md:gap-4 overflow-hidden">
            <div className="order-2 sm:order-1 sm:col-span-4 flex flex-row sm:flex-col gap-3 md:gap-4">
              {project.images[0] && (
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-1/2 sm:w-full h-[80px] sm:h-[clamp(130px,16vw,230px)] object-cover rounded-[15px] sm:rounded-[40px] md:rounded-[50px]" 
                />
              )}
              {project.images[1] && (
                <img 
                  src={project.images[1]} 
                  alt={project.title} 
                  className="w-1/2 sm:w-full flex-1 min-h-[80px] sm:min-h-[clamp(160px,22vw,340px)] object-cover rounded-[15px] sm:rounded-[40px] md:rounded-[50px]" 
                />
              )}
            </div>
            <div className="order-1 sm:order-2 sm:col-span-6 h-[150px] sm:h-full">
              {project.images[2] && (
                <img 
                  src={project.images[2]} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-[15px] sm:rounded-[40px] md:rounded-[50px]" 
                />
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
