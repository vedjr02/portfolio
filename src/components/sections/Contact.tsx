'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="flex items-center justify-center font-semibold text-2xl text-gray-200 mb-4">
          <span className="font-mono text-[#64ffda] text-xl mr-2">04.</span>
          What&apos;s Next?
        </h2>
        <h3 className="text-4xl md:text-5xl font-semibold text-gray-200 text-center mb-8">
          Get In Touch
        </h3>
        <p className="text-gray-400 mb-12">
          I&apos;m currently looking for new opportunities in software development and data science.
          Whether you have a project in mind or just want to connect, I&apos;ll try my best to get back to you!
        </p>
        <motion.a
          href="mailto:ambreved3@gmail.com"
          className="inline-block px-8 py-4 font-mono text-sm border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          Say Hello
        </motion.a>

        <div className="mt-24 text-gray-400 text-sm">
          <a
            href="https://github.com/vedjr02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#64ffda] transition-colors"
          >
            <p>Built by Vedant Ambre</p>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
