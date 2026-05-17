import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import React, { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <span className="relative inline-block mr-2 last:mr-0">
      <span className="opacity-10">{word}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-[#D7E2EA]"
      >
        {word}
      </motion.span>
    </span>
  );
};

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        
        return (
          <Word 
            key={i} 
            word={word} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </p>
  );
}
