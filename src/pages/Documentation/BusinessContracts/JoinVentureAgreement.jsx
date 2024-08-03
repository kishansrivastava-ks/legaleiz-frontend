/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";

import {
  Overview,
  Needs,
  KeyElements,
} from "../../../components/Documentation/BusinessContracts/jointventureagreement";
import Container from "../../../components/Documentation/Container";

// const Container = styled.div`
//   padding: 2vmax;
//   background-color: #fff;
//   border-bottom: 1px solid lightgray;
// `;

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "Why use a Joint Venture Agreement?",
    component: <Needs />,
  },
  {
    heading: "Key Elements",
    component: <KeyElements />,
  },
];
function JoinVentureAgreement() {
  return (
    <>
      <Info info="Joint Venture Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default JoinVentureAgreement;
