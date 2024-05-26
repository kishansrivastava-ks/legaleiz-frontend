import styled from "styled-components";

const StyledFeaturesSection = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-columns: 1fr 1fr;

  width: 95vw;
  height: 50rem;
  padding: 2rem;
  gap: 1rem;
  /* background-color: yellow; */
`;

const Heading1 = styled.div`
  font-size: 3rem;
  padding: 2rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 2px;
  grid-column: 1/-1;
  height: min-content;
  border: 1px solid black;
`;
const FeatureBox = styled.div`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 2px;

  border: 1px solid black;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const FeatureList = styled.ul`
  margin-top: 2rem;
  list-style: none;
`;
const ListItem = styled.li`
  text-transform: uppercase;
  /* font-size: 2rem; */
  margin: 2rem 0;
`;

function FeaturesSection() {
  return (
    <StyledFeaturesSection>
      <Heading1>
        Take correct business decisions with the <br /> right legal support
      </Heading1>
      <FeatureBox>
        <h6
          style={{
            margin: "1rem 0",
            fontSize: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          Features
        </h6>
        <p
          style={{
            fontSize: "1.3rem",
          }}
        >
          LegalEiz startup service offers the following fetaures
        </p>
        <FeatureList>
          <ListItem>
            01 Lorem ipsum dolor, sit amet consectetur adipisicing.
          </ListItem>
          <ListItem>
            02 Lorem ipsum dolor, sit amet consectetur adipisicing.
          </ListItem>
          <ListItem>
            03 Lorem ipsum dolor, sit amet consectetur adipisicing.
          </ListItem>
          <ListItem>
            04 Lorem ipsum dolor, sit amet consectetur adipisicing.
          </ListItem>
          <ListItem>
            05 Lorem ipsum dolor, sit amet consectetur adipisicing.
          </ListItem>
        </FeatureList>
      </FeatureBox>
      <FeatureBox>
        Take correct business decisions with the right legal support
      </FeatureBox>
    </StyledFeaturesSection>
  );
}

export default FeaturesSection;
