import styled from "styled-components";

const StyledSection = styled.div`
  background-color: #fff;
  padding: 3rem 10vw;
`;

const Container = styled.div`
  height: min-content;
  width: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
  flex: 1 1;
  width: 100%;
  /* background-color: purple; */
  /* color: #fff; */
  padding: 2vmax 0;
  font-size: 3vmax;
  letter-spacing: 2px;
  font-style: "Roboto";
`;

const Body = styled.div`
  /* background-color: blue; */
  display: flex;
  flex: 1 1;
  width: 90%;
  justify-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2vmax;
  gap: 3rem;
  & > div {
    /* border: 1px solid #000; */
    flex: 1 1;
    padding: 0 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    text-align: left;

    &:hover {
      transform: translateY(-0.7rem);
      transition: all 0.2s ease-in-out;
    }
    transition: all 0.2s ease-in-out;

    & > img {
      margin: 1vmax 0;
      margin-bottom: 3vmax;
      width: 5vmax;
    }

    & > h4 {
      font-weight: 550;
      border-bottom: 1px solid lightgray;
      padding-bottom: 1.5rem;
      letter-spacing: 1px;
      font-size: 1.2vmax;
    }
    & > p {
      font-size: 1vmax;
      margin-bottom: 2vmax;
      margin-top: 2vmax;
    }
  }
`;

function WhyLegalEizSection() {
  return (
    <StyledSection>
      <Container>
        <Title>Why Legal Eiz ?</Title>
        <Body>
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=23540&format=png&color=FAB005"
              alt="icon1"
            />
            <h4>Lawyer on Demand</h4>
            <p>
              Get your Company Registered or your Document drafted from an
              experienced Lawyer anytime, on-demand.
            </p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=40401&format=png&color=22C3E6"
              alt="icon2"
            />
            <h4>Senior Legal Professionals with 24X7 Support</h4>
            <p>
              Only the best property lawyers will consult you 24X7. Impeccable
              documentation & faster delivery of service. Get ready to be
              delighted.
            </p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=D9mVcYmx46jD&format=png&color=22C3E6"
              alt="icon3"
            />
            <h4>Realtime Alerts &updates</h4>
            <p>
              We take timelines seriously and so we adhere to commitments. You
              will receive alerts and updates on WhatsApp and SMS.
            </p>
          </div>
        </Body>
      </Container>
    </StyledSection>
  );
}

export default WhyLegalEizSection;
