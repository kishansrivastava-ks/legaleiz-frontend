/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: max-content;
  border-radius: 10px;
  padding: 1vmax;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.div`
  font-size: 2vmax;
  margin-bottom: 1vmax;
  @media (max-width: 768px) {
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
const Caption = styled.div`
  @media (max-width: 768px) {
    font-size: 2vmax;
  }
`;
const Benefits = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin: 1vmax 0;
  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 2vmax;
  }
`;

function Definition({ title, benefits }) {
  return (
    <Box>
      <Heading>{`Benefits of forming a ${title}`}</Heading>
      <Caption>{`Forming a ${title} offers many benefits.`}</Caption>
      <Benefits>
        {benefits.map((benefit) => (
          <ListItem key={benefit.id}>
            <FaCheck />
            <p>{benefit.point}</p>
          </ListItem>
        ))}
      </Benefits>
    </Box>
  );
}

export default Definition;
