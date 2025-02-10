'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const jobs = [
  {
    company: 'Unified Mentor',
    title: 'Data Science Intern',
    url: '#',
    date: '2023',
    points: [
      'Worked on data analysis and machine learning projects using Python and related libraries',
      'Developed and implemented data processing pipelines for efficient data handling',
      'Collaborated with team members to analyze and interpret complex datasets',
      'Gained hands-on experience with real-world data science applications',
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center font-semibold text-2xl text-gray-200 mb-8">
          <span className="font-mono text-[#64ffda] text-xl mr-2">02.</span>
          Where I've Worked
          <span className="ml-4 h-[1px] w-32 bg-gray-600" />
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-gray-600">
            <button
              className="px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all text-[#64ffda] border-[#64ffda] bg-[#112240] md:bg-[#112240] border-b-2 md:border-b-0 md:border-l-2"
            >
              {jobs[0].company}
            </button>
          </div>

          {/* Tab Content */}
          <div className="md:col-span-3 mt-6 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="min-h-[320px]"
            >
              <h3 className="text-xl font-medium text-gray-200">
                {jobs[0].title}{' '}
                <a
                  href={jobs[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:underline"
                >
                  @ {jobs[0].company}
                </a>
              </h3>
              <p className="font-mono text-gray-400 text-sm mb-4">
                {jobs[0].date}
              </p>
              <ul className="space-y-4">
                {jobs[0].points.map((point, index) => (
                  <li key={index} className="flex text-gray-400 text-sm">
                    <span className="text-[#64ffda] mr-2 pt-1">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
