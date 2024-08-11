/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      A will is a legal document that outlines your wishes for how your assets
      will be distributed after your passing. While creating a will is a crucial
      step in estate planning, simply having a will drafted isn&apos;t enough.
      Will registration adds an extra layer of security and ensures your wishes
      are legally recognized and followed.
    </p>
  </StyledOverview>
);

export const WhyRegister = () => {
  const list = [
    {
      title: "Reduced Risk of Challenges",
      description:
        "A registered will is more difficult to contest, minimizing the potential for disputes and delays in probate.",
    },
    {
      title: "Public Record",
      description:
        "Registration creates an official record of your will, making it easier for beneficiaries to locate it after your death.",
    },
    {
      title: "Peace of Mind",
      description:
        "Knowing your will is registered provides peace of mind for you and your loved ones.",
    },
  ];
  return <List list={list} />;
};

export const RegistrationProcess = () => {
  const list = [
    {
      title: "Draft and Execute Your Will",
      description:
        "Consult with an estate planning attorney to create a will that reflects your wishes.",
    },
    {
      title: "Registration Requirements",
      description:
        "Research the specific requirements for will registration in your area. This may involve filing the original will or a certified copy with a designated government agency.",
    },
    {
      title: "Registration Fees",
      description: "There may be associated fees for registering your will. ",
    },
  ];
  return (
    <>
      <Paragraph>
        The specific process for registering a will can vary depending on your
        jurisdiction. Here&apos;s a general overview:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const AdditionalConsiderations = () => {
  const list = [
    {
      title: "Will Review and Updates:",
      description:
        "It's recommended to review and update your will periodically to reflect changes in your life circumstances.",
    },
    {
      title: "Safekeeping the Original Will",
      description:
        "While a copy may be registered, keep the original will in a secure location accessible to your executor.",
    },
    {
      title: "Communicate with Beneficiaries",
      description:
        "Inform your beneficiaries about the existence and location of your registered will.",
    },
  ];
  return (
    <>
      <Paragraph>
        The specific process for registering a will can vary depending on your
        jurisdiction. Here&apos;s a general overview:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Benefits = () => {
  const list = [
    {
      title: "Personalized Guidance",
      description:
        "An attorney can ensure your will is tailored to your specific needs and complies with local laws.",
    },
    {
      title: "Complexities Addressed",
      description:
        "Attorneys can navigate complex situations involving multiple assets, beneficiaries, or blended families.",
    },
    {
      title: "Probate Assistance",
      description:
        "An attorney can guide your executor through the probate process to ensure your wishes are carried out smoothly.",
    },
  ];
  return (
    <>
      <Paragraph>
        While online resources can provide general information about will
        registration, consulting with an estate planning attorney offers
        significant advantages
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Note = () => (
  <StyledOverview>
    <p>
      Will registration is a vital step in ensuring your legacy is protected.
      Take control of your future and consult with an attorney today!
    </p>
  </StyledOverview>
);

export const Disclaimer = () => {
  return (
    <div style={{ fontSize: "1.8rem", lineHeight: "1.4", fontStyle: "italic" }}>
      <span style={{ fontWeight: "bold" }}>Disclaimer:</span>This webpage
      provides general information only and should not be considered legal
      advice. Always consult with a qualified attorney in your jurisdiction for
      personalized guidance on will registration and estate planning.
    </div>
  );
};
