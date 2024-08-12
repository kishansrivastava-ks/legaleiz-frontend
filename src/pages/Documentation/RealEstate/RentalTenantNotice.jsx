/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import Container from "../../../components/Documentation/Container";
import {
  Overview,
  Disclaimer,
  Note,
  AdditionalConsiderations,
  DeliveryMethods,
  Content,
  Importance,
  Types,
} from "../../../components/Documentation/RealEstate/rentaltenantnotice";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "Types of Rental Tenant Notices ",
    component: <Types />,
  },
  {
    heading: "Importance of Following Proper Notice Procedures ",
    component: <Importance />,
  },
  {
    heading: "Content of a Rental Tenant Notice ",
    component: <Content />,
  },

  {
    heading: "Delivery Methods for Notices ",
    component: <DeliveryMethods />,
  },
  {
    heading: "Additional Considerations ",
    component: <AdditionalConsiderations />,
  },
  {
    heading: "",
    component: <Note />,
  },
  {
    heading: "Disclaimer",
    component: <Disclaimer />,
  },
];

function RentalTenantNotice() {
  return (
    <>
      <Info info="Rental Tenant Notice" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default RentalTenantNotice;
