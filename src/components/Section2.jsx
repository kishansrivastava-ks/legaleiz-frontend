/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TrustedUsers from "../ui/TrustedUsers";
import Services from "./Services";

const Section = styled.section`
  background-color: ${(props) => props.bgColor};
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSection2 = styled(Section)`
  /* background-color: #00adb5; */
  background-color: #fff;
  grid-row: 3;
`;

const Grid = styled.div`
  margin-top: 4rem;
  max-width: 85%;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1em;
  padding: 1em;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 3em;
  margin-bottom: 1em;
  margin: auto;
  margin-top: 0;
  /* background-color: orangered; */
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  /* background-color: purple; */
  margin: auto;
  letter-spacing: 1.5px;
  line-height: 2.8rem;
  text-align: justify;
  margin-bottom: 5rem;
`;

function Section2() {
  return (
    <StyledSection2 id="section2">
      <TrustedUsers />
      <Grid>
        <Heading>Our services</Heading>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quod
          nisi, molestiae minus nam voluptate labore deserunt provident, at
          neque ullam similique et atque? Harum, doloribus facere repellat sunt
          dolor ratione aliquid dolores, dolore quas culpa accusamus veritatis
          quaerat! Facilis consequuntur illo similique molestias incidunt
          repudiandae illum doloribus tenetur fugit!
        </Paragraph>
      </Grid>
      <Services />
    </StyledSection2>
  );
}

export default Section2;
