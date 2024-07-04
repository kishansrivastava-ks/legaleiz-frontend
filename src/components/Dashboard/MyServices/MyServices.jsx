/* eslint-disable no-unused-vars */
import styled, { keyframes } from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Heading = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-left: 1rem;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #333; */
`;

const NavContainer = styled.div`
  display: flex;
  flex-basis: 60%;
`;
const NavItem = styled(NavLink).attrs({
  activeClassName: "active",
})`
  /* color: #fff; */
  background-color: lightgray;
  background-color: #fff;
  text-align: center;
  width: 100%;
  text-decoration: none;
  padding: 0.5rem 1rem;
  position: relative;
  transition: color 0.3s;
  margin: 1rem;
  border-radius: 3px;

  &:hover {
    color: #ff6347;
  }

  &.active {
    background-color: #ff6347;
    color: #fff;
  }
`;
const SearchContainer = styled.div`
  max-width: 700px;
  flex-basis: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  background: transparent;
  border-radius: 25px;
  transition: all 0.3s ease;

  &:hover {
    /* box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); */
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 25px;
  outline: none;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  transition: background-color 0.3s ease;

  &:focus {
    background-color: #fff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const SearchButton = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  background-color: #ff6347;
  color: #fff;
  border-radius: 28px;
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e55347;
  }
`;
const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  /* background-color: #ff6b6b; */
  background-color: #fff;
  margin-top: 1rem;
`;
function MyServices() {
  return (
    <Container>
      <Heading>My Services</Heading>
      <Header>
        <NavContainer>
          <NavItem to="/dashboard/my-services/ongoing">Ongoing</NavItem>
          <NavItem to="/dashboard/my-services/renewal">Renewal</NavItem>
          <NavItem to="/dashboard/my-services/completed">Completed</NavItem>
          <NavItem to="/dashboard/my-services/closed">Closed</NavItem>
        </NavContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search by ticket id or service name"
          />
          <SearchButton>
            {/* <FaSearch /> */}
            Search
          </SearchButton>
        </SearchContainer>
      </Header>
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
}

export default MyServices;
