'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const jobs = [
  {
    company: 'Company One',
    title: 'Senior Software Engineer',
    date: 'January 2021 - Present',
    points: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Next.js',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
    ],
  },
  {
    company: 'Company Two',
    title: 'Software Engineer',
    date: 'July 2019 - December 2020',
    points: [
      'Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and jQuery',
      'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
      'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
    ],
  },
  {
    company: 'Company Three',
    title: 'Junior Developer',
    date: 'July 2018 - June 2019',
    points: [
      'Engineered and maintained major features of client websites using HTML, CSS, and jQuery',
      'Proposed and implemented scalable solutions to issues identified with cloud services and applications',
      'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences',
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">
            <span className="text-[#64ffda] mr-2">02.</span> Where I've Worked
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-gray-600">
              {jobs.map((job, index) => (
                <button
                  key={job.company}
                  className={`px-5 py-3 text-sm font-medium text-left whitespace-nowrap ${
                    activeTab === index
                      ? 'text-[#64ffda] border-[#64ffda] bg-[#112240] md:bg-[#112240]'
                      : 'text-gray-400 hover:text-[#64ffda] hover:bg-[#112240]/50'
                  } ${
                    index === activeTab
                      ? 'border-b-2 md:border-b-0 md:border-l-2'
                      : 'border-b-2 md:border-b-0 md:border-l-2 border-transparent'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {job.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="md:col-span-3 mt-6 md:mt-0">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-medium text-gray-200">
                  {jobs[activeTab].title}{' '}
                  <span className="text-[#64ffda]">@ {jobs[activeTab].company}</span>
                </h3>
                <p className="text-gray-400 text-sm mb-4">{jobs[activeTab].date}</p>
                <ul className="space-y-4">
                  {jobs[activeTab].points.map((point, index) => (
                    <li key={index} className="flex text-gray-400">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
