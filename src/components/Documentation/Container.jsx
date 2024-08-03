/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
