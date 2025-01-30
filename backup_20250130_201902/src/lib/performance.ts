import { getPerformance } from 'firebase/performance';
import { app } from './firebase';

export function initPerformance() {
  if (typeof window !== 'undefined') {
    getPerformance(app);
  }
} 