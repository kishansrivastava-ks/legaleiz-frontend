/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import Form from "./Form";

// Global style to prevent body scroll when form is open
const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.isFormOpen ? "hidden" : "auto")};
  }
`;

// Vertical bar styled component
const VerticalBar = styled.div`
  @media (max-width: 768px) {
    right: ${(props) => (props.isOpen ? "300px" : "0")};
    padding: 1.5rem 7px;
    font-size: 2vmax;
    width: 3rem;
  }
  position: fixed;
  top: 50%;
  right: ${(props) => (props.isOpen ? "350px" : "0")};
  transform: translateY(-50%);
  background: #007bff;
  color: #fff;
  padding: 3rem 10px;
  cursor: pointer;
  z-index: 10;
  transition: right 0.3s ease;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-align: center;
  max-width: 5rem;
  height: max-content;
  transform: translateY(-50%) rotate(180deg);
  border-radius: 3px;
`;

// Button styled component
const TriggerButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SideForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <GlobalStyle isFormOpen={isFormOpen} />
      <VerticalBar isOpen={isFormOpen} onClick={toggleForm}>
        <AiOutlineLeft />
        &nbsp;&nbsp;&nbsp; Become a partner
      </VerticalBar>
      <Form isOpen={isFormOpen} />
      {/* <TriggerButton onClick={toggleForm}>Toggle Partner Form</TriggerButton> */}
    </>
  );
};

export default SideForm;
