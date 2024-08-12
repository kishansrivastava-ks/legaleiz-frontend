/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import Container from "../../../components/Documentation/Container";
import {
  Overview,
  WhenToUse,
  Benefits,
  KeyElements,
  ImportantConsiderations,
  RegistrationProcess,
  Note,
  Disclaimer,
} from "../../../components/Documentation/RealEstate/giftdeed";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "When to Use a Gift Deed ",
    component: <WhenToUse />,
  },
  {
    heading: "Benefits of a Gift Deed ",
    component: <Benefits />,
  },
  {
    heading: "Key Elements of a Gift Deed ",
    component: <KeyElements />,
  },
  {
    heading: "Registration Process",
    component: <RegistrationProcess />,
  },
  {
    heading: "Important Considerations ",
    component: <ImportantConsiderations />,
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

function GiftDeed() {
  return (
    <>
      <Info info="Gift Deed" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default GiftDeed;
