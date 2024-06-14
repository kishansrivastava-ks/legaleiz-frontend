/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";

import {
  Overview,
  FranchiseLaw,
  HowItWorks,
  AgreementFormat,
  HowToForm,
  Checklist,
  Types,
  PointsToCheck,
  Benefits,
  RoyaltyFees,
  FundamentalProvisions,
  SampleClauses,
  PartiesInvolved,
  TypicalProvisions,
  Need,
  CommonFranchiseTerms,
  Requirements,
  WhyLegalEiz,
  FAQ,
  KeyElements,
} from "../../../components/Documentation/BusinessContracts/franchiseagreement";

const Container = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

const sections = [
  {
    heading: "Franchise Agreement for Business - An Overview",
    component: <Overview />,
  },
  {
    heading: "Laws that Governs Franchise Agreement",
    component: <FranchiseLaw />,
  },
  {
    heading: "How Franchise Agreements Work?",
    component: <HowItWorks />,
  },
  {
    heading: "Format of Franchise Agreement",
    component: <AgreementFormat />,
  },
  {
    heading: "How to form a franchise agreement?",
    component: <HowToForm />,
  },
  {
    heading: "What Should a Business Franchise Agreement Include?",
    component: <Checklist />,
  },
  {
    heading: "Types of Franchise Agreements",
    component: <Types />,
  },
  {
    heading: "Points to Check before Signing the Franchise Agreement",
    component: <PointsToCheck />,
  },
  {
    heading: "Benefits of a Business Franchise Agreement",
    component: <Benefits />,
  },
  {
    heading: "Royalty Fees for Franchise",
    component: <RoyaltyFees />,
  },
  {
    heading: "Key Elements of a Franchise Agreement",
    component: <KeyElements />,
  },
  {
    heading: "Fundamental Provisions of the Franchise Agreement",
    component: <FundamentalProvisions />,
  },
  {
    heading: "Sample Clauses from Franchise Agreement",
    component: <SampleClauses />,
  },
  {
    heading: "Parties Involved in Franchise Agreement",
    component: <PartiesInvolved />,
  },
  {
    heading: "Typical Provisions of the Franchise Agreement",
    component: <TypicalProvisions />,
  },
  {
    heading: "Need for Franchise Agreement",
    component: <Need />,
  },
  {
    heading: "What are Common Franchise Terms?",
    component: <CommonFranchiseTerms />,
  },
  {
    heading: "Legal Requirements for Franchise Agreement",
    component: <Requirements />,
  },
  {
    heading: "Why LegalEiz?",
    component: <WhyLegalEiz />,
  },
  {
    heading: "Franchise Agreement FAQs",
    component: <FAQ />,
  },
];

function FranchiseAgreement() {
  return (
    <>
      <Info info="Franchise Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default FranchiseAgreement;
