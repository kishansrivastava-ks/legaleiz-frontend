/* eslint-disable react/prop-types */
import styled from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: -9.5rem;
  width: 101vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContainer = styled.div`
  margin-top: 50%;
  background-color: white;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f5f5f5;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

const ModalContent = styled.div`
  padding: 1rem 1.5rem;
`;

const ModalLink = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Modal = ({ isOpen, onClose, title, links }) => {
  return (
    <ModalBackground isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>
          {links.map((link, index) => (
            <ModalLink key={index} href={link.href}>
              {link.name}
            </ModalLink>
          ))}
        </ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
