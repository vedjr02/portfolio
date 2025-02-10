'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <ScrollLink
          to="hero"
          className="font-mono text-[#64ffda] text-lg cursor-pointer hover:text-shadow-glow transition-all duration-300"
          smooth={true}
          duration={500}
        >
          vedant ambre
        </ScrollLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-[#64ffda] transition-colors"
        >
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden px-6 pb-6`}>
        <nav>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.href}
                  className="group flex items-center text-sm font-mono"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#64ffda] mr-2">0{index + 1}.</span>
                  <span className="text-gray-400 group-hover:text-[#64ffda] transition-colors">
                    {item.name}
                  </span>
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block fixed top-1/2 right-10 transform -translate-y-1/2">
        <nav>
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.href}
                  className="group flex items-center text-sm font-mono"
                  smooth={true}
                  duration={500}
                >
                  <span className="text-[#64ffda] mr-2">0{index + 1}.</span>
                  <span className="text-gray-400 group-hover:text-[#64ffda] transition-colors">
                    {item.name}
                  </span>
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
