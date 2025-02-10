'use client';

import { motion } from 'framer-motion';
import TextScramble from './TextScramble';
import FloatingTechBubbles from './FloatingTechBubbles';

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
  ];

  return (
    <section id="about" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center font-semibold text-2xl text-gray-200 mb-8">
            <span className="font-mono text-[#64ffda] text-xl mr-2">01.</span>
            <TextScramble text="About Me" />
            <span className="ml-4 h-[1px] w-32 bg-gray-600" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="md:col-span-2 space-y-4 text-slate"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                Hello! My name is John and I enjoy creating things that live on the internet. 
                My interest in web development started back in 2012 when I decided to try 
                editing custom Tumblr themes — turns out hacking together a custom reblog 
                button taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an 
                advertising agency, a start-up, a huge corporation, and a student-led 
                design studio. My main focus these days is building accessible, inclusive 
                products and digital experiences.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-400">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FloatingTechBubbles />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
