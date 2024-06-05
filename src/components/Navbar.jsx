/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import Button from "../ui/Button";

// import "./Navbar.css";

const StyledNavbar = styled.nav`
  grid-row: 1;
  z-index: 5;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #fff;
  color: #5e5c5c;
  padding: 0 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.6rem;

  height: 4.3vmax;
`;

const Logo = styled.img`
  width: 10%;
  height: auto;
  margin-right: auto;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  /* &:first-child {
    margin-right: "3rem";
    font-size: 5rem;
  } */
`;

// Drop Down Menu on Startup lin;
const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  flex-direction: column;
`;

const NestedDropDown = styled.div`
  display: none;
  position: absolute;
  top: 10%;
  left: 100%;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  flex-direction: column;
  padding: 1rem 2rem;
  width: max-content;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 5rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #000;
    & ${DropdownMenu} {
      display: flex;
    }
  }
  padding: 1rem 0;
  position: relative;
`;

const NestedNavLink = styled(NavLink)`
  cursor: pointer;
  width: 15vmax;
  font-size: 1vmax;
  &:hover {
    color: #000;
    & ${NestedDropDown} {
      display: flex;
    }
  }
  padding: 1rem 1rem;
  font-weight: 550;
`;

const Login = styled.a`
  margin-right: 1em;
  color: #4c50e0;
  cursor: pointer;
  &:hover {
    font-size: bold;
  }
`;

const TTLDropDown = styled.div`
  position: absolute;
  top: 100%; /* Position it below the nav link */
  left: -300%;
  width: 80vw; /* Full width of the screen */
  height: max-content;
  background-color: white;
  color: black;
  display: none; /* Initially hidden */
  z-index: 1000; /* Ensure it appears above other elements */
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const TalkToLawyer = styled.div`
  background-color: blue;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 25px;
  margin-right: 3rem;
  position: relative;
  &:hover ${TTLDropDown} {
    display: flex; /* Show on hover */
  }
`;
const DropdownRow = styled.div`
  font-weight: 500;
  & > h3 {
    margin-bottom: 1rem;
  }
  margin-bottom: 10px;
  & > div {
    width: 30rem;
    margin-right: auto;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      color: blue;
      transition: all 0.1s;
    }
    transition: all 0.1s;
  }
`;

const ShowMoreButton = styled.div`
  margin-top: 10px;
  cursor: pointer;
  color: blue;
  text-decoration: none;
`;

function Navbar() {
  const [showMoreL, setShowMoreL] = useState(false);
  const [showMoreR, setShowMoreR] = useState(false);
  const handleShowMoreL = () => {
    setShowMoreL(!showMoreL);
  };
  const handleShowMoreR = () => {
    setShowMoreR(!showMoreR);
  };

  return (
    <StyledNavbar>
      <Logo src="/logo.png" alt="Logo" />
      <NavItems>
        <TalkToLawyer>
          Talk to a lawyer
          <TTLDropDown>
            <DropdownRow>
              <h3>Personal</h3>
              <div>Family and Matrimony</div>
              <div>Divorce</div>
              <div>Property</div>
              <div>Will</div>
              {showMoreL && (
                <>
                  <div>Labour and Employment</div>
                  <div>Consumer Protection</div>
                  <div>Cyber Crime</div>
                  <div>Cheque Bounce</div>
                </>
              )}
              <ShowMoreButton onClick={handleShowMoreL}>
                {showMoreL ? "Show Less" : "Show More"}
              </ShowMoreButton>
            </DropdownRow>

            <DropdownRow>
              <h3>Business</h3>
              <div>Company Matters</div>
              <div>HR & Labour Compliance</div>
              <div>Trademark & Copyrights</div>
              <div>Investment & Fundraise</div>

              {showMoreR && (
                <>
                  <div>Direct Tax</div>
                  <div>GST</div>
                  <div>Company (ROC) Compliance</div>
                  <div>Debt Recovery</div>
                  <div>NCLT matter</div>
                  <div>Any other business legal matter</div>
                </>
              )}
              <ShowMoreButton onClick={handleShowMoreR}>
                {showMoreR ? "Show Less" : "Show More"}
              </ShowMoreButton>
            </DropdownRow>
          </TTLDropDown>
        </TalkToLawyer>
        <StyledNavLink>Property</StyledNavLink>
        <StyledNavLink to="/startup">
          Startup
          <DropdownMenu>
            <NestedNavLink>
              Company Formation
              <NestedDropDown>
                <StyledNavLink to="/startup/company-formation/partnership-firm">
                  Partnership Firm
                </StyledNavLink>
                <StyledNavLink to="/startup/company-formation/private-limited-company">
                  Privated Limited Company
                </StyledNavLink>
                <StyledNavLink to="/startup/company-formation/one-person-company">
                  One Person Company
                </StyledNavLink>
                <StyledNavLink to="/startup/company-formation/limited-liability-partnership">
                  Limited Liability Partnership
                </StyledNavLink>
              </NestedDropDown>
            </NestedNavLink>
            <NestedNavLink>
              Intellectual Property
              <NestedDropDown>
                <StyledNavLink to="/startup/intellectual-property/copyright">
                  Copyright
                </StyledNavLink>
                <StyledNavLink to="/startup/intellectual-property/respond-to-tm-objections">
                  Respond to TM Objections
                </StyledNavLink>
                <StyledNavLink to="/startup/intellectual-property/patent">
                  Patent
                </StyledNavLink>
                <StyledNavLink to="/startup/intellectual-property/trademark">
                  Trademark
                </StyledNavLink>
              </NestedDropDown>
            </NestedNavLink>
            <NestedNavLink>
              Registrations & Licenses
              <NestedDropDown>
                <StyledNavLink to="/startup/registrations-and-licenses/gst-registration">
                  GST Registration
                </StyledNavLink>
                <StyledNavLink to="/startup/registrations-and-licenses/export-import-code">
                  Export Import Code
                </StyledNavLink>
                <StyledNavLink to="/startup/registrations-and-licenses/annual-gst-return-filing">
                  Annual GST Return Filing
                </StyledNavLink>
              </NestedDropDown>
            </NestedNavLink>
          </DropdownMenu>
        </StyledNavLink>
        <StyledNavLink>Challan Blogs</StyledNavLink>
        <StyledNavLink>Ask Lawyer</StyledNavLink>
        <Login>Login</Login>
      </NavItems>
    </StyledNavbar>
  );
}

export default Navbar;
