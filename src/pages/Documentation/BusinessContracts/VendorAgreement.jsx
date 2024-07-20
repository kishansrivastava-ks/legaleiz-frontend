/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  KeyElements,
  Benefits,
  Considerations,
} from "../../../components/Documentation/BusinessContracts/vendoragreement";

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
    heading: "Key Components of a Vendor Agreement",
    component: <KeyElements />,
  },
  {
    heading: "Benefits of a Vendor Agreement",
    component: <Benefits />,
  },
  {
    heading: "Considerations for Vendor Agreements",
    component: <Considerations />,
  },
];

function VendorAgreement() {
  return (
    <>
      <Info info="Vendor Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default VendorAgreement;
