'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Work', href: 'work' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ScrollLink
              to="hero"
              className="text-[#64ffda] font-bold text-xl cursor-pointer"
              smooth={true}
              duration={500}
            >
              Portfolio
            </ScrollLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <ScrollLink
                  to={item.href}
                  className="nav-link text-sm"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  <span className="text-[#64ffda] mr-1">0{i + 1}.</span>
                  {item.name}
                </ScrollLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
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
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className={`md:hidden overflow-hidden ${isOpen ? 'mt-4' : ''}`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {navItems.map((item, i) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                className="nav-link text-sm"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#64ffda] mr-1">0{i + 1}.</span>
                {item.name}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
