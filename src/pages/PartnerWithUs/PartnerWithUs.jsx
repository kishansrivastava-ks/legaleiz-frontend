/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Whatsapp from "../../ui/Whatsapp";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import PartnerContainer from "../../components/PartnerWithUs/PartnerContainer";
import SideForm from "../../components/PartnerWithUs/SideForm";

const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  /* height: min-content; */
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  /* box-sizing: border-box; */
`;

const Main = styled.div`
  grid-row: 2;
  height: min-content;
  /* width: 100vw; */
  font-size: 2rem;
  /* background-color: rgb(243, 152, 152); */
  background-color: #fff;
  /* padding: 2vw; */
  margin: 0;
  /* border: 0.8rem solid red; */

  display: flex;
  width: 100vw;
  flex-direction: column;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    margin: 0;
  }
`;
const Info = styled.div`
  display: flex;
  gap: 5rem;
  /* background-color: lightblue; */
  width: 100vw;
  height: 60vh;
  padding: 2vmax 10vmax;
  & > div {
    flex: 1;
    max-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 768px) {
      min-width: 100%;
      height: max-content;
    }
  }
  border-bottom: 1px solid lightgray;
  /* border: 2px solid red; */
  @media (max-width: 768px) {
    padding: 1.5rem;
    position: relative;
    height: max-content;
  }
`;
const Heading1 = styled.h2`
  max-width: 70%;
  font-size: 2vmax;
  @media (max-width: 768px) {
    font-size: 2.5vmax;
  }
`;
const Caption = styled.h4`
  font-size: x-large;
  @media (max-width: 768px) {
    font-size: smaller;
    margin: 1rem 0;
  }
`;
const Button = styled.button`
  background: none;
  border: none;
  background-color: blue;
  color: #fff;
  padding: 1rem 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 3px;
  width: max-content;
  &:hover {
    cursor: pointer;
    background-color: #0c09c6;
  }
  @media (max-width: 768px) {
    font-size: small;
    padding: 0.5rem 1rem;
    font-weight: 500;
  }
`;
const Image = styled.img`
  height: 100%;
  @media (max-width: 768px) {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    height: 6rem;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    right: 5%;
    top: 20%;
  }
`;

// PARTNERS
const PartnersContainer = styled.div`
  width: 100vw;
  height: max-content;
  /* background-color: yellow; */
  padding: 3vmax 15vmax;
  & > h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
const Container = styled.div`
  width: 100%;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  cursor: pointer;
  border-bottom: 1px solid lightgray;

  &:hover {
    /* background-color: #f5f5f5; */
  }
`;
const HeadingImage = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 3rem;
`;
const ArrowIcon = styled.div`
  transition: all 0.3s ease;

  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(90deg);
    `}
`;
const Content = styled.div`
  max-height: 0;
  overflow: hidden;
  /* max-height: 0; */
  padding: 0 4rem;
  margin-top: 1rem;
  max-height: ${({ isOpen }) => (isOpen ? "150px" : "0")};
  transition: max-height 0.3s ease;
`;

const Accordion = ({ image, text, content, isOpen, onClick }) => (
  <>
    <Heading onClick={onClick}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HeadingImage src={image} alt="heading" />
        <span style={{ fontSize: "2.5rem" }}>{text}</span>
      </div>
      <ArrowIcon isOpen={isOpen}>
        {/* {isOpen ? <FaChevronDown /> : <FaChevronRight />} */}
        <FaChevronRight />
      </ArrowIcon>
    </Heading>
    <Content isOpen={isOpen}>
      <div>{content}</div>
    </Content>
  </>
);
const AccordionContainer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const headings = [
    {
      image:
        "https://img.icons8.com/?size=100&id=112274&format=png&color=228BE6",
      text: "Startup Enablers",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusantium aperiam blanditiis rem consequatur dolores incidunt architecto quis sed repellat dolore animi autem, perspiciatis, assumenda in ipsum ullam qui, et ipsa pariatur eligendi adipisci dolorum earum. Nemo quisquam nulla magnam beatae ex. Voluptatibus, nisi a corporis eligendi porro aut eaque.",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=19996&format=png&color=228BE6",
      text: "Property",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusantium aperiam blanditiis rem consequatur dolores incidunt architecto quis sed repellat dolore animi autem, perspiciatis, assumenda in ipsum ullam qui, et ipsa pariatur eligendi adipisci dolorum earum. Nemo quisquam nulla magnam beatae ex. Voluptatibus, nisi a corporis eligendi porro aut eaque.",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=45642&format=png&color=228BE6",
      text: "Banking & Fintech",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusantium aperiam blanditiis rem consequatur dolores incidunt architecto quis sed repellat dolore animi autem, perspiciatis, assumenda in ipsum ullam qui, et ipsa pariatur eligendi adipisci dolorum earum. Nemo quisquam nulla magnam beatae ex. Voluptatibus, nisi a corporis eligendi porro aut eaque.",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=42597&format=png&color=228BE6",
      text: "e-Commerce",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusantium aperiam blanditiis rem consequatur dolores incidunt architecto quis sed repellat dolore animi autem, perspiciatis, assumenda in ipsum ullam qui, et ipsa pariatur eligendi adipisci dolorum earum. Nemo quisquam nulla magnam beatae ex. Voluptatibus, nisi a corporis eligendi porro aut eaque.",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=1BDYXxljmOLM&format=png&color=228BE6",
      text: "Media",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusantium aperiam blanditiis rem consequatur dolores incidunt architecto quis sed repellat dolore animi autem, perspiciatis, assumenda in ipsum ullam qui, et ipsa pariatur eligendi adipisci dolorum earum. Nemo quisquam nulla magnam beatae ex. Voluptatibus, nisi a corporis eligendi porro aut eaque.",
    },
    {
      image:
        "https://img.icons8.com/?size=100&id=xGUZ15gQQ60G&format=png&color=228BE6",
      text: "Others",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime accusantium aperiam blanditiis rem consequatur dolores incidunt architecto quis sed repellat dolore animi autem, perspiciatis, assumenda in ipsum ullam qui, et ipsa pariatur eligendi adipisci dolorum earum. Nemo quisquam nulla magnam beatae ex. Voluptatibus, nisi a corporis eligendi porro aut eaque.",
    },
  ];
  return (
    <Container>
      {headings.map((heading, index) => (
        <Accordion
          key={index}
          image={heading.image}
          text={heading.text}
          content={heading.content}
          isOpen={openIndex === index}
          onClick={() => toggleOpen(index)}
        />
      ))}
    </Container>
  );
};

// EXPERIENCE
const Experience = styled.div`
  /* border: 3px solid red; */
  display: flex;
  width: 100vw;
  height: max-content;
  /* background-color: yellow; */
  padding: 3vmax 15vmax;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0;
  }

  & > h2 {
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      font-size: 3vmax;
      /* border: 2px solid red; */
      width: max-content;
    }
  }
  & > h3 {
    margin: 3rem 0;
  }

  & > div {
    display: flex;
    gap: 4rem;
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      gap: 1rem;
      /* border: 2px solid red; */
    }
    & > div {
      /* border: 2px solid red; */
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: smaller;
        padding: 0 2rem;
        margin-bottom: 1rem;
      }
      & > img {
        @media (max-width: 768px) {
          height: 5rem;
        }
      }
      & > p {
        text-align: center;
        margin-top: 2rem;
        @media (max-width: 768px) {
          margin-top: 0;
          text-align: left;
          margin-left: 1rem;
        }
      }
    }
  }
`;

function PartnerWithUs() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <SideForm />
        <Info>
          <div>
            <Heading1>
              Let&apos;s Partner Up! Become our partner and drive your business
              to the next level.
            </Heading1>
            <Caption>Connect with us now!</Caption>
            <Button>Download Partner Success Stories</Button>
          </div>
          <Image src="/images/discussion.png" alt="discussion" />
        </Info>
        <PartnersContainer>
          <h2>Few of our great partners are</h2>
          {/* <AccordionContainer /> */}
          <PartnerContainer />
        </PartnersContainer>
        <Experience>
          <h2>Our partners have experienced</h2>
          <div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=xGUZ15gQQ60G&format=png&color=228BE6"
                alt="handshake"
              />
              <p>Accelerated growth through a targeted network of businesses</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=53420&format=png&color=228BE6"
                alt="integration"
              />
              <p>
                Seamless integration across platforms that facilitates ease of
                doing business
              </p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=apQXuzIOhFBG&format=png&color=228BE6"
                alt="support"
              />
              <p>
                Complete support from a dedicated, flexible team of legal
                professionals
              </p>
            </div>
          </div>
          <h3>Come, Join Us</h3>
          <Button>Become a Partner</Button>
        </Experience>
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default PartnerWithUs;
