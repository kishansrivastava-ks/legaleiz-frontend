/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import Container from "../../../components/Documentation/Container";
import {
  ImportantConsiderations,
  Overview,
  WhatItIncludes,
} from "../../../components/Documentation/Notices/chequebouncenotice";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "What it includes ?",
    component: <WhatItIncludes />,
  },
  {
    heading: "Important Considerations",
    component: <ImportantConsiderations />,
  },
];

function ChequeBounceNotice() {
  return (
    <>
      <Info info="Cheque Bounce Notice" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default ChequeBounceNotice;
