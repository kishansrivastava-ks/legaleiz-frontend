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
const stats = {
  rating: 4.6,
  reviews: 122,
  purchased: 256,
};
const definition = {
  question: "Trademark Objection",
  answer:
    "Trademark application passes through several stages, where Examination by Registrar is a crucial stage. A competent officer will examine the application and check for any errors or correctness of the application confirming to the Trademark Act and its applicable Rules.\nDuring trademark examination, the Trademark Registrar may raise objections on the applied trademark if it violates rules and laws of trademark registration. It could be due to several reasons like similarity with an existing trademark, offense to a particular religion, absence of a distinct design, etc. In the event of a trademark objection, a comprehensive reply needs to be filed within a month, from the date of issuance of the objection.",
};
const benefits = [
  {
    id: 1,
    point: "Separate Legal Existence",
  },
  {
    id: 2,
    point: "Limited Liability of Shareholders",
  },
  {
    id: 3,
    point: "Continuous Existence",
  },
  {
    id: 4,
    point:
      "No requirement to hold Board Meeting, Annual General or Extraordinary General Meeting",
  },
  {
    id: 5,
    point:
      "Less Compliance compared to the requirements of a Pvt. Limited Company",
  },
  {
    id: 6,
    point: "Easy Fund Raising",
  },
  {
    id: 7,
    point:
      "Improves Trust and increases credibility among vendors and lending institutions",
  },
];
const requirements = [
  {
    id: 1,
    point: "Minimum 1 Shareholder",
  },
  {
    id: 2,
    point: "Minimum 1 Director",
  },
  {
    id: 3,
    point: "Minimum 1 Nominee",
  },
  {
    id: 4,
    point:
      "No minimum capital is required. However, A OPC Company should have minimum authorized share capital of at least Rs. 1 lakh",
  },
  {
    id: 5,
    point:
      "The name of the Company should be unique and should not be similar to the any existing company name or trademark.",
  },
];
const steps = [
  { no: 1, step: "Application for DSC (Digital Signature Certificate)" },
  {
    no: 2,
    step: "Apply for DIN (Director Identification Number)",
  },
  {
    no: 3,
    step: "Application filing for Nameavailability",
  },
  {
    no: 4,
    step: "Drafting and Filing of eMoa and eAoA",
  },
  {
    no: 5,
    step: "Apply for PAN and TAN of the company",
  },
  {
    no: 6,
    step: "Certificate of Incorporation issued by RoCalong with PAN and TAN",
  },
  {
    no: 7,
    step: "Open a Current Bank account on the company name",
  },
];
const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

const questions = [
  {
    question: "Do I need to be physically present during this process?",
    answer:
      "No, OPC Registration is a fully online process. As all forms are filed electronically so you don’t need to physically travel. You would need to send us scanned copies of all the required documents.",
  },
  {
    question: "Can foreign nationals incorporate a company under OPC?",
    answer:
      "No, foreign nationals cannot incorporate a company under OPC.Only a natural person who is an Indian citizen and resident in India shall be eligible to act as a member and nominee of an OPC",
  },
  {
    question: "What is a Digital Signature Certificate? Who shall procure it?",
    answer:
      "Digital Signature Certificate is provided in the form of a token issued by Certified Authorities. Any form filed for online company registration in India shall be submitted after affixing the DSC of an Applicant. Also, the directors will require DSC for DIN application and the subscribers to MOA shall possess DSC for submitting e-forms for incorporation.",
  },
  {
    question:
      "Is it necessary to obtain DSC for all the directors of a company?",
    answer:
      "As per Companies Act, it is mandatory for all the directors of the company to obtain DSC to verify the authenticity of all the documents filled.",
  },
  {
    question:
      "Whether a corporate body can become member or nominee in an OPC?",
    answer:
      "No, only an individual can obtain membership or become the nominee in OPC. If a corporate body wants 100% stake of any company, it can register a wholly owned subsidiary.",
  },
];
const registrationItems = [
  { id: 1, title: "One Person Company", price: 12999 },
  { id: 2, title: "GST Registration", price: 3499 },
  { id: 3, title: "Startup India Registration", price: 3999 },
  { id: 4, title: "MSME Registration", price: 1999 },
];

function RespondToTmObjections() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <Info
          heading="Receiving an objection doesn't mean your Trademark is rejected"
          caption="RESPOND TO THE OBJECTION and get your Trademark Registered"
        />
        <Container
          steps={steps}
          stats={stats}
          definition={definition}
          title="Response To TM Objections"
          benefits={benefits}
          heading={heading}
          questions={questions}
          requirements={requirements}
          registrationItems={registrationItems}
          category="Intellectual Property"
        />
        <RecommendedProds />
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default RespondToTmObjections;
