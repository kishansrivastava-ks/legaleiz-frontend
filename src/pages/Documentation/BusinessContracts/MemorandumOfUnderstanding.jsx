/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";
import {
  Overview,
  Included,
  Benefits,
  WhoUses,
} from "../../../components/Documentation/BusinessContracts/memorandumofunderstanding";

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
    heading: "What's Included in an MOU?",
    component: <Included />,
  },
  {
    heading: "Benefits of an MOU",
    component: <Benefits />,
  },
  {
    heading: "Who Uses MOUs?",
    component: <WhoUses />,
  },
];

function MemorandumOfUnderstanding() {
  return (
    <>
      <Info info="Memorandum Of Understanding" />
      <Container>
        <ScrollableContainer sections={sections} />
      </Container>
    </>
  );
}

export default MemorandumOfUnderstanding;
