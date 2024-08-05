import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding: 2vmax 8vmax;
  & > h2 {
    margin-bottom: 3rem;
    letter-spacing: 2px;
  }
  @media (max-width: 768px) {
    width: 100vw;
    /* border: 2px solid red; */
    padding: 2rem;
    position: relative;
    & > h2 {
      font-size: large;
      margin-bottom: 2rem;
    }
  }
`;
const Box = styled.div`
  display: flex;
  gap: 3rem;
  & > div {
    min-width: 50%;
    border: 1px solid lightgray;
    padding: 2vmax 4vmax;
    border-radius: 5px;
    & > h3 {
      margin-bottom: 3rem;
    }
    & > h4 {
      margin-bottom: 2rem;
    }
    & > p {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    & > div {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      border: none;
      padding: 1rem;
      & > h3 {
        font-size: large;
        margin-bottom: 1rem;
      }
      & > h4 {
        font-size: small;
        margin-bottom: 1rem;
      }
      & > p {
        font-size: 2vmax;
        margin-bottom: 1rem;
      }
    }
  }
`;
const ChatButton = styled.button`
  background: none;
  border: none;
  padding: 0.8vmax 1.5vmax;
  margin-top: 1rem;
  background-color: blue;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 35px;
  @media (max-width: 768px) {
    padding: 0.5vmax 1.5vmax;
    font-size: 2vmax;
    width: 100%;
  }
`;

function StillHaveQuestions() {
  return (
    <Container>
      <h2>Still have questions ?</h2>
      <Box>
        <div>
          <h3>Ask any LegalEiz expert</h3>
          <p>
            If you have any questions related to the product, Chat with an
            EzyLegal expert
          </p>
          <ChatButton>Chat with an Expert</ChatButton>
        </div>
        <div>
          <h3>Call our Agent at : +91-85 8888 7480</h3>
          <h4>Monday - Saturday: 9AM - 9PM</h4>
          <h4>Sunday: 9AM - 2PM</h4>
        </div>
      </Box>
    </Container>
  );
}

export default StillHaveQuestions;
