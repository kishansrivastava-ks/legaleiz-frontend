import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useRef } from "react";

const RecProds = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  background-color: #fff;
  padding: 2vmax 5vmax;
  border: 2px solid red;
`;
const ProdContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 97%;
  margin: 2rem;
  gap: 1.5rem;
  border: 2px solid blue;
  overflow-x: scroll;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
  }
  @media (max-width: 768px) {
    margin: 1rem 0 0 0;
    width: 100%;
    gap: 0;
  }
`;
const Title = styled.h2`
  font-weight: 550;
  letter-spacing: 2px;
  font-size: 3.2vw;
`;

function RecommendedProds() {
  const containerRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    containerRef.current.startX = touch.clientX;
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const change = containerRef.current.startX - touch.clientX;
    containerRef.current.scrollLeft += change;
    containerRef.current.startX = touch.clientX;
  };
  return (
    <RecProds>
      <Title>Recommended Products...</Title>
      <ProdContainer
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <ProductCard
          borderColor="red"
          title="Limited Liability Partnership"
          price="12999"
        />
        <ProductCard
          borderColor="green"
          title="One Person Company"
          price="12999"
        />
        <ProductCard
          borderColor="blue"
          title="Private Limited Company"
          price="15999"
        />
        <ProductCard borderColor="violet" title="Trademark" price="10500" />
      </ProdContainer>
    </RecProds>
  );
}

export default RecommendedProds;
