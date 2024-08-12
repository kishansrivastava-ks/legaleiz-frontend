/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      A sale deed is a critical legal document that formalizes the transfer of
      ownership of real estate (land and buildings) from a seller (vendor) to a
      buyer (vendee). It serves as conclusive proof of the sale and outlines the
      terms and conditions agreed upon by both parties.
    </p>
  </StyledOverview>
);

export const Importance = () => {
  const list = [
    {
      title: "Legal Ownership Transfer",
      description:
        "A registered sale deed is the primary evidence that establishes the buyer's legal ownership of the property.",
    },
    {
      title: "Contractual Terms",
      description:
        "The deed outlines the agreed-upon sale price, description of the property, and any special conditions or encumbrances.",
    },
    {
      title: "Dispute Resolution",
      description:
        "A well-drafted sale deed minimizes the risk of future disputes by clearly defining the rights and obligations of both parties. ",
    },
  ];
  return <List list={list} />;
};

export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description:
        "Clear identification of the seller (vendor) and buyer (vendee) with their complete names and addresses.",
    },
    {
      title: "Property Description",
      description:
        "Detailed description of the property being sold, including the address, plot number, size, and any unique features.",
    },
    {
      title: "Sale Consideration",
      description:
        "The agreed-upon purchase price of the property in numerals and words.",
    },
    {
      title: "Mode of Payment",
      description:
        "Specify how the payment was made (cash, installments, etc.) and any outstanding dues.",
    },
    {
      title: "Title Deed Information",
      description:
        "Details of the seller's title deed to the property, including reference numbers and previous ownership history.",
    },
    {
      title: "Encumbrances",
      description:
        "Disclosure of any existing encumbrances on the property, such as mortgages or liens.",
    },
    {
      title: "Possession Details",
      description: "Specify the date of possession handover to the buyer. ",
    },
    {
      title: "Covenants",
      description:
        "These are promises made by the seller, such as the right to sell the property free from any claims and with a clear title.",
    },
    {
      title: "Signatures and Witnesses",
      description:
        "Both seller and buyer (and their spouses, if applicable) need to sign and date the deed in the presence of witnesses.",
    },
  ];
  return <List list={list} />;
};

export const RegistrationProcess = () => (
  <Paragraph>
    For the sale deed to be legally valid, it must be registered at the local
    sub-registrar&apos;s office within the jurisdiction where the property is
    located. Registration involves payment of stamp duty and registration fees
    as mandated by the government.
  </Paragraph>
);

export const AdditionalConsiderations = () => {
  const list = [
    {
      title: "Legal Representation",
      description:
        "Consulting with a lawyer experienced in real estate transactions is highly recommended to ensure the sale deed is drafted accurately and protects your interests.",
    },
    {
      title: "Title Search",
      description:
        "Conducting a thorough title search is crucial to verify the seller's ownership rights and identify any potential encumbrances.",
    },
    {
      title: "Taxes",
      description:
        "Ensure all property taxes are paid up to date by the seller before registration of the sale deed.",
    },
  ];
  return <List list={list} />;
};

export const Note = () => {
  const list = [
    {
      title: "Sale Deed",
      description: "A Cornerstone of Secure Property Ownership ",
    },
  ];
  return (
    <>
      <List list={list} />
      <Paragraph>
        A properly drafted and registered sale deed is fundamental for securing
        your ownership of real estate. By understanding its importance and key
        elements, you can ensure a smooth and secure property transaction.
      </Paragraph>
    </>
  );
};
