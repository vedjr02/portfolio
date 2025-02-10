'use client';

import { motion } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function Main() {
  return (
    <main className="flex-1 lg:w-[70%] lg:ml-[30%]">
      <div className="px-6 py-24 md:px-12 lg:px-24 max-w-[900px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-32"
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </motion.div>
      </div>
    </main>
  );
}
