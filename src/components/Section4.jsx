import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 75vh;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
`;

const StyledSection4 = styled(Section)`
  background-color: #17172c;
  grid-row: 5;
`;

function Section4() {
  return (
    <StyledSection4>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
      atque pariatur reprehenderit libero ea dolore, officiis mollitia nemo modi
      assumenda, tempora tenetur sint asperiores quidem!
    </StyledSection4>
  );
}

export default Section4;
