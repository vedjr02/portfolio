'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParallaxSection from '../ParallaxSection';

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
              className="text-7xl font-bold text-[#ccd6f6] mb-4 relative group name-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              className="text-5xl font-bold text-[#8892b0] mb-6 subtitle-glow"
              whileHover={{ scale: 1.02 }}
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
              <Link
                to="work"
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10 transition-colors relative group"
              >
                <span className="relative z-10">Check out my work!</span>
                <motion.div
                  className="absolute inset-0 bg-[#64ffda]/10 rounded-sm"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ParallaxSection>
  );
}
