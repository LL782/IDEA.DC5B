import { initializeApp } from "firebase/app";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

export const storeInFirestore = async ({
  actions,
  documentId,
}: WebActionDocument) => {
  try {
    if (documentId) {
      await updateWith(documentId, actions);
    } else {
      documentId = await createWith(actions);
    }
    const actionIds = actions.map((a) => a.actionId);

    return { data: { documentId, actionIds } };
  } catch (error) {
    return { error };
  }
};

async function updateWith(documentId: string, actions: WebAction[]) {
  initializeApp(config);
  const db = getFirestore();
  for await (const action of actions) {
    updateDoc(doc(db, "web-actions", documentId), {
      actions: arrayUnion(action),
    });
  }
}

async function createWith(actions: WebAction[]) {
  initializeApp(config);
  const db = getFirestore();
  const docRef = await addDoc(collection(db, "web-actions"), { actions });
  return docRef.id;
}
