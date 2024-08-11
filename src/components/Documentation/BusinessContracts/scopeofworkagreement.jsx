/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

const StyledFormat = styled.div``;

export const Overview = () => (
  <StyledOverview>
    <p>
      A Scope of Work Agreement (SOW) is a formal document that outlines the
      details of a project between a client and a service provider (contractor,
      freelancer, agency, etc.). It serves as a roadmap for the project,
      defining the deliverables, timeline, costs, and responsibilities of each
      party.
    </p>
  </StyledOverview>
);

export const Benefits = () => {
  const list = [
    {
      title: "Clarity and Alignment",
      description:
        "An SOW establishes clear expectations for both the client and the service provider, minimizing misunderstandings and potential disputes",
    },
    {
      title: "Project Management",
      description:
        "It provides a framework for project execution, outlining milestones, deliverables, and timelines, aiding in project management.",
    },
    {
      title: "Risk Mitigation",
      description:
        "By clearly defining deliverables and acceptance criteria, an SOW helps manage project risks and ensures work meets the client's needs.",
    },
    {
      title: "Change Management",
      description:
        "The SOW serves as a baseline for the project. If changes arise, the agreement provides a reference point for discussing and documenting any modifications to the scope, timeline, or costs.",
    },
  ];
  return <List list={list} />;
};

export const WhatDoesItInclude = () => {
  const list = [
    {
      title: "Project Description",
      description: "A clear overview of the project's goals and objectives.",
    },
    {
      title: "Deliverables",
      description:
        "A detailed list of the specific deliverables expected from the service provider, including formats, deadlines, and quality standards.",
    },
    {
      title: "Timeline",
      description:
        "A defined timeframe for completing the project, often with key milestones outlined.",
    },
    {
      title: "Costs and Fees",
      description:
        "A clear breakdown of the service provider's fees, including payment schedule and any potential additional costs for out-of-scope work.",
    },
    {
      title: "Responsibilities",
      description:
        "A clear outline of the responsibilities of both the client and the service provider, including communication protocols, approvals, and access to necessary resources.",
    },
    {
      title: "Confidentiality",
      description:
        "Confidentiality provisions to protect sensitive information shared during the project.",
    },
    {
      title: "Termination Clause",
      description:
        "Outlines the conditions under which either party can terminate the agreement.",
    },
  ];
  return (
    <>
      <Paragraph>An SOW typically covers the following key elements:</Paragraph>
      <List list={list} />
    </>
  );
};

export const WhoNeeds = () => {
  const list = [
    {
      title: "",
      description: "Website development projects",
    },
    {
      title: "",
      description: "Marketing campaigns",
    },
    {
      title: "",
      description: "Software development projects",
    },
    {
      title: "",
      description: "Consulting engagements",
    },
    {
      title: "",
      description: "Freelance work arrangements",
    },
  ];
  return (
    <>
      <Paragraph>
        An SOW is highly recommended for any project where a client hires a
        service provider to complete specific tasks or deliver defined outcomes.
        This includes situations like:
      </Paragraph>
      <List list={list} />
    </>
  );
};
export const Developing = () => {
  const list = [
    {
      title: "Collaborative Development",
      description:
        "Involving both the client and service provider in drafting the SOW can ensure it reflects a shared understanding of the project",
    },
    {
      title: "Clarity and Conciseness",
      description: "Use clear and concise language to avoid ambiguity.",
    },
    {
      title: "Flexibility",
      description:
        "While the SOW defines the project scope, build in some flexibility to accommodate unforeseen circumstances.",
    },
    {
      title: "Legal Review",
      description:
        "For complex projects, consider having a lawyer review the SOW to ensure it complies with relevant regulations.",
    },
  ];
  return (
    <>
      <Paragraph>
        There&apos;s no one-size-fits-all approach to SOWs. The specific details
        will vary depending on the complexity and nature of the project.
        However, some general best practices include:
      </Paragraph>
      <List list={list} />
    </>
  );
};
