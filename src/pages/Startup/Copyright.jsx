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
  rating: 4.4,
  reviews: 106,
  purchased: 238,
};
const definition = {
  question: "Copyright",
  answer:
    "Copyright is the legal right granted to creators of literary, dramatics, music, and artistic work and producers of films and recordings. The holder of Copyright has the rights to reproduce, replicate, adapt, translate and distribute the work he has created. Copyright ensures certain minimum safeguards of authors' rights over their creations, thereby rewarding and protecting creativity.\nThe Copyright Act, 1957 protects original literary, dramatic, musical and artistic works and cinematograph films and sound recordings from unauthorized usage and copying of their creation. Copyright protects the expressions and not the ideas. There’s no copyright protection for ideas, procedures, strategies of operation or mathematical concepts.",
};
const benefits = [
  {
    id: 1,
    point: "Public record of ownership",
  },
  {
    id: 2,
    point: "Limited Liability of ShareholdersPrevents copying and duplication",
  },
  {
    id: 3,
    point: "Legal commercial use of by-products",
  },
  {
    id: 4,
    point:
      "Owner can sell or pass on the rights of the work to the other person with copyright protection",
  },
  {
    id: 5,
    point: "Protection extended even after the creator’s death",
  },
];

const steps = [
  {
    no: 1,
    step: "Copyright registration application has to be prepared in Form IV",
  },
  {
    no: 2,
    step: "Application must be duly signed by the applicant and submitted by the advocate under whose name Power of Attorney has been executed",
  },
  {
    no: 3,
    step: "Online filing of an application for Copyright Registration",
  },
  {
    no: 4,
    step: "If discrepancy and/or objections are found, discrepancy notice will be issued and the same needs to be responded to within 30 days from the date of issuance of the notice",
  },
  {
    no: 5,
    step: "If there are no discrepancies or objections with the application, the copyright will be registered and the Copyright Office will issue the Registration Certificate",
  },
];
const heading =
  "The Ministry of Corporate Affairs governs the company registration process. The below registration process is basis the governing laws of MCA:";
// this heading is meant to be passed a the heading of the regustration process component

const questions = [
  {
    question: "How long is the Copyright registration valid for?",
    answer:
      "Copyright protection is valid for 60 years. If it is literary, dramatic, musical and artistic works, the 60-year period is counted from the year following the expiry of the author. For cinematograph films, sound recordings, photographs, posthumous publications, anonymous and pseudonymous publications, works of government and works of international organizations, the 60-year period is counted from the date of publication.",
  },
  {
    question: "Can I sell or transfer a copyright registration?",
    answer:
      "A copyright registration can be sold, transferred, gifted and franchised with due consent from the owner of the work.",
  },
  {
    question: "How long does it take to register a Copyright?",
    answer:
      "Considering the various factors, including objections and response, the entire process may take up to 8-10 months approximately.",
  },
  {
    question: "Is there any chance of my copyright work to get rejected?",
    answer:
      "Yes, if the discrepancy is not removed within the said timeline, the application will be abandoned.",
  },
  {
    question: "What is the difference between Copyright and Trademark?",
    answer:
      "Trademark is for protecting a brand name, logo or slogan. While copyright is a protection given to unique content like a book, music, videos, songs and other artistic content.",
  },
];
const registrationItems = [
  { id: 1, title: "Copyright", price: 7999 },
  { id: 2, title: "Trademark", price: 10500 },
  { id: 3, title: "Startup India Registration", price: 3999 },
  { id: 4, title: "MSME Registration", price: 1999 },
];

function Copyright() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <Info
          heading="Your creativity is your copyright!"
          caption="Protect your creativity - GET YOUR COPURIGHT REGISTERED"
        />
        <Container
          steps={steps}
          stats={stats}
          definition={definition}
          title="One Person Company"
          benefits={benefits}
          heading={heading}
          questions={questions}
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

export default Copyright;
