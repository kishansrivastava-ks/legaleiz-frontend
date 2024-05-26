/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import Button from "../ui/Button";

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
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 5rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #000;
  }
`;

const Login = styled.a`
  margin-right: 1em;
  color: #4c50e0;
  cursor: pointer;
  &:hover {
    font-size: bold;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo src="logo.png" alt="Logo" />
      <NavItems>
        <Button style={{ marginRight: "3rem" }}>Talk to a lawyer</Button>
        <StyledNavLink>Property</StyledNavLink>
        <StyledNavLink to="/startup">Startup</StyledNavLink>
        <StyledNavLink>Challan Blogs</StyledNavLink>
        <StyledNavLink>Ask Lawyer</StyledNavLink>
        <Login>Login</Login>
      </NavItems>
    </StyledNavbar>
  );
}

export default Navbar;
