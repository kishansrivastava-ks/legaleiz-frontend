import styled from "styled-components";

const Container = styled.div`
  /* background-color: blue; */
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding: 2vmax 8vmax;
  & > h2 {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    /* border: 2px solid red; */
    width: 100vw;
    padding: 2rem;
    & > h2 {
      font-size: large;
      text-align: center;
    }
  }
`;
const Box = styled.div`
  display: flex;
  gap: 6rem;
  & > div {
    min-width: 30%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    & > div {
      display: flex;
      align-items: center;
      line-height: 1.1;
      font-size: 2vmax;
      width: 100%;
      gap: 1rem;
      /* border: 2px solid green; */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 1rem;

      & > img {
        height: 4rem;
      }
    }
  }
`;

function WhyChooseUs() {
  return (
    <Container>
      <h2>Why Choose Us ?</h2>
      <Box>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=ZdthOWHeUPYa&format=png&color=000000"
            alt="shield"
          />
          <div>
            <h4>Reliable & Trusted</h4>
            <p>Over 3,000 five star reviews from our customers</p>
          </div>
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=9267&format=png&color=000000"
            alt="fast"
          />
          <div>
            <h4>Fast & Easy, On-Demand</h4>
            <p>Easy access from your mobile. Lawyers available 24x7</p>
          </div>
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=ljkZKAqMoIYA&format=png&color=000000"
            alt="call"
          />
          <div>
            <h4>Secure & Confidential</h4>
            <p>
              Conversation with the Lawyer is always kept private. Information
              shared with the lawyer are 100% confidential.
            </p>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default WhyChooseUs;
