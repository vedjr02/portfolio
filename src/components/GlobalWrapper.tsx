'use client';

import { useEffect } from 'react';

export default function GlobalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-all duration-300"
        style={{
          background: 'radial-gradient(800px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(100, 255, 218, 0.08), transparent 80%)',
        }}
      />
      {children}
    </div>
  );
}
