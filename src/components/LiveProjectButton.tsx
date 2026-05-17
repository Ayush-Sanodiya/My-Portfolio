import { motion } from "motion/react";

export default function LiveProjectButton() {
  return (
    <motion.button
      whileHover={{ backgroundColor: "rgba(215, 226, 234, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full border-2 border-[#D7E2EA] px-6 py-2 sm:px-8 sm:py-3 text-[#D7E2EA] font-medium uppercase tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-300"
    >
      Click to see
    </motion.button>
  );
}
