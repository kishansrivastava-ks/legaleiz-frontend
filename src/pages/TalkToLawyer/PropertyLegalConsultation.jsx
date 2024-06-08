/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import QuestionsContainer from "../../components/StartupPages/QuestionsContainer";
import ConcernedArea from "../../components/TalkToLawyer/LegalConsultation/ConcernedArea";
import HowToConsult from "../../components/TalkToLawyer/LegalConsultation/HowToConsult";
import LegalConsultationOnline from "../../components/TalkToLawyer/LegalConsultation/LegalConsultationOnline";
import RelatedServices from "../../components/TalkToLawyer/LegalConsultation/RelatedServices";
import Reviews from "../../components/TalkToLawyer/LegalConsultation/Reviews";
import StillHaveQuestions from "../../components/TalkToLawyer/LegalConsultation/StillHaveQuestions";
import WhyChooseUs from "../../components/TalkToLawyer/LegalConsultation/WhyChooseUs";
import Whatsapp from "../../ui/Whatsapp";

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
    question: "How do I get a Divorce Lawyer Consultation for my Divorce case?",
    answer:
      "On ezyLegal, you can get divorce lawyer consultation from verified divorce law experts by buying talk time, selecting the language of your choice and you get connected for divorce lawyer consultation.",
  },
  {
    question: "Where can I get legal advice for Divorce with complete privacy?",
    answer:
      "A legal consultation is essential to gain professional advice and insights on specific legal matters. It helps individuals understand their rights, explore available options, assess potential risks, and make informed decisions. A consultation ensures that you are well informed about the legal implications of your situation and allows you to seek guidance from a legal expert to protect your interests and navigate the complexities of Indian laws.",
  },
  {
    question:
      "What is the most important thing to keep in mind for Divorce Consultation?",
    answer:
      "Divorce consultation might vary depending on whether you are seeking a mutual or contested divorce. In the case of a contested divorce, you need to be aware that you will need long-term and expert divorce consultation as most contested divorce cases extend for months and require a trial involving evidence and witnesses.",
  },
  {
    question: "What should you ask during a divorce consultation?",
    answer:
      "During a divorce consultation, it is important to ask about the lawyer’s experience in handling divorce cases, their fee structure, the estimated time frame for the divorce process, and their approach to resolving conflicts. Additionally, you may want to inquire about the potential outcomes of your case and any specific legal issues that may be relevant to your situation.",
  },
  {
    question: "How will I get the lawyer's number?",
    answer:
      "To Talk to the top divorce Lawyers, you can call on this number +91-8929 889922. After purchasing the consultation minutes, you will also receive this phone number on email and SMS.",
  },
];

const QuestionContainer = styled.div`
  display: flex;
  gap: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding: 2vmax 8vmax;
`;

const intro = [
  "Whether it is Power of Attorney for Property or it is about Property Ownership dispute, taking the help of the right Property Lawyer for property legal advice is extremely important",

  "No Appointment, No Waiting. Consult a Lawyer instantly and get the RIGHT Legal Advice for Property related matters.",
];

const process = [
  "Property Legal Consultation Service offers personalized, expert guidance to navigate the complexities of real estate laws, providing clarity when you need it most",

  "Our dedicated team responds swiftly and efficiently, delivering insightful legal advice tailored to your unique property concerns, helping you make informed decisions",

  "Appreciate the convenience of our flexible consultation service, allowing you to schedule and reschedule your sessions as per your needs – we’re here to work around your timeline",

  "Gain expert legal insights without straining your budget.",
];

const concernedOptions = [
  "Possession Delay",
  "Property Disputes",
  "RERA Act",
  "Other Property Issues",
];

function PropertyLegalConsultation() {
  return (
    <LandingPage>
      <Navbar />
      <Main>
        <LegalConsultationOnline
          title="Property Legal Consultation"
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

export default PropertyLegalConsultation;
