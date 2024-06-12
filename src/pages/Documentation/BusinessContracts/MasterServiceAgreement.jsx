/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ScrollableContainer from "../../../components/Documentation/ScrollableContainer";
import Info from "../../../components/Documentation/Info";

const Container = styled.div`
  padding: 2vmax;
  background-color: #fff;
  border-bottom: 1px solid lightgray;
`;

function MasterServiceAgreement() {
  return (
    <>
      <Info info="Master Service Agreement" />
      <Container>
        <ScrollableContainer sections={[]} />
      </Container>
    </>
  );
}

export default MasterServiceAgreement;
