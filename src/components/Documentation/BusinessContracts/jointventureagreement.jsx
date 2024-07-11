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
      A joint venture agreement is a legal document that establishes a
      collaborative business relationship between two or more parties. It
      outlines the rights, responsibilities, and expectations of each party
      involved in the venture.
    </p>
  </StyledOverView>
);

export const Needs = () => {
  const list = [
    {
      title: "Clarity and Transparency",
      description:
        "A well-crafted agreement ensures all parties are on the  same page regarding the venture's goals, contributions, and profit-sharing.",
    },
    {
      title: "Reduced Risk:",
      description:
        " By clearly defining roles and responsibilities, a joint venture  agreement minimizes the potential for disputes and misunderstandings",
    },
    {
      title: "Dispute Resolution",
      description:
        "The agreement outlines a process for resolving any disagreements that may arise during the collaboration.",
    },
  ];
  return (
    <>
      {/* <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
        You need an NDA whenever you are sharing confidential information with
        someone who is not your employee or agent. This could include situations
        such as:
      </p> */}
      <List list={list} />
    </>
  );
};
export const KeyElements = () => {
  const list = [
    {
      title: "Parties Involved",
      description:
        "Clearly identify all participating businesses or individuals.",
    },
    {
      title: "Purpose and Objectives",
      description:
        "Define the specific goals and objectives of the joint  venture. ",
    },
    {
      title: "Term and Duration",
      description: "Specify the timeframe for the collaboration. ",
    },
    {
      title: "Management Structures",
      description:
        "Outline the decision-making process and how the venture  will be managed.",
    },
    {
      title: "Profit and Loss Sharings",
      description:
        "Specify how profits and losses will be distributed amongst  the parties.",
    },
    {
      title: "Confidentiality",
      description:
        " Protect sensitive information shared during the collaboration. ",
    },
    {
      title: "Termination",
      description:
        "Establish the conditions under which the venture can be dissolved",
    },
  ];
  return <List list={list} />;
};
