import { NextApiResponse, NextApiRequest } from "next";
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

export default async function handler(
  { method }: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { response, error } =
    method === "POST" ? await postHandler() : await getHandler();

  if (error) {
    console.error("Error adding document: ", error);
    return res.status(200).json({ result: "nothing to report" });
  }
  return res.status(200).json({ result: response });
}

async function getHandler() {
  try {
    initializeApp(config);
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "webActions"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    return { response: querySnapshot };
  } catch (error) {
    return { error };
  }
}

async function postHandler() {
  try {
    initializeApp(config);
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "webActions"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });

    console.log("Document written with ID: ", docRef.id);
    return { response: docRef.id };
  } catch (error) {
    return { error };
  }
}
