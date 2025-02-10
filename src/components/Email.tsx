'use client';

import { motion } from 'framer-motion';

export default function Email() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-6 bottom-0 hidden lg:block"
    >
      <div className="flex flex-col items-center space-y-6">
        <motion.a
          href="mailto:your.email@example.com"
          className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
          style={{ writingMode: 'vertical-rl' }}
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          your.email@example.com
        </motion.a>
        <div className="w-[1px] h-24 bg-gray-400"></div>
      </div>
    </motion.div>
  );
}
