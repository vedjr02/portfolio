'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import TextScramble from './TextScramble';
import TiltCard from './TiltCard';

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
    linkedInPost: '7294427803557457920',
    github: 'https://github.com/Vedjr02/air-canvas',
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
          <h2 className="flex items-center font-semibold text-2xl text-gray-200 mb-8">
            <span className="font-mono text-[#64ffda] text-xl mr-2">03.</span>
            <TextScramble text="Some Things I've Built" />
            <span className="ml-4 h-[1px] w-32 bg-gray-600" />
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="bg-[#112240] p-6 rounded-lg">
                  <div className="relative z-10">
                    <p className="font-mono text-[#64ffda] text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#64ffda] transition-colors"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <div className="bg-[#112240] p-6 rounded-lg shadow-xl mb-4">
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-4 text-sm font-mono text-gray-400 mb-4">
                      {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#64ffda] transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#64ffda] transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="bg-[#112240] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#64ffda] transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 text-sm font-mono text-gray-400 mb-4">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#64ffda] transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#64ffda] transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
          <h2 className="text-center text-2xl font-semibold text-gray-200 mb-8">
            <TextScramble text="Other Noteworthy Projects" delay={0.2} />
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
