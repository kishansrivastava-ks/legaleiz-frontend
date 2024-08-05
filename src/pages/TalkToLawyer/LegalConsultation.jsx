/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import QuestionsContainer from "../../components/StartupPages/QuestionsContainer";
import ConcernedArea from "../../components/TalkToLawyer/LegalConsultation/ConcernedArea";
import HowToConsult from "../../components/TalkToLawyer/LegalConsultation/HowToConsult";
import LegalConsultationOnline from "../../components/TalkToLawyer/LegalConsultation/LegalConsultationOnline";
import WhyChooseUs from "../../components/TalkToLawyer/LegalConsultation/WhyChooseUs";
import Whatsapp from "../../ui/Whatsapp";
import StillHaveQuestions from "../../components/TalkToLawyer/LegalConsultation/StillHaveQuestions";
import Reviews from "../../components/TalkToLawyer/LegalConsultation/Reviews";
import RelatedServices from "../../components/TalkToLawyer/LegalConsultation/RelatedServices";

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
  font-size: 2rem;
  background-color: #fff;
  margin: 0;
  text-align: justify;
`;

const questions = [
  {
    question: "What is legal consultation?",
    answer:
      "Legal consultation refers to the process of seeking professional advice from a lawyer or legal expert regarding a specific legal matter or issue. It involves discussing the details of the case, obtaining legal insights, understanding rights and obligations, and exploring potential courses of action. Legal consultation helps individuals or entities make informed decisions and navigate legal complexities effectively.",
  },
  {
    question: "Why do you need a consultation?",
    answer:
      "A legal consultation is essential to gain professional advice and insights on specific legal matters. It helps individuals understand their rights, explore available options, assess potential risks, and make informed decisions. A consultation ensures that you are well informed about the legal implications of your situation and allows you to seek guidance from a legal expert to protect your interests and navigate the complexities of Indian laws.",
  },
  {
    question: "What is client consultation in law?",
    answer:
      "In law, client consultation refers to a meeting or discussion between a lawyer and their client, where the client seeks legal advice or guidance on a specific matter. It is an opportunity for the lawyer to understand the client’s situation, provide legal insights, discuss potential strategies, and address any concerns or questions the client may have.",
  },
  {
    question: "What defines a consulting attorney?",
    answer:
      "A consulting attorney in India is a legal professional who provides expert advice and guidance on specific legal matters, offering expertise and insights to clients seeking assistance in navigating legal complexities or making informed decisions.",
  },
  {
    question: "What are the benefits of having a legal consultant?",
    answer:
      "Having a legal consultant in India offers several benefits, including expert advice and guidance on legal matters, ensuring compliance with laws and regulations, minimizing legal risks, drafting and reviewing legal documents, representing your interests in legal proceedings, and providing strategic solutions to legal issues. ezyLegal helps you connect with expert law consultants online.",
  },
];

const QuestionContainer = styled.div`
  display: flex;
  gap: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding: 2vmax 8vmax;
  @media (max-width: 768px) {
    width: 100vw;
    padding: 2rem;
  }
`;
const intro = [
  "Getting the right legal advice is important because it helps you know your rights and gives you a better chance for a positive outcome.",

  "No Appointment, No Waiting. Consult a Lawyer instantly and get the RIGHT Legal Advice.",
];

const process = [
  "Gain a legal edge from the comfort of your home with our Online Legal Consultation Service, expertly designed to offer comprehensive legal advice tailored to your needs",

  "Enjoy focused discussion with our experienced lawyers, ensuring your legal queries are answered with utmost professionalism and clarity",

  "Our consultations are scheduled with your convenience in mind, allowing you to choose a suitable time and eliminating the hassle of commuting to a lawyer’s office",

  "Access top-notch legal counsel without stretching your budget – Our Online Legal Consultation Service is competitively priced, offering great value without compromising on quality.",
];

const concernedOptions = [
  "Divorce & Child Custody",
  "Family and Matrimonial",
  "Property",
  "Will",
  "Criminal",
  "Consumer Protection",
  "Cheque Bounce",
  "Cyber Crime",
  "Business Legal Consultation",
  "Other Legal Problem",
  "Legal Notice",
  "Labour & Employment",
];
function LegalConsultation() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <LegalConsultationOnline
          title="Legal Consultation Online"
          intro={intro}
          process={process}
        />
        <ConcernedArea concernedOptions={concernedOptions} />
        <HowToConsult />
        <QuestionContainer>
          <QuestionsContainer questions={questions} />
        </QuestionContainer>
        <WhyChooseUs />
        <Reviews />
        <StillHaveQuestions />
        <RelatedServices />
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default LegalConsultation;
