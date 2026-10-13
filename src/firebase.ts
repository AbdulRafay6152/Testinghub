import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ============================================================
// FIREBASE CONFIGURATION
// ============================================================
// Replace these values with your Firebase project config.
// Get them from: Firebase Console → Project Settings → Your apps
// 
// For production, use environment variables (see .env.example):
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY
// ============================================================

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCoDTd59J7h7VnRS-WSdT1F5Qi8_XcyyPs",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "testingphase12.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "testingphase12",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "testingphase12.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "45507270630",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:45507270630:web:8f22e9e3e4847221242827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);

export default app;
