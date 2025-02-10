'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const featuredProjects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features smooth animations, dynamic content loading, and a clean, minimalist design inspired by Brittany Chiang\'s portfolio.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/vedjr02/portfolio',
    external: 'https://vedantambre.com',
    image: '/portfolio.png',
  },
  {
    title: 'Air Canvas',
    description:
      'An innovative computer vision application that transforms hand gestures into digital art. Using just your webcam, you can draw in the air with natural hand movements. Features include gesture-based drawing with real-time hand tracking, dynamic brush size control using pinch gestures, color palette selection, dual-mode functionality (Draw/Erase), and split-screen view.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    github: 'https://github.com/vedjr02/air-canvas',
    external: '#',
    image: '/air-canvas.png',
  },
];

const otherProjects = [
  {
    title: 'Students Attendance App',
    description:
      'Developed a dual-app solution for efficient student attendance management. The teacher app generates a QR code, while the student app scans the code to mark attendance, streamlining the process and reducing manual entry. Designed and implemented for seamless user experience and real-time tracking.',
    tech: ['React Native', 'Firebase', 'QR Code', 'Real-time Database'],
    github: 'https://github.com/vedjr02/student-attendance',
    external: '#',
  },
  {
    title: 'Diabetic Detection Using Thermal Camera',
    description:
      'Developed an innovative system for diabetes detection using thermal imaging and Cross-ViT transformers. Captured and trained the model with self-collected thermal images to identify diabetic conditions. Currently working on a research paper based on this project, with plans for publication.',
    tech: ['Python', 'Deep Learning', 'Cross-ViT', 'Thermal Imaging'],
    github: 'https://github.com/vedjr02/diabetic-detection',
    external: '#',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center font-semibold text-2xl text-gray-200 mb-8">
          <span className="font-mono text-[#64ffda] text-xl mr-2">03.</span>
          Some Things I've Built
          <span className="ml-4 h-[1px] w-32 bg-gray-600" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-32">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image */}
              <div className={`relative ${i % 2 === 0 ? 'md:order-1' : ''}`}>
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <div className="relative aspect-[4/3] bg-[#64ffda]/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover mix-blend-multiply filter grayscale contrast-100 brightness-50 group-hover:filter-none group-hover:mix-blend-normal transition-all duration-300"
                    />
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className={`relative z-10 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
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
                <ul className={`flex flex-wrap gap-4 text-sm font-mono text-gray-400 mb-4 ${
                  i % 2 === 0 ? 'justify-end' : ''
                }`}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${i % 2 === 0 ? 'justify-end' : ''}`}>
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
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32"
        >
          <h2 className="text-center text-2xl font-semibold text-gray-200 mb-8">
            Other Noteworthy Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#112240] rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex justify-between items-center mb-8">
                  <FiGithub size={40} className="text-[#64ffda]" />
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
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#64ffda] transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-3 text-sm font-mono text-gray-400">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
