// import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  // createUserWithEmailAndPassword,
  GoogleAuthProvider,
  // signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// export const doCreateUserWithEmailAndPassword = async (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// export const doSignInWithEmailAndPassword = async (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    // Navigate to the home page
    window.location.href = "/dashboard"; // Adjust the path to your home page as needed
    alert("Signed in successfully");
    return result;
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

export const doSignOut = async () => {
  try {
    await auth.signOut();
    window.location.href = "/"; // Redirect to the home page
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
