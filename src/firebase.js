import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJKNtMhVaA0g96BVi0Ld6WTs5zLROW1sI",
  authDomain: "fuse-react2.firebaseapp.com",
  projectId: "fuse-react2",
  storageBucket: "fuse-react2.appspot.com",
  messagingSenderId: "653253042851",
  appId: "1:653253042851:web:70188097ce0ebddec81516",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
