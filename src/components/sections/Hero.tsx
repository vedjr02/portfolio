'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import HoverCard from '../HoverCard';
import Tooltip from '../Tooltip';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Hero() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-4xl">
        <motion.p
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="font-mono text-primary mb-5 text-base md:text-lg hover-link"
        >
          Hi, my name is
        </motion.p>

        <HoverCard>
          <motion.h1
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4 focus-item name-glow"
          >
            Vedant Ambre.
          </motion.h1>
        </HoverCard>

        <HoverCard>
          <motion.h2
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-8 focus-item"
          >
            I build things for the web.
          </motion.h2>
        </HoverCard>

        <motion.p
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
          className="text-slate max-w-xl mb-12 text-lg md:text-xl focus-item"
        >
          I&apos;m a software engineer specializing in building exceptional digital experiences.
          Currently, I&apos;m focused on building accessible, human-centered products.
        </motion.p>

        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
        >
          <Tooltip content="View my latest projects">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="button-primary focus-item"
              data-cursor="link"
            >
              Check out my work!
            </Link>
          </Tooltip>
        </motion.div>
      </div>
    </div>
  );
}
