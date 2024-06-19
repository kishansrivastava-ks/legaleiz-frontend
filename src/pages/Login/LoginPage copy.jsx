/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Whatsapp from "../../ui/Whatsapp";
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", { phoneNumber });
      // Handle success - redirect to home or other page
      console.log("Login successful:", response.data.message);
      alert("Login successful:", response.data.message);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  //   const [mobileNumber, setMobileNumber] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     alert(`Mobile Number Submitted: ${phoneNumber}`);
  //   };

  return (
    <FormContainer>
      <StyledForm>
        <Title>Login</Title>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {/* <Label htmlFor="mobile">Mobile Number</Label> */}
        <Input
          type="tel"
          id="mobile"
          name="mobile"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="[0-9]{10}"
          placeholder="Enter your mobile number"
          required
        />
        <SubmitButton onClick={handleLogin}>Login</SubmitButton>
        <SignUpText>
          Don&apos;t have an account?{" "}
          <StyledLink to="/signup">Sign up</StyledLink>.
        </SignUpText>
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
