'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import LinkedInEmbed from './LinkedInEmbed';

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
  {
    title: 'Air Canvas',
    description:
      'Air Canvas is an innovative project that enables users to draw in the air using hand gestures. It utilizes computer vision and machine learning to track hand movements and convert them into digital drawings.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    linkedInPost: 'urn:li:activity:YOUR_POST_ID_HERE', // Replace with your actual LinkedIn post ID
    github: 'https://github.com/yourusername/air-canvas',
    external: 'https://your-demo-link.com',
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
                className="bg-[#112240] p-6 rounded-lg"
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#ccd6f6]">{project.title}</h3>
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
                  <p className="text-[#8892b0] mb-4">{project.description}</p>
                  {project.linkedInPost && (
                    <div className="mb-4">
                      <LinkedInEmbed postUrl={project.linkedInPost} />
                    </div>
                  )}
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs text-[#64ffda] bg-[#172a45]/50 px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
