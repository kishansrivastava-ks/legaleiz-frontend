/* eslint-disable no-unused-vars */
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";
import List from "../List";

export const Overview = () => (
  <StyledOverview>
    <p>
      A power of attorney (POA) is a legal document that authorizes another
      person, called the agent or attorney-in-fact, to act on your behalf in
      specific matters. It grants them the power to make decisions and take
      actions as if they were you.
    </p>
  </StyledOverview>
);

export const Types = () => {
  const list = [
    {
      title: "General Power of Attorney",
      description:
        "Grants broad authority to the agent to handle a wide range of financial, legal, and property-related matters.",
    },
    {
      title: "Limited Power of Attorney",
      description:
        "Restricts the agent's authority to specific tasks or decisions, often for a set period. Examples include selling a particular property, managing bank accounts, or making healthcare decisions.",
    },
    {
      title: "Springing Power of Attorney",
      description:
        "The POA only becomes effective upon the occurrence of a specific event, such as your incapacitation due to illness or injury. ",
    },
    {
      title: "Durable Power of Attorney",
      description:
        "This POA remains valid even if you become mentally incapacitated, ensuring continuity in decision-making.",
    },
  ];
  return (
    <>
      <Paragraph>
        There are various POAs designed for different situations. Here&apos;s a
        breakdown of some common types
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const WhenIsItUsed = () => {
  const list = [
    {
      title: "Travel or extended absence",
      description:
        "If you'll be away for a long time, a POA allows someone to handle your affairs in your absence.",
    },
    {
      title: "Medical treatment",
      description:
        "A healthcare POA empowers someone to make medical decisions on your behalf if you're unable to do so",
    },
    {
      title: "Financial management",
      description:
        "A POA can be used to authorize someone to manage your finances, such as paying bills or investing on your behalf.",
    },
    {
      title: "Property management",
      description:
        "An agent can be entrusted with managing your property, including repairs or tenant relations.",
    },
    {
      title: "Estate planning",
      description:
        "As part of estate planning, a POA can ensure someone you trust can handle your affairs if you pass away.",
    },
  ];
  return (
    <>
      <Paragraph>
        There are several situations where a POA can be beneficial:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const CreatingPOA = () => {
  const list = [
    {
      title: "Choose an Agent",
      description:
        "Select a trustworthy and reliable person to act as your agent. ",
    },
    {
      title: "Determine the Scope of Authority",
      description:
        "Decide what level of authority you want to grant your agent (general or limited). ",
    },
    {
      title: "Consult with an Attorney",
      description:
        "Consider seeking legal advice to ensure the POA is drafted correctly and reflects your wishes.",
    },
    {
      title: "Sign and Witness",
      description:
        "Sign the POA in the presence of witnesses who can verify your signature. Notarization (optional): In some cases, notarization may be required for the POA to be valid",
    },
  ];
  return (
    <>
      <Paragraph>
        The process for creating a POA varies depending on your location.
        However, it generally involves these steps:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const RevokingPOA = () => {
  const list = [
    {
      title: "Choosing the Right Agent",
      description:
        "Select someone you trust implicitly to make decisions in your best interests.",
    },
    {
      title: "Understanding the Scope of Authority",
      description:
        "Clearly define the limitations or extent of power granted to your agent.",
    },
    {
      title: "Reviewing Regularly",
      description:
        "Periodically review your POA to ensure it reflects your current wishes and circumstances.",
    },
    {
      title: "Communication with Agent",
      description:
        "Maintain clear communication with your agent regarding your expectations.",
    },
  ];
  return (
    <>
      <Paragraph>
        You have the right to revoke a POA at any time, as long as you are
        mentally competent. This can be done by destroying the original document
        or filing a revocation form with the appropriate authorities.
      </Paragraph>
      <List list={list} />
    </>
  );
};
