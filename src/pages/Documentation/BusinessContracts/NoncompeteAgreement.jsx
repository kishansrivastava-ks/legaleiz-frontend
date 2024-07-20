/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Address,
  Enforceable,
  WhatShouldYouDo,
} from "../../../components/Documentation/BusinessContracts/noncompeteagreement";

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
    heading: "What does a Non-Compete Agreement Typically Address?",
    component: <Address />,
  },
  {
    heading: "Are Non-Compete Agreements Always Enforceable?",
    component: <Enforceable />,
  },
  {
    heading:
      "What Should You Do If You Are Presented with a Non-Compete Agreement?",
    component: <WhatShouldYouDo />,
  },
];

function NoncompeteAgreement() {
  return (
    <>
      <Info info="Noncompete Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default NoncompeteAgreement;
