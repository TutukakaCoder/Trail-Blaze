import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}): [RefObject<HTMLDivElement>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (options.triggerOnce && entry.isIntersecting) {
        observer.unobserve(currentRef);
      }
    }, {
      threshold: options.threshold,
      rootMargin: options.rootMargin
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [ref, isInView];
} 