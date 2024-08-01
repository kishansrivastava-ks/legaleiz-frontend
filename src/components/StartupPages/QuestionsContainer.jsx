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
    @media (max-width: 768px) {
      font-size: smaller;
      font-weight: bold;
    }
  }

  /* border: 2px solid red; */
`;

const QuestionsContainer = ({ heading = true, questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      {heading ? <h2>Frequently Asked Questions...</h2> : <></>}
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
