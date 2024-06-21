/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Whatsapp from "../../ui/Whatsapp";
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { doSignInWithGoogle } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext/authContext";
// import { useNotification } from "../../contexts/notificationContext/NotificationContext";
import toast from "react-hot-toast";
import SpinnerMini from "../../ui/SpinnerMini";

const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Main = styled.div`
  grid-row: 2;
  height: min-content;
  font-size: 2rem;
  background-color: #fff;
  margin: 0;
  display: flex;
  width: 100vw;
  flex-direction: column;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    margin: 0;
  }
`;

// LOGIN FORM
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #fff;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 30rem;
  width: 50rem;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333333;
  text-align: center;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #666666;
  font-size: 2rem;
`;

const Input = styled.input`
  padding: 2rem 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 2rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
const SignUpText = styled.p`
  margin-top: 1.5rem;
  color: #666666;
  text-align: center;
  font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// FORM COMPONENET
const LoginForm = () => {
  // const { userLoggedIn } = useAuth();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post("/login", { phoneNumber });
  //     // Handle success - redirect to home or other page
  //     console.log("Login successful:", response.data.message);
  //     alert("Login successful:", response.data.message);
  //   } catch (error) {
  //     setErrorMessage(error.response.data.message);
  //   }
  // };

  //   const [mobileNumber, setMobileNumber] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     alert(`Mobile Number Submitted: ${phoneNumber}`);
  //   };

  const SignInButton = styled.button`
    border: none;
    background: none;
    background-color: #2222ff;
    padding: 1rem 2rem;
    color: #fff;
    letter-spacing: 1px;
    font-size: 1.3vmax;
    height: 7rem;
    /* width: max-content; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    gap: 2rem;
    & > p {
      color: #fff;
      letter-spacing: 1px;
      font-size: 1.3vmax;
    }
    & > img {
      width: 50px;
      background-color: #fff;
      border-radius: 50%;
    }
    &:hover {
    }
  `;
  // google signin
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (err) {
        setIsSigningIn(false);
      }
    }
  };
  return (
    <FormContainer>
      <StyledForm>
        {/* <Title>Login</Title>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <Input
          type="tel"
          id="mobile"
          name="mobile"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{10}"
          placeholder="Enter your mobile number"
          required
        /> */}
        {/* <SubmitButton onClick={handleLogin}>Login</SubmitButton> */}
        <SignInButton
          disabled={isSigningIn}
          onClick={(e) => {
            onGoogleSignIn(e);
          }}
        >
          {isSigningIn ? (
            <SpinnerMini />
          ) : (
            <>
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="google"
              />
              <p>Continue with google</p>
            </>
          )}
        </SignInButton>
        {/* <SignUpText>
          Don&apos;t have an account?{" "}
          <StyledLink to="/signup">Sign up</StyledLink>.
        </SignUpText> */}
      </StyledForm>
    </FormContainer>
  );
};
function LoginPage() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <LoginForm />
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default LoginPage;
