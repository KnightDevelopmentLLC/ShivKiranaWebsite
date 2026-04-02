// ============================================================
// firebase.js — Firebase Initialization
// ============================================================
// EDIT HERE - Replace with your own Firebase config if needed
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// EDIT HERE - Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAzYesdT-95K86IbvyUCPDy0BvGJBtn7Jk",
  authDomain: "shivkirana-bcd14.firebaseapp.com",
  projectId: "shivkirana-bcd14",
  storageBucket: "shivkirana-bcd14.firebasestorage.app",
  messagingSenderId: "523436780783",
  appId: "1:523436780783:web:035259590762be0cb3bf1a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
