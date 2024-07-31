/* eslint-disable react/prop-types */
import styled from "styled-components";

const Card = styled.div`
  padding: 1.5vmax 3vmax;
  border-right-color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2vmax;
  border-radius: 8px;
  & > h2 {
    font-weight: 500;
    letter-spacing: 1.5px;
    font-size: 1.5vmax;
    color: ${(props) => props.borderColor || "black"};
  }
  border-top: 0.5rem solid ${(props) => props.borderColor || "black"};
  flex-basis: 23%;
  text-align: center;
  @media (max-width: 768px) {
    min-width: 100%;
    flex-basis: 100%;
  }
`;

const Button = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5vmax 1.2vmax;
  border: 1px solid #000;
  border-radius: 10px;
  &:hover {
    background-color: #242424;
    cursor: pointer;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
  font-size: 0.8vmax;
`;

function ProductCard({ borderColor, title, price }) {
  return (
    <Card borderColor={borderColor}>
      <h2>{title}</h2>
      <h3>{`₹ ${price}`}</h3>
      <Button href="#">Know More</Button>
    </Card>
  );
}

export default ProductCard;
