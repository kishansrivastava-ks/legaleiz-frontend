/* eslint-disable no-unused-vars */
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  /* height: 100vh; */
  height: min-content;
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
  &:hover {
    cursor: pointer;
    color: blue;
    transition: all 0.3s;
  }
`;

const ConsultBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 3rem 0;
  max-width: 75%;
  margin-left: auto;
  margin-top: 3rem;
`;
const ConsultPara = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 0.8px;
  margin: 1rem;
  color: #000;
  cursor: pointer;
  &:hover {
    color: blue;
    transition: all 0.3s;
  }
`;

const Copyright = styled.div`
  max-width: 100%;
  padding: 4rem 0;
  font-size: 2.5rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 6rem;
  text-align: center;
`;

const Disclaimer = styled.div`
  width: 100%;
  padding: 1rem 0;
  font-size: 1.3rem;
  text-align: left;
  margin-top: 4rem;
  text-align: left;
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
              <LinkItem>legaleiz@gmail.com</LinkItem>
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
          Consult Top Divorce Lawyers Online: Expert Legal Advice for Your
          Divorce matter.
        </ConsultPara>
        <ConsultPara>
          Best Property Lawyer Consultations: Get Legal Advice on Property
          Matters Now
        </ConsultPara>
        <ConsultPara>
          Consult Experienced Lawyers for Expert Legal Advice on Child Custody
          Matters
        </ConsultPara>
        <ConsultPara>
          Consult a property lawyer before any property transaction
        </ConsultPara>
        <hr />
      </ConsultBox>
      <Copyright>2024-25 © Legal Eiz Pvt. Ltd. | All Rights Reserved</Copyright>
      <Disclaimer>
        <p>
          <b>Disclaimer :</b>
          <i>
            Please note that LegalEiz is not a law firm and does not engage in
            the practice of law or solicit Lawyers.
          </i>
        </p>
        <p>
          LegalEiz is an advanced, AI-powered technology platform as web and
          Mobile Application designed to facilitate connections between users
          and a diverse range of legal and financial professionals. Our aim is
          to provide an accessible and convenient way for users to seek guidance
          from Legal Experts and other professionals based on their specific
          needs and demands. All interactions or consultations facilitated
          through LegalKart are between users and independent professionals.
          LegalKart is not responsible for any advice or services provided by
          these independent professionals.
        </p>
      </Disclaimer>
    </Container>
  );
};

export default Footer;
