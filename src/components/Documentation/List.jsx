/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledList = styled.div`
  text-align: justify;
  border-radius: 5px;
  & > ul > li {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    line-height: 1.4;
    text-align: justify;
    & > span {
      font-weight: bold;
    }
  }
`;

function List({ list }) {
  return (
    <StyledList>
      <ul>
        {list.map((li, index) => (
          <li key={index}>
            <span>{li.title}</span> - {li.description}
          </li>
        ))}
      </ul>
    </StyledList>
  );
}

export default List;
