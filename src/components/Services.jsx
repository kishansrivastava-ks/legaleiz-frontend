import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;
  grid-gap: 1em;
  padding: 1em;
`;

const GridCell = styled.div`
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; /* fixed height */
  width: 100%; /* fixed width */
`;

function Services() {
  return (
    <Grid>
      <GridCell bgColor="#ff6347">Sample Text 1</GridCell>
      <GridCell bgColor="#32cd32">Sample Text 2</GridCell>
      <GridCell bgColor="#1e90ff">Sample Text 3</GridCell>
      <GridCell bgColor="#ff6347">Sample Text 4</GridCell>
      <GridCell bgColor="#32cd32">Sample Text 5</GridCell>
    </Grid>
  );
}

export default Services;
