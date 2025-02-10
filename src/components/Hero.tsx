'use client';

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#64ffda] mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-gray-200 mb-4"
        >
          John Doe.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-gray-400 mb-8"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl text-gray-400 mb-12"
        >
          I&apos;m a software engineer specializing in building exceptional digital experiences.
          Currently, I&apos;m focused on building accessible, human-centered products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ScrollLink
            to="work"
            smooth={true}
            duration={500}
            offset={-100}
            className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors cursor-pointer"
          >
            Check out my work!
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
