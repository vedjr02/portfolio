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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <ScrollLink
            to="hero"
            className="font-mono text-[#64ffda] text-lg hover:text-shadow-glow transition-all duration-300"
            smooth={true}
            duration={500}
          >
            vedant ambre
          </ScrollLink>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <FiMenu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item, index) => (
              <ScrollLink
                key={item.name}
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
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item, index) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                className="group flex items-center text-sm font-mono py-2"
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[#64ffda] mr-2">0{index + 1}.</span>
                <span className="text-gray-400 group-hover:text-[#64ffda] transition-colors">
                  {item.name}
                </span>
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
