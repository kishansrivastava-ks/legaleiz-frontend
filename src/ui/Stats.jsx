import styled from "styled-components";

const Box = styled.div`
  background-color: #4c50e0;
  color: white;
  height: 30vh;
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
  color: #fff;
`;

function Stats() {
  return (
    <Box>
      <BoxCell>
        <h3
          style={{
            letterSpacing: "2px",
            fontSize: "4.5rem",
            fontWeight: "500",
          }}
        >
          10 Million +
        </h3>
        <p
          style={{
            color: "#ccc",
            letterSpacing: "2px",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          Consulting Minutes
        </p>
      </BoxCell>
      <BoxCell>
        <h3
          style={{
            letterSpacing: "2px",
            fontSize: "4.5rem",
            fontWeight: "500",
          }}
        >
          5 Million Pages
        </h3>
        <p
          style={{
            color: "#ccc",
            letterSpacing: "2px",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          Drafted and Reviewed
        </p>
      </BoxCell>
      <BoxCell>
        <h3
          style={{
            letterSpacing: "2px",
            fontSize: "4.5rem",
            fontWeight: "500",
          }}
        >
          100,000
        </h3>
        <p
          style={{
            color: "#ccc",
            letterSpacing: "2px",
            fontSize: "2rem",
            fontWeight: "500",
          }}
        >
          Start-ups mentored
        </p>
      </BoxCell>
    </Box>
  );
}

export default Stats;
