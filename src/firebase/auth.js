// import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
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
    const user = result.user;
    const email = user.email;
    const name = user.displayName;

    // Check if the user exists in the database
    try {
      const checkUserResponse = await axios.get(
        `http://127.0.0.1:8000/api/v1/user/${encodeURIComponent(email)}`
      );

      if (
        checkUserResponse.data.status === "success" &&
        checkUserResponse.data.data.user
      ) {
        console.log("User already exists:", checkUserResponse.data.data.user);
        window.location.href = "/dashboard";
        return result;
      }
    } catch (checkError) {
      if (checkError.response && checkError.response.status === 404) {
        // If user doesn't exist, create a new user
        const newUserResponse = await axios.post(
          "http://127.0.0.1:8000/api/v1/user",
          { name, email }
        );
        console.log("New user created:", newUserResponse.data.data.user);
        window.location.href = "/dashboard";
        return result;
      } else {
        console.error("Error checking user existence:", checkError);
        throw checkError;
      }
    }
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
