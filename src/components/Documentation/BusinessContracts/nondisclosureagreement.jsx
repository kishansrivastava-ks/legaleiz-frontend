// import React from "react";
import styled from "styled-components";

// Define your styled components for each section
const StyledOverView = styled.div`
  /* styles for Section 1 */
  background-color: lightblue;
  padding: 20px;
  border-radius: 5px;
`;

const Section2 = styled.div`
  /* styles for Section 2 */
  background-color: lightgreen;
  padding: 20px;
  border-radius: 5px;
`;

const Section3 = styled.div`
  /* styles for Section 3 */
  background-color: lightcoral;
  padding: 20px;
  border-radius: 5px;
`;

// Create functional components for each section
const Overview = () => (
  <StyledOverView>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor
    exercitationem sed quibusdam quaerat. Dolores alias maxime dicta aspernatur
    tenetur pariatur voluptates officia quam ullam consectetur error labore ipsa
    perspiciatis ratione, aliquam accusantium. Est quos iste, eligendi tempore
    dolorem optio! Eos fugit vitae id praesentium illo atque commodi, ullam
    tenetur.
  </StyledOverView>
);

const Section2Component = () => <Section2>Content for Section 2</Section2>;

const Section3Component = () => <Section3>Content for Section 3</Section3>;

// Export the components
export { Overview, Section2Component, Section3Component };
