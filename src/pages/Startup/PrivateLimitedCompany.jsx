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

const definition = {
  question: "Private Limited Company",
  answer:
    "Registering a company is the first step to start a business in India. If you are a startup and have high growth aspirations, then you should incorporate a Private Limited Company. Private Limited allows outside funding to be raised easily, limits the liabilities of its shareholders and enables Founders to offer employee stock options to attractgood talent. \nPvt Ltd company is incorporated under the Companies Act of 2013 and governed by the Ministry of Corporate Affairs (MCA). Private Limited Company can have a minimum of two members and a maximum of two hundred members. The directors of a private limited company have limited liability to creditors. In a case of default, banks / creditors can only sell company’s assets but not personal assets of directors.",
};

const benefits = [
  {
    id: 1,
    point: "Separate Legal Existence",
  },
  {
    id: 2,
    point: "Management and Ownership Separation",
  },
  {
    id: 3,
    point: "Limited Liability of Shareholders",
  },
  {
    id: 4,
    point: "Easy Fund Raising",
  },
  {
    id: 5,
    point: "Transferability of Shares",
  },
  {
    id: 6,
    point: "Improves Credibility and Trust and attracts good talent",
  },
];
const requirements = [
  {
    id: 1,
    point: "Minimum Two Directors",
  },
  {
    id: 2,
    point: "One Resident Director",
  },
  {
    id: 3,
    point: "No Minimum Capital",
  },
  {
    id: 4,
    point: "Unique Name",
  },
];
const stats = {
  rating: 4.6,
  reviews: 1235,
  purchased: 12563,
};
const questions = [
  {
    question: "Do I need to be physically present during this process?",
    answer:
      "No, new company registration is a fully online process. As all documents are filed electronically, you would not need to be physically present at all. You would need to send us scanned copies of all the required documents & forms.",
  },
  {
    question: "Can foreign nationals incorporate a company?",
    answer:
      "Yes, foreign nationals can incorporate a company provided he is having a digital signature for filing incorporation documents and annual compliances of a company.",
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
    question: "What is Authorized Capital and Paid-up Capital?",
    answer:
      "Authorised capital shows the maximum amount of capital that a company can raise by way of issue of shares at present or in the future. Whereas, the Paid-up Capital refers to the actual amount raised by a company i.e.; amount paid by the shareholders on the issuance of shares. One can register a company in India by any amount of paid-up capital which can be less or equal to the authorized capital but not exceeding the authorized capital.",
  },
  {
    question:
      "Can one register a private limited company on their home address?",
    answer:
      "Yes, one can register a private limited company on their home addressin India.You will require to submit a copy of the utility bill the same address alongwithwith the NOC from the landlord for Private Limited Company Registration.",
  },
  {
    question:
      "What are the Annual Compliance requirements to be fulfilled by a Private Company?",
    answer:
      "During every financial year, the company must hold one Annual General Meeting (AGM) and at least 4 board meetings (one in each quarter). Further, the accounts and financial statements must be audited by an independent auditor. Subsequently, it shall file form AOC – 4 and MGT – 7 as part of Annual Compliance within given time.",
  },
];

const registrationItems = [
  { id: 1, title: "Private Limited Company", price: 15999 },
  { id: 2, title: "GST Registration", price: 3499 },
  { id: 3, title: "Startup India Registration", price: 3999 },
  { id: 4, title: "MSME Registration", price: 1999 },
];

function PrivateLimitedCompany() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <Info
          heading="You take your first step towards your dream venture - Let us handle the incorporation"
          caption="Form a Private Limited Company with ease and convinience"
        />
        <Container
          steps={steps}
          stats={stats}
          definition={definition}
          title="Private Limited Company"
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

export default PrivateLimitedCompany;
