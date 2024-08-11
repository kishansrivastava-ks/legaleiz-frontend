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
      A relinquishment deed is a legal document used to voluntarily transfer
      ownership rights in a jointly owned property to another co-owner or
      co-inheritor. In simpler terms, it allows you to formally give up your
      claim to a portion of a property you co-own.
    </p>
  </StyledOverview>
);

export const WhenIsItUsed = () => {
  const list = [
    {
      title: "Joint Inheritance",
      description:
        "If you inherit property along with other family members but wish to relinquish your share to them",
    },
    {
      title: "Co-ownership Disputes",
      description:
        "As a way to resolve ownership disputes between coowners by formally transferring shares. ",
    },
    {
      title: "Gifting a Property Share",
      description:
        "While a relinquishment deed doesn't involve monetaryconsideration, it can be used to essentially gift your ownership share to another coowner.",
    },
  ];
  return (
    <>
      <Paragraph>
        There are several scenarios where a relinquishment deed might be used
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Benefits = () => {
  const list = [
    {
      title: " Clarity and Finality",
      description:
        "A relinquishment deed provides a clear and legal record of the property share transfer, preventing future disputes",
    },
    {
      title: "Simplified Transactions",
      description:
        "It can streamline the process of selling or transferring the entire property in the future",
    },
    {
      title: "Tax Implications",
      description:
        "Depending on your location and the reason for relinquishment, there might be tax implications. Consulting with a tax advisor is recommended.",
    },
  ];
  return <List list={list} />;
};

export const WhatDoesItInclude = () => {
  const list = [
    {
      title: "Parties Involved",
      description:
        "Identifies the person relinquishing their share (relinquisher) and the recipient(s) of the ownership rights (releasee).",
    },
    {
      title: "Property Description",
      description:
        "Clearly details the property in question, including address, plot number, and any other relevant identifiers.",
    },
    {
      title: "Share Being Relinquished",
      description:
        "Specifies the exact share of ownership being relinquished (e.g., ½ share, specific percentage).",
    },
    {
      title: "Consideration (if any)",
      description:
        "While relinquishment deeds typically don't involve monetary exchange, it's important to state this explicitly. In rare cases, there might be some form of consideration involved, which would need to be documented",
    },
    {
      title: "Signatures and Witnesses",
      description:
        "The deed requires signatures from all parties involved, along with signatures from witnesses",
    },
  ];
  return (
    <>
      <Paragraph>
        The specific content of a relinquishment deed can vary, but it generally
        includes the following details:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const RegistrationProcess = () => (
  <StyledOverview>
    <p>
      For the relinquishment deed to be legally binding, it typically needs to
      be registered with the local sub-registrar&apos;s office. Registration
      fees and procedures may vary by location
    </p>
  </StyledOverview>
);

export const Considerations = () => {
  const list = [
    {
      title: "Legal Advice",
      description:
        "Considering the legal implications involved, consulting with a lawyer experienced in property law is highly recommended before finalizing a relinquishment deed.",
    },
    {
      title: "Tax Implications",
      description:
        "As mentioned earlier, there might be tax implications associated with relinquishing a property share. Seek advice from a qualified tax advisor",
    },
    {
      title: "Future Claims",
      description:
        "Once a relinquishment deed is signed and registered, you relinquish all future claims to the property share",
    },
  ];
  return <List list={list} />;
};
