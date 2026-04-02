import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzYesdT-95K86IbvyUCPDy0BvGJBtn7Jk",
  authDomain: "shivkirana-bcd14.firebaseapp.com",
  projectId: "shivkirana-bcd14",
  storageBucket: "shivkirana-bcd14.firebasestorage.app",
  messagingSenderId: "523436780783",
  appId: "1:523436780783:web:035259590762be0cb3bf1a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
