/* eslint-disable no-undef */
import styled from "styled-components";

const Container = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 15rem;
  padding-bottom: 10rem;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 4rem;
  margin-bottom: 5rem;
  color: black;
  letter-spacing: 4px;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  margin-right: 5rem;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.1);
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
