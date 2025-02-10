'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-[#64ffda]"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-200 hover:text-shadow-glow transition-all duration-300"
        >
          Vedant Ambre.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-400"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl text-gray-400 text-lg"
        >
          I&apos;m a software engineer and data scientist passionate about building innovative solutions.
          Currently, I&apos;m focused on developing AI-powered applications and exploring the intersection of 
          software development and machine learning at{' '}
          <a
            href="https://www.linkedin.com/in/vedantambre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] hover:underline"
          >
            various projects
          </a>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/vedjr02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-4 mt-8 font-mono text-sm border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
          >
            Check out my GitHub!
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
