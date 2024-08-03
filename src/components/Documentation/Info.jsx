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
  position: relative;
  background-image: url("/images/info-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  /* border: 2px solid red; */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 255, 0.7);
    clip-path: polygon(0 0, 65% 0, 45% 100%, 0 100%);
    pointer-events: none;
  }
  > * {
    position: relative;
    z-index: 1;
    text-align: left;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 7px;
    font-weight: 500;
    width: 50%;

    @media (max-width: 768px) {
      font-weight: bold;
      font-size: 3vmax;
      letter-spacing: 2px;
    }
  }
  @media (max-width: 768px) {
    padding: 3vmax 2vmax;
    border: none;
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
