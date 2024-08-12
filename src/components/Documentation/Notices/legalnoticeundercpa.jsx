/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      A legal notice under the Consumer Protection Act (CPA) is a formal
      document notifying a seller or service provider (opposite party) of a
      potential violation of consumer rights and demanding corrective action. It
      serves as a pre-litigation step, aiming for an amicable resolution before
      resorting to court.
    </p>
  </StyledOverview>
);

export const WhenToUse = () => {
  const list = [
    {
      title: "Defective Goods",
      description:
        "If you purchased a faulty or defective product and the seller refuses to repair, replace, or offer a refund.",
    },
    {
      title: "Deficient Services",
      description:
        "If you received a service that was not performed as promised or according to industry standards.",
    },
    {
      title: "Unfair Trade Practices",
      description:
        "If you encounter misleading advertising, hidden charges, or unfair contract terms.",
    },
    {
      title: "Product Guarantee Issues",
      description:
        "If the seller fails to honor a product guarantee or warranty.",
    },
    {
      title: "Delivery Issues",
      description:
        "If the product is not delivered within the promised timeframe or arrives damaged.",
    },
  ];
  return (
    <>
      <Paragraph>
        There are various situations where a legal notice under the CPA might be
        appropriate:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const WhatToInclude = () => {
  const list = [
    {
      title: "Your Information",
      description:
        "Clearly state your name, contact details, and your capacity as a consumer.",
    },
    {
      title: "Opposite Party Information",
      description:
        "Identify the seller or service provider (opposite party) by name and contact details.",
    },
    {
      title: "Description of Transaction",
      description:
        "Provide details about the transaction, including: \n	Date of purchase \n	Description of the product or service purchased o Amount paid \n	Mode of payment (cash, credit card, etc.) ",
    },
    {
      title: "Specific Allegations",
      description:
        "Clearly outline the specific violation of the Consumer Protection Act you believe has occurred. Be specific about the defect, deficiency, or unfair practice. ",
    },
    {
      title: "Supporting Evidence (Optional)",
      description:
        "Attach copies of invoices, receipts, warranty cards, or any communication you've had with the seller/service provider regarding the issue.",
    },
    {
      title: "Demand for Resolution",
      description:
        "State your desired outcome. This could be a repair, replacement, refund, or other form of compensation.",
    },
    {
      title: "Deadline for Response",
      description:
        "Specify a reasonable timeframe (usually 7-30 days) for the opposite party to respond to the notice and address your concerns.",
    },
    {
      title: "Reference to CPA",
      description:
        "Mention the specific sections of the Consumer Protection Act that you believe have been violated. (e.g., Section 2(1) on unfair trade practices).",
    },
    {
      title: "Potential Consequences",
      description:
        "Inform the opposite party of the potential legal actions you may take if they fail to comply within the specified timeframe. This could include filing a formal complaint with the Consumer Forum, a civil lawsuit, or seeking intervention from relevant government agencies.",
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
        A well-drafted legal notice under the CPA should typically include the
        following elements:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const ImportantConsiderations = () => {
  const list = [
    {
      title: "Clarity and Conciseness",
      description:
        "Strive for a clear and concise explanation of the issue, avoiding legal jargon.",
    },
    {
      title: "Legal Advice",
      description:
        "While you can draft the notice yourself, consulting with a consumer lawyer is recommended for complex situations. They can ensure the notice is legally sound and advise you on the best course of action.",
    },
    {
      title: "Time Limits",
      description:
        "Some jurisdictions may have specific time limits for filing a consumer complaint. Act promptly to ensure you meet any deadlines.",
    },
    {
      title: "Alternative Dispute Resolution (ADR)",
      description:
        "Consider exploring alternative dispute resolution (ADR) mechanisms like mediation before resorting to litigation. ",
    },
  ];
  return <List list={list} />;
};
