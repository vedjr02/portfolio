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
          <div className="md:col-span-2 text-gray-400">
            <div className="space-y-4">
              <p>
                Hello! My name is Vedant, and I enjoy creating things that live on the internet. 
                My interest in web development started back in 2020 when I decided to explore web development
                during the pandemic — turns out building my first website taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at{' '}
                <a href="#" className="text-[#64ffda] hover:underline">a tech startup</a>,{' '}
                <a href="#" className="text-[#64ffda] hover:underline">a digital agency</a>, and{' '}
                <a href="#" className="text-[#64ffda] hover:underline">freelance projects</a>.
              </p>
              <p>
                My main focus these days is building accessible, inclusive products and digital 
                experiences that combine beautiful design with efficient functionality.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>

              <ul className="grid grid-cols-2 gap-2 mt-4">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
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
