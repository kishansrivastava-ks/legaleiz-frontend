/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import "../styles/testimonials.css";
import SliderTest from "./SliderTest";

const testimonials = [
  {
    review: "This product is amazing! It has changed my life.",
    photo: "https://via.placeholder.com/50",
    name: "John Doe",
  },
  {
    review: "I can't believe how much easier my work has become.",
    photo: "https://via.placeholder.com/50",
    name: "Jane Smith",
  },
  {
    review: "Fantastic! Highly recommend to everyone.",
    photo: "https://via.placeholder.com/50",
    name: "Bob Johnson",
  },
];

function Testimonials() {
  return <SliderTest testimonials={testimonials} />;
}

export default Testimonials;
