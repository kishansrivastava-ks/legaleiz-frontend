/* eslint-disable react/prop-types */
// Question.js
// import React from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
`;

const QuestionText = styled.div`
  font-size: 1.3vmax;
  letter-spacing: 2px;
`;

const Symbol = styled.div`
  font-size: 20px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ expanded }) => (expanded ? "rotate(45deg)" : "rotate(0deg)")};
  padding: 0 8.7px;
  color: #000;
  /* background-color: black; */
  border-radius: 50%;
`;

const Answer = styled.div`
  padding: 0 15px;
  text-align: justify;
  /* margin: 1rem; */
  background-color: #f1f1f1;
  max-height: ${({ expanded }) => (expanded ? "150px" : "0")};
  /* overflow: hidden; */
  transition: max-height 0.5s ease-in-out;
  font-size: 1.2vmax;
  background-color: #fff;
  border-top: 1px solid lightgray;
  border-width: 90%;
`;

const Question = ({ question, answer, isOpen, onClick }) => {
  return (
    <QuestionWrapper>
      <QuestionHeader onClick={onClick}>
        <QuestionText>{question}</QuestionText>
        <Symbol expanded={isOpen}>+</Symbol>
      </QuestionHeader>
      <Answer expanded={isOpen}>{answer}</Answer>
    </QuestionWrapper>
  );
};

export default Question;
