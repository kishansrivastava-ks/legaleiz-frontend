import styled from "styled-components";

const Button = styled.button`
  background-color: #3498db; /* blue background */
  color: #fff; /* white text */
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px; /* capsule shape */
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #2980b9; /* darker blue on hover */
  }

  &:active {
    background-color: #3498db; /* original blue on active */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
