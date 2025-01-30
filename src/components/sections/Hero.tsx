'use client';

import { motion } from 'framer-motion';
import { useSpring, animated, SpringValue } from '@react-spring/web';
import { useCallback, useRef } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { useModal } from '@/lib/context/ModalContext';
import { Button } from '@/components/ui/Button';
import { fadeInWithTransition } from '@/lib/animations';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useState, useEffect } from 'react';
import { AnimatedStyles } from '@/types/animation';
import { AnimatedGradient } from '@/components/ui/AnimatedGradient';

interface AnimatedGradientProps {
  style: {
    backgroundPosition: SpringValue<string>;
    background: string;
    backgroundSize: string;
  };
  className?: string;
}

export default function Hero() {
  const { openModal } = useModal();
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Section id="hero" spacing="hero" className="overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-60">
          <AnimatedGradient 
            duration={30000}
            className="transform scale-150"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        
        {/* Particle Effect */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,
            particles: {
              number: { value: 15, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              opacity: {
                value: 0.1,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1 }
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 4, size_min: 0.3 }
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
              }
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
              }
            },
            retina_detect: true,
            background: { color: "transparent" }
          }}
        />
      </div>

      <Container variant="default">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            variants={fadeInWithTransition}
            className="flex flex-col items-center justify-center space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 px-4 sm:px-0">
              Trust. Truth. Transparency.
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl px-4 sm:px-6 lg:px-8">
              Transforming business value through AI integration and rapid innovation.
              Join a community of forward-thinking founders and investors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
              <Button
                onClick={openModal}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500"
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
        </motion.div>

        {/* Social Proof */}
        <div className="relative z-10 mt-16 text-gray-400">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-sm uppercase tracking-wider mb-4">
              Trusted by forward-thinking founders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* Add partner/client logos here */}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
} 