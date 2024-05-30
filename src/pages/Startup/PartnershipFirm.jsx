import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Whatsapp from "../../ui/Whatsapp";
import Info from "../../components/StartupPages/Info";

const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  /* grid-auto-rows: min-content; */
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  /* box-sizing: border-box; */
`;

const Main = styled.div`
  grid-row: 2;
  height: max-content;
  /* width: 100vw; */
  font-size: 2rem;
  /* background-color: rgb(243, 152, 152); */
  background-color: #f7f5f5;
  /* padding: 2vw; */
  margin: 0;
  border: 0.5rem solid red;
`;

function PartnershipFirm() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <Info
          heading="Do you want to start business with somebody whom you trust?"
          caption="Form a PARTNERSHIP FIRM and get started"
        />
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default PartnershipFirm;
