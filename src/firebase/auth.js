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
    // console.log(result);

    // Set flag in local storage
    localStorage.setItem("signedIn", "true");
    window.location.href = "/";

    return result;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
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
