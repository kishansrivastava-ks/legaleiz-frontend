/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  WhatIsPersonalData,
  RightsGranted,
  Obligations,
  BusinessImpact,
  BecomeGDPRCompliant,
} from "../../../components/Documentation/BusinessContracts/gdpr";

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
    heading: "Personal Data under GDPR ",
    component: <WhatIsPersonalData />,
  },
  {
    heading: "What Rights Does GDPR Grant Individuals?",
    component: <RightsGranted />,
  },
  {
    heading: "Obligations for Organizations under GDPR ",
    component: <Obligations />,
  },
  {
    heading: "Business Impact",
    component: <BusinessImpact />,
  },
  {
    heading: "Become GDPR compliant",
    component: <BecomeGDPRCompliant />,
  },
];

function GDPR() {
  return (
    <>
      <Info info="GDPR" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default GDPR;
