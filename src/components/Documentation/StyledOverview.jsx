/* eslint-disable react/prop-types */
import styled from "styled-components";

const OverView = styled.div`
  /* padding: 5px 10px; */
  border-radius: 5px;
  text-align: justify;
  & > p {
    line-height: 1.4;
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    & > p {
      font-size: 2vmax;
    }
  }
`;

function StyledOverview({ children }) {
  return <OverView>{children}</OverView>;
}

export default StyledOverview;
