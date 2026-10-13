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
  apiKey: "AIzaSyCoDTd59J7h7VnRS-WSdT1F5Qi8_XcyyPs",
  authDomain: "testingphase12.firebaseapp.com",
  projectId: "testingphase12",
  storageBucket: "testingphase12.firebasestorage.app",
  messagingSenderId: "45507270630",
  appId: "1:45507270630:web:8f22e9e3e4847221242827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);

export default app;
