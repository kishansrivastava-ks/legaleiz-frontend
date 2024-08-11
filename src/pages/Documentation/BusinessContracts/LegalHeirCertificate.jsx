/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  WhatDoesItDo,
  WhoCanApply,
  Obtaining,
  Consideration,
} from "../../../components/Documentation/BusinessContracts/legalheircertificate";

const Container = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "What Does a Legal Heir Certificate Do?",
    component: <WhatDoesItDo />,
  },
  {
    heading: "Who Can Apply for a Legal Heir Certificate?",
    component: <WhoCanApply />,
  },
  {
    heading: "Obtaining a Legal Heir Certificate:",
    component: <Obtaining />,
  },
  {
    heading: "Important Considerations:",
    component: <Consideration />,
  },
];

function LegalHeirCertificate() {
  return (
    <>
      <Info info="Legal Heir Certificate" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default LegalHeirCertificate;
