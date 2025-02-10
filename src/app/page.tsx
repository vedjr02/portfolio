'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import ScrollProgress from '@/components/ScrollProgress';

// Dynamically import components to improve initial load time
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="min-h-screen" />,
});
const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <div className="min-h-screen" />,
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="min-h-screen" />,
});

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function FadeInSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUpVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.className = 'mouse-glow';
    document.body.appendChild(glow);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      
      currentX += dx * 0.15;
      currentY += dy * 0.15;

      const translateX = currentX - glow.offsetWidth / 2;
      const translateY = currentY - glow.offsetHeight / 2;
      
      glow.style.transform = `translate(${translateX}px, ${translateY}px)`;
      glow.style.opacity = '1';
      
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    requestAnimationFrame(animate);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (glow && glow.parentNode) {
        glow.parentNode.removeChild(glow);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-navy">
      <ScrollProgress />
      <Navbar />
      <AnimatePresence>
        <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <section id="home" className="focus-container">
            <FadeInSection>
              <Hero />
            </FadeInSection>
          </section>
          <section id="about" className="focus-container">
            <FadeInSection>
              <About />
            </FadeInSection>
          </section>
          <section id="experience" className="focus-container">
            <FadeInSection>
              <Experience />
            </FadeInSection>
          </section>
          <section id="projects" className="focus-container">
            <FadeInSection>
              <Projects />
            </FadeInSection>
          </section>
          <section id="contact" className="focus-container">
            <FadeInSection>
              <Contact />
            </FadeInSection>
          </section>
        </main>
      </AnimatePresence>
    </div>
  );
}
