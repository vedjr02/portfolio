'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ content, children, position = 'top' }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowStyles = {
    top: 'bottom-[-6px] left-1/2 -translate-x-1/2 border-t-primary/20',
    bottom: 'top-[-6px] left-1/2 -translate-x-1/2 border-b-primary/20',
    left: 'right-[-6px] top-1/2 -translate-y-1/2 border-l-primary/20',
    right: 'left-[-6px] top-1/2 -translate-y-1/2 border-r-primary/20',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className={`absolute ${positionStyles[position]} z-50`}
          >
            <div className="relative">
              <div className="bg-navy-light border border-primary/20 px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                {content}
              </div>
              <div
                className={`absolute w-3 h-3 transform rotate-45 border border-primary/20 bg-navy-light ${arrowStyles[position]}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
