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

const StyledContainer = styled.div`
  display: flex;
  min-width: 97%;
  height: 110vh;
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
    padding: 1rem 20px;
    /* border-bottom: 1px solid #ccc; */
    background-color: #fff;
  }

  &::-webkit-scrollbar {
    width: 7px;
    border: none;
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

const definition = {
  question: "Partnership Firm",
  answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit exercitationem reprehenderit labore! Perferendis debitis est corporis soluta beatae blanditiis ex dolores labore dolorum quom.",
};

const benefits = [
  {
    id: 1,
    point: "Easy to start",
  },
  {
    id: 2,
    point: "Minimal Regulatory Compliance",
  },
  {
    id: 3,
    point: "Operating Flexibility for Partners",
  },
  {
    id: 4,
    point: "Various Financial Returns for the Partners",
  },
];

const requirements = [
  {
    id: 1,
    point: "Minimum 2 Partners",
  },
  {
    id: 2,
    point: "No Capital Requirement",
  },
];

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
        <div>
          <Stats />
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
        <div>
          <Benefits title="Partnership Firm" benefits={benefits} />
        </div>
        <div>
          <Requirements title="Partnership Firm" requirements={requirements} />
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
        <Register />
      </RightBox>
    </StyledContainer>
  );
}

export default Container;
