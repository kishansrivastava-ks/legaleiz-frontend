/* eslint-disable no-unused-vars */
import Container from "../../../components/Documentation/Container";
import Info from "../../../components/Documentation/Info";
import {
  AdditionalConsiderations,
  Benefits,
  Disclaimer,
  KeyElements,
  Overview,
  WhyNeed,
} from "../../../components/Documentation/RealEstate/rentalagreements";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";

const sections = [
  {
    heading: "Overview",
    component: <Overview />,
  },
  {
    heading: "Why You Need a Rental Agreement ",
    component: <WhyNeed />,
  },
  {
    heading: "Key Elements of a Rental Agreement",
    component: <KeyElements />,
  },
  {
    heading: "Additional Considerations",
    component: <AdditionalConsiderations />,
  },
  {
    heading: "Benefits of a Professional Rental Agreement ",
    component: <Benefits />,
  },
  {
    heading: "Disclaimer",
    component: <Disclaimer />,
  },
];

function RentalAgreement() {
  return (
    <>
      <Info info="Rental Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default RentalAgreement;
