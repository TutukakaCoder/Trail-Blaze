import { useEffect } from 'react';
import { initAnalytics } from '@/lib/analytics';
import { initPerformance } from '@/lib/performance';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAnalytics();
    initPerformance();
  }, []);

  return <Component {...pageProps} />;
} 