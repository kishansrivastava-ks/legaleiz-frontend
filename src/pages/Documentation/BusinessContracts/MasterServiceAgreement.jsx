/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Needs,
  KeyElements,
  Benefits,
  Disclaimer,
} from "../../../components/Documentation/BusinessContracts/masterserviceagreement";

const Container = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

const sections = [
  {
    heading: "MSA Overview",
    component: <Overview />,
  },
  {
    heading: "When Do You Need a NDA Agreement?",
    component: <Needs />,
  },
  {
    heading: "Key Elements of Non-disclosure Agreement",
    component: <KeyElements />,
  },
  {
    heading: "Benefits of Non Disclosure Agreement",
    component: <Benefits />,
  },
  {
    heading: "",
    component: <Disclaimer />,
  },
];

function MasterServiceAgreement() {
  return (
    <>
      <Info info="Master Service Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default MasterServiceAgreement;
