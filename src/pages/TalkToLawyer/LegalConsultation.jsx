import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Whatsapp from "../../ui/Whatsapp";
import LegalConsultationOnline from "../../components/TalkToLawyer/LegalConsultationOnline";

const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Main = styled.div`
  grid-row: 2;
  height: max-content;
  /* width: 100vw; */
  font-size: 2rem;
  /* background-color: blue; */
  background-color: #fff;
  padding: 2vw 8vw;
  margin: 0;
  /* border: 3px solid red; */
  text-align: justify;
`;

function LegalConsultation() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <LegalConsultationOnline />
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default LegalConsultation;
