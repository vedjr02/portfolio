'use client';

import { motion } from 'framer-motion';
import FloatingTechBubbles from './FloatingTechBubbles';
import ParallaxSection from './ParallaxSection';

export default function About() {
  return (
    <ParallaxSection>
      <section id="about" className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-[#ccd6f6]"
          >
            About Me
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <FloatingTechBubbles />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#8892b0] space-y-4"
            >
              <p>
                Hello! I'm John, a passionate software engineer with a keen interest in building
                exceptional digital experiences. My journey in web development started back in 2012
                when I decided to try customizing Tumblr themes — turns out hacking together a custom
                reblog button taught me a lot about HTML & CSS!
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                a start-up, a huge corporation, and a student-led design studio. My main focus these days
                is building accessible, inclusive products and digital experiences.
              </p>

              <p>
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 text-sm mt-4">
                {[
                  'JavaScript (ES6+)',
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'Tailwind CSS',
                ].map((tech) => (
                  <motion.li
                    key={tech}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[#64ffda]">▹</span>
                    <span>{tech}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#ccd6f6]">Work Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-[#ccd6f6]">Software Engineer @ Company</h4>
                    <p className="text-sm text-[#64ffda]">January 2023 - Present (2025)</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#64ffda] mr-2">▹</span>
                        <span>Write modern, performant, maintainable code for a diverse array of client and internal projects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#64ffda] mr-2">▹</span>
                        <span>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Next.js, and AWS</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#64ffda] mr-2">▹</span>
                        <span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
}
