'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-scroll';

export default function ScrollProgress() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20
        }}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-navy-light border border-primary/20 
                   shadow-lg hover:shadow-primary/20 transition-all duration-300 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          className="w-6 h-6 text-primary transform rotate-180"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.button>

      <div className="fixed right-10 bottom-0 w-px h-24 bg-primary/20">
        <motion.div
          className="w-px bg-primary"
          style={{ height: scrollYProgress }}
        />
      </div>

      <nav className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-3 h-3 rounded-full bg-navy-light border border-primary/20 
                     hover:scale-150 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
            activeClass="bg-primary scale-150"
          />
        ))}
      </nav>
    </>
  );
}
