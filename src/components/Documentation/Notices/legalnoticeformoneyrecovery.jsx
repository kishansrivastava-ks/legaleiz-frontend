/* eslint-disable no-unused-vars */
import List from "../List";
import Paragraph from "../Paragraph";
import StyledOverview from "../StyledOverview";

export const Overview = () => (
  <StyledOverview>
    <p>
      A legal notice for money recovery is a formal document demanding payment
      of a debt from the recipient. It serves as a precursor to potential legal
      action if the recipient fails to comply with your request.
    </p>
  </StyledOverview>
);

export const WhatItIncludes = () => {
  const list = [
    {
      title: "Your Information",
      description:
        "Clearly state your name and contact details as the sender of the notice.",
    },
    {
      title: "Debtor Information",
      description:
        "Identify the recipient of the notice by name and contact details.",
    },
    {
      title: "Description of Debt",
      description:
        "Clearly outline the nature of the debt, including: \n o	The original amount owed (principal amount) \n Any applicable interest charges 	A brief description of the underlying transaction (e.g., goods purchased, service rendered, loan agreement)",
    },
    {
      title: "Proof of Debt (Optional)",
      description:
        "Attach copies of invoices, receipts, contracts, or other documents supporting your claim.",
    },
    {
      title: "Demand for Payment",
      description:
        "State the total amount of money owed, including principal and any accrued interest.",
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
        Here&apos;s what a legal notice for money recovery typically includes:
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
        "Be as specific as possible regarding the details of the debt and the actions you expect the recipient to take.",
    },
    {
      title: "Debt Collection Laws",
      description:
        "The specific legalities and requirements for debt collection can vary depending on your location. Ensure your notice adheres to relevant laws.",
    },
    {
      title: "Next Steps",
      description:
        "Outline the next steps you will take if the recipient fails to respond or make payment within the designated time frame. ",
    },
  ];
  return <List list={list} />;
};
