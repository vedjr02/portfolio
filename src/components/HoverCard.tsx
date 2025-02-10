'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    damping: 30,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    damping: 30,
    stiffness: 200,
  });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    
    mouseX.set(mouseXFromCenter / width);
    mouseY.set(mouseYFromCenter / height);
  }

  function onMouseEnter() {
    setHovering(true);
  }

  function onMouseLeave() {
    setHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: hovering ? rotateX : 0,
        rotateY: hovering ? rotateY : 0,
      }}
      className={`perspective-1000 ${className}`}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          scale: useSpring(hovering ? 1.05 : 1, {
            damping: 30,
            stiffness: 200,
          }),
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
