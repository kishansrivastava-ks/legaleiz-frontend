/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Benefits,
  WhatDoesItInclude,
  WhoNeeds,
  Developing,
} from "../../../components/Documentation/BusinessContracts/scopeofworkagreement";

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
    heading: "Benefits of a Scope of Work Agreement",
    component: <Benefits />,
  },
  {
    heading: "What Does a SWA Typically Include? ",
    component: <WhatDoesItInclude />,
  },
  {
    heading: "Who Needs an SWA? ",
    component: <WhoNeeds />,
  },
  {
    heading: "Developing an SWA ",
    component: <Developing />,
  },
];

function ScopeOfWorkAgreement() {
  return (
    <>
      <Info info="Scope Of Work Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default ScopeOfWorkAgreement;
