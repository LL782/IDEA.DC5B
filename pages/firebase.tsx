import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

export default function Home() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
  }, []);
  return (
    <code
      style={{
        padding: "0.5rem",
        display: "block",
        backgroundImage: "linear-gradient(linear-gradient(90deg, #0f03, #fff0)",
        maxWidth: "640px",
      }}
    >
      <h1>Firebase test</h1>
      <p>What do these app and analytics initialisations do?</p>
      <p>This page is here to test my connection to Google Firebase</p>
      <p>
        The purpose of using Firebase is to establish a connection to a database
        that has inbuild offline features
      </p>
      <p>Experiment underway</p>
      <p>...</p>
    </code>
  );
}
