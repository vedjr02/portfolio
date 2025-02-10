'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]<>~`_-+=';

interface TextScrambleProps {
  text: string;
  delay?: number;
}

export default function TextScramble({ text, delay = 0 }: TextScrambleProps) {
  const [scrambledText, setScrambledText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (!isScrambling) return;

    let iteration = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setScrambledText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, isScrambling]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      onViewportEnter={() => setIsScrambling(true)}
      className="inline-block"
    >
      {scrambledText}
    </motion.span>
  );
}
