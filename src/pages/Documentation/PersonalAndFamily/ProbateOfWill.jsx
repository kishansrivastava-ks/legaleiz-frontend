/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  WhoNeeds,
  Process,
  Benefits,
  Drawbacks,
  Alternatives,
  LegalGuidance,
} from "../../../components/Documentation/PersonalAndFamily/probateofwill";

import Container from "../../../components/Documentation/Container";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "Who Needs Probate",
    component: <WhoNeeds />,
  },
  {
    heading: "The Probate Process",
    component: <Process />,
  },
  {
    heading: "Benefits of Probate",
    component: <Benefits />,
  },
  {
    heading: "Potential Drawbacks of Probate",
    component: <Drawbacks />,
  },
  {
    heading: "Alternatives to Probate",
    component: <Alternatives />,
  },
  {
    heading: "Legal Guidance",
    component: <LegalGuidance />,
  },
];

function ProbateOfWill() {
  return (
    <>
      <Info info="Probate Of Will" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default ProbateOfWill;
