/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Importance,
  WhoCanApply,
  DocumentsRequired,
  Process,
  AdditionalConsiderations,
  Disclaimer,
} from "../../../components/Documentation/BusinessContracts/successioncertificate";

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
    heading: "Why is Succession Certificate important ?",
    component: <Importance />,
  },
  {
    heading: "Who Can Apply for a Succession Certificate?",
    component: <WhoCanApply />,
  },
  {
    heading: "Documents Required for Application",
    component: <DocumentsRequired />,
  },
  {
    heading: "Process for Obtaining a Succession Certificate",
    component: <Process />,
  },
  {
    heading: "Additional Considerations",
    component: <AdditionalConsiderations />,
  },
  {
    heading: "",
    component: <Disclaimer />,
  },
];

function SuccessionCertificate() {
  return (
    <>
      <Info info="Succession Certificate" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default SuccessionCertificate;
