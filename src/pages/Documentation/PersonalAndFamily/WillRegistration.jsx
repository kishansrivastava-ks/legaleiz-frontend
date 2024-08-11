/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  WhyRegister,
  RegistrationProcess,
  AdditionalConsiderations,
  Benefits,
  Note,
  Disclaimer,
} from "../../../components/Documentation/PersonalAndFamily/willregistration";

import Container from "../../../components/Documentation/Container";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "Why Register Your Will? ",
    component: <WhyRegister />,
  },
  {
    heading: "The Will Registration Process",
    component: <RegistrationProcess />,
  },
  {
    heading: "Additional Considerations",
    component: <AdditionalConsiderations />,
  },
  {
    heading: "Benefits of Consulting an Attorney ",
    component: <Benefits />,
  },
  {
    heading: "Note",
    component: <Note />,
  },
  {
    heading: "Disclaimer",
    component: <Disclaimer />,
  },
];

function WillRegistration() {
  return (
    <>
      <Info info="Will Registration" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default WillRegistration;
