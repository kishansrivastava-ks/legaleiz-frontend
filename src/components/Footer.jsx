/* eslint-disable no-unused-vars */
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  padding: 5rem 15rem;
`;

const UsefulLinks = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterLogo = styled.div`
  width: 25%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 50%;
  height: 50%;
  margin-bottom: 1rem;
`;
const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 2rem;
`;
const Icon = styled.p`
  margin: 0.5rem;
  color: #000;
`;

const LinksContainer = styled.div`
  width: 75%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
  /* border-bottom: 1px solid gray; */
`;
const Solutions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;
  /* background-color: pink; */
`;
const Support = styled.div`
  width: 25%;
  /* background-color: yellow; */
  margin-bottom: auto;
  margin-left: 1rem;
`;
const Company = styled.div`
  width: 25%;
  /* background-color: green; */
  margin-left: 1rem;
`;
const Legal = styled.div`
  width: 25%;
  /* background-color: blue; */
  margin-bottom: auto;
  margin-left: 1rem;
`;

const Head = styled.h3`
  color: #a9a5a5;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;

const LinkItem = styled.li`
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const ConsultBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 3rem 0;
  max-width: 75%;
  margin-left: auto;
  margin-top: 3rem;
`;
const ConsultPara = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.8px;
  margin: 1rem;
  color: #828080;
  cursor: pointer;
  &:hover {
    color: #000;
    transition: all 0.3s;
  }
`;

const Footer = () => {
  return (
    <Container>
      <UsefulLinks>
        <FooterLogo>
          <Logo src="logo.png" alt="logo" />
          <FooterIcons>
            <Icon>facebook</Icon>
            <Icon>twitter</Icon>
            <Icon>linkedin</Icon>
          </FooterIcons>
        </FooterLogo>
        <LinksContainer>
          <Solutions>
            <Head>Solution</Head>
            <ul>
              <LinkItem>Property</LinkItem>
              <LinkItem>Startup</LinkItem>
              <LinkItem>Challan</LinkItem>
              <LinkItem>Ask a lawyer</LinkItem>
              <LinkItem>Find lawyers in Cities</LinkItem>
            </ul>
          </Solutions>
          <Support>
            <Head>Support</Head>
            <ul>
              <LinkItem>+91 8176065235</LinkItem>
              <LinkItem>kishansrivastava.01.ks@gmail.com</LinkItem>
              <LinkItem>Whatsapp</LinkItem>
            </ul>
          </Support>
          <Company>
            <Head>Company</Head>
            <ul>
              <LinkItem>About</LinkItem>
              <LinkItem>Contact Us</LinkItem>
              <LinkItem>Blogs</LinkItem>
              <LinkItem>Advisors</LinkItem>
              <LinkItem>Careers</LinkItem>
            </ul>
          </Company>
          <Legal>
            <Head>Legal</Head>
            <ul>
              <LinkItem>Privacy Policy</LinkItem>
              <LinkItem>Term of use</LinkItem>
              <LinkItem>LegalEiz cash terms</LinkItem>
            </ul>
          </Legal>
        </LinksContainer>
      </UsefulLinks>
      <ConsultBox>
        <ConsultPara>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          modi natus labore, molestias illo soluta.
        </ConsultPara>
        <ConsultPara>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          modi natus labore, molestias illo soluta.
        </ConsultPara>
        <ConsultPara>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          modi natus labore, molestias illo soluta.
        </ConsultPara>
        <ConsultPara>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          modi natus labore, molestias illo soluta.
        </ConsultPara>
        <hr />
      </ConsultBox>
    </Container>
  );
};

export default Footer;