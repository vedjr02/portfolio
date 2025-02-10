'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  tech: string;
}

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'Tailwind', 'Framer', 'OpenCV', 'Firebase', 'Git'
];

export default function FloatingTechBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bubbles: Bubble[] = technologies.map((tech, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 40,
    tech,
  }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden bg-navy-dark/50 rounded-lg"
    >
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute flex items-center justify-center rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 text-[#64ffda] font-mono text-sm cursor-pointer hover:bg-[#64ffda]/20 transition-colors"
          style={{
            width: bubble.size,
            height: bubble.size,
          }}
          initial={{
            x: `${bubble.x}%`,
            y: `${bubble.y}%`,
          }}
          animate={{
            x: [
              `${bubble.x}%`,
              `${bubble.x + (Math.random() * 20 - 10)}%`,
              `${bubble.x}%`,
            ],
            y: [
              `${bubble.y}%`,
              `${bubble.y + (Math.random() * 20 - 10)}%`,
              `${bubble.y}%`,
            ],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          {bubble.tech}
        </motion.div>
      ))}
    </div>
  );
}
