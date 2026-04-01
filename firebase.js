// ============================================================
//  firebase.js  –  Shared Firebase initialisation
//  Replace the firebaseConfig values with YOUR project's config
//  from: Firebase Console → Project Settings → Your apps → SDK
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔴 REPLACE THESE WITH YOUR OWN FIREBASE CONFIG
const firebaseConfig = {
  apiKey:            "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain:        "your-project-id.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project-id.appspot.com",
  messagingSenderId: "000000000000",
  appId:             "1:000000000000:web:XXXXXXXXXXXXXXXXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
