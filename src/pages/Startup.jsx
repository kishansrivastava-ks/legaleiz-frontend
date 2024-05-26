import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Whatsapp from "../ui/Whatsapp";
import InfoSection from "../components/Startup/InfoSection";
import FeaturesSection from "../components/Startup/FeaturesSection";
import ProductsSection from "../components/Startup/ProductsSection";
import ChatSection from "../components/Startup/ChatSection";
import HowItWorksSection from "../components/Startup/HowItWorksSection";
import WhyLegalEizSection from "../components/Startup/WhyLegalEizSection";
import Testimonials from "../components/Startup/Testimonials";
import Clients from "../components/Startup/Clients";

const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  /* height: min-content; */
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  /* box-sizing: border-box; */
`;

const Main = styled.div`
  grid-row: 2;
  height: min-content;
  /* width: 100vw; */
  font-size: 2rem;
  /* background-color: rgb(243, 152, 152); */
  background-color: #f7f5f5;
  padding: 2vw;
  margin: 0;
  /* border: 0.8rem solid red; */

  display: flex;
  width: 100vw;
  flex-direction: column;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    margin: 2rem 0;
  }
`;

function Startup() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <InfoSection />
        <FeaturesSection />
        <ProductsSection />
        <ChatSection />
        <HowItWorksSection />
        <WhyLegalEizSection />
        <Testimonials />
        <Clients />
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default Startup;
