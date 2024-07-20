/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  KeyElements,
  Benefits,
} from "../../../components/Documentation/BusinessContracts/foundersagreement";

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
    heading: "Key Elements of a Founders Agreement:",
    component: <KeyElements />,
  },
  {
    heading: "Benefits of a Founders Agreement",
    component: <Benefits />,
  },
];

function FoundersAgreement() {
  return (
    <>
      <Info info="Founders Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default FoundersAgreement;
