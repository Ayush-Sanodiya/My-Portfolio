import { motion } from "motion/react";

interface ContactButtonProps {
  className?: string;
  variant?: 'primary' | 'glass';
}

export default function ContactButton({ className, variant = 'primary' }: ContactButtonProps) {
  const isGlass = variant === 'glass';

  return (
    <motion.a
      href="https://wa.me/916264735399"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={!isGlass ? {
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
      } : {}}
      className={`inline-block rounded-full px-8 py-3 outline-2 -outline-offset-3 font-medium uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-300 ${
        isGlass 
          ? "bg-white/10 backdrop-blur-md border border-white/20 text-white outline-white/10 hover:bg-white/20" 
          : "text-white outline-white"
      } ${className || ""}`}
    >
      Contact Me
    </motion.a>
  );
}
