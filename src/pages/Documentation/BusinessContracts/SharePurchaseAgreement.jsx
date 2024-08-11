/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  WhatDoesItInclude,
  Importance,
  WhoNeeds,
  SeekingLegalCounsel,
} from "../../../components/Documentation/BusinessContracts/sharepurchaseagreement";

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
    heading: "What Does a Share Purchase Agreement Typically Include? ",
    component: <WhatDoesItInclude />,
  },
  {
    heading: "Importance of a Share Purchase Agreement: ",
    component: <Importance />,
  },
  {
    heading: "Who Needs a Share Purchase Agreement? ",
    component: <WhoNeeds />,
  },
  {
    heading: "Seeking Legal Counsel",
    component: <SeekingLegalCounsel />,
  },
];
function SharePurchaseAgreement() {
  return (
    <>
      <Info info="Share Purchase Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default SharePurchaseAgreement;
