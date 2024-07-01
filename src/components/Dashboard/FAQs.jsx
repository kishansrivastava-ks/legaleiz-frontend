// components/FAQs.jsx

import { useState } from "react";
import styled from "styled-components";
import { faqData } from "./faqData";
import { FaChevronRight } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding: 20px;
`;

const LeftColumn = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
  border-right: 1px solid #ddd;
`;

const RightColumn = styled.div`
  width: 70%;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
`;

const Label = styled.div`
  margin-bottom: 15px;
  letter-spacing: 1px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eaeaea;
  }
`;

const FAQContainer = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  animation: ${({ active }) => (active ? "fadeIn 0.5s" : "fadeOut 0.5s")};
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
  /* background-color: #f1f1f1; */
  background-color: #f4f2f2;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e2e2e2;
  }
`;

const Answer = styled.div`
  margin-bottom: 5px;
  padding: 10px;
  /* background-color: #e2e2e2; */
  border-radius: 5px;
  display: ${({ active }) => (active ? "block" : "none")};
  animation: ${({ active }) => (active ? "expand 0.5s" : "collapse 0.5s")};
`;

const Header = styled.h2`
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: #333;
`;

const faqs = [
  { label: "My Services", key: "myServices" },
  { label: "Compliance Calendar", key: "complianceCalendar" },
  { label: "Messages", key: "messages" },
  { label: "Payments", key: "payments" },
  { label: "Users and Roles", key: "usersAndRoles" },
  { label: "Account Settings", key: "accountSettings" },
  { label: "Feedback and Concerns", key: "feedbackAndConcerns" },
];

const FAQs = () => {
  const [activeLabel, setActiveLabel] = useState("myServices");
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <Container>
      <LeftColumn>
        {faqs.map((faq) => (
          <Label
            key={faq.key}
            onClick={() => {
              setActiveLabel(faq.key);
              setActiveQuestion(null);
            }}
          >
            {faq.label}
          </Label>
        ))}
      </LeftColumn>
      <RightColumn>
        <FAQContainer active={activeLabel}>
          <Header>{faqs.find((faq) => faq.key === activeLabel).label}</Header>
          {faqData[activeLabel].map((item, index) => (
            <div key={index}>
              <Question
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
              >
                <span>{item.question}</span>
                <FaChevronRight />
              </Question>
              <Answer active={activeQuestion === index}>{item.answer}</Answer>
            </div>
          ))}
        </FAQContainer>
      </RightColumn>
    </Container>
  );
};

export default FAQs;
