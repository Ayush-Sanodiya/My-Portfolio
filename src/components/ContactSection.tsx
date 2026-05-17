import { motion } from "motion/react";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] py-20 sm:py-28 md:py-32 px-6 relative overflow-hidden rounded-t-[40px] sm:rounded-t-[60px] -mt-10 sm:-mt-16 md:-mt-20 z-20">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B600A8]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn y={30}>
          <span className="text-[#D7E2EA]/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-xs mb-4 block">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            Let's create <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B600A8] to-[#BE4C00]">Magic</span> together
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <p className="text-[#D7E2EA]/60 text-base sm:text-xl md:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your vision to life with unique and impactful designs.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={30}>
          <div className="flex flex-col items-center gap-6">
            <div className="scale-90 sm:scale-100">
              <ContactButton />
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-6 sm:mt-8">
              {["WhatsApp", "Instagram", "Portfolio"].map((social) => (
                <a 
                  key={social}
                  href={social === "WhatsApp" ? "https://wa.me/916264735399" : "#"} 
                  target={social === "WhatsApp" ? "_blank" : undefined}
                  rel={social === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="text-[#D7E2EA]/40 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] sm:text-xs"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
