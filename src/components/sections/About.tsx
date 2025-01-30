'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { useInView } from '@/hooks/useInView';

type ValueTitle = 'Trust' | 'Truth' | 'Transparency';

const descriptions: Record<ValueTitle, string> = {
  Trust: 'Building relationships based on transparency and integrity.',
  Truth: 'Committed to honest communication and authentic connections.',
  Transparency: 'Operating with complete openness and accountability.'
};

export default function About() {
  const values: ValueTitle[] = ['Trust', 'Truth', 'Transparency'];
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Section id="about" spacing="default" className="mb-32">
      <Container variant="default">
        <div ref={ref}>
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              About Trail Blazers
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're building a community of forward-thinking founders and investors who
              believe in ethical AI and sustainable innovation.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {values.map((title, index) => (
              <AnimatedElement
                key={title}
                delay={index * 150}
                className="group relative"
              >
                <div className="relative bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                    <p className="text-gray-400">
                      {descriptions[title]}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
} 