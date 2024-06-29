/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  position: relative;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  text-align: left;
`;

const ModalBody = styled.div`
  /* background-color: blue; */
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: ${(props) => (props.isActive ? "black" : "#ccc")};
  border-bottom: ${(props) => (props.isActive ? "2px solid black" : "none")};

  &:hover {
    color: black;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const PayNowButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: black;
  &:focus {
    outline: none;
  }
`;

const Modal = ({ isOpen, onClose, title, services }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!isOpen) return null;

  const service = services.find((service) => service.text === title);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>
          <div>
            <h2>{title}</h2>
            <p>Price: ₹ {service?.price}</p>
          </div>
        </ModalHeader>
        <ModalBody>
          <TabContainer>
            <Tab
              isActive={activeTab === "overview"}
              onClick={() => handleTabClick("overview")}
            >
              Overview
            </Tab>
            <Tab
              isActive={activeTab === "process"}
              onClick={() => handleTabClick("process")}
            >
              Process and Documents
            </Tab>
          </TabContainer>
          {/* Render content based on active tab */}
          {activeTab === "overview" && (
            <div>
              <p>Overview content for {title}</p>
            </div>
          )}
          {activeTab === "process" && (
            <div>
              <p>Process and Documents content for {title}</p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <PayNowButton>Pay Now</PayNowButton>
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
