/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";

const StyledOverView = styled.div`
  /* padding: 5px 10px; */
  border-radius: 5px;
  text-align: justify;
  & > p {
    line-height: 1.4;
    font-size: 1.8rem;
  }
`;

export const Overview = () => (
  <StyledOverView>
    <p>
      A Founders Agreement is a crucial legal document created by the founders
      of a company, typically before it&apos;s officially formed. It sets the
      foundation for your business relationship by outlining the rights,
      responsibilities, and expectations of each founder
    </p>
    <p>Think of it as a prenup for your business partnership</p>
  </StyledOverView>
);

export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description: "Clearly identifies all founding members of the company",
    },
    {
      title: "Founders' Roles and Responsibilities",
      description:
        ": Defines the specific roles and expected contributions of each founder (e.g., marketing, product development, etc.)",
    },
    {
      title: "Equity Split",
      description:
        " Outlines the ownership percentage of each founder in the company, typically represented by shares",
    },
    {
      title: "Vesting Schedule",
      description:
        "Establishes a timeframe over which founders earn full ownership of their allocated shares. This helps ensure long-termcommitment",
    },
    {
      title: "Intellectual Property Ownership",
      description:
        "Clarifies ownership rights to any intellectual property (ideas, inventions) developed by founders during the course of building the company.",
    },
    {
      title: "Confidentiality",
      description:
        " Protects sensitive business information shared among the founders. ",
    },
    {
      title: "Decision-Making",
      description:
        "Establishes how key decisions will be made within the company (e.g., majority vote, unanimous agreement).",
    },
    {
      title: "Dispute Resolution",
      description:
        "Defines a process for resolving disagreements between founders",
    },
    {
      title: "Non-Compete Clauses",
      description:
        "May include provisions restricting founders from competing with the company if they leave (subject to legal limitations)",
    },
    {
      title: "Termination",
      description:
        "Outlines the circumstances under which a founder can leave the company or be removed (e.g., breach of agreement, disability)",
    },
  ];
  return <List list={list} />;
};

export const Benefits = () => {
  const list = [
    {
      title: "Clarity and Alignment",
      description:
        "Reduces confusion and miscommunication by setting clear expectations from the outset",
    },
    {
      title: "Dispute Prevention",
      description:
        "Provides a framework for addressing disagreements and avoiding conflicts down the line",
    },
    {
      title: "Protection for Founders",
      description:
        " Safeguards the interests of each founder by defining ownership rights and obligations",
    },
    {
      title: "Investor Confidence",
      description:
        "Demonstrates a professional and well-organized approach to investors, potentially making your company more attractive for funding. ",
    },
  ];
  return <List list={list} />;
};
