/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      Throughout a tenancy, situations may arise that require clear
      communication between landlords and tenants. Rental tenant notices serve
      as a formal way to communicate important information, whether it&apos;s
      notifying the tenant of a rent increase, requesting repairs, or initiating
      the lease termination process.
    </p>
  </StyledOverview>
);

export const Types = () => {
  const list = [
    {
      title: "Notice to Pay Rent",
      description:
        "This notice informs the tenant of late rent and potential consequences for non-payment, such as late fees or eviction.",
    },
    {
      title: "Notice to Cure",
      description:
        "This notice outlines a violation of the lease agreement by the tenant and provides them with a timeframe to rectify the issue. Examples might be unauthorized occupants, pet violations, or property damage.",
    },
    {
      title: "Notice of Lease Termination",
      description:
        "Used by either landlord or tenant to inform the other party of their intention to end the lease agreement at the lease end or with proper notice (typically 30-60 days).",
    },
    {
      title: "Notice of Entry",
      description:
        "Landlords may require written notice to enter the rental property for specific reasons, such as repairs, inspections, or showing the unit to prospective tenants (with proper notice to the current tenant).",
    },
    {
      title: "Notice of Rent Increase",
      description:
        "In jurisdictions with rent control regulations, landlords may need to provide a specific notice format and time frame when increasing the rent.",
    },
  ];
  return (
    <>
      <Paragraph>
        Here are some common types of rental tenant notices a landlord may need
        to use:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Importance = () => {
  const list = [
    {
      title: "Legal Compliance",
      description:
        "Failing to provide proper notice can weaken a landlord's position in eviction proceedings or other legal disputes.",
    },
    {
      title: "Tenant Rights",
      description:
        "Proper notice ensures tenants are aware of their rights and obligations under the lease agreement.",
    },
    {
      title: "Clear Communication",
      description:
        "Formal notices promote clear communication and help avoid misunderstandings between landlords and tenants.",
    },
  ];
  return <List list={list} />;
};

export const Content = () => {
  const list = [
    {
      title: "Landlord Information",
      description: "Name and contact information of the landlord. ",
    },
    {
      title: "Tenant Information",
      description: "Name(s) of the tenant(s) and the rental property address. ",
    },
    {
      title: "Date",
      description: "Date the notice is issued.",
    },
    {
      title: "Notice Type",
      description:
        "Clearly state the type of notice being served (e.g., Notice to Pay Rent, Notice of Lease Termination).",
    },
    {
      title: "Reason for Notice (if applicable)",
      description:
        'For notices like "Notice to Cure", explain the violation and required corrective action.',
    },
    {
      title: "Response Timeframe (if applicable)",
      description:
        "Specify the timeframe for the tenant to respond to the notice (e.g., pay rent, rectify a violation).",
    },
    {
      title: "Landlord Signature",
      description: "Signature of the landlord (or authorized representative). ",
    },
  ];
  return (
    <>
      <Paragraph>
        While specific content may vary depending on the notice type and local
        regulations, here are some general elements to include:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const DeliveryMethods = () => {
  const list = [
    {
      title: "Legal Compliance",
      description:
        "Failing to provide proper notice can weaken a landlord's position in eviction proceedings or other legal disputes.",
    },
    {
      title: "Tenant Rights",
      description:
        "Proper notice ensures tenants are aware of their rights and obligations under the lease agreement.",
    },
    {
      title: "Clear Communication",
      description:
        "Formal notices promote clear communication and help avoid misunderstandings between landlords and tenants.",
    },
  ];
  return <List list={list} />;
};

export const AdditionalConsiderations = () => {
  const list = [
    {
      title: "Local Regulations",
      description:
        "Always research and comply with specific notice requirements in your jurisdiction.",
    },
    {
      title: "State and Federal Laws",
      description:
        "Fair housing laws and landlord-tenant rights may dictate notice procedures in certain situations.",
    },
    {
      title: "Seek Legal Advice",
      description:
        "If you have any uncertainties or face complex situations, consulting with a tenant-landlord attorney is highly recommended.",
    },
  ];
  return <List list={list} />;
};

export const Note = () => (
  <Paragraph>
    Rental tenant notices are a crucial tool for clear communication and
    upholding the rights of both landlords and tenants. Understanding proper
    notice procedures ensures a smoother and more transparent rental experience.
  </Paragraph>
);

export const Disclaimer = () => {
  return (
    <div style={{ fontSize: "1.8rem", lineHeight: "1.4", fontStyle: "italic" }}>
      <span style={{ fontWeight: "bold" }}>Disclaimer:</span>This webpage
      provides general information only and should not be considered legal
      advice. Always consult with a qualified attorney in your area for specific
      guidance on rental tenant notices and landlord-tenant laws.
    </div>
  );
};
