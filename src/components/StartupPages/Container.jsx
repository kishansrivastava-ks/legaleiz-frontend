/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect, useRef } from "react";
import Clients from "./Clients";
import QuestionsContainer from "./QuestionsContainer";
import Chat from "./Chat";
import RegistrationProcess from "./RegistrationProcess";
import HowItWorks from "./HowItWorks";
import Stats from "./Stats";
import Definition from "./Definition";
import Benefits from "./Benefits";
import Requirements from "./Requirements";
import Register from "./Register";
import SliderTest from "../SliderTest";

const StyledContainer = styled.div`
  display: flex;
  min-width: 97%;
  height: 110vh;
  /* margin-top: 50px; Height of the navbar */
  overflow: hidden;
  position: relative;
  background-color: #fff;
  padding: 2vmax 5vmax;
  /* border: 2px solid red; */

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    padding: 0;
    height: max-content;
  }
`;
const LeftBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 60%;
  overflow-y: auto;

  & > div {
    width: 100%;
    padding: 1rem 20px;
    /* border-bottom: 1px solid #ccc; */
    background-color: #fff;
  }

  &::-webkit-scrollbar {
    width: 7px;
    border: none;
    @media (max-width: 768px) {
      width: 3px;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff; /* Scrollbar thumb color */
    border-radius: 10px; /* Rounded corners */
    /* border: 3px solid #ffffff;  */
    border: none; /* Padding around thumb */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Scrollbar track color */
    border-radius: 10px; /* Rounded corners */
  }

  /* border: 2px solid blue; */
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const RightBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 40%;
  /* height: 100%; */
  height: max-content;
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-left: 1rem;

  border: 2px solid green;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const testimonials = [
  {
    review: "This product is amazing! It has changed my life.",
    photo: "https://via.placeholder.com/50",
    name: "John Doe",
  },
  {
    review: "I can't believe how much easier my work has become.",
    photo: "https://via.placeholder.com/50",
    name: "Jane Smith",
  },
  {
    review: "Fantastic! Highly recommend to everyone.",
    photo: "https://via.placeholder.com/50",
    name: "Bob Johnson",
  },
];

function Container({
  title,
  steps,
  heading,
  definition,
  benefits,
  requirements,
  stats,
  questions,
  registrationItems,
  category,
  serviceId,
}) {
  const containerRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const left = leftRef.current;
      const navbarHeight = 50; // Adjust if your navbar height changes
      const containerTop = container.offsetTop;

      if (window.scrollY >= containerTop - navbarHeight) {
        document.body.style.overflow = "hidden";
        container.style.position = "fixed";
        container.style.top = `${navbarHeight}px`;

        let leftScrollTop = left.scrollTop;
        left.scrollTop += window.scrollY - (containerTop - navbarHeight);
        window.scrollTo(0, containerTop - navbarHeight);

        if (left.scrollTop === leftScrollTop) {
          document.body.style.overflow = "auto";
          container.style.position = "relative";
          container.style.top = "auto";
          window.scrollTo(
            0,
            containerTop + left.scrollHeight - window.innerHeight
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      <LeftBox ref={leftRef}>
        <div>
          <Stats stats={stats} title={title} />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <Definition
            question={definition.question}
            answer={definition.answer}
          />
        </div>
        {benefits && (
          <div>
            <Benefits title={title} benefits={benefits} />
          </div>
        )}
        {requirements && (
          <div>
            <Requirements
              title="Partnership Firm"
              requirements={requirements}
            />
          </div>
        )}
        {steps && (
          <div>
            <RegistrationProcess heading={heading} steps={steps} />
          </div>
        )}
        <div>
          <Chat />
        </div>
        <div>
          <QuestionsContainer questions={questions} />
        </div>
        <div>
          <SliderTest testimonials={testimonials} />
        </div>
        <div>
          <Clients />
        </div>
      </LeftBox>
      <RightBox>
        <Register
          serviceId={serviceId}
          registrationItems={registrationItems}
          category={category}
        />
      </RightBox>
    </StyledContainer>
  );
}

export default Container;
