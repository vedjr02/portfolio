'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
  ];

  return (
    <section id="about" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center font-semibold text-2xl text-gray-200 mb-8">
          <span className="font-mono text-[#64ffda] text-xl mr-2">01.</span>
          About Me
          <span className="ml-4 h-[1px] w-32 bg-gray-600" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-gray-400 space-y-4 text-lg">
            <p>
              Hello! I&apos;m Vedant, and I enjoy creating things that live on the internet. 
              My interest in software development started back in college when I discovered 
              my passion for solving complex problems through code.
            </p>
            
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working on various 
              exciting projects. My main focus these days is building accessible, 
              inclusive products and digital experiences.
            </p>

            <p>Here are a few technologies I&apos;ve been working with recently:</p>

            <ul className="grid grid-cols-2 gap-2 text-sm">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative w-full max-w-[300px] aspect-square mx-auto">
              <Image
                src="/profile.jpg"
                alt="Vedant Ambre"
                fill
                className="rounded object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-5 translate-y-5 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
