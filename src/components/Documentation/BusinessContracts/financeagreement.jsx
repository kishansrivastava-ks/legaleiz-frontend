/* eslint-disable no-unused-vars */
import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";
import StyledOverview from "../StyledOverview";
import Paragraph from "../Paragraph";

export const Overview = () => (
  <StyledOverview>
    <p>
      A finance agreement is a legally binding contract between a borrower and a
      lender outlining the terms and conditions for a loan. It serves as a
      roadmap for the financial transaction, protecting both parties and
      ensuring clear expectations.
    </p>
  </StyledOverview>
);

export const Types = () => {
  const list = [
    {
      title: "Loan Agreement",
      description:
        "Used for various purposes like personal loans, car loans, mortgages, and business loans.",
    },
    {
      title: "Line of Credit Agreement",
      description:
        "Outlines the terms for accessing a revolving line of credit, where the borrower can withdraw and repay funds within a specific credit limit.",
    },
    {
      title: "Lease Agreemen",
      description:
        "While not technically a loan, a lease agreement establishes a financing arrangement for equipment or property acquisition, where the lessee makes periodic payments for the right to use the asset.",
    },
  ];
  return (
    <>
      <Paragraph>
        There are various types of finance agreements, each catering to specific
        loan purposes. Here are some common examples:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description: "Clearly identifies the borrower and the lender.",
    },
    {
      title: "Loan Amount",
      description: "Specifies the total amount of money being borrowed.",
    },
    {
      title: "Interest Rate",
      description:
        "Defines the annual percentage rate (APR) charged on the loan. ",
    },
    {
      title: "Repayment Terms",
      description:
        "Outlines the loan repayment schedule, including the frequency and amount of each payment, and the total loan term.",
    },
    {
      title: "Fees and Charges",
      description:
        "Details any additional fees associated with the loan, such as origination fees, late payment fees, or prepayment penalties.",
    },
    {
      title: "Collateral",
      description:
        "If applicable, the agreement specifies any assets pledged as collateral to secure the loan.",
    },
    {
      title: "Covenants",
      description:
        "These may be clauses outlining specific actions the borrower must take or avoid while the loan is outstanding (e.g., maintaining certain financial ratios).",
    },
    {
      title: "Default Provisions",
      description:
        "Defines the consequences of the borrower failing to meet their repayment obligations.",
    },
    {
      title: "Early Termination",
      description:
        "Outlines the conditions under which the lender can terminate the agreement and demand full repayment.",
    },
  ];
  return (
    <>
      <Paragraph>
        A finance agreement typically covers the following key elements:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Importance = () => {
  const list = [
    {
      title: "Clarity and Certainty",
      description:
        "It provides a clear understanding of the loan terms for both borrower and lender, minimizing ambiguity and potential disputes.",
    },
    {
      title: "Risk Management",
      description:
        "By outlining terms like collateral and default provisions, the agreement helps manage potential risks associated with the loan.",
    },
    {
      title: "Legal Protection",
      description:
        "The contract serves as a legal document enforceable in court if necessary. ",
    },
  ];
  return (
    <>
      <Paragraph>
        A well-drafted finance agreement offers several benefits:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const WhoNeeds = () => {
  const list = [
    {
      title: "",
      description:
        "Personal loans for various purposes (e.g., cars, home improvement) ",
    },
    {
      title: "",
      description: "Mortgages for property purchases",
    },
    {
      title: "",
      description: "Business loans to finance operations or expansion ",
    },
    {
      title: "",
      description: "Lines of credit for ongoing business needs",
    },
  ];
  return (
    <>
      <Paragraph>
        Finance agreements are essential for any situation where a borrower
        obtains a loan from a lender. This includes:
      </Paragraph>
      <List list={list} />
    </>
  );
};

export const Terms = () => {
  const list = [
    {
      title: "Read thoroughly",
      description: "Don't hesitate to ask questions if anything is unclear. ",
    },
    {
      title: "Know your interest rate",
      description:
        "Compare rates from different lenders to ensure you're getting the best deal.",
    },
    {
      title: "Be aware of fees",
      description: "Factor in any additional fees associated with the loan. ",
    },
    {
      title: "Consider prepayment options",
      description:
        "See if there are any penalties for paying off the loan early. ",
    },
    {
      title: "Seek legal advice",
      description:
        "For complex loan agreements, consider consulting with a lawyer.  ",
    },
  ];
  return (
    <>
      <Paragraph>
        Before signing a finance agreement, it&apos;s crucial to carefully
        review and understand all terms and conditions. Here are some tips:
      </Paragraph>
      <List list={list} />
    </>
  );
};
