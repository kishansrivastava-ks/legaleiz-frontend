/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

const StyledFormat = styled.div``;

// const StyledExamples = styled.div``;
const StyledTemplate = styled.div``;
const StyledViolate = styled.div``;

export const Overview = () => (
  <StyledOverview>
    <p>
      A Share Purchase Agreement (SPA) is a legally binding contract that
      outlines the terms and conditions for the purchase and sale of shares in a
      company. It serves as a roadmap for the transaction, protecting the
      interests of both the buyer (purchaser) and the seller.
    </p>
  </StyledOverview>
);

export const WhatDoesItInclude = () => {
  const list = [
    {
      title: "Parties Involved",
      description:
        "Clearly identifies the buyer and seller of the shares, along with their respective details",
    },
    {
      title: "Shares Being Sold",
      description:
        "Specifies the number of shares being purchased, along with details like class of shares, any restrictions, and voting rights.",
    },
    {
      title: "Purchase Price",
      description:
        "Defines the total consideration being paid for the shares, including the breakdown of any upfront payment and potential earn-out structures (performance-based compensation).  ",
    },
    {
      title: "Representations and Warranties",
      description:
        "These are statements made by the seller regarding the company's financial health, legal standing, and ownership of the shares. These statements offer the buyer a level of assurance",
    },
    {
      title: "Conditions Precedent",
      description:
        "These are certain conditions that need to be fulfilled before the sale can be completed. Examples include regulatory approvals, due diligence completion, or obtaining necessary third-party consents.",
    },
    {
      title: "Closing",
      description:
        "This section outlines the transfer process for the shares, payment terms, and any other actions required to finalize the transaction. ",
    },
    {
      title: "Representations and Indemnification",
      description:
        "This section defines the remedies available to either party if the other breaches the agreement's terms",
    },
  ];
  return (
    <>
      <Paragraph>
        An SPA typically covers a range of critical elements, including:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Importance = () => {
  const list = [
    {
      title: "Clarity and Certainty",
      description:
        "It establishes a clear understanding of the transaction's terms for both parties",
    },
    {
      title: "•	Risk Mitigation",
      description:
        "By outlining representations, warranties, and indemnities, it helps manage potential risks associated with the sale.",
    },
    {
      title: "Dispute Resolution",
      description:
        "The SPA serves as a reference point in case of disagreements or unforeseen circumstances.",
    },
    {
      title: "Confidentiality",
      description:
        "Confidentiality provisions within the agreement can protect sensitive business information.",
    },
  ];
  return (
    <>
      <Paragraph>A well-drafted SPA provides several key benefits:</Paragraph>
      <List list={list} />
    </>
  );
};

export const WhoNeeds = () => {
  const list = [
    {
      title: "",
      description: "Acquisitions of entire companies or controlling interests ",
    },
    {
      title: "",
      description: "Purchases of minority stakes in a company",
    },
    {
      title: "",
      description: "Acquisitions of assets through a share purchase",
    },
  ];
  return (
    <>
      <Paragraph>
        An SPA is essential for any transaction involving the purchase and sale
        of company shares. This includes:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const SeekingLegalCounsel = () => (
  <StyledOverview>
    <p>
      Due to the legal complexities involved, it&apos;s highly recommended to
      involve lawyers experienced in corporate law to draft and review a Share
      Purchase Agreement. They can ensure the agreement protects your interests
      and complies with relevant regulations
    </p>
  </StyledOverview>
);
