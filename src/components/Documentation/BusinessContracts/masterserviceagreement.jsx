import styled from "styled-components";
import List from "../List";
import StyledOverview from "../StyledOverview";

export const Overview = () => (
  <StyledOverview>
    <p>
      A master service agreement (MSA) is a foundational legal document that
      establishes the core terms and conditions for ongoing service engagements
      between a client (you) and a vendor (service provider). Think of it as a
      blueprint for a successful working relationship, outlining expectations
      and reducing complexity for future projects. .
    </p>
  </StyledOverview>
);

export const Needs = () => {
  const list = [
    {
      title: "Streamlined Efficiency",
      description:
        "By establishing core terms upfront, MSAs save time and  resources by eliminating the need to renegotiate basic terms for each individual project.",
    },
    {
      title: "Clear Communication",
      description:
        "An MSA ensures both parties are on the same page regarding key aspects like service delivery, payment terms, confidentiality, and dispute resolution.",
    },
    {
      title: "Risk Management",
      description:
        "A well-defined MSA helps mitigate potential risks by outlining  limitations of liability and indemnification clauses. ",
    },
  ];
  return (
    <>
      <List list={list} />
    </>
  );
};
export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description: "Clearly identify the client and vendor.",
    },
    {
      title: "Services Provided",
      description:
        "Define the scope of services offered by the vendor, including",
    },
    {
      title: "Fees and Payment",
      description:
        "Specify pricing, payment terms, invoicing procedures, and  preferred payment methods.",
    },
    {
      title: "Term and Termination",
      description:
        "Outline the contract duration, renewal options, and  termination clauses for various scenarios.",
    },
    {
      title: "Confidentiality",
      description:
        "Protect sensitive information shared during the course of the service engagement.",
    },
    {
      title: "Intellectual Property Rights",
      description:
        "Define ownership of any intellectual property  developed during the project.",
    },
    {
      title: "Warranties and Disclaimers",
      description:
        "Specify warranties offered by the vendor and any  disclaimers of liability.",
    },
    {
      title: "Dispute Resolution",
      description:
        "Establish a process for resolving disagreements that may arise ",
    },
    {
      title: "Force Majeure",
      description:
        "Outline how unforeseen circumstances (acts of nature, etc.) will be addressed.",
    },
    {
      title: "Governing Law",
      description:
        "Specify the legal jurisdiction that governs the agreement. ",
    },
  ];
  return <List list={list} />;
};
export const Benefits = () => {
  const list = [
    {
      title: "",
      description:
        "A well-crafted MSA promotes a smooth and successful working relationship for the long term. It fosters trust, reduces friction, and ensures both parties are protected throughout the course of their collaboration.",
    },
  ];
  return <List list={list} />;
};
export const Disclaimer = () => {
  return (
    <Disclaim>
      <span style={{ fontWeight: "bold" }}>Disclaimer:&nbsp;</span>This webpage
      provides general information only and should not be considered legal
      advice. It&apos;s highly recommended to consult with a business attorney
      to create a Master Service Agreement customized to your specific needs
    </Disclaim>
  );
};

const Disclaim = styled.div`
  font-size: 1.8rem;
  line-height: 1.4;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 2vmax;
    text-align: justify;
  }
`;
