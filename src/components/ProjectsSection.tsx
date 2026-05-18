import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import LiveProjectButton from "./LiveProjectButton";

// Import all category images from assets
import brightMarketing from "../assets/images/bright_marketing.png";
import newBawarchi from "../assets/images/himsas_kitchen.png";
import helpWalla from "../assets/images/help_walla.png";
import argusSolutions from "../assets/images/argus_solutions.png";
import icyNaturals from "../assets/images/icy_naturals.png";
import himsasKitchenCafe from "../assets/images/himsas_kitchen_cafe.png";
import karaWomensWear from "../assets/images/kara_womens_wear.png";
import isleEscapes from "../assets/images/isle_escapes.png";
import sriKrishnaSchool from "../assets/images/sri_krishna_school.png";
import jewelPatakha from "../assets/images/jewel_patakha.png";
import prasthan10 from "../assets/images/prasthan_10.png";
import upariManzil from "../assets/images/upari_manzil.png";
import niviware from "../assets/images/niviware.png";
import yaanaaiDesign from "../assets/images/yaanaai_design.png";
import udaipuri from "../assets/images/udaipuri.png";
import bulbLogo from "../assets/images/bulb_logo.png";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Project {
  id: string;
  category: string;
  title: string;
  images: string[];
  galleryItems: GalleryItem[];
  description: string;
  tags: string[];
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
    images: [argusSolutions, brightMarketing, niviware, yaanaaiDesign],
    galleryItems: [
      {
        id: "#01",
        title: "Argus Solutions",
        description: "Modern corporate rebranding focusing on high-tech identity, grid layouts, and absolute precision.",
        image: argusSolutions
      },
      {
        id: "#02",
        title: "Bright Marketing",
        description: "Vibrant color systems, visual stationary and business cards representing forward-thinking communication.",
        image: brightMarketing
      },
      {
        id: "#03",
        title: "Niviware Tech",
        description: "Minimalist brand mark and aesthetic visual design system for an advanced IoT software agency.",
        image: niviware
      },
      {
        id: "#04",
        title: "Yaanaai Design",
        description: "Bespoke visual identity combining structural elements and premium, warm HSL colors.",
        image: yaanaaiDesign
      }
    ],
    description: "A comprehensive brand transformation project focusing on cohesive design systems, typographic guidelines, and a high-end visual language. Designed to establish a strong, premium presence across physical and digital touchpoints.",
    tags: ["Brand Guidelines", "Typography", "Visual System", "Stationery", "Corporate Identity"],
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
    images: [bulbLogo, isleEscapes, upariManzil, udaipuri],
    galleryItems: [
      {
        id: "#01",
        title: "Bright Bulb Logo",
        description: "Conceptual negative-space vector icon merging a lightbulb and creative gears for agency branding.",
        image: bulbLogo
      },
      {
        id: "#02",
        title: "Isle Escapes",
        description: "Premium luxury resort crest with elegant line-art typography and organic, island-inspired shapes.",
        image: isleEscapes
      },
      {
        id: "#03",
        title: "Upari Manzil",
        description: "Modern architectural logo for a high-end rooftop restaurant and sky bar brand.",
        image: upariManzil
      },
      {
        id: "#04",
        title: "Udaipuri Craft",
        description: "Heritage-inspired symmetrical logo design paying homage to royal Indian craftsmanship.",
        image: udaipuri
      }
    ],
    description: "Conceptual logo design and brandmark creation for modern startups and premium cafes. Every logo is crafted to be memorable, timeless, scalable, and deeply aligned with the company's core values.",
    tags: ["Logo Design", "Vector Art", "Typography", "Iconography", "Brand Mark"],
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
    images: [helpWalla, karaWomensWear, brightMarketing],
    galleryItems: [
      {
        id: "#01",
        title: "Help Walla Campaign",
        description: "Highly engaging social media banner layout designed to maximize organic user click-through rate.",
        image: helpWalla
      },
      {
        id: "#02",
        title: "Kara Womens Wear",
        description: "Minimal, high-fashion aesthetic Instagram grids highlighting elegance and textile quality.",
        image: karaWomensWear
      },
      {
        id: "#03",
        title: "Bright Social Kit",
        description: "Optimized promotional social ads combining vector overlays with strategic brand storytelling.",
        image: brightMarketing
      }
    ],
    description: "Engaging, high-performance social media creatives, banner ads, and marketing campaign visuals designed to capture attention instantly, boost organic reach, and tell a compelling brand story.",
    tags: ["Social Media Ads", "Instagram Grid", "Banners", "Digital Campaigns", "Figma"],
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
    images: [himsasKitchenCafe, icyNaturals, jewelPatakha],
    galleryItems: [
      {
        id: "#01",
        title: "Himsa's Kitchen Cafe",
        description: "High-conversion cafe marketing creatives featuring rich textures and warm, inviting lighting.",
        image: himsasKitchenCafe
      },
      {
        id: "#02",
        title: "Icy Naturals",
        description: "Refreshing product advertisement showcasing organic skincare items surrounded by clean water drops.",
        image: icyNaturals
      },
      {
        id: "#03",
        title: "Jewel Patakha Ads",
        description: "Festive and premium jewellery commercial creatives focused on gold highlights and bold contrasts.",
        image: jewelPatakha
      }
    ],
    description: "Stunning high-conversion advertisement designs and commercial creatives for product-centric brands. Focused on premium lighting, bold layouts, and clear calls to action to drive engagement and sales.",
    tags: ["Commercial Ads", "Product Showcase", "Banner Design", "Ad Creative", "Photoshop"],
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
    images: [sriKrishnaSchool, prasthan10, newBawarchi],
    galleryItems: [
      {
        id: "#01",
        title: "Sri Krishna Academy",
        description: "Educational institution poster layout presenting key statistics with clean grid structures.",
        image: sriKrishnaSchool
      },
      {
        id: "#02",
        title: "Prasthan Event Poster",
        description: "Cinematic event promotion poster with striking typography and dramatic, high-impact visuals.",
        image: prasthan10
      },
      {
        id: "#03",
        title: "Himsas Kitchen Banner",
        description: "Traditional culinary event poster blending rustic design themes and structured typography layout.",
        image: newBawarchi
      }
    ],
    description: "High-impact promotional posters, educational event graphics, and artistic banners designed to communicate key messages with bold typography, balanced layouts, and dramatic visual contrast.",
    tags: ["Poster Design", "Typography Layout", "Print Design", "Event Promotion", "Illustrator"],
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);

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

  // Prevent scroll when modal overlay is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 sm:mb-20 px-6">
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

        <div className="flex flex-col items-center gap-10 sm:gap-24 md:gap-32 px-4 min-h-[60vh]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                total={filteredProjects.length}
                onCardClick={setSelectedProject}
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

      {/* Dynamic Project Details Popup/Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[85vh] bg-[#0C0C0C] border border-white/10 rounded-[30px] md:rounded-[40px] shadow-[0_0_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col cursor-default"
            >
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-30">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/30 text-white transition-all duration-300 hover:rotate-90"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Gallery Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 md:p-16">
                {/* Project Header Info */}
                <div className="max-w-3xl mb-10">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-[#FF8A00] font-bold text-xs uppercase tracking-widest bg-[#FF8A00]/10 border border-[#FF8A00]/20 px-3.5 py-1.5 rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="text-white/40 text-xs font-mono uppercase tracking-wider">
                      Work #{selectedProject.id}
                    </span>
                  </div>

                  <h3 className="font-display font-black uppercase text-[clamp(2.2rem,6vw,64px)] leading-[0.9] tracking-tight mb-2 select-none">
                    <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFC700] bg-clip-text text-transparent">
                      {selectedProject.layoutData?.titleTop1 || selectedProject.title}
                    </span>{" "}
                    {selectedProject.layoutData?.titleTop2 && (
                      <span className="text-white">{selectedProject.layoutData?.titleTop2}</span>
                    )}
                    <br />
                    <span className="bg-gradient-to-r from-[#D7E2EA] to-[#D7E2EA]/40 bg-clip-text text-transparent">
                      {selectedProject.layoutData?.titleBottom || "Portfolio Showcase"}
                    </span>
                  </h3>

                  <p className="font-['Caveat'] text-2xl sm:text-3xl md:text-4xl text-[#D7E2EA]/85 mt-2 mb-6 select-none">
                    Where{" "}
                    <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFC700] bg-clip-text text-transparent">
                      {selectedProject.layoutData?.subtitleMiddle || "Creativity Meets"}
                    </span>{" "}
                    <span>{selectedProject.layoutData?.subtitleEnd || "Conversation"}</span>
                  </p>

                  <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed font-medium mt-4 max-w-4xl">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech & Creative Tags */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-12">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[#D7E2EA]/70 border border-white/5 bg-white/[0.02] text-xs sm:text-sm px-4 py-2 rounded-full font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Images Section with Interactive Flip Cards */}
                <div>
                  <h4 className="text-[#D7E2EA] font-display font-black uppercase tracking-[0.25em] text-xs sm:text-sm mb-6 border-b border-white/10 pb-4 select-none">
                    Project Gallery
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {selectedProject.galleryItems.map((item) => (
                      <GalleryFlipCard
                        key={item.id}
                        item={item}
                        onViewImage={() => setSelectedLightboxImage(item.image)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / High-Resolution Image Viewer */}
      <AnimatePresence>
        {selectedLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLightboxImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setSelectedLightboxImage(null)}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/30 text-white transition-all duration-300 hover:rotate-90"
                aria-label="Close Lightbox"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,138,0,0.15)] bg-[#0C0C0C]"
            >
              <img
                src={selectedLightboxImage}
                alt="Fullscreen visual preview"
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryFlipCard({
  item,
  onViewImage
}: {
  item: GalleryItem;
  onViewImage: () => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleTouchToggle = () => {
    if (isTouchDevice) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className={`flip-card w-full aspect-[4/3] cursor-pointer ${isFlipped ? "is-flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouchToggle}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front Side */}
        <div className="flip-card-front w-full h-full relative border border-white/5 bg-white/[0.01]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          {/* Subtle View Indicator Overlay on Hover (only on desktop/hover) */}
          <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-5 py-3 font-semibold uppercase tracking-widest text-[10px] sm:text-xs">
              Hover to Flip
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back w-full h-full relative bg-gradient-to-br from-[#0C0C0C] via-[#141414] to-[#0C0C0C] border border-white/10 flex flex-col items-center justify-center p-6 sm:p-8 text-center select-none">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            {/* Project Index */}
            <span className="font-mono text-xs sm:text-sm text-white/40 mb-2 tracking-widest block uppercase">
              {item.id}
            </span>

            {/* Project Title */}
            <h5 className="font-display font-black uppercase text-base sm:text-lg md:text-xl text-white mb-2 tracking-wide leading-tight max-w-[280px]">
              {item.title}
            </h5>

            {/* Project Description */}
            <p className="text-white/60 text-[11px] sm:text-xs md:text-sm leading-relaxed mb-5 max-w-[260px] font-medium">
              {item.description}
            </p>

            {/* View Project Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent flipping the card back on click
                onViewImage();
              }}
              className="rounded-full border border-white/20 hover:border-[#FF8A00] bg-white/5 hover:bg-[#FF8A00]/10 px-5 py-2 sm:px-6 sm:py-2.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 group/btn"
            >
              <span>View</span>
              <svg className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  total,
  onCardClick
}: {
  project: Project;
  index: number;
  total: number;
  onCardClick: (project: Project) => void;
  key?: any;
}) {
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
      className="sticky top-0 h-[70vh] sm:h-screen w-full max-w-6xl flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          willChange: "transform"
        }}
        onClick={() => onCardClick(project)}
        className="w-full h-[45vh] sm:h-[80vh] md:h-[85vh] min-h-[300px] sm:min-h-[500px] md:min-h-[600px] bg-[#0C0C0C] border-2 border-[#D7E2EA] hover:border-[#FF8A00] rounded-[24px] sm:rounded-[50px] md:rounded-[60px] p-3 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 md:gap-8 shadow-2xl relative cursor-pointer group transition-colors duration-500"
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
            <div className="flex-1 min-h-0 relative overflow-hidden bg-[#0C0C0C] rounded-[15px] sm:rounded-[30px] md:rounded-[40px] border border-white/5 group-hover:border-[#FF8A00]/20 flex flex-col transition-all duration-500">
              {/* Premium ambient radial glows */}
              <div className="absolute left-0 bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,138,0,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
              <div className="absolute right-0 top-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-[radial-gradient(circle_at_top_right,rgba(215,226,234,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

              <div className="w-full h-full flex flex-col justify-between p-4 sm:p-10 md:p-14 relative z-10">
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

                {/* Bottom Row: Elegant Caveat Cursive Subtitle & Interactive Indicator */}
                <div className="flex flex-col sm:flex-row justify-between items-end w-full mt-auto pt-3 sm:pt-8 gap-3 sm:gap-4">
                  {/* Left: Interactive Indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.5, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-[#D7E2EA]/50 group-hover:text-[#FF8A00] transition-colors duration-300 font-display text-[10px] sm:text-xs uppercase tracking-[0.2em]"
                  >
                    <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>View Project Gallery</span>
                  </motion.div>

                  {/* Right: Subtitle */}
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
