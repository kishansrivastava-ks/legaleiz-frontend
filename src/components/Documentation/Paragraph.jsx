/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledPara = styled.p`
  text-align: justify;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2vmax;
  }
`;
function Paragraph({ children }) {
  return <StyledPara>{children}</StyledPara>;
}

export default Paragraph;
