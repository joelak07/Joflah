import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1nv0ttW89ko3YuM8g53adM1IOs3zALB8",
  authDomain: "joflah-chat.firebaseapp.com",
  projectId: "joflah-chat",
  storageBucket: "joflah-chat.appspot.com",
  messagingSenderId: "972270017964",
  appId: "1:972270017964:web:0a5169d09ea2f7f526ae09"
};
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();