/* eslint-disable react/prop-types */
// QuestionsContainer.js
import { useState } from "react";
import styled from "styled-components";
import Question from "./Question";

const Container = styled.div`
  width: 100%;
  /* max-width: 600px; */
  margin: 0 auto;
  & > h2 {
    font-weight: 550;
    letter-spacing: 2px;
  }
`;

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

const QuestionsContainer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <h2>Frequently Asked Questions...</h2>
      {questions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          answer={q.answer}
          isOpen={openIndex === index}
          onClick={() => handleQuestionClick(index)}
        />
      ))}
    </Container>
  );
};

export default QuestionsContainer;
