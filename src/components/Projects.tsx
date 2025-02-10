'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ParallaxSection from './ParallaxSection';

const projects = [
  {
    title: 'Smart Password Generator',
    description: 'A Google Chrome extension that generates strong yet memorable passwords using a user-provided word and numbers instead of random strings. Features include adjustable length, special characters, and a regenerate option, all within a minimalist, offline, and secure UI. Once completed, it will be published on the Chrome Web Store for global access. 🚀',
    tech: ['JavaScript', 'Chrome Extension API', 'HTML/CSS', 'Security'],
    links: {
      github: 'https://github.com/vedjr02',
      external: 'https://www.linkedin.com/in/vedantambre/'
    }
  },
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
      </section>
    </ParallaxSection>
  );
}
