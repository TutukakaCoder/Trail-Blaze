'use client';

import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }}
          >
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Comprehensive solutions for founders and investors in the AI space.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <div className="motion-content">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">AI Integration</h3>
                    <p className="text-gray-400">
                      Strategic implementation of AI solutions to transform your business operations and create value.
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <div className="motion-content">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Innovation Consulting</h3>
                    <p className="text-gray-400">
                      Expert guidance on rapid innovation and sustainable growth strategies.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 