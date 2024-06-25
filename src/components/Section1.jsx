/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useState } from "react";

// Styled Components
const Section = styled.section`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const StyledSection1 = styled(Section)`
  height: calc(100vh - 64px);
  /* height: 90vh; */

  grid-row: 2;
  overflow-x: hidden;
  position: relative;
`;

const Slider = styled.div`
  background-color: red;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  transition: transform 0.5s ease-in-out;
  min-height: 100%;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 100%;
  /* border: 0.5rem solid yellow; */
  /* height: max-content; */
  scroll-snap-align: start;
  padding: 4em;
  /* align-self: stretch; */
  justify-content: stretch;
  background-image: linear-gradient(
      to right,
      rgba(120, 120, 249, 0.5),
      rgba(0, 0, 255, 0)
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    padding: 2em;
    width: 100vw;
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  bottom: 1em;
  right: 1em;
`;

const NextButton = styled.button`
  margin-right: 1em;
`;

const PrevButton = styled.button``;

// dummy sections for sliding effect of section 1
const sections = [
  {
    title: "Your One-Click Solution for Legal and Professional Needs",
    text: "start just at ₹499",
    image: "/sec1-img3.jpg",
  },
  {
    title: "Online Legal Consulation Anytime Anywhere",
    text: "Consult in 10 Indian Languages starting at ₹20/min.",
    image: "/sec1-img2.jpg",
  },
  {
    title: "Document Drafting By Expert Lawyer",
    text: "Document Drafting Starts At Just ₹5999.",
    image: "/sec1-img1.jpg",
  },
  {
    title: "Focus On Building Your Startup",
    text: "Startup documents at just ₹10,000",
    image: "/sec1-img4.jpg",
  },
];

const StyledH2 = styled.h2`
  font-size: 5vmax;
  font-weight: 600;
  letter-spacing: 3px;
  color: #fff;
  width: 60%;
  line-height: 8vmax;
  @media (max-width: 768px) {
    min-width: 100%;
    margin-bottom: 2rem;
  }
`;

const StyledSpan = styled.span`
  color: #ffba09;
`;

const StyledP = styled.p`
  font-size: 2rem;
  color: #fff;
  padding: 1rem 3rem;
  background-color: rgba(2, 95, 208, 0.5);

  width: max-content;
  border-radius: 25px;
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % sections.length);
    const slider = document.getElementById("slider");
    slider.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + sections.length) % sections.length);
    const slider = document.getElementById("slider");
    slider.style.transform = `translateX(-${(currentIndex - 1) * 100}%)`;
  };

  return (
    <StyledSection1 id="section1">
      <Slider id="slider">
        {sections.map((section, index) => (
          <Slide id="slide" key={index} image={section.image}>
            <StyledH2>{section.title}</StyledH2>
            <StyledP>{section.text}</StyledP>
          </Slide>
        ))}
      </Slider>
      {/* <ButtonGroup>
        <PrevButton onClick={handlePrev}>Previous</PrevButton>
        <NextButton onClick={handleNext}>Next</NextButton>
      </ButtonGroup> */}
    </StyledSection1>
  );
}

export default Section1;
