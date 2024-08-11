/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Types,
  WhenIsItUsed,
  CreatingPOA,
  RevokingPOA,
} from "../../../components/Documentation/PersonalAndFamily/powerofattorney";

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
    heading: "Types of Powers of Attorney",
    component: <Types />,
  },
  {
    heading: "When is a Power of Attorney Used?",
    component: <WhenIsItUsed />,
  },
  {
    heading: "Creating a Power of Attorney",
    component: <CreatingPOA />,
  },
  {
    heading: "Revoking a Power of Attorney",
    component: <RevokingPOA />,
  },
];

function PowerOfAttorneys() {
  return (
    <>
      <Info info="Power Of Attorneys" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default PowerOfAttorneys;
