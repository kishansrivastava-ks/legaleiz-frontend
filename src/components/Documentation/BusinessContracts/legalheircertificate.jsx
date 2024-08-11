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
      A legal heir certificate is a crucial document that verifies the legal
      inheritors of a deceased person&apos;s estate. It plays a vital role in
      claiming ownership and managing the assets left behind, such as property,
      bank accounts, investments, and other financial holdings
    </p>
  </StyledOverview>
);

export const WhatDoesItDo = () => {
  const list = [
    {
      title: "Transferring Assets",
      description:
        "Financial institutions and government agencies often require a legal heir certificate before transferring assets like bank accounts or property ownership to the rightful inheritors.",
    },
    {
      title: "Claiming Benefits",
      description:
        "The certificate can be necessary to claim benefits owed to the deceased, such as pension funds or insurance payouts.",
    },
    {
      title: "Resolving Disputes",
      description:
        "If there are multiple claimants to the estate, a legal heir certificate can help establish rightful inheritance and avoid legal complications.",
    },
  ];
  return (
    <>
      <Paragraph>
        This certificate acts as official proof that you are legally entitled to
        inherit the assets of the deceased. Here&apos;s how it helps:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const WhoCanApply = () => {
  const list = [
    {
      title: "",
      description: " Spouse of the deceased ",
    },
    {
      title: "",
      description: "Children and biological parents of the deceased",
    },
    {
      title: "",
      description:
        "In some cases, siblings, adopted children, or other dependents (depending on inheritance laws and the presence of a will) ",
    },
  ];
  return (
    <>
      <Paragraph>
        The legal heirs entitled to apply for the certificate typically include:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Obtaining = () => {
  const list = [
    {
      title: "Gather Documents",
      description:
        "Compile documents like the death certificate of the deceased, proof of your relationship (e.g., marriage certificate, birth certificate), and proof of residence",
    },
    {
      title: "Application:",
      description:
        "Obtain the application form from the designated issuing authority, which can be a local government office (e.g., तहसीलदार - Tehsildar in India) or a court",
    },
    {
      title: "Submission",
      description:
        "Submit the completed application form along with the required documents and fees",
    },
    {
      title: "Verification",
      description:
        "The issuing authority may verify the information and conduct any necessary inquiries",
    },
    {
      title: "Issuance",
      description:
        "Upon successful verification, you will receive the official legal heir certificate",
    },
  ];
  return (
    <>
      <Paragraph>
        The process for obtaining a legal heir certificate varies depending on
        your location. However, it generally involves these steps:
      </Paragraph>
      <List list={list} />
    </>
  );
};
export const Consideration = () => {
  const list = [
    {
      title: "Succession Certificate vs. Legal Heir Certificate",
      description:
        "In some jurisdictions, a legal heir certificate may not be sufficient for claiming all types of assets. A succession certificate, issued by a court, might be necessary for inheriting immovable property or complex estates.",
    },
    {
      title: "Time Limits",
      description:
        "There may be time limitations for applying for a legal heir certificate. Check with your local authority for any deadlines.",
    },
    {
      title: "Legal Assistance",
      description:
        "Consider seeking legal advice, especially if the inheritance process is complex or involves disputes",
    },
  ];
  return <List list={list} />;
};
