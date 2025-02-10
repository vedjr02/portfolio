'use client';

import { motion } from 'framer-motion';
import ParallaxSection from './ParallaxSection';

export default function Hero() {
  return (
    <ParallaxSection offset={100}>
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-[#64ffda] mb-5"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-7xl font-bold text-[#ccd6f6] mb-4 relative group"
            >
              <span className="relative inline-block">
                Vedant Ambre
                <motion.span
                  className="absolute -inset-0.5 bg-[#64ffda]/10 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl font-bold text-[#8892b0] mb-6"
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-xl text-[#8892b0] mb-12 text-lg"
            >
              I&apos;m a software engineer specializing in building exceptional digital experiences.
              Currently, I&apos;m focused on building accessible, human-centered products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="#work"
                className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10 transition-colors relative group"
              >
                <span className="relative z-10">Check out my work!</span>
                <motion.div
                  className="absolute inset-0 bg-[#64ffda]/10 rounded-sm"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute right-10 top-1/4 w-4 h-4 rounded-full bg-[#64ffda]/20"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute left-1/4 bottom-1/4 w-6 h-6 rounded-full bg-[#64ffda]/20"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute right-1/3 top-1/3 w-3 h-3 rounded-full bg-[#64ffda]/20"
              animate={{
                y: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
}
