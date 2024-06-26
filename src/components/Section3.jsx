import styled from "styled-components";
import Stats from "../ui/Stats";
import Slider from "./Slider";
import News from "./News";
import Testimonials from "./Testimonials";

const Section = styled.section`
  background-color: ${(props) => props.bgColor};
  /* padding: 2em; */
  width: 100vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSection3 = styled(Section)`
  /* background-color: #f2f2f2; */
  background-color: #fff;
  /* background-color: blue; */
  /* border: 0.5rem solid red; */
  grid-row: 4;
`;

function Section3() {
  return (
    <StyledSection3 id="section3">
      <Stats />
      <Slider />
      <News />
      <Testimonials />
    </StyledSection3>
  );
}

export default Section3;
