/* eslint-disable no-unused-vars */
import Container from "../../../components/Documentation/Container";
import Info from "../../../components/Documentation/Info";
import {
  AdditionalConsiderations,
  KeyElements,
  Note,
  Overview,
  RegistrationProcess,
} from "../../../components/Documentation/RealEstate/saledeed";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "Key Elements of a Sale Deed",
    component: <KeyElements />,
  },
  {
    heading: "Registration Process",
    component: <RegistrationProcess />,
  },
  {
    heading: "Additional Considerations",
    component: <AdditionalConsiderations />,
  },
  {
    heading: "",
    component: <Note />,
  },
];

function SaleDeed() {
  return (
    <>
      <Info info="Sale Deed" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default SaleDeed;
