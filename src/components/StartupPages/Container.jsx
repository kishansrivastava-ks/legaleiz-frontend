import styled from "styled-components";
import { useEffect, useRef } from "react";
import Clients from "./Clients";
import QuestionsContainer from "./QuestionsContainer";
import Chat from "./Chat";
import RegistrationProcess from "./RegistrationProcess";
import HowItWorks from "./HowItWorks";

const StyledContainer = styled.div`
  display: flex;
  min-width: 97%;
  height: 100vh;
  /* margin-top: 50px; Height of the navbar */
  overflow: hidden;
  position: relative;
  background-color: #fff;
  padding: 2vmax 5vmax;
`;
const LeftBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 60%;
  overflow-y: auto;

  & > div {
    width: 100%;
    padding: 2rem 20px;
    border-bottom: 1px solid #ccc;
  }
`;
const RightBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 40%;
  height: 100%;

  & > div {
    padding: 20px;
    border: 1px solid #ccc;
    height: 100%;
  }
`;

const steps = [
  { no: 1, step: "Submit all the required documents" },
  {
    no: 2,
    step: "Drafting a Partnership Deed",
  },
  {
    no: 3,
    step: "Payment of Stamp Duty on Deed",
  },
  {
    no: 4,
    step: "Notarisation of Partnership Deed",
  },
  {
    no: 5,
    step: "Apply for PAN and TAN of the Firm",
  },
  {
    no: 6,
    step: "Certificate of Registration from RoF",
  },
  {
    no: 7,
    step: "Open a Current Bank account on the Firm’s name",
  },
];
const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

function Container() {
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
        <div>Component 1</div>
        <div>Component 2</div>
        <div>Component 3</div>
        <div>Component 3</div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <RegistrationProcess heading={heading} steps={steps} />
        </div>
        <div>
          <Chat />
        </div>
        <div>
          <QuestionsContainer />
        </div>
        <div>Component 3</div>
        <div>
          <Clients />
        </div>
      </LeftBox>
      <RightBox>
        <div>Right component</div>
      </RightBox>
    </StyledContainer>
  );
}

export default Container;
