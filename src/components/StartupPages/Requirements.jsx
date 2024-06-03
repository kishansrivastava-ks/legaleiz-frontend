/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: max-content;
  padding: 1vmax;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
`;

const Heading = styled.div`
  font-size: 2vmax;
  margin-bottom: 1vmax;
`;
const Caption = styled.div``;
const Requirements = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin: 1vmax 0;
`;

function Definition({ title, requirements }) {
  return (
    <Box>
      <Heading>{`Requirements of forming a ${title}`}</Heading>
      <Caption>{`To form a ${title} will require the following.`}</Caption>
      <Requirements>
        {requirements.map((requirement) => (
          <ListItem key={requirement.id}>
            <FaCheck />
            <p>{requirement.point}</p>
          </ListItem>
        ))}
      </Requirements>
    </Box>
  );
}

export default Definition;
