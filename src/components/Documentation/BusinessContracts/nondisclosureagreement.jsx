import styled from "styled-components";
import List from "../List";
import QuestionsContainer from "../../StartupPages/QuestionsContainer";

const StyledOverView = styled.div`
  /* padding: 5px 10px; */
  border-radius: 5px;
  text-align: justify;
  & > p {
    line-height: 1.4;
    font-size: 1.8rem;
  }
`;

const StyledFormat = styled.div``;

// const StyledExamples = styled.div``;
const StyledTemplate = styled.div``;
const StyledViolate = styled.div`
  & > p {
    line-height: 1.4;
    font-size: 1.8rem;
  }
`;

// const StyledFAQ = styled.div``;

// Create functional components for each section
export const Overview = () => (
  <StyledOverView>
    <p>
      A non-disclosure agreement (NDA), also known as a confidentiality
      agreement, is a legally binding contract that protects proprietary
      information. It ensures the secrecy of sensitive data like trade secrets,
      business plans, software code, and more, by restricting its disclosure to
      unauthorised third parties.
    </p>
    <p>
      Consultants and agencies, who often handle confidential information from
      multiple clients across the same industry, frequently enter into NDAs to
      uphold legal obligations and maintain client trust.
    </p>
  </StyledOverView>
);

export const Types = () => {
  const list = [
    {
      title: "One-way or unilateral agreement",
      description:
        "Here, only one party has the confidential information to be shared with another party. The party in possession is called the ‘disclosing party’ and the other one is named the ‘receiving party’.",
    },
    {
      title: "Two-way or bilateral agreement",
      description:
        "Here, two parties are involved and both have the confidential information to be shared.",
    },
    {
      title: "Multilateral agreement",
      description:
        " Here, 3 or more parties are involved. One of them discloses sensitive or confidential information and the others promise to protect such information from further disclosures.",
    },
  ];
  return <List list={list} />;
};

export const Benefits = () => {
  const list = [
    {
      title: "Protects Business Secrets",
      description:
        "An NDA is one of the most common ways to protect trade secrets and other confidential information. Consultants and agencies are usually asked to sign one to protect trade secrets.",
    },
    {
      title: "Enhances Client Relationships",
      description:
        "Businesses that work on third-party projects require their employees to sign non disclosure agreements, to restrict the use and disclosure of confidential information, and assure clients that their data is safe",
    },
  ];
  return <List list={list} />;
};

export const Format = () => (
  <StyledFormat>
    <img
      src="https://assets.vakilsearch.com/live-images/non-disclosure-agreement-format.png"
      alt="format"
    />
  </StyledFormat>
);
export const KeyElements = () => {
  const list = [
    {
      title: "The Parties",
      description:
        "This section will mention if the nondisclosure agreement is a unilateral, bilateral, or multilateral one. The details of the party/parties (names, addresses, etc) involved should be mentioned in this part.",
    },
    {
      title: "Term of the Agreement",
      description:
        "The non disclosure agreement template must mention the date of execution of the agreement and the duration of the existence of the same. It should also mention if the rules and obligations related to disclosure of information will be applicable after the expiry of the nondisclosure agreement or not.",
    },
    {
      title: "Confidential Information",
      description:
        "The non disclosure agreement format must specify what information is to be kept in the ‘confidential’ category or to be protected.",
    },
    {
      title: "Disclosure of Confidentialit",
      description:
        "This section of the non-disclosure agreement specifies the intentions for which the confidential data/information will be used. It will also specify with whom such information can be shared.",
    },
    {
      title: "Dispute Resolution",
      description:
        "The non disclosure agreement must mention the remedial measures the parties will resort to, to resolve disputes, if any. It will include alternative forms of dispute resolution they may choose to employ, such as arbitration.",
    },
  ];
  return <List list={list} />;
};
export const Procedure = () => {
  const list = [
    {
      title: "Step 1",
      description:
        "Once you send in a request, our representative will get in touch with you to understand your requirements",
    },
    {
      title: "Step 2",
      description:
        "If we require more details, we will contact you for the same",
    },
    {
      title: "Step 3",
      description:
        "Once these are received, we will work on the request and send the non-disclosure agreement format for your review within 3 to 4 working days",
    },
  ];
  return <List list={list} />;
};
export const Exclusions = () => {
  const list = [
    {
      title: "",
      description: "Information that is already in the public domain.",
    },
    {
      title: "",
      description: "Information that is already in the public domain.",
    },
    {
      title: "",
      description:
        "Information that is disclosed by the disclosing party with the express consent of the disclosing party.",
    },
    {
      title: "",
      description:
        "Information that is disclosed by the receiving party under a legal obligation, such as a court order.",
    },
  ];
  return (
    <>
      <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
        An NDA, or non-disclosure agreement, is a legal contract between two
        parties that outlines what information is confidential and agrees that
        the receiving party will not disclose that information to unauthorized
        third parties. However, some exclusions exist to what is regarded as
        confidential information under an NDA. These exclusions typically
        include:
      </p>
      <List list={list} />
    </>
  );
};
export const Needs = () => {
  const list = [
    {
      title: "",
      description: "Hiring a consultant",
    },
    {
      title: "",
      description: "Entering into a joint venture",
    },
    {
      title: "",
      description: "Negotiating a merger or acquisition",
    },
    {
      title: "",
      description: "Sharing trade secrets or intellectual property",
    },
    {
      title: "",
      description: "Discussing new product development",
    },
    {
      title: "",
      description: "Seeking funding from investors",
    },
  ];
  return (
    <>
      <p style={{ textAlign: "justify", marginBottom: "1rem" }}>
        You need an NDA whenever you are sharing confidential information with
        someone who is not your employee or agent. This could include situations
        such as:
      </p>
      <List list={list} />
    </>
  );
};
export const Requirements = () => {
  const list = [
    {
      title: "Identification of the Parties",
      description:
        "The NDA should clearly identify the parties involved in the agreement.",
    },
    {
      title: "Definition of Confidential Information",
      description:
        "he NDA should define the types of confidential information that are covered by the agreement.",
    },
    {
      title: "Scope of the Agreement",
      description:
        "The Non-Disclosure Agreement should outline the terms of the contract, including how long the confidentiality obligation will last.",
    },
    {
      title: "Exceptions to Confidentiality",
      description:
        "Any exceptions to the confidentiality obligation, such as information that is already public knowledge, should be specified in the NDA",
    },
    {
      title: "Obligations of the Recipient",
      description:
        "The NDA should outline the obligations of the recipient, including the duty to maintain confidentiality and restrictions on the use of confidential information.",
    },
    {
      title: "Remedies for Breach",
      description:
        "The Nondisclosure Agreement should specify the remedies that are available in the event of a breach of the agreement, such as injunctive relief or monetary damages.",
    },
    {
      title: "Governing Law and Jurisdiction",
      description:
        "The NDA should specify the governing law and jurisdiction that will apply in the event of a dispute",
    },
  ];
  return (
    <>
      <img
        src="https://assets.vakilsearch.com/live-images/infographics/Requirements-for-an-NDA.jpg"
        alt="requirements"
        style={{ marginBottom: "1rem", height: "50rem" }}
      />
      <List list={list} />
    </>
  );
};
export const Template = () => <StyledTemplate></StyledTemplate>;
export const Violate = () => (
  <StyledViolate>
    <p style={{ marginBottom: "1rem" }}>
      If you violate a Nondisclosure Agreement (NDA), you may face legal
      consequences, such as monetary damages or injunctive relief. The precise
      repercussions will vary depending on the conditions of the particular NDA
      and the type of violation.
    </p>
    <p>
      In the event of a violation, NDAs typically contain provisions for
      monetary compensation and injunctive redress. Damages may include actual
      damages suffered by the disclosing party as a result of the breach, as
      well as any profits gained by the breaching party as a result of the
      breach. Injunctive relief may include court orders to stop the breaching
      party from continuing to disclose or use the confidential information, or
      to return any confidential information in their possession.
    </p>
  </StyledViolate>
);
export const Examples = () => {
  const list = [
    {
      description:
        "In 2021, the Indian startup Unacademy entered into an NDA with the Chinese technology company Tencent. The NDA was designed to protect the confidential information related to Unacademy's business plans and operations.",
      title: "",
    },
    {
      title: "",
      description:
        "In 2020, the Indian pharmaceutical company Cipla entered into an NDA with the US pharmaceutical company Gilead Sciences to develop a generic version of Gilead's HIV drug Truvada. The NDA was designed to protect the confidential information related to the development of the generic drug.",
    },
    {
      title: "",
      description:
        "In 2021, the Indian startup Unacademy entered into an NDA with the Chinese technology company Tencent. The NDA was designed to protect the confidential information related to Unacademy's business plans and operations.",
    },
  ];
  return (
    <>
      <List list={list} />
    </>
  );
};
export const Information = () => {
  const list = [
    {
      title: "Trade Secrets",
      description:
        "Information that is valuable to a business or organization and is kept confidential to maintain a competitive advantage, such as manufacturing processes, formulas, or customer lists.",
    },
    {
      title: "Business and Financial Information",
      description:
        "Information about a company's finances, sales figures, marketing plans, and other business-related information that is not publicly availabl",
    },
    {
      title: "Intellectual Property",
      description:
        "Knowledge that should be kept private about patents, trademarks, copyrights, or other types of intellectual property.",
    },
    {
      title: "Personal Information",
      description:
        "Confidential information about individuals, such as personal identification information, health information, or other sensitive personal data",
    },
    {
      title: "Proprietary Software or Technology",
      description:
        "Information related to proprietary software, technology, or inventions, including source code, algorithms, and designs.",
    },
    {
      title: "Customer or Supplier Information",
      description:
        "Information related to customers or suppliers, such as contact information, pricing information, or sales.",
    },
  ];
  return (
    <>
      <p>
        The type of information that is protected under an NDA can vary
        depending on the context of the agreement, but generally includes:
      </p>
      <List list={list} />
    </>
  );
};
export const WhyLegalEiz = () => {
  const list = [
    {
      description:
        "We execute legal work for over 1000 companies every month by leveraging our tech capabilities and the expertise of our team of legal professionals",
      title: "",
    },
    {
      description:
        "We ensure a seamless interactive process with the government",
      title: "",
    },
    {
      description: "Your original price includes two rounds of iterations",
      title: "",
    },
    {
      description:
        "Come on board and experience the ease and convenience with us",
      title: "",
    },
    {
      title: "",
      description:
        "If you need any changes done to the agreement, our lawyers will do the needful and send it across to you for your view once again.",
    },
  ];
  return <List list={list} />;
};
export const FAQ = () => {
  const questions = [
    {
      question: "What are the 2 types of non-disclosure agreement?",
      answer:
        "The two primary types of non-disclosure agreements (NDAs) are: Unilateral NDAIn this type, one party (the disclosing party) shares confidential information with another party (the receiving party), who agrees not to disclose or use the information for their benefit. | Mutual NDA (or Bilateral NDA): In a mutual NDA, both parties exchange confidential information and agree to keep each other's information confidential. It offers protection to both parties' sensitive data.",
    },
    {
      question: "Is an NDA legally binding?",
      answer:
        "Yes, an NDA (non-disclosure agreement) is a legally binding contract that outlines the obligations of the parties involved regarding the protection of confidential information. Breach of an NDA can result in legal consequences.",
    },
    {
      question: "What is an example of a non-disclosure?  ",
      answer:
        "An example of a non-disclosure could involve a tech company sharing its proprietary software code with a potential investor. The investor signs an NDA, agreeing not to disclose or use the code for any purpose other than evaluating the investment opportunity.",
    },
    {
      question: "What are the 5 key elements of a non-disclosure agreement?",
      answer:
        "The five key elements of a non-disclosure agreement typically include: Identification of the parties (disclosing and receiving parties). Definition of what constitutes confidential information. Obligations of the receiving party regarding the confidential information. Duration or term of the NDA. Consequences of breach and dispute resolution mechanisms",
    },
    {
      question: "Who uses non-disclosure agreements?",
      answer:
        "NDAs are used by various individuals and entities, including businesses, startups, entrepreneurs, inventors, investors, employees, contractors, and anyone seeking to protect confidential information during discussions, negotiations, or partnerships.",
    },
  ];
  return <QuestionsContainer heading={false} questions={questions} />;
};
