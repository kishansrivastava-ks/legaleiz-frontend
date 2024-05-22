import styled from "styled-components";

const Container = styled.div`
  /* background-color: red; */
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
  font-size: 4rem;
  margin-bottom: 5rem;
  color: black;
  letter-spacing: 3px;
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

  &:hover + ${CompanyName} {
    display: block;
  }
`;

const CompanyName = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  /* display: none; */
  /* position: relative; */
  /* bottom: -2rem; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
`;

const Partner = () => {
  return (
    <Container>
      <Heading>Our Partners</Heading>
      <LogoContainer>
        <Logo src="https://picsum.photos/id/1015/300/400" alt="Company 1" />
        <CompanyName>Company 1</CompanyName>
        <Logo src="https://picsum.photos/id/1016/300/400" alt="Company 2" />
        <CompanyName>Company 2</CompanyName>
        <Logo src="https://picsum.photos/id/1017/300/400" alt="Company 3" />
        <CompanyName>Company 3</CompanyName>
        <Logo src="https://picsum.photos/id/1018/300/400" alt="Company 4" />
        <CompanyName>Company 4</CompanyName>
        <Logo src="https://picsum.photos/id/1019/300/400" alt="Company 5" />
        <CompanyName>Company 5</CompanyName>
        <Logo src="https://picsum.photos/id/1020/300/400" alt="Company 6" />
        <CompanyName>Company 6</CompanyName>
      </LogoContainer>
    </Container>
  );
};

export default Partner;
