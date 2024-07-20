import styled from "styled-components";
import List from "../List";

const StyledOverView = styled.div`
  /* padding: 5px 10px; */
  border-radius: 5px;
  text-align: justify;
`;

export const Overview = () => (
  <StyledOverView>
    <p>
      A shareholder&apos;s agreement is a crucial document for any business with
      multiple shareholders. It establishes a clear framework for the
      relationship between the company and its owners, promotin transparency,
      reducing conflict, and protecting everyone&apos;s interests.
    </p>
  </StyledOverView>
);

export const Needs = () => {
  const list = [
    {
      title: "Clarity and Alignment",
      description:
        "A well-defined agreement ensures all shareholders are on  the same page regarding ownership rights, voting power, profit sharing, and decision making processes.",
    },
    {
      title: "Conflict Prevention",
      description:
        "By outlining expectations and procedures, a shareholder's  agreement minimizes the potential for misunderstandings and disputes down the  road.",
    },
    {
      title: "Defined Exit Strategy",
      description:
        "The agreement can establish clear guidelines for shareholders who wish to sell their shares, ensuring a smooth transition",
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
      description:
        "Identify all shareholders and their ownership percentages. ",
    },
    {
      title: "Shareholder Rights and Responsibilities",
      description:
        "Define voting rights, profit distribution,  information access, and any limitations on shareholder actions. ",
    },
    {
      title: "Management Structure",
      description:
        "Outline how the company will be managed, including board composition and voting procedures.",
    },
    {
      title: "Transfer of Shares",
      description:
        "Specify restrictions or pre-emption rights (rights of first refusal)  on share transfers.",
    },
    {
      title: "Confidentiality",
      description:
        " Protect sensitive business information and intellectual property.",
    },
    {
      title: "Dispute Resolution:",
      description:
        "Establish a process for resolving disagreements amongst shareholders.",
    },
    {
      title: "Deadlock and Dissolution",
      description:
        "Define procedures for breaking deadlocks in voting and  the process for company dissolution, if necessary.",
    },
    {
      title: "Shareholder Vesting",
      description:
        "Consider including vesting provisions for shares issued to founders or employees, ensuring continued commitment.",
    },
    {
      title: "Drag-Along & Tag-Along Rights",
      description:
        "These provisions allow shareholders to  participate in the sale of a company or individual shares, respectively.",
    },
    {
      title: "Non-Compete Agreements",
      description:
        "These agreements may be included to restrict  shareholder involvement in competing businesses",
    },
  ];
  return <List list={list} />;
};

export const Benefits = () => {
  const list = [
    {
      title: "",
      description:
        "A one-size-fits-all approach doesn't work for shareholder agreements. A document tailored to your specific company structure and shareholder dynamics will provide the most effective  protection.",
    },
  ];
  return <List list={list} />;
};
