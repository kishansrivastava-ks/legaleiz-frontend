/* eslint-disable no-unused-vars */
import Container from "../../../components/Documentation/Container";
import Info from "../../../components/Documentation/Info";
import {
  ImportantConsiderations,
  Overview,
  WhatItIncludes,
} from "../../../components/Documentation/Notices/legalnoticeforrecoveryofdues";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";

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

function LegalNoticeForRecoveryOfDues() {
  return (
    <>
      <Info info="Legal Notice For Recovery Of Dues" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default LegalNoticeForRecoveryOfDues;
