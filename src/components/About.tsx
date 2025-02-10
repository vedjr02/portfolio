'use client';

import { motion } from 'framer-motion';

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
          <h2 className="section-heading">
            <span className="text-[#64ffda] mr-2">01.</span> About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-gray-400 mb-4">
                Hello! My name is John and I enjoy creating things that live on the internet. 
                My interest in web development started back in 2012 when I decided to try 
                editing custom Tumblr themes — turns out hacking together a custom reblog 
                button taught me a lot about HTML & CSS!
              </p>
              <p className="text-gray-400 mb-4">
                Fast-forward to today, and I've had the privilege of working at an 
                advertising agency, a start-up, a huge corporation, and a student-led 
                design studio. My main focus these days is building accessible, inclusive 
                products and digital experiences.
              </p>
              <p className="text-gray-400 mb-8">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
