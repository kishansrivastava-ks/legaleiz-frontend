/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Styles
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  /* border: 3px solid red; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  width: 20%;
  min-height: 100%;
  overflow-y: auto;
  position: sticky;
  top: 0;
  padding: 10px;
  border-right: 1px solid #ccc;

  @media (max-width: 768px) {
    /* display: flex;
    width: 100%;
    overflow-x: auto;
    border: none;
    min-height: max-content; */
    display: none;
  }

  &::-webkit-scrollbar {
    width: 5px;
    border: none;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 10px;
    border: none;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
`;

const RightColumn = styled.div`
  width: 80%;
  min-height: 100%;
  overflow-y: auto;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }

  &::-webkit-scrollbar {
    width: 5px;
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 10px;
    border: none;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
`;

const Heading = styled.div`
  padding: 5px;
  cursor: pointer;
  font-size: 1vmax;
  background-color: ${(props) => (props.active ? "#f0f0f0" : "white")};
  &:hover {
    background-color: #f0f0f0;
  }
  padding: 1rem 1rem;
  border-radius: 3px;
  margin: 0.5rem 0;
`;

const Section = styled.div`
  & > h2 {
    width: 100%;
    font-size: 1.5vmax;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      font-size: 2.5vmax;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
  margin: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

// Component
const ScrollableContainer = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);
  const rightColumnRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Get the distance from the top of the viewport to the top of the RightColumn
      const containerTop = rightColumnRef.current.getBoundingClientRect().top;

      sectionRefs.current.forEach((ref, index) => {
        // Get the top position of each section relative to the viewport
        const sectionTop = ref.getBoundingClientRect().top;
        if (
          // Check if the section is in the middle of the viewport
          sectionTop <= containerTop + window.innerHeight / 2 &&
          sectionTop + ref.offsetHeight > containerTop + window.innerHeight / 2
        ) {
          setActiveSection(index);
        }
      });
    };

    const rightColumn = rightColumnRef.current;
    rightColumn.addEventListener("scroll", handleScroll);
    return () => rightColumn.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    setActiveSection(index);
    sectionRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Container>
      <LeftColumn>
        {sections.map((section, index) => (
          <Heading
            key={index}
            active={activeSection === index}
            onClick={() => scrollToSection(index)}
          >
            {section.heading}
          </Heading>
        ))}
      </LeftColumn>
      <RightColumn ref={rightColumnRef}>
        {sections.map((section, index) => (
          <Section key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            <h2>{section.heading}</h2>
            {/* <p>{section.content}</p> */}
            {section.component}
          </Section>
        ))}
      </RightColumn>
    </Container>
  );
};

export default ScrollableContainer;
