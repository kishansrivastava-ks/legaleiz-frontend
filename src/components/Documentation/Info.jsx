/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

`;

const StyledInfo = styled.div`
  width: 100vw;
  background-color: blue;
  color: #fff;
  padding: 5vmax 3vmax;
  font-size: 3vmax;
  text-align: center;
  text-transform: uppercase;
  border: 1rem solid #fff;

  /* test */
  position: relative;
  background-image: url("/images/info-background.jpg");
  background-size: cover; /* Adjust the image to cover the entire component */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center; /* Center the image */
  /* width: 100%; 
  height: 100vh;  */
  overflow: hidden; /* Prevent overflow if content exceeds */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 255, 0.7); /* Transparent blue overlay */
    clip-path: polygon(0 0, 65% 0, 45% 100%, 0 100%); /* Slanted right edge */
    pointer-events: none; /* Allow clicks through the overlay */
  }
  > * {
    position: relative; /* Ensure text and other content appear above the overlay */
    z-index: 1;
    text-align: left;
    /* font-family: "Roboto", sans-serif; */
    font-family: "Montserrat", sans-serif;
    letter-spacing: 7px;
    font-weight: 500;
    width: 50%;
    /* background-color: rebeccapurple; */
  }
`;

function Info({ info }) {
  const [bgImage, setBgImage] = useState(
    'url("/images/info-background-low.jpg")'
  ); // Placeholder image

  useEffect(() => {
    const highResImage = new Image();
    highResImage.src = "/images/info-background-high.jpg";
    highResImage.onload = () => {
      setBgImage(`url("${highResImage.src}")`);
    };
  }, []);

  return (
    <StyledInfo style={{ backgroundImage: bgImage }}>
      <GlobalStyle />

      <div>{info}</div>
    </StyledInfo>
  );
}

export default Info;
