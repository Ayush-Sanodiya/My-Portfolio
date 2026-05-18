import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MarqueeSection from "./components/MarqueeSection";
import TableOfContent from "./components/TableOfContent";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-clip font-sans selection:bg-[#B600A8] selection:text-white">
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <TableOfContent />
      {/* Completely black blank transition spacer for high-end portfolio breathing-room */}
      <div className="bg-black h-[30vh] w-full relative z-10" />
      <ProjectsSection />
      <ContactSection />

      {/* Footer / Final Contact CTA */}
      <footer className="relative bg-[#0C0C0C] py-8 sm:py-10 px-6 border-t border-white/5 overflow-hidden text-center">
        {/* Soft elegant gradient glow behind */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.015] to-transparent pointer-events-none" />
        
        {/* Subtle horizontal gradient divider line highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FF8A00]/20 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto flex justify-center relative z-10">
          <p className="text-[#D7E2EA]/40 hover:text-white/60 uppercase whitespace-nowrap text-[8px] min-[340px]:text-[9px] min-[380px]:text-[10px] sm:text-[11px] tracking-[0.12em] min-[340px]:tracking-[0.15em] min-[380px]:tracking-[0.2em] sm:tracking-[0.25em] font-medium transition-colors duration-300 cursor-default select-none flex items-center gap-1.5 min-[340px]:gap-2 justify-center">
            <span>© 2026 Ayush Sanodiya</span>
            <span className="w-1 h-1 min-[340px]:w-1.5 min-[340px]:h-1.5 rounded-full bg-[#FF8A00]/40 shadow-[0_0_8px_rgba(255,138,0,0.5)] animate-pulse" />
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </main>
  );
}

