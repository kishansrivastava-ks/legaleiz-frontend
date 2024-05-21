import { useState } from "react";
import styled from "styled-components";

// FOR THE SLIDER COMPONENT
const StyledSlider = styled.div`
  background-color: #fff;
  min-height: 50rem;
  width: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr 50px;
  grid-template-areas:
    "heading previous next"
    "cards cards cards";
  grid-gap: 2rem;
  padding: 1rem 20rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  transition: transform 1s;
`;

const Heading = styled.h2`
  grid-area: heading;
  justify-self: center;
  align-self: center;
`;

const PreviousButton = styled.button`
  grid-area: previous;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NextButton = styled.button`
  grid-area: next;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Cards = styled.div`
  grid-area: cards;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 1em;
  scroll-behavior: smooth;
  width: 400%;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: transform 1s;

  /* set fixed width to display only 4 cards initially */
`;

const Card = styled.div`
  width: 30rem;
  /* min-height: 400px; */
  height: 100%;
  background-color: f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-rows: 70% 1fr;
  grid-template-areas:
    "image"
    "content";
  grid-gap: 1em;
  padding: 1em;
  scroll-snap-align: start;
  margin: 0 1rem;
`;

const Image = styled.img`
  grid-area: image;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
`;

const HeadingCard = styled.h3`
  grid-area: heading;
  justify-self: start;
  align-self: start;
`;

const Rating = styled.div`
  grid-area: rating;
  justify-self: end;
  align-self: start;
`;

const Text = styled.p`
  grid-area: text;
  justify-self: start;
  align-self: start;
  font-size: 1.3rem;
`;

// FOR THE SLIDER COMPONENT

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % 4);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + 4) % 4);
  };
  return (
    <StyledSlider>
      <Heading>Slider Heading</Heading>
      <PreviousButton onClick={handlePrevious}>&larr;</PreviousButton>
      <NextButton onClick={handleNext}>&rarr;</NextButton>
      <Cards style={{ transform: `translateX(-${currentIndex * 300}px)` }}>
        <Card>
          <Image src="https://picsum.photos/id/1015/300/400" alt="Card 1" />
          <Content>
            <HeadingCard>Card 1 Heading</HeadingCard>
            <Rating>⭐⭐⭐⭐⭐</Rating>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, ut!
            </Text>
          </Content>
        </Card>
        <Card>
          <Image src="https://picsum.photos/id/1016/300/400" alt="Card 2" />
          <Content>
            <HeadingCard>Card 2 Heading</HeadingCard>
            <Rating>⭐⭐⭐⭐</Rating>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, ut!
            </Text>
          </Content>
        </Card>
        <Card>
          <Image src="https://picsum.photos/id/1015/300/400" alt="Card 3" />
          <Content>
            <HeadingCard>Card 3 Heading</HeadingCard>
            <Rating>⭐⭐⭐</Rating>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, ut!
            </Text>
          </Content>
        </Card>
        <Card>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Card 4" />
          <Content>
            <HeadingCard>Card 4 Heading</HeadingCard>
            <Rating>⭐⭐</Rating>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, ut!
            </Text>
          </Content>
        </Card>
        <Card>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Card 5" />
          <Content>
            <HeadingCard>Card 4 Heading</HeadingCard>
            <Rating>⭐⭐</Rating>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, ut!
            </Text>
          </Content>
        </Card>
        <Card>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Card 6" />
          <Content>
            <HeadingCard>Card 4 Heading</HeadingCard>
            <Rating>⭐⭐</Rating>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, ut!
            </Text>
          </Content>
        </Card>
      </Cards>
    </StyledSlider>
  );
}

export default Slider;
