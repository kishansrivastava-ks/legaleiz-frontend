/* eslint-disable no-undef */
import styled from "styled-components";

const Container = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 3vmax 10vmax;
  /* padding-bottom: 10rem; */
  /* background-color: yellow; */
  /* border: 0.5rem solid red; */
  @media (max-width: 768px) {
    padding: 2vmax;
  }
`;

const Heading = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 3.5vmax;
  margin-bottom: 3vmax;
  color: black;
  letter-spacing: 4px;
  /* border: 2px solid red; */
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  /* border: 2px solid red; */
  justify-content: space-around;
  /* flex-wrap: wrap; */
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .scrollable::-webkit-scrollbar {
    display: none;
  }
`;

const Logo = styled.img`
  width: 13rem;
  height: 13rem;
  margin: 1vmax;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    height: 9rem;
    width: 9rem;
    aspect-ratio: 1/1;
  }
`;

const Partner = () => {
  return (
    <Container>
      <Heading>Our Partners</Heading>
      <LogoContainer>
        <Logo src="https://picsum.photos/id/1015/300/400" alt="Company 1" />
        <Logo src="https://picsum.photos/id/1016/300/400" alt="Company 2" />
        <Logo src="https://picsum.photos/id/1015/300/400" alt="Company 3" />
        <Logo src="https://picsum.photos/id/1018/300/400" alt="Company 4" />
        <Logo src="https://picsum.photos/id/1019/300/400" alt="Company 5" />
        <Logo src="https://picsum.photos/id/1020/300/400" alt="Company 6" />
      </LogoContainer>
    </Container>
  );
};

export default Partner;
