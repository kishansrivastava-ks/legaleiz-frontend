/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";

import {
  Overview,
  Drafting,
  Types,
  Advantages,
  Components,
  Essentiality,
  NeedsAndClauses,
  PerformanceMetrics,
  SLAinCloudComputing,
  Penalties,
  Transferable,
  Revision,
  WhyLegalEiz,
  FAQ,
} from "../../../components/Documentation/BusinessContracts/servicelevelagreement";

const Container = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

const sections = [
  {
    heading: "Service Level Agreement (SLA) - An Overview",
    component: <Overview />,
  },
  {
    heading: "Points To Keep In Mind While Drafting The SLA Agreement",
    component: <Drafting />,
  },
  {
    heading: "What Are the Three Types of SLA Agreement?",
    component: <Types />,
  },
  {
    heading: "Advantages of Service Level Agreement",
    component: <Advantages />,
  },
  {
    heading: "Essential Components in a SLAs",
    component: <Components />,
  },
  {
    heading: "Why is Service Level Agreement Essential?",
    component: <Essentiality />,
  },
  {
    heading: "Who Needs a Service-Level Agreement?",
    component: <NeedsAndClauses />,
  },
  {
    heading: "SLA Performance Metrics",
    component: <PerformanceMetrics />,
  },
  {
    heading: "What Is Service Level Agreement in Cloud Computing?",
    component: <SLAinCloudComputing />,
  },
  {
    heading: "Penalties",
    component: <Penalties />,
  },
  {
    heading: "Is an SLA transferable?",
    component: <Transferable />,
  },
  {
    heading: "When to Revise an Service Level Agreement??",
    component: <Revision />,
  },
  {
    heading: "Why LegalEiz?",
    component: <WhyLegalEiz />,
  },
  {
    heading: "FAQs on Service Level Agreement (SLA)",
    component: <FAQ />,
  },
];

function ServiceLegalAgreement() {
  return (
    <>
      <Info info="Service Legal Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default ServiceLegalAgreement;
