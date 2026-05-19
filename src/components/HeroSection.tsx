import { useState, useEffect } from "react";
import { motion } from "motion/react";
import portraitImage from "../assets/images/regenerated_image_1778973582328.png";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";

export default function HeroSection() {
  const [isDraggable, setIsDraggable] = useState(false);

  useEffect(() => {
    const checkDraggable = () => {
      setIsDraggable(window.innerWidth < 1024);
    };
    checkDraggable();
    window.addEventListener("resize", checkDraggable);
    return () => window.removeEventListener("resize", checkDraggable);
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Background Decor */}
      <div className="absolute inset-0 glow-bg pointer-events-none z-0"></div>
      <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" className="absolute top-[12%] left-[4%] w-[60px] sm:w-[90px] md:w-[120px] opacity-20 blur-[1px] rotate-12 pointer-events-none" alt="Decorative Moon Icon" role="presentation" />
      <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" className="absolute top-[15%] right-[6%] w-[50px] sm:w-[80px] md:w-[100px] opacity-15 -rotate-12 pointer-events-none" alt="Decorative Lego Icon" role="presentation" />

      {/* Navbar */}
      <FadeIn as="header" y={-20} className="fixed top-0 left-0 w-full px-4 md:px-10 py-3 md:py-4 z-50 pointer-events-none">
        <nav className="flex justify-between items-center w-full max-w-7xl mx-auto pointer-events-auto">
          <Magnet padding={50} strength={2}>
            <div 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.dispatchEvent(new CustomEvent("closeProjectModal"));
              }}
              className="font-display font-black text-base md:text-xl tracking-[0.05em] text-white cursor-pointer"
            >
              AYUSH.
            </div>
          </Magnet>
          <div className="flex gap-3 sm:gap-6 md:gap-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 md:px-8">
            {["Home", "About", "Works", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#" : item === "Works" ? "#works" : `#${item.toLowerCase()}`}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("closeProjectModal"));
                }}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[8px] xs:text-[10px] md:text-xs hover:text-white transition-colors duration-200 py-1"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center relative z-10 pt-10">
        <div className="overflow-hidden w-full px-5 md:px-10">
          <FadeIn delay={0.15} y={40}>
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-start w-fit mx-auto max-md:pl-[0.05em]">
                <span className="text-[#D7E2EA] font-light uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[clamp(0.85rem,3.5vw,1.4rem)] mt-0 pt-0 mb-[-3px] sm:mb-1 ml-[5px]">
                  Welcome to My
                </span>
                <h1
                  className="hero-heading font-black uppercase tracking-[0.05em] leading-[0.85] whitespace-nowrap h-[350px] sm:h-auto text-[13.5vw] sm:text-[11vw] md:text-[13.5vw] lg:text-[14vw]"
                  style={{
                    fontFamily: 'Raleway',
                  }}
                >
                  Portfolio
                </h1>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 top-[55%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[85%] max-w-[280px] sm:max-w-none sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <motion.img
              src={portraitImage}
              alt="Ayush Sanodiya - Creative Graphic Designer Portrait"
              className={`w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-sm:mt-[50px] ${isDraggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
              drag={isDraggable}
              dragSnapToOrigin={true}
              dragElastic={0.9}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
              whileDrag={{ scale: 1.03, filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.9))" }}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="px-5 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end relative z-30">
      </div>

      {/* Marquee Preview Strip */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[#BBCCD7]/10 blur-[2px] z-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#BBCCD7]/20 z-50"></div>
    </section>
  );
}
