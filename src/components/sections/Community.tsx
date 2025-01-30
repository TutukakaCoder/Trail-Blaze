'use client';

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useModal } from '@/lib/context/ModalContext'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { useInView } from '@/hooks/useInView'

export default function Community() {
  const { openModal } = useModal();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Section id="community" spacing="default">
      <Container variant="default">
        <div ref={ref}>
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with forward-thinking founders and investors
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            <AnimatedElement delay={200} className="group relative">
              <div className="relative bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">
                    For Founders
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-gray-300 pl-8 sm:pl-12">
                    <li className="list-disc text-left text-sm sm:text-base">Access to expert mentorship</li>
                    <li className="list-disc text-left text-sm sm:text-base">Networking opportunities</li>
                    <li className="list-disc text-left text-sm sm:text-base">Resource sharing</li>
                    <li className="list-disc text-left text-sm sm:text-base">Growth strategies</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={400} className="group relative">
              <div className="relative bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">
                    For Investors
                  </h3>
                  <ul className="space-y-3 sm:space-y-4 text-gray-300 pl-8 sm:pl-12">
                    <li className="list-disc text-left text-sm sm:text-base">Deal flow access</li>
                    <li className="list-disc text-left text-sm sm:text-base">Due diligence insights</li>
                    <li className="list-disc text-left text-sm sm:text-base">Co-investment opportunities</li>
                    <li className="list-disc text-left text-sm sm:text-base">Industry analysis</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="mt-20 text-center mb-24">
            <Button
              onClick={openModal}
              className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
} 