/* eslint-disable no-unused-vars */
import List from "../List";
import Paragraph from "../Paragraph";
import StyledOverview from "../StyledOverview";

export const Overview = () => (
  <StyledOverview>
    <p>
      A cheque bounce notice, also known as a stop payment notice, is a formal
      legal document demanding payment for a cheque that was returned by the
      bank due to insufficient funds. It serves as a pre-legal action
      notification, urging the recipient (drawer) to settle the outstanding
      amount or face potential legal consequences.
    </p>
  </StyledOverview>
);

export const WhatItIncludes = () => {
  const list = [
    {
      title: "Your Information",
      description:
        "Clearly state your name and contact details as the payee (the person to whom the cheque was written).",
    },
    {
      title: "Drawer Information",
      description:
        "Identify the recipient of the notice (drawer) by name and contact details, the person who issued the bounced cheque.",
    },
    {
      title: "Cheque Details",
      description:
        "Provide specific details about the bounced cheque, including: \nCheque number \n Cheque date \nBank name on which the cheque was drawn o 	Amount of the cheque ",
    },
    {
      title: "Reason for Bounce",
      description:
        'State that the cheque was returned by the bank due to  "insufficient funds" or "stop payment." ',
    },
    {
      title: "Demand for Payment",
      description:
        "Clearly state the total amount owed, including the cheque amount and any applicable interest or late fees (depending on your location and any previous agreements).",
    },
    {
      title: "Deadline for Response",
      description:
        "Specify a reasonable timeframe (usually 7-30 days) for the recipient to respond to the notice and make full payment.",
    },
    {
      title: "Potential Consequences",
      description:
        "Inform the recipient of the potential legal actions you may pursue if they fail to comply within the specified timeframe. This could include filing a lawsuit in court under the Negotiable Instruments Act (NI Act) in many jurisdictions, which can lead to penalties and a requirement to repay the outstanding amount.",
    },
    {
      title: "Copy of the Cheque (Optional)",
      description:
        "Attach a copy of the bounced cheque as proof for your claim.",
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
        Here&apos;s what a legal notice for cheque bounce typically includes:
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
      title: "Timeliness",
      description:
        "There may be specific time limits for presenting a legal notice for a bounced cheque, depending on your location. It's important to act promptly after receiving notification from the bank about the bounced cheque.",
    },
    {
      title: "Negotiation",
      description:
        "The notice can be a starting point for negotiation. You may be open to alternative solutions like a payment plan, depending on the situation.",
    },
    {
      title: "Debt Collection Laws",
      description:
        "The specific legalities and requirements for debt collection due to a bounced cheque can vary depending on your location. Ensure your notice adheres to relevant laws. ",
    },
  ];
  return <List list={list} />;
};
