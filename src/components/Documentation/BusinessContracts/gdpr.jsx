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
      The General Data Protection Regulation (GDPR) is a regulation in EU law on
      data privacy and security. It empowers individuals and places obligations
      on organizations that handle personal data. This webpage provides a
      comprehensive overview of GDPR, its key principles, and how it can impact
      your business.
    </p>
  </StyledOverview>
);

export const WhatIsPersonalData = () => {
  const list = [
    {
      title: "",
      description: "Names and contact information (email, phone numbers) ",
    },
    {
      title: "",
      description: "Location data (GPS coordinates, IP address)",
    },
    {
      title: "",
      description: "Online identifiers (cookies, social media profiles)",
    },
    {
      title: "",
      description: "Health data",
    },
    {
      title: "",
      description: "Financial data",
    },
  ];
  return (
    <>
      <Paragraph>
        The GDPR applies to a broad range of personal data, which includes any
        information relating to an identified or identifiable natural person.
        Here are some examples:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const RightsGranted = () => {
  const list = [
    {
      title: "Right to access",
      description:
        "Individuals can request a copy of their personal data held by an organization.",
    },
    {
      title: "Right to rectification",
      description:
        "Individuals have the right to request correction of inaccurate or incomplete personal data",
    },
    {
      title: "Right to erasure (Right to be forgotten)",
      description:
        "Individuals can request deletion of their personal data under certain circumstances.",
    },
    {
      title: "Right to restrict processing",
      description:
        "Individuals can restrict the processing of their personal data in specific situations.",
    },
    {
      title: "Right to data portability",
      description:
        "Individuals can request to receive their personal data in a structured format and have it transferred to another controller.",
    },
    {
      title: "Right to object to automated decision-making",
      description:
        "Individuals can object to automated decisions made solely on their personal data (e.g., credit scoring).",
    },
  ];
  return (
    <>
      <Paragraph>
        The GDPR grants individuals (data subjects) a number of rights regarding
        their personal data. These rights include:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Obligations = () => {
  const list = [
    {
      title: "Lawful Basis for Processing",
      description:
        "Organizations must have a lawful basis for processing personal data, such as consent, contract, or legitimate interest.",
    },
    {
      title: "Transparency",
      description:
        "Organizations must be transparent about how they collect, use, and store personal data. This includes providing a privacy policy that clearly outlines data practices. ",
    },
    {
      title: "Data Security",
      description:
        "Organizations must implement appropriate technical and organizational measures to protect personal data from unauthorized access, disclosure, alteration, or destruction.",
    },
    {
      title: "Data Breach Notification",
      description:
        "Organizations must notify the relevant authorities and data subjects in case of a personal data breach.",
    },
    {
      title: "Appointment of a Data Protection Officer (DPO)",
      description:
        "For high-risk processing activities or when processing a large scale of personal data, organizations may be required to appoint a Data Protection Officer (DPO).",
    },
  ];
  return (
    <>
      <Paragraph>
        The GDPR places a number of obligations on organizations that control or
        process the personal data of EU residents, regardless of the
        organization&apos;s location. These obligations include:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const BusinessImpact = () => {
  return (
    <StyledOverview>
      <Paragraph>
        If your business collects, uses, or stores the personal data of EU
        residents, you need to comply with the GDPR. Non-compliance can lead to
        significant fines.
      </Paragraph>
    </StyledOverview>
  );
};
export const BecomeGDPRCompliant = () => {
  const list = [
    {
      title: "Conduct a data audit",
      description:
        "Identify the personal data you collect, how you use it, and where it is stored.",
    },
    {
      title: "Update your privacy policy",
      description:
        "Ensure your privacy policy clearly outlines your data practices and complies with GDPR requirements.",
    },
    {
      title: "Implement data security measures",
      description:
        "Take steps to secure personal data and prevent unauthorized access or breaches. ",
    },
    {
      title: "Implement procedures for handling data subject requests",
      description:
        "Establish processes for handling requests from individuals regarding their data privacy rights under GDPR. ",
    },
  ];
  return (
    <>
      <Paragraph>
        Here are some steps you can take to become GDPR compliant:
      </Paragraph>
      <List list={list} />
    </>
  );
};
