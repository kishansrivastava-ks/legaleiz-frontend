/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useState } from "react";

// Styled Components
const Section = styled.section`
  background-color: ${(props) => props.bgColor};
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSection1 = styled(Section)`
  height: calc(100vh - 64px);
  background-color: #f9ca24;
  grid-row: 2;
  overflow-x: hidden;
  position: relative;
`;

const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  scroll-snap-align: start;
  padding: 2em;
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
    title: "Section 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Section 2",
    text: "Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
  },
  {
    title: "Section 3",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
  },
  {
    title: "Section 4",
    text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
];

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
          <Slide key={index}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </Slide>
        ))}
      </Slider>
      <ButtonGroup>
        <PrevButton onClick={handlePrev}>Previous</PrevButton>
        <NextButton onClick={handleNext}>Next</NextButton>
      </ButtonGroup>
    </StyledSection1>
  );
}

export default Section1;
