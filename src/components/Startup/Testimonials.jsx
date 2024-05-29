import styled from "styled-components";
import CarouselComponent from "./Carousel";

const StyledSection = styled.div`
  background-color: #fff;
  padding: 3rem 10vw;
`;

const Container = styled.div`
  width: 100%;
  height: 20vmax;
  /* background-color: #101484; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  font-size: 2vmax;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: min-content;
  background-color: #000;
`;

function Testimonials() {
  return (
    <StyledSection>
      <Container>
        <Title>Here is what our users have to say</Title>
        <CarouselContainer>
          <CarouselComponent />
        </CarouselContainer>
      </Container>
    </StyledSection>
  );
}

export default Testimonials;
