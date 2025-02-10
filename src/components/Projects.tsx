'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Project One',
    description:
      'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Project Two',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Project Three',
    description:
      'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
    tech: ['Next.js', 'Chart.js', 'GitHub API'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            <span className="text-[#64ffda] mr-2">03.</span> Some Things I've Built
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card group"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <ul className="flex flex-wrap gap-3 mb-4">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="text-[#64ffda] text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#64ffda] transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#64ffda] transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
