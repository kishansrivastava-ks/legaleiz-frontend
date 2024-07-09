/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaSignOutAlt,
  FaProjectDiagram,
  FaRupeeSign,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { doSignOut } from "../../../firebase/auth";
import SpinnerMini from "../../../ui/SpinnerMini";
import { FaChartColumn } from "react-icons/fa6";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  /* background-color: #2d2d2d; */
  color: white;
  width: 100%;
  padding: 2rem;
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;
  /* background-color: #333; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  & > img {
    width: 15rem;
    margin-bottom: 1rem;
  }
  & > p {
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

const Nav = styled.nav`
  flex-grow: 1;
  /* border: 2px solid red; */
  padding-left: 1rem;
`;

const NavItem = styled(NavLink).attrs({
  activeClassName: "active",
})`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  font-size: 1.7rem;
  letter-spacing: 2px;
  transition: background-color 0.3s;
  border-radius: 3px;
  text-decoration: none; /* Ensure the text is not underlined */
  margin-bottom: 0.7rem;

  &:hover {
    background-color: #1e1e5a;
  }

  &.active {
    background-color: #1e1e5a; /* Your desired active background color */
  }
`;

const NavIcon = styled.div`
  margin-right: 1.5rem;
  font-size: 2rem;
`;

const SignOutButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  cursor: pointer;
  background-color: #2e2e74;
  border-radius: 3px;
  width: 80%;
  align-self: center;
  transition: background-color 0.3s;
  letter-spacing: 2px;

  &:hover {
    background-color: #212153;
  }
`;

const Sidebar = () => {
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

  return (
    <SidebarContainer>
      <Logo to="/">
        <img src="/logo-clipped.png" alt="logo" />
        <p>Simplifying Law, Empowering You</p>
      </Logo>
      <Nav>
        <NavItem to="/dashboard/partner/my-projects">
          <NavIcon>
            <FaProjectDiagram />
          </NavIcon>
          My Projects
        </NavItem>

        <NavItem to="/dashboard/partner/update-status">
          <NavIcon>
            <FaChartColumn />
          </NavIcon>
          Update Status
        </NavItem>

        <NavItem to="/dashboard/partner/my-earnings">
          <NavIcon>
            <FaRupeeSign />
          </NavIcon>
          My Earning
        </NavItem>

        <NavItem to="/dashboard/partner/my-profile">
          <NavIcon>
            <FaUser />
          </NavIcon>
          My Profile
        </NavItem>
      </Nav>
      <SignOutButton onClick={handleSignOut}>
        {isSigningOut ? (
          <SpinnerMini />
        ) : (
          <>
            <NavIcon>
              <FaSignOutAlt />
            </NavIcon>
            Sign Out
          </>
        )}
      </SignOutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
