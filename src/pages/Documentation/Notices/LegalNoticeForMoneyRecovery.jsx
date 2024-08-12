/* eslint-disable no-unused-vars */
import Container from "../../../components/Documentation/Container";
import Info from "../../../components/Documentation/Info";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import {
  Overview,
  WhatItIncludes,
  ImportantConsiderations,
} from "../../../components/Documentation/Notices/legalnoticeformoneyrecovery";

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

function LegalNoticeForMoneyRecovery() {
  return (
    <>
      <Info info="Legal Notice For Money Recovery" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default LegalNoticeForMoneyRecovery;
