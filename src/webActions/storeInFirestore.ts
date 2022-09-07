import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

export const storeInFirestore = async (actions: string) => {
  try {
    initializeApp(config);
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "web-actions"), {
      actions: JSON.parse(actions),
    });
    return { response: docRef.id };
  } catch (error) {
    return { error };
  }
};
