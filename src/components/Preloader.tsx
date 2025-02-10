'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeLines = [
  'import { Life } from "universe";',
  'const portfolio = new Portfolio();',
  'await portfolio.initialize();',
  'portfolio.style = "awesome";',
  'portfolio.features = ["React", "Next.js", "Animations"];',
  'portfolio.launch();',
];

export default function Preloader() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isExploding, setIsExploding] = useState(false);
  const [smokeParticles, setSmokeParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (currentLine < codeLines.length && isTyping) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (currentLine === codeLines.length && isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setIsExploding(true);
        createSmokeParticles();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, isTyping]);

  const createSmokeParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      });
    }
    setSmokeParticles(particles);
  };

  if (!isTyping && !isExploding) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy"
      initial={false}
      animate={isExploding ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (isExploding) {
          setTimeout(() => setIsExploding(false), 1000);
        }
      }}
    >
      <div className="relative w-full max-w-2xl p-8">
        {/* Matrix Code Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="matrix-code absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {String.fromCharCode(33 + Math.random() * 93)}
            </div>
          ))}
        </div>

        {/* Code Writing Animation */}
        <div className="relative z-10 font-mono text-[#64ffda]">
          <AnimatePresence>
            {codeLines.slice(0, currentLine).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-2"
                style={{
                  textShadow: '0 0 5px #64ffda',
                }}
              >
                <span className="mr-2 text-gray-500">{i + 1}</span>
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Explosion Effect */}
        {isExploding && (
          <>
            <motion.div
              className="absolute inset-0 bg-[#64ffda]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 0.5 }}
            />
            {smokeParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="smoke-particle"
                initial={{ scale: 1, opacity: 0.8, x: 0, y: 0 }}
                animate={{
                  scale: 2,
                  opacity: 0,
                  x: particle.x,
                  y: particle.y,
                }}
                transition={{ duration: Math.random() * 1 + 1 }}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}
