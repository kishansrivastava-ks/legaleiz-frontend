import styled from "styled-components";

const Box = styled.div`
  background-color: #4c50e0;
  color: white;
  height: 25vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  padding: 1em 15rem;
  box-sizing: border-box;
  /* width: 70vw; adjust width to 70% of viewport width */
`;

const BoxCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Stats() {
  return (
    <Box>
      <BoxCell>
        <h3>Heading 1</h3>
        <p>Sample text 1</p>
      </BoxCell>
      <BoxCell>
        <h3>Heading 2</h3>
        <p>Sample text 2</p>
      </BoxCell>
      <BoxCell>
        <h3>Heading 3</h3>
        <p>Sample text 3</p>
      </BoxCell>
    </Box>
  );
}

export default Stats;
