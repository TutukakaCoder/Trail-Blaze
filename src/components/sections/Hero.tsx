'use client';

import { motion } from 'framer-motion';
import { useModal } from '@/lib/context/ModalContext';
import { Button } from '@/components/ui/Button';
import { fadeInWithTransition, scaleIn } from '@/lib/animations';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, #7C3AED 0%, #0A0A0B 70%)',
                'radial-gradient(circle at 60% 40%, #7C3AED 0%, #0A0A0B 70%)',
                'radial-gradient(circle at 40% 60%, #7C3AED 0%, #0A0A0B 70%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInWithTransition}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Trust. Truth. Transparency.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transforming business value through AI integration and rapid innovation.
              Join a community of forward-thinking founders and investors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                onClick={openModal}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
              >
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://linkedin.com/company/trail-blazers', '_blank')}
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-gray-400">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-sm uppercase tracking-wider mb-4">
              Trusted by forward-thinking founders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 px-4">
              {/* Add partner/client logos here */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 