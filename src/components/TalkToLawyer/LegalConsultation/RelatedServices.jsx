/* eslint-disable no-unused-vars */
import styled from "styled-components";

const Container = styled.div`
  /* background-color: blue; */
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  /* border: 5px solid red; */
  width: 100%;
  padding: 2vmax 8vmax;
  /* border: 1px solid black; */
  & > h2 {
    margin-bottom: 3rem;
    letter-spacing: 2px;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 4rem;
  & > div {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 1vmax 2vmax;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      transform: scale(1.01);
      transition: all 0.2s ease-in-out;
    }
    transition: all 0.2s ease-in-out;
  }
`;
const Title = styled.h3`
  color: blue;
  margin-bottom: 2rem;
`;
const Text = styled.p`
  font-size: 1.2vmax;
  margin-bottom: 2rem;
`;
const Price = styled.h4``;

function RelatedServices() {
  return (
    <Container>
      <h2>Related Services</h2>
      <Box>
        <div>
          <Title>One Person Company</Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            eum earum consequatur iusto eveniet harum repudiandae reiciendis,
            asperiores dolore excepturi doloribus quo minima qui modi?
          </Text>
          <Price>₹ 8999</Price>
        </div>
        <div>
          <Title>GST Registration</Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            eum earum consequatur iusto eveniet harum repudiandae reiciendis,
            asperiores dolore excepturi doloribus quo minima qui modi?
          </Text>
          <Price>₹ 2999</Price>
        </div>
        <div>
          <Title>Non-Disclosure Agreement</Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            eum earum consequatur iusto eveniet harum repudiandae reiciendis,
            asperiores dolore excepturi doloribus quo minima qui modi?
          </Text>
          <Price>₹ 499</Price>
        </div>
      </Box>
    </Container>
  );
}

export default RelatedServices;
