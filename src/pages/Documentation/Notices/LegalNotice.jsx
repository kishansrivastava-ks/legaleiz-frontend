/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import Container from "../../../components/Documentation/Container";
import {
  Overview,
  Alternatives,
  ImportantConsiderations,
  WhatItIncludes,
  Benefits,
  Purpose,
} from "../../../components/Documentation/Notices/legalnotice";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "Purposes of a Legal Notice",
    component: <Purpose />,
  },
  {
    heading: "Benefits of Sending a Legal Notice",
    component: <Benefits />,
  },
  {
    heading: "What Does a Legal Notice Typically Include?",
    component: <WhatItIncludes />,
  },
  {
    heading: "Important Considerations",
    component: <ImportantConsiderations />,
  },
  {
    heading: "Alternatives to Legal Notices",
    component: <Alternatives />,
  },
];

function LegalNotice() {
  return (
    <>
      <Info info="Legal Notice" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default LegalNotice;
