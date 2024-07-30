/* eslint-disable react/prop-types */
// import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
`;

const ModalHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
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

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, title, links }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>{title}</ModalHeader>
        {links.map((link, index) => (
          <ModalLink key={index} href={link.href}>
            {link.name}
          </ModalLink>
        ))}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
