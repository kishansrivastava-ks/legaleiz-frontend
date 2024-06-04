import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Whatsapp from "../../ui/Whatsapp";
import Info from "../../components/StartupPages/Info";
import Container from "../../components/StartupPages/Container";
import RecommendedProds from "../../components/StartupPages/RecommendedProds";

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
  /* border: 0.5rem solid red; */
`;

// 🔴🔴 DATA FOR THE PAGE
const steps = [
  { no: 1, step: "Submit all the required documents" },
  {
    no: 2,
    step: "Drafting a Partnership Deed",
  },
  {
    no: 3,
    step: "Payment of Stamp Duty on Deed",
  },
  {
    no: 4,
    step: "Notarisation of Partnership Deed",
  },
  {
    no: 5,
    step: "Apply for PAN and TAN of the Firm",
  },
  {
    no: 6,
    step: "Certificate of Registration from RoF",
  },
  {
    no: 7,
    step: "Open a Current Bank account on the Firm’s name",
  },
];
const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

const definition = {
  question: "Partnership Firm",
  answer:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit exercitationem reprehenderit labore! Perferendis debitis est corporis soluta beatae blanditiis ex dolores labore dolorum quom.",
};

const benefits = [
  {
    id: 1,
    point: "Easy to start",
  },
  {
    id: 2,
    point: "Minimal Regulatory Compliance",
  },
  {
    id: 3,
    point: "Operating Flexibility for Partners",
  },
  {
    id: 4,
    point: "Various Financial Returns for the Partners",
  },
];
const requirements = [
  {
    id: 1,
    point: "Minimum 2 Partners",
  },
  {
    id: 2,
    point: "No Capital Requirement",
  },
];
const stats = {
  rating: 4.5,
  reviews: 123,
  purchased: 256,
};
const questions = [
  {
    question: "When should we apply for registering our Partnership firm?",
    answer:
      "A partnership firm can be registered whether at the time of its formation or even subsequently. The application for registration is to be made to the registrar of firms of the region in which the business is located. It is advisable to get the firm registered as soon as it starts its business to avail the rights and benefits that can be enjoyed only by a registered firm.",
  },
  {
    question: "Whether Partnership Deed registration is compulsory?",
    answer:
      "As per the Partnership Act, both registered and unregistered partnerships are valid and recognised by law. Partnership registration is not compulsory. Mostly, the businesses at initial level prefer unregistered partnership till they reach stable level. The unregistered partnership can be registered at any time after its formation.",
  },
  {
    question: "What happens if I do not register my Partnership Firm?",
    answer:
      "If the Partnership is not registered, the firm cannot file suit against any partner or the third party. A partner also cannot sue the partnership firm for his claim.",
  },
  {
    question: "What are the advantages of registering a Partnership Firm?",
    answer:
      "Only a registered partnership firm can claim a set off (ie. mutual adjustment of debts owned by the disputant parties to one another) or other proceedings in a dispute with a third party. Also, only a registered partnership firm can file a suit in any court against the firm or other Partners for the enforcement of any right arising from a contract or rights conferred by the Partnership Act. It is therefore advisable for Partnership Firms to get it registered.An unregistered Partnership Firm can get registered at any point of time after its establishment.",
  },
  {
    question:
      "What is the minimum capital requirement to start a Partnership Firm?",
    answer:
      "Formation of Partnership Firm does not require any minimum amount. It can be started with any amount of capital contribution by the partners. The Partners can contribute any amount agreed amongst themselves and in any tangible form (cash, land, office space etc.) or intangible (goodwill, intellectual property). The Partners can introduce capital in any ratio, equal or uneven.",
  },
];

const registrationItems = [
  { id: 1, title: "Partnership Firm", price: 9999 },
  { id: 2, title: "GST Registration", price: 3499 },
  { id: 3, title: "Startup India Registration", price: 3999 },
  { id: 4, title: "MSME Registration", price: 1999 },
];

function PartnershipFirm() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <Info
          heading="Do you want to start business with somebody whom you trust?"
          caption="Form a PARTNERSHIP FIRM and get started"
        />
        <Container
          steps={steps}
          stats={stats}
          definition={definition}
          title="Partnership Firm"
          benefits={benefits}
          heading={heading}
          questions={questions}
          requirements={requirements}
          registrationItems={registrationItems}
          category="Company Formation"
        />
        <RecommendedProds />
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default PartnershipFirm;
