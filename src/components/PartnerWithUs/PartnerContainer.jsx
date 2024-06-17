import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.isPopupOpen ? "hidden" : "auto")};
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  padding: 20px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
const CardImage = styled.img`
  /* width: 100%; */
  height: auto;
  border-radius: 8px 8px 0 0;
`;

const CardText = styled.p`
  letter-spacing: 1px;
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;
const fadeInScale = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PopupContainer = styled.div`
  z-index: 2;
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  /* max-width: 90%;
  max-height: 90%; */
  height: 60vh;
  width: 60vw;
  overflow-y: auto;
  transition: transform 0.3s ease-out;
  transform: scale(${(props) => (props.isOpen ? 1 : 0)});
  animation: ${fadeInScale} 0.4s ease-out;
`;
const CloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
`;

const cardsData = [
  {
    image: "https://img.icons8.com/?size=100&id=112274&format=png&color=228BE6",
    text: "Startup Enablers",
  },
  {
    image: "https://img.icons8.com/?size=100&id=19996&format=png&color=228BE6",
    text: "Property",
  },
  {
    image: "https://img.icons8.com/?size=100&id=45642&format=png&color=228BE6",
    text: "Banking & Fintech",
  },
  {
    image: "https://img.icons8.com/?size=100&id=42597&format=png&color=228BE6",
    text: "e-Commerce",
  },
  {
    image:
      "https://img.icons8.com/?size=100&id=1BDYXxljmOLM&format=png&color=228BE6",
    text: "Media",
  },
  {
    image:
      "https://img.icons8.com/?size=100&id=xGUZ15gQQ60G&format=png&color=228BE6",
    text: "Others",
  },
];

const StyledComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleCardClick = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupContent("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClosePopup();
    }
  };

  React.useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPopupOpen]);

  return (
    <>
      <GlobalStyle isPopupOpen={isPopupOpen} />
      <Container>
        {cardsData.map((card, index) => (
          <Card key={index} onClick={() => handleCardClick(card.text)}>
            <CardImage src={card.image} alt={`Card ${index + 1}`} />
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </Container>
      {isPopupOpen && (
        <Overlay onClick={handleClosePopup}>
          <PopupContainer
            isOpen={isPopupOpen}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleClosePopup} />
            <h2>Popup Content</h2>
            <p>{popupContent}</p>
          </PopupContainer>
        </Overlay>
      )}
    </>
  );
};

export default StyledComponent;
