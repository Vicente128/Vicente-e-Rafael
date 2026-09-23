import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxfwZIgdgn4B8qWwbF6yZQaicPRCksoSU",
  authDomain: "vicentefirebase.firebaseapp.com",
  projectId: "vicentefirebase",
  storageBucket: "vicentefirebase.firebasestorage.app",
  messagingSenderId: "889572340731",
  appId: "1:889572340731:web:b30b458d9f6127451f115e",
  measurementId: "G-HN9NEFS9QK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);