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

/*
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
*/
export const doSignOut = async () => {
  try {
    await auth.signOut();
    window.location.href = "/"; // Redirect to the home page
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

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
        const existingUser = checkUserResponse.data.data.user;
        if (existingUser.role === "user") {
          window.location.href = "/dashboard";
        } else if (existingUser.role === "partner") {
          window.location.href = "/dashboard/partner";
        }
        return result;
      }
    } catch (checkError) {
      if (checkError.response && checkError.response.status === 404) {
        // User doesn't exist in the user route, check the partner route
        try {
          const checkPartnerResponse = await axios.get(
            `http://127.0.0.1:8000/api/v1/partner/${encodeURIComponent(email)}`
          );

          if (
            checkPartnerResponse.data.status === "success" &&
            checkPartnerResponse.data.data.partner
          ) {
            // Create a new user with the role of "partner"
            const newUserResponse = await axios.post(
              "http://127.0.0.1:8000/api/v1/user",
              { name, email, role: "partner" }
            );
            console.log(
              "New user created with role partner:",
              newUserResponse.data.data.partner
            );
            window.location.href = "/dashboard/partner";
            return result;
          }
        } catch (partnerError) {
          if (partnerError.response && partnerError.response.status === 404) {
            // User doesn't exist in both routes, create a new user with the role of "user"
            const newUserResponse = await axios.post(
              "http://127.0.0.1:8000/api/v1/user",
              { name, email, role: "user" }
            );
            console.log(
              "New user created with role user:",
              newUserResponse.data.data.user
            );
            window.location.href = "/dashboard";
            return result;
          } else {
            console.error("Error checking partner existence:", partnerError);
            throw partnerError;
          }
        }
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

// 🔴 MODIFY THE DO SIGNIN WITH GOOGLE
/*
1. check if the user exists
  if user exists and user role is "user"
    navigate to "/dashboard"
  if user exits and user role is "partner"
    navigate to "/dashboard/partner"
  
  if user doesn't exist
   check if the user has filled the "become a partner form"
    if so -> create a user with a role of "partner"
      navigate to "/dashboard/partner"
  else -> create a user with a role of "user"
      navigate to "/dashboard"
*/
