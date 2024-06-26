/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";

// FOR THE SLIDER COMPONENT
const StyledSlider = styled.div`
  /* background-color: blueviolet; */
  /* border: 0.5rem solid yellow; */

  height: max-content;
  width: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr 50px 50px;
  grid-template-areas:
    "heading previous next"
    "cards cards cards";
  grid-gap: 1.5vmax;
  padding: 2vmax 10vmax;
  box-sizing: border-box;
  position: relative;
  transition: transform 1s;
  margin-top: 5rem;
  @media (width <= 600px) {
    padding: 2vmax 5vmax;
  }
`;

const Heading = styled.h2`
  grid-area: heading;
  justify-self: center;
  align-self: center;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 4rem;
  letter-spacing: 4px;
  @media (width <= 600px) {
    font-size: 2.5rem;
  }
  @media (width <= 350px) {
    font-size: 2rem;
  }
`;

const PreviousButton = styled.button`
  grid-area: previous;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  border: 1px solid blue;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50px;
  padding: 0.8rem 1.3rem;
  font-weight: bold;
  &:hover {
    transform: scale(1.02);
    background-color: blue;
    color: #fff;
  }
  @media (width <= 600px) {
    padding: 0.4rem 0.8rem;
  }
`;

const NextButton = styled.button`
  grid-area: next;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  border: 1px solid blue;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50px;
  padding: 0.8rem 1.3rem;
  font-weight: bold;
  &:active {
    border: none;
  }
  &:hover {
    transform: scale(1.02);
    background-color: blue;
    color: #fff;
  }
  @media (width <= 600px) {
    padding: 0.4rem 0.8rem;
  }
`;

const Cards = styled.div`
  /* background-color: yellow; */
  grid-area: cards;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 1em;
  scroll-behavior: smooth;
  width: 400%;
  margin-left: -2rem;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: transform 1s;
  /* border: 2px solid red; */
  min-height: max-content;
`;

const Card = styled.div`
  width: 30rem;
  min-width: 20rem;

  display: grid;
  grid-template-rows: 70% 1fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "image"
    "content";
  grid-gap: 1em;
  padding: 1em;
  scroll-snap-align: start;
  margin: 0 1rem;
  border-radius: 3px;
  &:hover {
    transform: scale(0.98) translateY(-1rem);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 25px 40px rgba(0, 0, 0, 0.1);
    /* background-color: #fff; */
    cursor: pointer;
  }
  &:hover > img {
    transform: scale(0.9);
    transition: all 0.4s ease-in-out;
  }
  transition: all 0.4s ease-in-out;
  /* border: 2px solid blue; */
`;

const Image = styled.img`
  border-radius: 2px;
  grid-area: image;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  aspect-ratio: 1/1;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  height: max-content;
  /* border: 2px solid red; */
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

const CardsContainer = styled.div`
  /* width: 100%; */
  background-color: blue;
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
      <Heading>Quick Buy</Heading>
      <PreviousButton onClick={handlePrevious}>&larr;</PreviousButton>
      <NextButton onClick={handleNext}>&rarr;</NextButton>
      {/* <CardsContainer> */}
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
      {/* </CardsContainer> */}
    </StyledSlider>
  );
}

export default Slider;
