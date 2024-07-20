import styled from "styled-components";
import List from "../List";

const StyledOverView = styled.div`
  /* padding: 5px 10px; */
  border-radius: 5px;
  text-align: justify;
  & > p {
    line-height: 1.4;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const Overview = () => (
  <StyledOverView>
    <p>
      In India, when someone passes away without a valid will, their assets and
      debts need to be managed according to the Indian Succession Act, 1925. A
      crucial document in this process is the Succession Certificate
    </p>

    <p>
      <b>What is a Succession Certificate?</b>
    </p>

    <p>
      A Succession Certificate is a legal document issued by a competent civil
      court, authorizing the rightful legal heir(s) of a deceased person
      (intestate) to collect debts and securities.{" "}
      <b>
        {" "}
        Think of it as official recognition of your legal claim to the
        deceased&apos;s estate{" "}
      </b>
    </p>
  </StyledOverView>
);

export const Importance = () => {
  const list = [
    {
      title: "Access to Assets",
      description:
        "Many financial institutions and authorities require a Succession  Certificate before releasing funds, transferring assets, or closing accounts belonging  to the deceased.",
    },
    {
      title: "Debt Settlement",
      description:
        "The certificate empowers the legal heir(s) to settle any outstanding debts of the deceased.",
    },
    {
      title: "Dispute Prevention",
      description:
        "A Succession Certificate can help prevent potential disputes  amongst heirs by clearly establishing their legal rights.",
    },
  ];
  return (
    <>
      {/* <p>Why is Succession Certificate important ?</p> */}
      <List list={list} />
    </>
  );
};

export const WhoCanApply = () => {
  const list = [
    {
      title: "",
      description: "Spouse of the deceased ",
    },
    {
      title: "",
      description: "Children and their descendants of the deceased",
    },
    {
      title: "",
      description: "Parents of the deceased",
    },
    {
      title: "",
      description: "Siblings and their descendants of the deceased",
    },
    {
      title: "",
      description:
        "In the absence of any of the above, other relatives as defined by the Succession Act. ",
    },
  ];
  return (
    <>
      <List list={list} />
    </>
  );
};

export const DocumentsRequired = () => {
  const list = [
    {
      title: "",
      description: "Death certificate of the deceased",
    },
    {
      title: "",
      description:
        "Proof of relationship between the applicant and the deceased (marriage certificate, birth certificate etc.)",
    },
    {
      title: "",
      description:
        "Proof of identity and address of the applicant (voter ID, Aadhaar card etc.)",
    },
    {
      title: "",
      description: "Details of the deceased's property and debts",
    },
    {
      title: "",
      description:
        "No Objection Certificates (NOCs) from other legal heirs (if applicable)",
    },
  ];
  return (
    <>
      <List list={list} />
    </>
  );
};

export const Process = () => {
  const list = [
    {
      title: "1. Prepare the necessary documents",
      description: "",
    },
    {
      title: "2. Draft a petition",
      description:
        "outlining your claim and the details of the deceased's estate",
    },
    {
      title: "3. File the petition",
      description:
        "with the appropriate district court, typically where the deceased resided. ",
    },
    {
      title: "4. Attend court hearings",
      description: "if required by the judge",
    },
    {
      title: "5. Upon approval",
      description: "the court will issue the Succession Certificate",
    },
  ];
  return <List list={list} />;
};

export const AdditionalConsiderations = () => {
  const list = [
    {
      title: "",
      description:
        "The process can take several weeks or months, depending on the court's workload. ",
    },
    {
      title: "",
      description:
        "Consider seeking legal guidance from an advocate specializing in inheritance matters to ensure a smooth application process. ",
    },
  ];
  return <List list={list} />;
};

export const Disclaimer = () => {
  return (
    <div style={{ fontSize: "1.8rem", lineHeight: "1.4", fontStyle: "italic" }}>
      <span style={{ fontWeight: "bold" }}>Disclaimer:</span>We understand that
      navigating inheritance processes can be complex. This webpage is intended
      to provide a general overview of Succession Certificates in India. For
      specific legal advice and assistance, consult with a qualified lawyer.
    </div>
  );
};
