import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AddressForm, KYCForm, PersonalDetailsForm } from "./ProfileForms";
import { FaUser, FaHome, FaCreditCard } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  /* height: 100vh; */
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  border-radius: 25px;
  background: none;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  cursor: pointer;
  min-width: 15rem;
  background-color: ${(props) => (props.active ? "#ff6347" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  outline: none;
  &:focus,
  &:active {
    outline: none;
  }
  & > span {
    margin-left: 1rem;
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Profile() {
  const [activeTab, setActiveTab] = useState("personalDetails");

  const renderForm = () => {
    switch (activeTab) {
      case "personalDetails":
        return <PersonalDetailsForm />;
      case "address":
        return <AddressForm />;
      case "kyc":
        return <KYCForm />;
      default:
        return <PersonalDetailsForm />;
    }
  };
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Tab
          active={activeTab === "personalDetails"}
          onClick={() => setActiveTab("personalDetails")}
        >
          <FaUser />
          <span>Personal Details</span>
        </Tab>
        <Tab
          active={activeTab === "address"}
          onClick={() => setActiveTab("address")}
        >
          <FaHome />
          <span>Address</span>
        </Tab>
        <Tab active={activeTab === "kyc"} onClick={() => setActiveTab("kyc")}>
          <FaCreditCard />
          <span>KYC</span>
        </Tab>
      </Header>
      <Body>{renderForm()}</Body>
    </Container>
  );
}

export default Profile;
