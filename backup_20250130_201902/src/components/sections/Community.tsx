'use client';

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useModal } from '@/lib/context/ModalContext'

export default function Community() {
  const { openModal } = useModal();
  
  return (
    <section id="community" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Connect with forward-thinking founders, investors, and innovators who are shaping the future.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">For Founders</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• Access to expert mentorship</li>
                <li>• Networking opportunities</li>
                <li>• Resource sharing</li>
                <li>• Growth strategies</li>
              </ul>
            </motion.div>
          </div>

          <div className="relative p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">For Investors</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• Deal flow access</li>
                <li>• Due diligence insights</li>
                <li>• Co-investment opportunities</li>
                <li>• Industry analysis</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            onClick={openModal}
            className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  )
} 