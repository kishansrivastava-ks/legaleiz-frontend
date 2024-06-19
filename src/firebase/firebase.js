/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2ESIaxoByCFt34ZjIBvBdpN8AhWklI-I",
  authDomain: "legaleiz.firebaseapp.com",
  projectId: "legaleiz",
  storageBucket: "legaleiz.appspot.com",
  messagingSenderId: "743055493825",
  appId: "1:743055493825:web:869eab87f3a9ad9e996240",
  measurementId: "G-9QPS91H9Z6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
