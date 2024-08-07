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
  /* border: 3px solid red; */
  @media (max-width: 768px) {
    width: 100vw;
    padding: 2rem;
    & > h2 {
      font-size: large;
      text-align: left;
      width: 100%;
      /* border: 2px solid red; */
    }
  }
`;
const Box = styled.div`
  display: flex;
  gap: 4rem;
  & > div {
    min-width: 25%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    & > div {
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      /* margin: 0 1rem; */
      /* width: 100%; */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 0.5rem 1rem;
      & > img {
        height: 4rem;
      }
      & > div {
        & > h4 {
          font-size: 2vmax;
        }
        & > p {
          font-size: 2vmax;
        }
      }
    }
  }
`;

function HowToConsult() {
  return (
    <Container>
      <h2>How to Consult a Lawyer?</h2>
      <Box>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=85479&format=png&color=000000"
            alt="plus"
          />
          <div>
            <h4>Add Talktime</h4>
            <p>Add Talktime to your registered mobile number</p>
          </div>
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=IUBWfdmasnM9&format=png&color=000000"
            alt="dial"
          />
          <div>
            <h4>Get Dial-in Number</h4>
            <p>
              After payment success, you will receive a message with the dial-in
              number
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=53438&format=png&color=000000"
            alt="call"
          />
          <div>
            <h4>Start Consultation</h4>
            <p>
              Talk to Lawyer and get Consultation for your matter in your
              language of choice
            </p>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default HowToConsult;
