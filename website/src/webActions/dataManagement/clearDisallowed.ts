import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

export const clearDisallowed = async () => {
  const IMPORTANT_DELETE_FEATURE_TOGGLE = false;

  try {
    initializeApp(config);
    const db = getFirestore();

    const querySnapshot = await getDocs(collection(db, "web-actions"));
    const contenders: Array<{ id: string; data: unknown }> = [];

    querySnapshot.forEach(async (d) => {
      if (disallowed(d.data().actions)) {
        contenders.push({ id: d.id, data: d.data() });
      }
    });

    if (IMPORTANT_DELETE_FEATURE_TOGGLE) {
      contenders.forEach(async ({ id }) => {
        await deleteDoc(doc(db, "web-actions", id));
      });
    }

    return {
      data: {
        delete: IMPORTANT_DELETE_FEATURE_TOGGLE,
        size: querySnapshot.size,
        contenders,
      },
    };
  } catch (error) {
    return { error };
  }
};

function disallowed(actions: WebAction[]) {
  return (
    actions[0]?.userAgent?.includes("Vercelbot") ||
    actions[0]?.userAgent?.includes("Checkly") ||
    looksLikeCheckly(actions) ||
    actions[0]?.pageUrl.includes("http://localhost:3000/")
  );
}

function looksLikeCheckly(actions: WebAction[]) {
  const { dateTime, viewportHeight, viewportWidth } = actions[0];
  return (
    actions.length === 1 &&
    dateTime.includes(":00:") &&
    viewportHeight === 720 &&
    viewportWidth === 1280
  );
}
