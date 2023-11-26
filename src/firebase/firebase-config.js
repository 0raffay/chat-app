import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Authentication:
import { getAuth, signInWithPhoneNumber  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmIHLD-a_EMWGhlavrh0deIt9_6UlwIjw",
  authDomain: "chatapp-58c49.firebaseapp.com",
  projectId: "chatapp-58c49",
  storageBucket: "chatapp-58c49.appspot.com",
  messagingSenderId: "733021145887",
  appId: "1:733021145887:web:90589e3b219db2f196be2a",
  measurementId: "G-2ZM2LJ66LF"
};

const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
