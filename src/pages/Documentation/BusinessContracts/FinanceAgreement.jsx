/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Types,
  KeyElements,
  Importance,
  WhoNeeds,
  Terms,
} from "../../../components/Documentation/BusinessContracts/financeagreement";

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
    heading: "Types of Finance Agreements",
    component: <Types />,
  },
  {
    heading: "Key Elements of a Finance Agreement",
    component: <KeyElements />,
  },
  {
    heading: "Importance of a Finance Agreement",
    component: <Importance />,
  },
  {
    heading: "Who Needs a Finance Agreement? ",
    component: <WhoNeeds />,
  },
  {
    heading: "Understanding the Terms",
    component: <Terms />,
  },
];

function FinanceAgreement() {
  return (
    <>
      <Info info="Finance Agreement" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default FinanceAgreement;
