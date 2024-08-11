/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      Probate is the legal process of administering a deceased person&apos;s
      estate (assets and liabilities) according to their wishes outlined in a
      valid will. It involves several steps to ensure the will&apos;s
      authenticity, settle outstanding debts, and distribute remaining assets to
      the beneficiaries.
    </p>
  </StyledOverview>
);

export const WhoNeeds = () => {
  const list = [
    {
      title: "Existence of a Will",
      description:
        "If the deceased left a will, probate is usually necessary to validate the document and ensure its proper execution.",
    },
    {
      title: "Complex Estates",
      description:
        "For estates with significant assets, multiple beneficiaries, or complex financial holdings, probate helps ensure a smooth and legal distribution process.",
    },
    {
      title: "Assets Requiring Title Transfer",
      description:
        "Probate is often required to transfer ownership of certain assets like real estate, where the will becomes the legal basis for the transfer. ",
    },
  ];
  return (
    <>
      <Paragraph>
        Probate isn&apos;t always mandatory. Here&apos;s a breakdown of when it
        typically comes into play:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Process = () => {
  const list = [
    {
      title: "Filing the Petition",
      description:
        "The executor named in the will (or someone else designated by law) files a petition with the probate court, along with the original will and a death certificate.",
    },
    {
      title: "Notice to Beneficiaries and Heirs",
      description:
        "The court notifies the beneficiaries named in the will and any potential heirs who might have a legal claim to the estate.",
    },
    {
      title: "Debt Settlement",
      description:
        "The estate's debts and taxes are identified and paid using estate assets.",
    },
    {
      title: "Inventory and Valuation",
      description:
        "An inventory of all estate assets and their estimated values is created.",
    },
    {
      title: "Dispute Resolution",
      description:
        "If any disputes arise regarding the validity of the will or the distribution of assets, the court will address them.",
    },
    {
      title: "Asset Distribution",
      description:
        "Once all debts and taxes are settled and any disputes resolved, the remaining assets are distributed to the beneficiaries as outlined in the will.",
    },
  ];
  return (
    <>
      <Paragraph>
        The probate process can vary slightly depending on your location, but it
        generally follows these key steps:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Benefits = () => {
  const list = [
    {
      title: "Validation of the Will",
      description:
        "It establishes the will's legitimacy and ensures the deceased's wishes are followed.",
    },
    {
      title: "Debt Settlement",
      description:
        "Probate provides a structured process for settling outstanding debts and taxes.",
    },
    {
      title: "Dispute Resolution",
      description:
        "The court can mediate and resolve any disagreements regarding the estate.",
    },
    {
      title: "Beneficiary Protection",
      description:
        "Probate helps safeguard the rights of beneficiaries named in the will.",
    },
  ];
  return (
    <>
      <Paragraph>Probate offers several advantages:</Paragraph>
      <List list={list} />
    </>
  );
};

export const Drawbacks = () => {
  const list = [
    {
      title: "Time-Consuming",
      description:
        "The probate process can take months or even a year to complete.",
    },
    {
      title: "Costly",
      description:
        "Court fees, attorney fees, and other associated expenses can add up. ",
    },
    {
      title: "Public Process",
      description:
        "Probate proceedings become part of public record, which some may prefer to avoid.",
    },
  ];
  return (
    <>
      <Paragraph>Probate can also have some downsides: </Paragraph>
      <List list={list} />
    </>
  );
};

export const Alternatives = () => {
  const list = [
    {
      title: "Small Estate Procedures",
      description:
        "Many jurisdictions have simplified procedures for smaller estates that can be faster and less expensive than full probate",
    },
    {
      title: "Transfer on Death (TOD) Registration",
      description:
        "Assets like bank accounts or investment accounts can be registered with a TOD beneficiary, allowing them to automatically transfer upon the owner's death, bypassing probate.",
    },
    {
      title: "•	Living Trusts",
      description:
        "Creating a living trust can help avoid probate for assets placed within the trust.",
    },
  ];
  return (
    <>
      <Paragraph>
        In some cases, depending on your location and the size of the estate,
        alternatives to probate might be available:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const LegalGuidance = () => (
  <StyledOverview>
    <p>
      Probate can be a complex process. Consulting with an experienced probate
      attorney in your area is highly recommended. They can guide you through
      the probate process, ensure its proper execution, and address any legal
      issues that may arise
    </p>
  </StyledOverview>
);
