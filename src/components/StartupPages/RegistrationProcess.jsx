/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const RegProcess = styled.div`
  width: 100%;
  height: max-content;
  /* padding: 1vmax; */
  display: flex;
  flex-direction: column;
  align-items: last baseline;
  text-align: left;
  & > h2 {
    width: 100%;
    margin: 2rem 0;
    letter-spacing: 2px;
  }
`;
const Heading = styled.div`
  font-size: 1.2vmax;
  font-weight: 500;
  width: 100%;
  margin-bottom: 1vmax;
`;
const List = styled.ul`
  list-style: none;
  gap: 1vmax;
  width: 100%;
`;
const ListItem = styled.li`
  margin: 1rem 0;
  font-size: 1.3vmax;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    margin-left: 1rem;
  }
`;
function RegistrationProcess({ heading, steps }) {
  return (
    <RegProcess>
      <h2>Detailed Registration Process</h2>
      <Heading>{heading}</Heading>
      <List>
        {steps.map((step) => (
          <ListItem key={step.no}>
            <FaCheck />
            <p>
              Step {step.no}: {step.step}
            </p>
          </ListItem>
        ))}
      </List>
    </RegProcess>
  );
}

export default RegistrationProcess;
