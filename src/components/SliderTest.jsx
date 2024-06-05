/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const TestimonialsWrapper = styled.div`
  width: 100%;
  padding: 15px 4rem;
  height: 35rem;
  /* background-color: yellow; */
  /* border: 1px solid gray; */
  text-align: center;
`;
const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;
const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  /* background: blue; */
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border: 1px solid lightgray;
  transition: all 0.5s;
  height: 20rem;
`;
const Review = styled.p`
  font-style: italic;
  margin-bottom: 20px;
  font-size: 18px;
  position: relative;
  &:before {
    content: open-quote;
    font-size: 3rem;
    position: absolute;
    left: -1rem;
    top: -1rem;
  }
  &:after {
    content: close-quote;
    font-size: 3rem;
    position: absolute;
    right: -1rem;
    bottom: -1rem;
  }
`;
const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;
const UserName = styled.span`
  font-size: 16px;
  color: #333;
`;
const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? "#333" : "#ccc")};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;
const ArrowButton = styled.button`
  background: transparent;
  /* background-color: red; */
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowButton
      className={className}
      style={{
        ...style,
        right: "-30px",
        backgroundColor: "black",
        borderRadius: "50%",
        paddingTop: "1.5px",
        paddingLeft: "0.4px",
      }}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowButton
      className={className}
      style={{
        ...style,
        left: "-30px",
        backgroundColor: "black",
        borderRadius: "50%",
        paddingTop: "1.5px",
        paddingLeft: "0.4px",
      }}
      onClick={onClick}
    />
  );
};
function SliderTest({ testimonials }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <DotsWrapper>
        <Dot active={i === currentSlide} />
      </DotsWrapper>
    ),
    appendDots: (dots) => <DotsWrapper>{dots}</DotsWrapper>,
  };

  return (
    <TestimonialsWrapper>
      <Heading>Here is what our users have to say</Heading>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <Review>{testimonial.review}</Review>
            <UserWrapper>
              <UserPhoto src={testimonial.photo} alt={testimonial.name} />
              <UserName>{testimonial.name}</UserName>
            </UserWrapper>
          </TestimonialCard>
        ))}
      </Slider>
    </TestimonialsWrapper>
  );
}

export default SliderTest;
