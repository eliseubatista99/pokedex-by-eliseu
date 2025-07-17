import { type FirebaseOptions } from "firebase/app";

export const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env
    .VITE_REACT_APP_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID as string,
  measurementId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MEASUREMENT_ID as string,
};
