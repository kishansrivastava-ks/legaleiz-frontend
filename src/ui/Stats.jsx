import styled from "styled-components";

const Box = styled.div`
  background-color: #4c50e0;
  /* border: 0.5rem solid red; */
  color: white;
  height: max-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
  padding: 5vh 7vw;
  box-sizing: border-box;
  --w: 400px;
  --n: 3;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(var(--w), 100%/ (var(--n) + 1) + 0.1%), 1fr)
  );
`;

const BoxCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  & > h3 {
    letter-spacing: 2px;
    font-size: 4.5rem;
    font-weight: 500;
    @media (width <= 600px) {
      font-size: 3rem;
    }
  }
`;

function Stats() {
  return (
    <Box>
      <BoxCell>
        <h3>10 Million +</h3>
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
        <h3>5 Million Pages</h3>
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
        <h3>100,000</h3>
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
