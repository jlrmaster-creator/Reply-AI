import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnKv-bYACXfXXrizsvAyPhzVBOm-DRtA0",
  authDomain: "reply-ai-234e7.firebaseapp.com",
  projectId: "reply-ai-234e7",
  storageBucket: "reply-ai-234e7.firebasestorage.app",
  messagingSenderId: "441084216440",
  appId: "1:441084216440:web:71081c40e21ee32937198d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
