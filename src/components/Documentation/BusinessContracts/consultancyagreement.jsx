/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";

const StyledOverView = styled.div`
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
      A Consultancy Agreement is a formal document that outlines the terms and
      conditions between a consultant (individual or company) and a client
      (company or individual) seeking professional services. It serves as a
      roadmap for the project, ensuring clarity and protection for both parties.
    </p>
  </StyledOverView>
);

export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description:
        "Clearly identifies the consultant and the client, including their legal names and contact information",
    },
    {
      title: "Services Provided",
      description:
        "Defines the specific services the consultant will deliver. This should be detailed and comprehensive to avoid misunderstandings",
    },
    {
      title: "Project Scope",
      description:
        " Outlines the deliverables, timelines, and milestones associated with the project",
    },
    {
      title: "Fees and Payment Schedule",
      description:
        "Specifies the consultant's compensation, including the total fee, payment structure (hourly, retainer, etc.), and due dates for invoices",
    },
    {
      title: "Term and Termination",
      description:
        "Defines the duration of the agreement and outlines the process for termination by either party (including notice period). ",
    },
    {
      title: "Confidentiality",
      description:
        " Protects sensitive information shared during the course of the project. ",
    },
    {
      title: "Intellectual Property",
      description:
        "Clarifies ownership rights to any work product or intellectual property created by the consultant during the project. ",
    },
    {
      title: "Dispute Resolution",
      description:
        "Establishes a method for resolving any disagreements that may arise.",
    },
    {
      title: "Governing Law",
      description:
        "Specifies the legal jurisdiction that applies to the agreement. ",
    },
    {
      title: "Signatures",
      description:
        "Authorized representatives from both parties sign the document to signify their agreement",
    },
  ];
  return <List list={list} />;
};

export const Benefits = () => {
  const list = [
    {
      title: "Clear Expectations",
      description:
        "Provides a written record of the project scope, timelines, and responsibilities, minimizing misunderstandings",
    },
    {
      title: "Protection for Both Parties",
      description:
        "Outlines the rights and obligations of both the consultant and the client, promoting a fair and professional working relationship.",
    },
    {
      title: "Dispute Resolution Framework",
      description:
        "Establishes a process for addressing disagreements efficiently.",
    },
    {
      title: "Professionalism",
      description:
        "Demonstrates a commitment to a well-defined and legally sound working arrangement.",
    },
  ];
  return <List list={list} />;
};
