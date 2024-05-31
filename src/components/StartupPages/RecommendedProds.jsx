import styled from "styled-components";
import ProductCard from "./ProductCard";

const RecProds = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  background-color: #fff;
  padding: 2vmax 5vmax;
`;
const ProdContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 97%;
  margin: 2rem;
  /* background-color: lightblue; */
  gap: 1.5rem;
`;
const Title = styled.h2`
  font-weight: 550;
  letter-spacing: 2px;
`;

function RecommendedProds() {
  return (
    <RecProds>
      <Title>Recommended Products...</Title>
      <ProdContainer>
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
