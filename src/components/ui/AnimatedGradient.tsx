import { animated, useSpring } from '@react-spring/web';
import { forwardRef } from 'react';

interface GradientProps {
  reverse?: boolean;
  duration?: number;
  className?: string;
}

export const AnimatedGradient = forwardRef<HTMLDivElement, GradientProps>(({
  reverse = false,
  duration = 30000,
  className = ""
}, ref) => {
  const props = useSpring({
    from: { backgroundPosition: reverse ? '100% 50%' : '0% 50%' },
    to: { backgroundPosition: reverse ? '0% 50%' : '100% 50%' },
    config: { duration },
    loop: true,
  });

  const AnimatedDiv = animated.div as unknown as React.FC<{
    style: typeof props & {
      background: string;
      backgroundSize: string;
    };
    className: string;
  }>;

  return (
    <div ref={ref} className={`absolute inset-0 ${className}`}>
      <AnimatedDiv
        style={{
          ...props,
          background: 'linear-gradient(45deg, rgba(124,58,237,0.7), rgba(59,130,246,0.5), rgba(45,212,191,0.5), rgba(124,58,237,0.7))',
          backgroundSize: '400% 400%',
        }}
        className="absolute inset-0"
      />
    </div>
  );
});

AnimatedGradient.displayName = 'AnimatedGradient'; 