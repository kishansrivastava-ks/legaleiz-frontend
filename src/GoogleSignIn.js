import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useNavigate } from "react-router-dom";

import { firebaseConfig } from "../firebase-config";
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function GoogleSignIn() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      setUser(user);
      navigate("/dashboard");
      alert("signed in successfully !");
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      console.log("User signed out");
      alert("signed out successfully!");
      navigate("/");
    });
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <img src={user.photoURL} alt="Profile" />
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}

export default GoogleSignIn;
