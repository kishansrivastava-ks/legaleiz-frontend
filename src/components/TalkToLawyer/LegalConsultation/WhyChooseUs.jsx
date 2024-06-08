import styled from "styled-components";

const Container = styled.div`
  /* background-color: blue; */
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  /* border: 5px solid red; */
  width: 100%;
  padding: 2vmax 8vmax;
  & > h2 {
    margin-bottom: 3rem;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 6rem;
  & > div {
    min-width: 30%;
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
