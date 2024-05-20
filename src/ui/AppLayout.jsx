/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow-y: auto;
`;

const Section = styled.section`
  background-color: ${(props) => props.bgColor};
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section3 = styled(Section)`
  background-color: #222f3e;
  grid-row: 4!;
`;

const App = () => {
  return (
    <LandingPage>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 id="section3">
        <h2>Section 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex.
        </p>
      </Section3>
    </LandingPage>
  );
};

export default App;
