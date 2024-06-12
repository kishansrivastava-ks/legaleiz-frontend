/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledInfo = styled.div`
  width: 100vw;
  background-color: blue;
  color: #fff;
  padding: 3vmax 10vmax;
  font-size: 3vmax;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  border: 1rem solid #fff;
`;

function Info({ info }) {
  return <StyledInfo>{info}</StyledInfo>;
}

export default Info;
