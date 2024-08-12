/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      A legal notice is a formal written document that serves as a precursor to
      potential legal action. It&apos;s a way to notify someone of your intent
      to pursue legal proceedings if they don&apos;t comply with a specific
      demand.
    </p>
  </StyledOverview>
);

export const Purpose = () => {
  const list = [
    {
      title: "Requesting Payment",
      description:
        "A common use is to demand overdue payment for goods, services, or a loan.",
    },
    {
      title: "Demanding Performance",
      description:
        "It can be used to request someone to fulfill a contractual obligation. ",
    },
    {
      title: "Notice of Breach",
      description:
        "A legal notice can inform someone that they are in breach of a contract or agreement.",
    },
    {
      title: "Cease and Desist",
      description:
        "It can be used to demand someone stop a particular activity, such as trespassing or copyright infringement.",
    },
  ];
  return (
    <>
      <Paragraph>
        There are several reasons why someone might send a legal notice:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Benefits = () => {
  const list = [
    {
      title: "Formal Communication",
      description:
        "A legal notice serves as a formal documentation of your claim and intent to pursue legal action.",
    },
    {
      title: "Encourages Resolution",
      description:
        "The notice can prompt the recipient to address the issue and potentially avoid a lawsuit.",
    },
    {
      title: "Strengthens Legal Case",
      description:
        "If litigation becomes necessary, a legal notice sent beforehand can strengthen your legal position.",
    },
  ];
  return <List list={list} />;
};

export const WhatItIncludes = () => {
  const list = [
    {
      title: "Sender Information",
      description:
        "Identifies the party sending the notice, including their name and contact details.",
    },
    {
      title: "Recipient Information",
      description:
        "Clearly identifies the person or entity receiving the notice.",
    },
    {
      title: "Description of the Issue",
      description: "Clearly outlines the nature of the problem or dispute. ",
    },
    {
      title: "Specific Demands",
      description:
        "States the specific action you expect the recipient to take (e.g., payment of a certain amount, ceasing an activity).",
    },
    {
      title: "Deadline for Response",
      description:
        "Specifies a timeframe for the recipient to respond to the notice and address the issue.",
    },
    {
      title: "Potential Consequences",
      description:
        "Briefly outlines the potential legal actions you might take if the recipient fails to comply.",
    },
    {
      title: "Date and Signature",
      description:
        "The notice should be dated and signed by the sender (or their authorized representative).",
    },
  ];
  return (
    <>
      <Paragraph>
        The specific content of a legal notice can vary, but it generally
        includes the following elements:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const ImportantConsiderations = () => {
  const list = [
    {
      title: "Not a Guarantee of Settlement",
      description:
        "A legal notice doesn't guarantee the recipient will comply. It's a preliminary step before potentially filing a lawsuit.",
    },
    {
      title: "Content and Accuracy",
      description:
        "The notice should be clear, concise, and factually accurate to be effective.",
    },
    {
      title: "Legal Advice",
      description:
        "While legal notices can be drafted independently, consulting with a lawyer is recommended, especially for complex situations.",
    },
  ];
  return <List list={list} />;
};

export const Alternatives = () => {
  const list = [
    {
      title: "Direct Communication",
      description:
        "A formal letter outlining your concerns might be sufficient for minor issues.",
    },
    {
      title: "Mediation",
      description:
        "Mediation can be a helpful approach to resolve disputes collaboratively.",
    },
  ];
  return (
    <>
      <Paragraph>
        In some cases, depending on the situation, alternatives to a legal
        notice might be explored:
      </Paragraph>
      <List list={list} />
    </>
  );
};
