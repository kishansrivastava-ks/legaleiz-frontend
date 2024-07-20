/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Benefits,
  WhoNeeds,
  Apply,
  Renewal,
} from "../../../components/Documentation/BusinessContracts/tradelicense";

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
    heading: "Benefits of Obtaining a Trade License",
    component: <Benefits />,
  },
  {
    heading: "Who Needs a Trade License?",
    component: <WhoNeeds />,
  },
  {
    heading: "Applying for a Trade License",
    component: <Apply />,
  },
  {
    heading: "Renewal Process",
    component: <Renewal />,
  },
];

function TradeLicense() {
  return (
    <>
      <Info info="Trade License" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default TradeLicense;
