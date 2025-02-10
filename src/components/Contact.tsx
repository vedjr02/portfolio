'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[#64ffda] mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-8">
            Although I'm not currently looking for any new opportunities, my inbox
            is always open. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
