'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { useInView } from '@/hooks/useInView';

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Section id="services" spacing="default" className="mb-32">
      <Container variant="wide">
        <div ref={ref}>
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for modern businesses
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-0">
            <AnimatedElement delay={200} className="group relative">
              <div className="relative bg-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-4">AI Integration</h3>
                  <p className="text-gray-400">
                    Strategic implementation of AI solutions to transform your business operations and create value.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={400} className="group relative">
              <div className="relative bg-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-4">Innovation Consulting</h3>
                  <p className="text-gray-400">
                    Expert guidance on rapid innovation and sustainable growth strategies.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </Section>
  );
} 