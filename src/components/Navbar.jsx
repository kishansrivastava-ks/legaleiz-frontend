/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import CustomNavLink from "./CustomNavLink";
import DocumentationDropdown from "./Dropdowns/DocumentationDropdown.jsx";
import { FaChevronDown } from "react-icons/fa";

import { useNavigate } from "react-router-dom"; // Import for routing

import { useAuth } from "../contexts/authContext/authContext.jsx";
import { doSignOut } from "../firebase/auth.js";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import SpinnerMini from "../ui/SpinnerMini.jsx";

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

// Drop Down Menu on Startup link;
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
  height: 100%;
  /* background-color: pink; */
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
  left: 0;
  /* width: 40vw; */
  width: max-content;
  height: max-content;
  background-color: white;
  color: black;
  display: none; /* Initially hidden */
  z-index: 1000; /* Ensure it appears above other elements */
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const TalkToLawyer = styled.div`
  /* background-color: blue; */
  padding: 1rem 2rem;
  /* color: #fff; */
  border-radius: 25px;
  margin-right: 3rem;
  position: relative;
  cursor: pointer;
  &:hover ${TTLDropDown} {
    display: flex; /* Show on hover */
  }
`;
const DropdownRow = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > div {
    width: 30rem;
    margin-right: auto;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
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

const Link = styled(NavLink)`
  &:hover {
    color: blue;
    transition: all 0.1s;
  }
  transition: all 0.1s;
`;

const SignOutButton = styled.button`
  background: none;
  border: none;
  background-color: #fff;
  font-size: 3rem;
  padding: 5px;
  border-radius: 50%;
  &:hover {
    background-color: lightgray;
    color: #000;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
  cursor: pointer;
`;
const ProfileDropDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80%;
  /* right: 0; */
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${ProfileContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
  transition: all 0.3s ease;
`;
const ProfileDropdownItem = styled(NavLink)`
  /* width: 100%; */
  padding: 0.5rem 1rem;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const SignOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Tooltip = styled.span`
  visibility: hidden;
  width: max-content;
  background-color: gray;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 10;
  top: 100%;
  margin-left: -30px;
  opacity: 0;
  transition: opacity 0.3s;
  font-weight: 500;

  ${SignOutContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

function Navbar() {
  const { userLoggedIn, currentUser } = useAuth();

  // handling the signout
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await doSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
      setIsSigningOut(false);
    }
  };

  const [showMoreL, setShowMoreL] = useState(false);
  const [showMoreR, setShowMoreR] = useState(false);
  const handleShowMoreL = () => {
    setShowMoreL(!showMoreL);
  };
  const handleShowMoreR = () => {
    setShowMoreR(!showMoreR);
  };

  const navigate = useNavigate();
  /*
  Check for user authentication on component mount
  const auth = initializeFirebase();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser); // User is signed in
      } else {
        setUser(null); // User is signed out
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/"); // Redirect to home page
        alert("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        alert("Error signing out");
      });
  };*/

  // for the hover effect on profile
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyledNavbar>
      <Logo src="/logo.png" alt="Logo" />
      <NavItems>
        <TalkToLawyer>
          <div style={{ display: "flex", alignItems: "center" }}>
            Talk to a lawyer&nbsp;&nbsp;
            <FaChevronDown />
          </div>
          <TTLDropDown>
            <DropdownRow>
              <Link
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  padding: "2rem 0",
                }}
                to="/legal-consultation"
              >
                Personal
              </Link>
              <CustomNavLink to="/legal-consultation/consult">
                Family & Matrimonial
              </CustomNavLink>
              <Link to="/divorce-consultation">Divorce</Link>
              <Link to="/property-consultation">Property</Link>
              <CustomNavLink to="/legal-consultation/consult">
                Will
              </CustomNavLink>
              {showMoreL && (
                <>
                  <CustomNavLink to="/legal-consultation/consult">
                    Labour & Employment
                  </CustomNavLink>
                  <CustomNavLink to="/legal-consultation/consult">
                    Consumer Protection
                  </CustomNavLink>
                  <CustomNavLink to="/legal-consultation/consult">
                    Cyber Crime
                  </CustomNavLink>
                  <CustomNavLink to="/legal-consultation/consult">
                    Cheque Bounce
                  </CustomNavLink>
                </>
              )}
              <ShowMoreButton onClick={handleShowMoreL}>
                {showMoreL ? "Show Less" : "Show More"}
              </ShowMoreButton>
            </DropdownRow>

            <DropdownRow>
              <Link
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  padding: "2rem 0",
                }}
                to="/business-consultation"
              >
                Business
              </Link>
              {/* <Link to="/business-consultation/consult">Company Matters</Link> */}
              <CustomNavLink to="/business-consultation/consult">
                Company Matters
              </CustomNavLink>
              <CustomNavLink to="/business-consultation/consult">
                HR & Labour Compliance
              </CustomNavLink>
              <CustomNavLink to="/business-consultation/consult">
                Trademark & Copyrights
              </CustomNavLink>
              <CustomNavLink to="/business-consultation/consult">
                Investment & Fundraise
              </CustomNavLink>

              {showMoreR && (
                <>
                  <CustomNavLink to="/business-consultation/consult">
                    Direct Tax
                  </CustomNavLink>
                  <CustomNavLink to="/business-consultation/consult">
                    GST
                  </CustomNavLink>
                  <CustomNavLink to="/business-consultation/consult">
                    Company (ROC) Compliance
                  </CustomNavLink>
                  <CustomNavLink to="/business-consultation/consult">
                    Debt Recovery
                  </CustomNavLink>
                  <CustomNavLink to="/business-consultation/consult">
                    NCLT Matter
                  </CustomNavLink>
                  <CustomNavLink to="/business-consultation/consult">
                    Another Business Legal Matter
                  </CustomNavLink>
                </>
              )}
              <ShowMoreButton onClick={handleShowMoreR}>
                {showMoreR ? "Show Less" : "Show More"}
              </ShowMoreButton>
            </DropdownRow>
          </TTLDropDown>
        </TalkToLawyer>

        <StyledNavLink to="/startup">
          <div style={{ display: "flex", alignItems: "center" }}>
            Startup&nbsp;&nbsp;
            <FaChevronDown />
          </div>
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
        <StyledNavLink>
          <DocumentationDropdown />
        </StyledNavLink>

        <StyledNavLink to="/partner-with-us">Partner With Us</StyledNavLink>
        {userLoggedIn && currentUser ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <ProfileContainer
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <img
                src={currentUser.photoURL}
                alt="User"
                style={{
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              {isDropdownOpen && (
                <ProfileDropDown>
                  <ProfileDropdownItem to="/dashboard">
                    My Account
                  </ProfileDropdownItem>
                </ProfileDropDown>
              )}
              <p>{currentUser.displayName.split(" ")[0]}</p>
            </ProfileContainer>

            {isSigningOut ? (
              <SpinnerMini />
            ) : (
              <SignOutContainer>
                <SignOutButton
                  onClick={handleSignOut}
                  style={{ marginLeft: "10px" }}
                >
                  <HiArrowRightOnRectangle />
                </SignOutButton>
                <Tooltip>Sign out</Tooltip>
              </SignOutContainer>
            )}
            {/* You can add more user info or navigation links here */}
          </div>
        ) : (
          <StyledNavLink
            style={{
              color: "#fff",
              backgroundColor: "blue",
              padding: "1rem 2rem",
              borderRadius: "25px",
            }}
            to="/signin"
          >
            Sign in
          </StyledNavLink>
        )}
        {/* <StyledNavLink>
          {user ? (
            <>
              <span>Welcome, {user.displayName}!</span>
              <button onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <a href="/signin">Sign In</a>
          )}
        </StyledNavLink> */}
      </NavItems>
    </StyledNavbar>
  );
}

export default Navbar;
