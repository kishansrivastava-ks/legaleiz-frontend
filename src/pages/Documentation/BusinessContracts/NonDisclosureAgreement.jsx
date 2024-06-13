/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";

// import the sections from components

import {
  Overview,
  Types,
  Benefits,
  Format,
  KeyElements,
  Procedure,
  Exclusions,
  Needs,
  Requirements,
  Template,
  Violate,
  Examples,
  Information,
  WhyLegalEiz,
  FAQ,
} from "../../../components/Documentation/BusinessContracts/nondisclosureagreement";

// CREATE AN ARRAY OUT OF IT TO PASS TO SCROLLABLE CONTAINER
const sections = [
  { heading: "NDA Overview", component: <Overview /> },
  { heading: "Types of Non-Disclosure Agreement", component: <Types /> },
  { heading: "Benefits of Non Disclosure Agreement", component: <Benefits /> },
  {
    heading: "Non Disclosure Agreement Format",
    component: <Format />,
  },
  {
    heading: "Key Elements of Non-disclosure Agreement",
    component: <KeyElements />,
  },
  {
    heading: "How to Write a Non-Disclosure Agreement?",
    component: <Procedure />,
  },
  {
    heading: "Exclusions to NDAs",
    component: <Exclusions />,
  },
  {
    heading: "When Do You Need a NDA Agreement?",
    component: <Needs />,
  },
  {
    heading: "Requirements for an Non-Disclosure Agreements",
    component: <Requirements />,
  },
  {
    heading: "NDA Agreement Template",
    component: <Template />,
  },
  {
    heading: "What Happens If You Violate a Non-Disclosure Agreement?",
    component: <Violate />,
  },
  {
    heading: "Real-World Example of an NDA",
    component: <Examples />,
  },
  {
    heading: "Information Protected With Non-Disclosure Agreement",
    component: <Information />,
  },
  {
    heading: "Why LegalEiz",
    component: <WhyLegalEiz />,
  },
  {
    heading: "FAQs on Non disclosure Agreement in India",
    component: <FAQ />,
  },
];

const Container = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

function NonDisclosureAgreement() {
  return (
    <>
      <Info info="Non Disclosure Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}
export default NonDisclosureAgreement;
