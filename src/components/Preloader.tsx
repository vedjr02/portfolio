'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a192f]"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-[#64ffda] text-4xl font-bold"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-2 border-[#64ffda] rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
