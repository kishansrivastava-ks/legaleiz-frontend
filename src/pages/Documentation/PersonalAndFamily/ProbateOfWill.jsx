/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";

const Container = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

function ProbateOfWill() {
  return (
    <>
      <Info info="Probate Of Will" />
      <Container>
        <ScrollableContainer sections={[]} />
      </Container>
    </>
  );
}

export default ProbateOfWill;
