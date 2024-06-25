/* eslint-disable no-unused-vars */
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 100vw;
  height: max-content;
  padding: 8vh 8vw;
  /* border: 0.5rem solid red; */
  @media (max-width: 768px) {
    padding: 4vh 6vw;
  }
`;

const UsefulLinks = styled.div`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const FooterLogo = styled.div`
  flex: 1 1 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    align-items: center;
    margin-bottom: -2rem;
  }
`;

const Logo = styled.img`
  width: 50%;
  height: 50%;
  margin-bottom: 1rem;
  align-self: flex-start;
  @media (max-width: 768px) {
    width: 30%;
    height: 30%;
    align-self: center;
  }
`;
const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 2rem;
  align-self: flex-start;
  @media (max-width: 768px) {
    align-self: center;
  }
`;
const Icon = styled.p`
  margin: 0.5rem;
  color: #000;
  & > img {
    width: 3rem;
  }
`;

const LinksContainer = styled.div`
  flex: 1 1 80rem;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5rem;
  border-bottom: 1px solid gray;
  & > div {
    @media (max-width: 768px) {
      min-width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & > ul {
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 1;
      }
    }
  }
`;
const Solutions = styled.div`
  flex-basis: 21%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Support = styled.div`
  flex-basis: 21%;
  margin-bottom: auto;
  margin-left: 1rem;
`;
const Company = styled.div`
  flex-basis: 21%;
  margin-left: 1rem;
`;
const Legal = styled.div`
  flex-basis: 21%;
  margin-bottom: auto;
  margin-left: 1rem;
`;

const Head = styled.h3`
  color: #868686;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
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
  @media (max-width: 768px) {
    letter-spacing: 0px;
  }
`;

const ConsultBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
  padding: 3rem 0;
  max-width: 75%;
  margin-left: auto;
  margin-top: 3rem;
  /* border: 2px solid red; */
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 1rem;
    margin: 0;
    min-width: 100%;
    height: max-content;
    text-align: center;
    border: none;
  }
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
  @media (max-width: 768px) {
    border-bottom: 1px solid lightgray;
    padding-bottom: 1rem;
    margin-top: 0.5rem;
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
          <Logo src="/logo.png" alt="logo" />
          <FooterIcons>
            <Icon>
              <img
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                alt="facebook"
              />
            </Icon>
            <Icon>
              <img
                src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
                alt="twitter"
              />
            </Icon>
            <Icon>
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt="linkedin"
              />
            </Icon>
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
          through LegalEiz are between users and independent professionals.
          LegalEiz is not responsible for any advice or services provided by
          these independent professionals.
        </p>
      </Disclaimer>
    </Container>
  );
};

export default Footer;
