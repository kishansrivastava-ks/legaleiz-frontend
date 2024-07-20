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
      A Vendor Agreement, also known as a Supplier Agreement, is a legally
      binding contract between a company (Client) and a vendor (Supplier) that
      outlines the terms and conditions for the provision of goods or services.
      It serves to protect both parties by clearly defining expectations and
      responsibilities.
    </p>
  </StyledOverView>
);

export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description:
        "Clearly identifies the client and the vendor, including their legal names and contact information",
    },
    {
      title: "Scope of Work",
      description:
        "Defines the specific goods or services the vendor will provide. This should include detailed descriptions, specifications, and quantities",
    },
    {
      title: "Deliverables and Timelines",
      description:
        "Specifies the expected outputs from the vendor, including deadlines and milestones for completion",
    },
    {
      title: "Pricing and Payment Schedule",
      description:
        "Establishes the cost of the goods or services, including any applicable taxes, discounts, and the payment schedule (e.g.net 30 days)",
    },
    {
      title: "Quality Standards",
      description:
        "Outlines the quality expectations for the delivered goods or services",
    },
    {
      title: "Term and Termination",
      description:
        "Defines the duration of the agreement and outlines the process for termination by either party under specific circumstances (including notice period).",
    },
    {
      title: "Intellectual Property",
      description:
        "Clarifies ownership rights to any intellectual property developed during the course of the agreement",
    },
    {
      title: "Confidentiality",
      description:
        "Protects sensitive information shared between the client and the vendor",
    },
    {
      title: "Warranties and Guarantees",
      description:
        "May include provisions regarding warranties offered by the vendor on the goods or services provided",
    },
    {
      title: "Limitation of Liability",
      description:
        "Outlines the maximum extent to which each party is liable for damages arising from the agreement",
    },
    {
      title: "Dispute Resolution",
      description:
        "Establishes a method for resolving any disagreements that may arise.",
    },
    {
      title: "Governing Law",
      description:
        "Specifies the legal jurisdiction that applies to the agreement",
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
      title: "Clear Communications",
      description:
        "Promotes a shared understanding of expectations and reduces the risk of misunderstandings. ",
    },
    {
      title: "Risk Mitigations",
      description:
        "Protects both parties by outlining potential risks and liabilities. ",
    },
    {
      title: "Efficient Collaborations",
      description:
        "Provides a framework for a smooth and productive working relationship. ",
    },
    {
      title: "Legal Protection",
      description:
        "Serves as a legal document enforceable in court if necessary. ",
    },
  ];
  return <List list={list} />;
};

export const Considerations = () => {
  const list = [
    {
      title: "",
      description:
        "The complexity of a vendor agreement will vary depending on the nature and value of the goods or services involved",
    },
    {
      title: "",
      description:
        "It's advisable to consult with a lawyer to ensure the agreement is legally sound and reflects the specific needs of your business arrangement",
    },
    {
      title: "",
      description:
        "Several online resources offer general vendor agreement templates, but these should be adapted to your specific situation.",
    },
  ];
  return <List list={list} />;
};
