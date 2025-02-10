'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/vedjr02',
    icon: <FiGithub className="h-5 w-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vedantambre',
    icon: <FiLinkedin className="h-5 w-5" />,
  },
];

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 bottom-0 hidden lg:block"
    >
      <div className="flex flex-col items-center space-y-6">
        {socialLinks.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#64ffda] hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.1 }}
          >
            {social.icon}
          </motion.a>
        ))}
        <div className="w-[1px] h-24 bg-gray-400"></div>
      </div>
    </motion.div>
  );
}
