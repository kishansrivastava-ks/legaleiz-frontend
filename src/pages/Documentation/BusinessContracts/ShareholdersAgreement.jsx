/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Needs,
  KeyElements,
  Benefits,
} from "../../../components/Documentation/BusinessContracts/shareholdersagreement";
import Container from "../../../components/Documentation/Container";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "When Do You Need a Shareholder's Agreement?",
    component: <Needs />,
  },
  {
    heading: "Key Elements of Shareholder's Agreement",
    component: <KeyElements />,
  },
  {
    heading: "Benefits of Shareholder's agreement",
    component: <Benefits />,
  },
];

function ShareholdersAgreement() {
  return (
    <>
      <Info info="Shareholder's Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default ShareholdersAgreement;
