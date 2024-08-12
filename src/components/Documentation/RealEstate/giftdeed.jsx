/* eslint-disable no-unused-vars */
import List from "../List";
import Paragraph from "../Paragraph";
import StyledOverview from "../StyledOverview";

export const Overview = () => (
  <StyledOverview>
    <p>
      A gift deed is a legal document used to formally transfer ownership of an
      asset (movable or immovable property) from one person (donor) to another
      (donee) without any financial exchange. It serves as a crucial piece of
      evidence in case of future disputes or claims.
    </p>
  </StyledOverview>
);

export const WhenToUse = () => {
  const list = [
    {
      title: "Transferring property within families",
      description:
        "Parents gifting property to children, siblings gifting to each other, etc.",
    },
    {
      title: "Donating assets to charity",
      description:
        "Donating land, vehicles, or other valuables to charitable organizations.",
    },
  ];
  return (
    <>
      <Paragraph>Gift deeds are commonly used for:</Paragraph>
      <List list={list} />
    </>
  );
};

export const Benefits = () => {
  const list = [
    {
      title: "Clear Ownership Transfer",
      description:
        "A registered gift deed provides a clear legal record of the ownership transfer, reducing the risk of future challenges.",
    },
    {
      title: "Tax Advantages",
      description:
        "In some jurisdictions, gift deeds may offer tax benefits for both the donor and donee. It's important to consult with a tax advisor to understand the specific implications.",
    },
    {
      title: "Estate Planning Tool",
      description:
        "Gift deeds can be used as part of an estate planning strategy to distribute assets efficiently.",
    },
  ];
  return <List list={list} />;
};

export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description:
        "Clearly identify the donor (giver) and donee (receiver) with their complete names and addresses.",
    },
    {
      title: "Description of Property",
      description:
        "Provide a detailed description of the asset being gifted, including the property type (land, house, car, etc.), address, unique identifiers (plot numbers, vehicle registration numbers), and any other relevant details.",
    },
    {
      title: "Valuation of Property",
      description:
        "Mention the estimated market value of the property at the time of gifting. This may be relevant for tax purposes.",
    },
    {
      title: "Declaration of Gift",
      description:
        "Clearly state the donor's intention to gift the property freely and without any consideration (payment) from the donee.",
    },
    {
      title: "Acceptance of Gift",
      description:
        "The donee's signature signifies their acceptance of the gift under the terms outlined in the deed.",
    },
    {
      title: "Signatures and Witnesses",
      description:
        "Both donor and donee (and sometimes witnesses) must sign and date the gift deed.",
    },
  ];
  return <List list={list} />;
};

export const RegistrationProcess = () => (
  <StyledOverview>
    <p>
      For a gift deed to be legally enforceable, it typically needs to be
      registered with the sub-registrar&apos;s office in the jurisdiction where
      the property is located. Registration fees and stamp duty charges may
      apply.
    </p>
  </StyledOverview>
);

export const ImportantConsiderations = () => {
  const list = [
    {
      title: "Consult with a lawyer",
      description:
        "It's highly recommended to involve a lawyer in drafting and reviewing the gift deed to ensure it adheres to legal requirements and protects the interests of both parties.",
    },
    {
      title: "Tax implications",
      description:
        "Understand the potential tax consequences of gifting property in your specific jurisdiction.",
    },
    {
      title: "Joint ownership",
      description:
        "Consider how joint ownership will be addressed if gifting property to multiple donees.",
    },
  ];
  return <List list={list} />;
};

export const Note = () => (
  <Paragraph>
    Gift deeds can be a valuable tool for transferring ownership and supporting
    loved ones or charitable causes. However, legal and tax considerations are
    important factors to navigate. Consulting with a qualified professional is
    essential to ensure the process is completed smoothly and effectively.
  </Paragraph>
);

export const Disclaimer = () => {
  return (
    <div style={{ fontSize: "1.8rem", lineHeight: "1.4", fontStyle: "italic" }}>
      <span style={{ fontWeight: "bold" }}>Disclaimer:</span>This webpage
      provides general information only and should not be considered legal
      advice. Always consult with a lawyer in your jurisdiction for guidance on
      creating or registering a gift deed.
    </div>
  );
};
