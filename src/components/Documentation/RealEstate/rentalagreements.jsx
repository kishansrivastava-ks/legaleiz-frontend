/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      A rental agreement, also known as a lease agreement, is a legally binding
      contract between a landlord (property owner) and a tenant (renter) that
      outlines the terms and conditions of renting a property. A well-crafted
      rental agreement protects both parties and ensures a smooth and
      transparent rental experience.
    </p>
  </StyledOverview>
);

export const WhyNeed = () => {
  const list = [
    {
      title: "Clarity and Communication",
      description:
        "A clear and detailed agreement eliminates confusion and promotes understanding of expectations for both landlord and tenant.",
    },
    {
      title: "Protection of Rights",
      description:
        "The agreement outlines your rights and responsibilities as a tenant, ensuring you're aware of important details like rent amount, security deposit terms, and maintenance procedures.",
    },
    {
      title: "Dispute Resolutionispute Resolution",
      description:
        "Should disagreements arise, the rental agreement serves as a reference point for resolving them fairly based on the established terms. ",
    },
  ];
  return <List list={list} />;
};

export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description: "Clearly identify the landlord and tenant(s). ",
    },
    {
      title: "Property Description",
      description:
        "Detail the specific property being rented, including the address, unit number, and any included amenities (appliances, parking, etc.).",
    },
    {
      title: "Rental Term",
      description:
        "Specify the duration of the lease agreement (start and end date). ",
    },
    {
      title: "Monthly Rent",
      description:
        "Outline the agreed-upon monthly rent amount, due date, and acceptable methods of payment.",
    },
    {
      title: "Security Deposit",
      description:
        "Define the amount of the security deposit, permitted uses, and terms for its return at the lease end.",
    },
    {
      title: "Utilities",
      description:
        "Specify which utilities are included in the rent and which are the tenant's responsibility.",
    },
    {
      title: "Maintenance and Repairs",
      description:
        "Outline responsibilities for maintaining the property and addressing repairs (normal wear and tear vs. tenant damage).",
    },
    {
      title: "Pet Policy",
      description:
        "Clearly state whether pets are allowed, any restrictions on pet types or numbers, and any associated pet fees.",
    },
    {
      title: "Use of Property",
      description:
        "Define acceptable uses of the property and any limitations on guests or disruptive behavior.",
    },
    {
      title: "Early Termination",
      description:
        "Outline the process and potential penalties for early termination of the lease by either party.",
    },
    {
      title: "Renewal Options",
      description:
        "Specify any provisions for renewing the lease at the end of the term. ",
    },
    {
      title: "Signatures",
      description:
        "Both landlord and tenant(s) should sign and date the agreement to confirm their understanding and acceptance of the terms.",
    },
  ];
  return <List list={list} />;
};

export const AdditionalConsiderations = () => {
  const list = [
    {
      title: "Local Laws",
      description:
        "Rental agreements may need to comply with specific local landlordtenant laws. Researching these regulations can be helpful.",
    },
    {
      title: "Landlord References",
      description:
        "Consider requesting references from previous tenants of the landlord to get a sense of their management style.",
    },
    {
      title: "Move-In/Move-Out Inspections",
      description:
        "Conducting a documented inspection with the landlord at the beginning and end of the lease term is highly recommended.",
    },
  ];
  return <List list={list} />;
};

export const Benefits = () => {
  const list = [
    {
      title: "Customized Protection",
      description:
        "An attorney can ensure the agreement addresses your unique needs and protects your interests as a tenant.",
    },
    {
      title: "Compliance with Laws",
      description:
        "A legal professional can guarantee the agreement complies with all applicable local and state landlord-tenant laws.",
    },
    {
      title: "Rispute Resolution Support",
      description:
        "Having an attorney involved in drafting the agreement can strengthen your position in case of future disagreements.",
    },
  ];
  return (
    <>
      <Paragraph>
        While you may find generic rental agreement templates online, using a
        professionally drafted agreement tailored to your specific situation
        offers significant advantages:
      </Paragraph>
      <List list={list} />
      <Paragraph>
        Don&apos;t navigate the rental process without proper documentation. A
        comprehensive rental agreement protects your rights and ensures a
        smoother rental experience.
      </Paragraph>
    </>
  );
};
export const Disclaimer = () => {
  return (
    <div style={{ fontSize: "1.8rem", lineHeight: "1.4", fontStyle: "italic" }}>
      <span style={{ fontWeight: "bold" }}>Disclaimer:</span>This webpage
      provides general information only and should not be considered legal
      advice. Always consult with a qualified attorney in your area for
      assistance with drafting or reviewing a rental agreement.
    </div>
  );
};
