import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MarqueeSection from "./components/MarqueeSection";
import TableOfContent from "./components/TableOfContent";
import SocialCreativeSection from "./components/SocialCreativeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-clip font-sans selection:bg-[#B600A8] selection:text-white">
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <TableOfContent />
      <SocialCreativeSection />
      {/* Completely black blank transition spacer for high-end portfolio breathing-room */}
      <div className="bg-black h-[30vh] w-full relative z-10" />
      <ProjectsSection />
      <ProjectsSection 
        id="workson" 
        title="Works on" 
        projects={[
          {
            id: "01",
            category: "",
            title: "Logo Design",
            images: [],
          },
          {
            id: "02",
            category: "",
            title: "Social Media Post",
            images: [],
          },
          {
            id: "03",
            category: "",
            title: "Poster Design",
            images: [],
          },
          {
            id: "04",
            category: "",
            title: "Banners",
            images: [],
          },
          {
            id: "05",
            category: "",
            title: "Brochure",
            images: [],
          },
        ]} 
      />
      <ContactSection />
      
      {/* Footer / Final Contact CTA */}
      <footer className="bg-[#0C0C0C] py-20 px-6 text-center border-t border-white/5">
        <p className="text-[#D7E2EA]/40 uppercase tracking-[0.3em] text-xs">
          © 2026 Ayush Portfolio — All Rights Reserved
        </p>
      </footer>
    </main>
  );
}

