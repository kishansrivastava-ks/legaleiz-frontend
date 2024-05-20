/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const StyledNavbar = styled.nav`
  z-index: 5;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 1em;
`;

const LoginButton = styled(Button)`
  margin-right: 1em;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo src="logo.png" alt="Logo" />
      <Button>Button Text</Button>
      <NavItems>
        <NavItem>Nav Item 1</NavItem>
        <NavItem>Nav Item 2</NavItem>
        <NavItem>Nav Item 2</NavItem>
        <NavItem>Nav Item 2</NavItem>
      </NavItems>
      <LoginButton>Login</LoginButton>
    </StyledNavbar>
  );
}

export default Navbar;
