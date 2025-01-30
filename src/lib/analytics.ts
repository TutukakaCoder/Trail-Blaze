import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';
import { useEffect, useState } from 'react';
import { app } from './firebase';

let analytics: Analytics | null = null;

export function initAnalytics() {
  if (typeof window !== 'undefined') {
    getAnalytics(app);
  }
}

export const trackEvent = (eventName: string, eventParams?: object) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

export const useAnalytics = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      initAnalytics();
      setIsInitialized(true);
    }
  }, [isInitialized]);

  return { trackEvent };
}; 