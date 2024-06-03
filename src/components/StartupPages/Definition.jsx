/* eslint-disable react/prop-types */
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
const Question = styled.div`
  font-size: 2vmax;
  margin-bottom: 1.5vmax;
  letter-spacing: 1.5px;
`;
const Answer = styled.div`
  font-size: 1.2vmax;
  line-height: 2;
  color: gray;
  letter-spacing: 1px;
  text-align: justify;
`;
const Image = styled.img``;

function Definition({ question, answer, image }) {
  return (
    <Box>
      <Question>{`What is a ${question} ?`}</Question>
      <Answer>{answer}</Answer>
      {image && <Image src={image} />}
    </Box>
  );
}

export default Definition;
