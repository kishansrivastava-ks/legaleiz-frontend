/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  WhenIsItUsed,
  Benefits,
  WhatDoesItInclude,
  RegistrationProcess,
  Considerations,
} from "../../../components/Documentation/BusinessContracts/relinquishmentdeed";

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
    heading: "When is a Relinquishment Deed Used?",
    component: <WhenIsItUsed />,
  },
  {
    heading: "Benefits of Using a Relinquishment Deed",
    component: <Benefits />,
  },
  {
    heading: "What Does a Relinquishment Deed Typically Include?",
    component: <WhatDoesItInclude />,
  },
  {
    heading: "Registration Proces",
    component: <RegistrationProcess />,
  },
  {
    heading: "Important Considerations",
    component: <Considerations />,
  },
];

function RelinquishmentDeed() {
  return (
    <>
      <Info info="Relinquishment Deed" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default RelinquishmentDeed;
