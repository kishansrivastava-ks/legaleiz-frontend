import styled from "styled-components";

const Button = styled.button`
  background-color: #4c50e0; /* blue background */
  color: #fff; /* white text */
  border: none;
  padding: 1rem 2rem;
  font-size: 16px;
  /* font-weight: bold; */
  font-weight: 500;
  border-radius: 30px; /* capsule shape */
  cursor: pointer;
  transition: background-color 0.3s ease-out;
  box-shadow: 0 2px 4px rgba(8, 93, 250, 0.1);

  &:hover {
    background-color: #2a2fc3; /* darker blue on hover */
  }

  &:active {
    background-color: #4c50e0; /* original blue on active */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
  }
`;

export default Button;
