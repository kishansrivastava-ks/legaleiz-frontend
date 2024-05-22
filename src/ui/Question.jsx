/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const QuestionContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;
  /* transition: all 1s; */
`;

const QuestionText = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  margin: 0;
`;

const AnswerText = styled.p`
  font-size: 1.8rem;
  margin: 0.5rem 0;
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  color: #fff;
`;

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <QuestionContainer onClick={() => setIsOpen(!isOpen)}>
      <QuestionText>
        {question}{" "}
        <p style={{ color: "white" }}>{isOpen ? <>&uarr;</> : <>&darr;</>}</p>
      </QuestionText>
      <AnswerText style={{ height: isOpen ? "auto" : "0" }}>
        {answer}
      </AnswerText>
    </QuestionContainer>
  );
};

export default Question;
