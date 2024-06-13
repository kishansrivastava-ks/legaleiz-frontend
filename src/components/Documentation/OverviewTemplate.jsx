/* eslint-disable react/prop-types */
import styled from "styled-components";

const Paragraph = styled.p`
  text-align: justify;
  margin-bottom: 2rem;
  color: #000;
`;

function OverviewTemplate({ list }) {
  return (
    <div>
      {list.map((li, index) => (
        <Paragraph key={index}>{li}</Paragraph>
      ))}
    </div>
  );
}

export default OverviewTemplate;
