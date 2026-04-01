// ============================================================
//  firebase.js  –  Shared Firebase initialisation
//  Replace the firebaseConfig values with YOUR project's config
//  from: Firebase Console → Project Settings → Your apps → SDK
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔴 REPLACE THESE WITH YOUR OWN FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAzYesdT-95K86IbvyUCPDy0BvGJBtn7Jk",
  authDomain: "shivkirana-bcd14.firebaseapp.com",
  projectId: "shivkirana-bcd14",
  storageBucket: "shivkirana-bcd14.firebasestorage.app",
  messagingSenderId: "523436780783",
  appId: "1:523436780783:web:0f6c69535517bea2b3bf1a"
};

const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
