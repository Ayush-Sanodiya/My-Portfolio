import { motion } from "motion/react";
import brightMarketing from "../assets/images/bright_marketing.png";
import newBawarchi from "../assets/images/himsas_kitchen.png"; // New Bawarchi chef logo
import helpWalla from "../assets/images/help_walla.png";
import argusSolutions from "../assets/images/argus_solutions.png";
import icyNaturals from "../assets/images/icy_naturals.png";
import himsasKitchenCafe from "../assets/images/himsas_kitchen_cafe.png"; // Chef girl circular badge
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

const clientLogos = [
  brightMarketing,
  newBawarchi,
  helpWalla,
  argusSolutions,
  icyNaturals,
  himsasKitchenCafe,
  karaWomensWear,
  isleEscapes,
  sriKrishnaSchool,
  jewelPatakha,
  prasthan10,
  upariManzil,
  niviware,
  yaanaaiDesign,
  udaipuri,
  bulbLogo
];

export default function MarqueeSection() {
  // Duplicate the logos array to ensure continuous seamless looping
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="bg-[#0C0C0C] flex flex-col justify-center overflow-hidden pt-20 pb-24 sm:py-32 md:py-36 relative rounded-t-[40px] sm:rounded-t-[60px] z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,120px)] text-[#D7E2EA]">
          Trusted By
        </h2>
      </div>
      
      <div className="w-full relative">
        {/* Left & Right Fade Gradients for Premium Cinematic Feel */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#0C0C0C] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#0C0C0C] to-transparent z-20 pointer-events-none" />

        {/* Seamless Continuous Scrolling Marquee - Right to Left */}
        <div className="flex whitespace-nowrap overflow-hidden py-4">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 70, // Adjusted to 70s to keep the speed identical, premium, and silky-smooth with 16 logos
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 sm:gap-12 items-center flex-shrink-0 px-8 sm:px-12"
          >
            {marqueeLogos.map((src, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 transition-all duration-500 hover:scale-105 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.03] hover:border-white/[0.08] rounded-2xl px-8 sm:px-12 py-4 h-24 sm:h-32 min-w-[200px] sm:min-w-[320px] flex items-center justify-center group cursor-pointer backdrop-blur-sm"
              >
                <img
                  src={src}
                  loading="lazy"
                  className="max-h-14 sm:max-h-20 max-w-[85%] w-auto object-contain transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(215,226,234,0.3)] brightness-[1.2]"
                  alt={`Client Logo ${i}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
