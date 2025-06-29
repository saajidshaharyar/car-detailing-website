import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCx5oF42gVoAD_OBSBz6MIKfTfUByHH8Oc",
  authDomain: "prestigeonwheelz-7bbe3.firebaseapp.com",
  projectId: "prestigeonwheelz-7bbe3",
  storageBucket: "prestigeonwheelz-7bbe3.appspot.com", // fixed typo here too
  messagingSenderId: "868306870134",
  appId: "1:868306870134:web:d91622e154b009d3a06457",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };