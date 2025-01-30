import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence, PersistenceSettings } from 'firebase/firestore';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { collection, getDocs } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase and export app
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const functions = getFunctions(app);
export let analytics: Analytics | undefined;

// Only enable persistence and analytics on client side
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  
  // Enable persistence without logging deprecation warning
  enableIndexedDbPersistence(db)
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
      } else if (err.code === 'unimplemented') {
        console.warn('The current browser does not support persistence.');
      }
    });
}

// Add this test function
export async function testFirebaseConnection() {
  try {
    const testRef = collection(db, 'waitlist');
    await getDocs(testRef);
    console.log('Firebase connection successful');
    return true;
  } catch (error) {
    console.error('Firebase connection failed:', error);
    return false;
  }
} 