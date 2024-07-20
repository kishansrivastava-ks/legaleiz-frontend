/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";

const StyledOverView = styled.div`
  /* padding: 5px 10px; */
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
      A Memorandum of Understanding (MOU) is a formal document outlining the
      agreed upon terms between two or more parties. It establishes a framework
      for collaboration and sets expectations for future interactions. While not
      always legally binding, an MOU signifies a significant step towards a
      successful partnership.
    </p>
  </StyledOverView>
);

export const Included = () => {
  const list = [
    {
      title: "Parties Involved",
      description:
        "Clearly identifies all participating organizations or  individuals",
    },
    {
      title: "Purpose and Objectives",
      description:
        "Defines the overall goal of the agreement and the  desired outcomes for each party",
    },
    {
      title: "Scope of Work",
      description:
        "Outlines the specific activities or projects covered by the MOU.",
    },
    {
      title: "Roles and Responsibilities",
      description:
        "Details the expected contributions and commitments of each party",
    },
    {
      title: "Term and Termination",
      description:
        "Defines the duration of the agreement and outlines the process for termination (if applicable).",
    },
    {
      title: "Confidentiality",
      description:
        "May include provisions regarding the protection of sensitive information",
    },
    {
      title: "Dispute Resolution",
      description:
        "Establishes a method for resolving any disagreements that may arise",
    },
    {
      title: "Signatures",
      description:
        " Authorized representatives from each party sign the document to signify their agreement. ",
    },
  ];
  return <List list={list} />;
};

export const Benefits = () => {
  const list = [
    {
      title: "Clear Communication",
      description: "Promotes a shared understanding of expectations and goals.",
    },
    {
      title: "Enhanced Collaboration",
      description: "Provides a framework for cooperative efforts.",
    },
    {
      title: "Reduced Risk",
      description: "Minimizes potential misunderstandings and conflicts",
    },
    {
      title: "Relationship Building",
      description:
        " Establishes a foundation for a trusting and productive partnership.",
    },
  ];
  return <List list={list} />;
};

export const WhoUses = () => {
  const list = [
    {
      title: "Business",
      description: "Partnerships, joint ventures, research collaborations",
    },
    {
      title: "Government",
      description:
        "International relations, program development, information sharing.",
    },
    {
      title: "Non-profit",
      description:
        " Collaborative projects, fundraising initiatives, resource sharing.",
    },
    {
      title: "Academia",
      description:
        " Research partnerships, student exchange programs, faculty collaborations",
    },
  ];
  return (
    <>
      <p style={{ marginBottom: "1rem" }}>
        MOUs are commonly used in various sectors, including:
      </p>
      <List list={list} />
    </>
  );
};
