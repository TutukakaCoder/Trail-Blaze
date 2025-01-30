'use client';

import { useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50">
      <div 
        style={{ 
          width: '100%',
          height: '100%',
          transformOrigin: '0%',
          transform: `scaleX(${scaleX})`
        }} 
      />
    </div>
  );
} 