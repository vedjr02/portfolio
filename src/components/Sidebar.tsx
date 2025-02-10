'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SocialLinks from './SocialLinks';
import Email from './Email';

const navItems = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Work', href: 'work' },
  { name: 'Contact', href: 'contact' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>  
      {/* Mobile Menu Button */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-[#64ffda] transition-colors"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-[30%] lg:fixed lg:h-screen lg:p-12">
        <div className="flex flex-col justify-between h-full">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <ScrollLink
              to="hero"
              className="inline-block font-mono text-[#64ffda] text-lg cursor-pointer hover:text-shadow-glow transition-all duration-300"
              smooth={true}
              duration={500}
            >
              vedant ambre
            </ScrollLink>
          </motion.div>

          {/* Navigation */}
          <nav className="flex-1 flex items-center">
            <ul className="space-y-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <ScrollLink
                    to={item.href}
                    className="group flex items-center text-sm text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    <span className="font-mono text-[#64ffda] mr-4">0{i + 1}.</span>
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div>
            <SocialLinks />
            <Email />
          </div>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        className="fixed inset-0 z-40 bg-[#112240]/90 backdrop-blur lg:hidden"
        onClick={() => setIsOpen(false)}
      >
        <nav className="flex items-center justify-center h-full">
          <ul className="space-y-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="text-center"
              >
                <ScrollLink
                  to={item.href}
                  className="group flex flex-col items-center text-lg text-gray-300 hover:text-[#64ffda] transition-colors duration-300"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-mono text-[#64ffda] text-sm mb-1">0{i + 1}.</span>
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full" />
                  </span>
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
