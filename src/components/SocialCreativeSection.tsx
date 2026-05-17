import { motion } from "motion/react";

export default function SocialCreativeSection() {
  return (
    <section className="bg-[#0C0C0C] text-[#D7E2EA] px-8 sm:px-16 md:px-24 py-28 sm:py-36 relative overflow-hidden z-10 border-t border-white/5">
      {/* Premium ambient radial glows to complement the dark theme */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,138,0,0.04)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_top_right,rgba(215,226,234,0.02)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[300px] sm:min-h-[400px] relative z-10">
        {/* Top Row: Heading and Outlined Numbering */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 w-full">
          {/* Main Title (Top-Left Composition) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col select-none"
          >
            <h1 className="font-display font-black uppercase text-[clamp(2.8rem,9vw,110px)] leading-[0.85] tracking-tight">
              <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFC700] bg-clip-text text-transparent">
                Social
              </span>{" "}
              <span className="text-white">
                Media
              </span>
            </h1>
            <h1 className="font-display font-black uppercase text-[clamp(2.8rem,9vw,110px)] leading-[0.85] tracking-tight bg-gradient-to-r from-[#D7E2EA] to-[#D7E2EA]/30 bg-clip-text text-transparent mt-1">
              Creatives
            </h1>
          </motion.div>

          {/* Outline Slide Number 01 (Top-Right Composition) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(4.5rem,10vw,150px)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(215,226,234,0.12)] select-none self-end sm:self-start"
          >
            01
          </motion.div>
        </div>

        {/* Bottom Row: Elegant Caveat Cursive Subtitle (Bottom-Right Composition) */}
        <div className="flex justify-end w-full mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Caveat'] text-[clamp(1.8rem,3.8vw,48px)] leading-tight text-[#D7E2EA] tracking-wide select-none text-right"
          >
            <span>Where </span>
            <span className="bg-gradient-to-r from-[#FF8A00] to-[#FFC700] bg-clip-text text-transparent">
              Creativity Meets
            </span>{" "}
            <span>Conversation</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
