import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface Skill {
  name: string;
  percentage: number;
  gradientId: string;
  colors: { start: string; end: string };
}

const skillsData: Skill[] = [
  {
    name: "Photoshop",
    percentage: 90,
    gradientId: "photoshop-grad",
    colors: { start: "#00C6FF", end: "#0072FF" }
  },
  {
    name: "Illustrator",
    percentage: 85,
    gradientId: "illustrator-grad",
    colors: { start: "#FF8A00", end: "#FF5E3A" }
  },
  {
    name: "Canva",
    percentage: 95,
    gradientId: "canva-grad",
    colors: { start: "#8E2DE2", end: "#4A00E0" }
  },
  {
    name: "CorelDRAW",
    percentage: 80,
    gradientId: "coreldraw-grad",
    colors: { start: "#11998E", end: "#38EF7D" }
  },
  {
    name: "Antigravity",
    percentage: 98,
    gradientId: "antigravity-grad",
    colors: { start: "#EC008C", end: "#FC6767" }
  }
];

function SkillCircle({ skill }: { skill: Skill }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  const radius = 40;
  const circumference = 2 * Math.PI * radius; // ~251.32
  const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = skill.percentage;
      const duration = 1500; // 1.5 seconds
      const startTime = performance.now();

      const animateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress * (2 - progress); // Ease out quad
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, skill.percentage]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex flex-col items-center p-6 bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-white/[0.1] rounded-3xl backdrop-blur-md transition-all duration-500 group cursor-pointer w-full"
      style={{
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.2)`,
      }}
    >
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
        {/* SVG Wrapper */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={skill.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={skill.colors.start} />
              <stop offset="100%" stopColor={skill.colors.end} />
            </linearGradient>
          </defs>

          {/* Background Track Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.03)"
            strokeWidth="8"
          />

          {/* Animated Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={`url(#${skill.gradientId})`}
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            style={{
              filter: `drop-shadow(0 0 5px ${skill.colors.start}80)`
            }}
          />
        </svg>

        {/* Centered Percentage Indicator */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl sm:text-3xl font-black font-display text-[#D7E2EA] group-hover:text-white tracking-tighter">
            {count}%
          </span>
        </div>
      </div>

      {/* Skill Name */}
      <h3 className="mt-4 text-base sm:text-lg font-bold text-[#D7E2EA] group-hover:text-white tracking-tight transition-colors duration-300">
        {skill.name}
      </h3>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="bg-[#0C0C0C] py-20 sm:py-28 relative rounded-t-[40px] sm:rounded-t-[60px] z-10 border-t border-white/5 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#FF8A00] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#EC008C] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Caveat'] text-2xl sm:text-3xl md:text-4xl text-[#FF8A00] mb-2">
              My Creative Arsenal
            </p>
            <h2 className="hero-heading font-black uppercase text-4xl sm:text-5xl md:text-7xl leading-none text-[#D7E2EA] font-display tracking-tighter">
              Skills & Expertise
            </h2>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-center items-center">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`flex justify-center w-full ${
                index === 4 ? "col-span-2 md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <SkillCircle skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
