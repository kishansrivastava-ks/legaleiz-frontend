/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      A legal notice for recovery of dues is a formal document demanding payment
      of an outstanding debt from the recipient. It serves as a pre-legal action
      notification, urging them to settle the debt or face potential legal
      consequences.
    </p>
  </StyledOverview>
);

export const WhatItIncludes = () => {
  const list = [
    {
      title: "Your Information",
      description:
        "Clearly state your name and contact details as the sender of the notice (creditor).",
    },
    {
      title: "Debtor Information",
      description:
        "Identify the recipient of the notice (debtor) by name and contact details.",
    },
    {
      title: "Description of Dues",
      description:
        "Clearly outline the nature of the outstanding dues, including: 	The original amount owed (principal amount) \nAny applicable interest charges (if applicable) \nA brief description of the underlying transaction (e.g., goods purchased on credit, service rendered with delayed payment terms, loan agreement) ",
    },
    {
      title: "Proof of Dues (Optional)",
      description:
        "Attach copies of invoices, receipts, contracts, or other documents supporting your claim for the dues owed.",
    },
    {
      title: "Demand for Payment",
      description:
        "State the total amount of money owed, including principal, interest (if applicable), and any late fees (if applicable).",
    },
    {
      title: "Deadline for Response",
      description:
        "Specify a reasonable timeframe (usually 7-30 days) for the recipient to respond to the notice and make full payment.",
    },
    {
      title: "Potential Consequences",
      description:
        "Inform the recipient of the potential legal actions you may pursue if they fail to comply within the specified timeframe. This could include filing a lawsuit in court, seeking wage garnishment, or reporting the debt to a credit bureau (depending on your location and the nature of the debt).",
    },
    {
      title: "Signature and Date",
      description:
        "The notice should be dated and signed by you (or your authorized representative).",
    },
  ];
  return (
    <>
      <Paragraph>
        Here&apos;s what a legal notice for recovery of dues typically includes:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const ImportantConsiderations = () => {
  const list = [
    {
      title: "Legal Representation",
      description:
        "While you can draft the notice yourself, consulting with a lawyer is recommended. They can ensure the notice is legally compliant, advise on the best course of action, and represent you in court if necessary.",
    },
    {
      title: "Specificity",
      description:
        "Be as specific as possible regarding the details of the dues owed, the actions you expect the recipient to take, and the timeframe for response.",
    },
    {
      title: "Debt Collection Laws",
      description:
        "The specific legalities and requirements for debt collection can vary depending on your location. Ensure your notice adheres to relevant laws.",
    },
    {
      title: "Next Steps",
      description:
        "Outline the next steps you will take if the recipient fails to respond or make payment within the designated time frame.",
    },
  ];
  return <List list={list} />;
};
