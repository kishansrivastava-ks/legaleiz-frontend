import styled from "styled-components";

const Heading = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-left: 1rem;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 95%;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;
const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  padding: 1rem;

  &:nth-child(1) {
    background-color: #ff6b6b;
    grid-row: span 2; /* Spans both rows */
  }

  &:nth-child(2) {
    background-color: #4ecdc4;
  }

  &:nth-child(3) {
    background-color: #1a535c;
  }
`;

function Home() {
  return (
    <>
      <Heading>Home</Heading>
      <Container>
        <GridItem>Column 1, Row 1-2</GridItem>
        <GridItem>Column 2, Row 1</GridItem>
        <GridItem>Column 2, Row 2</GridItem>
      </Container>
    </>
  );
}

export default Home;
