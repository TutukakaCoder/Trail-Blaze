import { animated, useSpring } from '@react-spring/web';
import { forwardRef } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(({
  children,
  className = "",
  delay = 0
}, ref) => {
  // Create the animation
  const props = useSpring({
    from: { 
      opacity: 0,
      transform: 'translateY(30px)'
    },
    to: { 
      opacity: 1,
      transform: 'translateY(0px)'
    },
    delay,
    config: {
      tension: 180,
      friction: 60
    }
  });

  // Use a type assertion to fix the children prop issue
  const AnimatedDiv = animated.div as unknown as React.FC<{
    style: typeof props;
    children: React.ReactNode;
  }>;

  // Wrap the animation in a regular div
  return (
    <div ref={ref} className={className}>
      <div className="h-full">
        <AnimatedDiv style={props}>
          {children}
        </AnimatedDiv>
      </div>
    </div>
  );
});

AnimatedElement.displayName = 'AnimatedElement'; 