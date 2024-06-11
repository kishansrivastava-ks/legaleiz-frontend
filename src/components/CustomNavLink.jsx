/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  &:hover {
    color: blue;
    transition: all 0.1s;
  }
  transition: all 0.1s;
`;

const CustomNavLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({ concernedArea: children });
    navigate(`${to}?${query.toString()}`);
  };

  return (
    <Link to={to} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default CustomNavLink;
