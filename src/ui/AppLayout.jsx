/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Partners from "../ui/Partners";
import Footer from "../components/Footer";
import Whatsapp from "./Whatsapp";
// import { useNotification } from "../contexts/notificationContext/NotificationContext";
import { toast } from "react-hot-toast";

const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  /* grid-auto-rows: min-content; */
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  /* box-sizing: border-box; */
`;

const Section = styled.section`
  background-color: ${(props) => props.bgColor};
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  useEffect(() => {
    const signedIn = localStorage.getItem("signedIn");
    if (signedIn) {
      toast.success("Signed in successfully");
      localStorage.removeItem("signedIn"); // Remove the flag after showing the toast
    }
  }, []);

  return (
    <LandingPage>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Partners />
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
};

export default App;
