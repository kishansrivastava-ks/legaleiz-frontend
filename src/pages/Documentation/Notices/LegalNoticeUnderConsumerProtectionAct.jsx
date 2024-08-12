/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import Container from "../../../components/Documentation/Container";
import {
  Overview,
  WhatToInclude,
  WhenToUse,
  ImportantConsiderations,
} from "../../../components/Documentation/Notices/legalnoticeundercpa";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "When to Use a Legal Notice Under CPA? ",
    component: <WhenToUse />,
  },
  {
    heading: "What to Include in the Notice ? ",
    component: <WhatToInclude />,
  },
  {
    heading: "Important Considerations: ",
    component: <ImportantConsiderations />,
  },
];

function LegalNoticeUnderConsumerProtectionAct() {
  return (
    <>
      <Info info="Legal Notice Under Consumer Protection Act" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default LegalNoticeUnderConsumerProtectionAct;
