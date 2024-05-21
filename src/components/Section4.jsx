import styled from "styled-components";

const Section = styled.section`
  background-color: ${(props) => props.bgColor};
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSection4 = styled(Section)`
  background-color: #00adb5;
  background-color: #f8f7f7;
  grid-row: 4;
`;
function Section4() {
  return <StyledSection4>this is section 4</StyledSection4>;
}

export default Section4;
