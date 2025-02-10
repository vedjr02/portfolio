'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ParallaxSection from './ParallaxSection';

const projects = [
  {
    title: 'Project One',
    description:
      'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    links: {
      github: 'https://github.com',
      external: 'https://example.com',
    }
  },
  {
    title: 'Project Two',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
    links: {
      github: 'https://github.com',
      external: 'https://example.com',
    }
  },
  {
    title: 'Project Three',
    description:
      'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
    tech: ['Next.js', 'Chart.js', 'GitHub API'],
    links: {
      github: 'https://github.com',
      external: 'https://example.com',
    }
  },
  {
    title: 'Air Canvas',
    description:
      'Air Canvas is an innovative project that enables users to draw in the air using hand gestures. It utilizes computer vision and machine learning to track hand movements and convert them into digital drawings.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    links: {
      github: 'https://github.com/Vedjr02/air-canvas',
      external: 'https://your-demo-link.com',
    }
  },
];

export default function Projects() {
  return (
    <ParallaxSection>
      <section id="work" className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#ccd6f6]"
        >
          Some Things I&apos;ve Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group relative overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#8892b0] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.links.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      aria-label="External Link"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Other Noteworthy Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h3 className="text-2xl font-bold text-center text-[#ccd6f6] mb-12">
            Other Noteworthy Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#112240] p-6 rounded-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-[#64ffda] text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/vedjr02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a8b2d1] hover:text-[#64ffda]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vedantambre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a8b2d1] hover:text-[#64ffda]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">
                Smart Password Generator
              </h3>
              <p className="text-[#a8b2d1] mb-4">
                A Google Chrome extension that generates strong yet memorable passwords using a user-provided word and numbers. Features include adjustable length, special characters, and a regenerate option, all within a minimalist, offline, and secure UI.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#a8b2d1]">
                <span className="px-2 py-1 bg-[#233554] rounded">JavaScript</span>
                <span className="px-2 py-1 bg-[#233554] rounded">Chrome Extension API</span>
                <span className="px-2 py-1 bg-[#233554] rounded">HTML/CSS</span>
                <span className="px-2 py-1 bg-[#233554] rounded">Security</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </ParallaxSection>
  );
}
