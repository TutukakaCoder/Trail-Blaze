'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

type ValueTitle = 'Trust' | 'Truth' | 'Transparency';

const descriptions: Record<ValueTitle, string> = {
  Trust: 'Building relationships based on transparency and integrity.',
  Truth: 'Committed to honest communication and authentic connections.',
  Transparency: 'Operating with complete openness and accountability.'
};

export default function About() {
  const values: ValueTitle[] = ['Trust', 'Truth', 'Transparency'];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="content-wrapper">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <div className="max-w-2xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  About Trail Blazers
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  We're building a community of forward-thinking founders and investors who believe in ethical AI and sustainable innovation.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((title, index) => (
                <div key={title} className="bg-gray-900/50 p-6 rounded-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6 }
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                    <p className="text-gray-400">
                      {descriptions[title]}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 