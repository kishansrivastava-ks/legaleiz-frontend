import styled from "styled-components";

const StyledWorksSection = styled.div`
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
  width: 100%;
  justify-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2vmax;
  gap: 2rem;
  & > div {
    /* border: 1px solid #000; */
    flex: 1 1;
    padding: 0 2rem;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    & > div {
      background-color: #fff;
      border: 1rem solid #fff;
      width: 5vmax;
      height: 5vmax;
      /* border: 2px solid black; */
      border-radius: 50%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      text-align: center;
      margin: 0 auto;
      position: absolute;
      top: -3.5rem;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 600;
      /* z-index: 1; */
    }
    & > img {
      margin: 5vmax 0;
      margin-bottom: 1vmax;
    }

    & > h4 {
      font-weight: 550;
      /* margin: 1vmax 0; */
    }
    & > p {
      font-size: 1vmax;
      margin-bottom: 2vmax;
      margin-top: 2vmax;
    }
  }
`;

function HowItWorksSection() {
  return (
    <StyledWorksSection>
      <Container>
        <Title>How it works...</Title>
        <Body>
          <div>
            <div>1</div>
            <img
              src="https://img.icons8.com/?size=100&id=1395&format=png&color=000000"
              alt="icon1"
            />
            <h4>Choose your required Product and Pay</h4>
            <p>Choose any product or combine two to get more discount</p>
          </div>
          <div>
            <div>2</div>
            <img
              src="https://img.icons8.com/?size=100&id=6uBHdd8TvV2H&format=png&color=000000"
              alt="icon2  "
            />
            <h4>Fill required details & upload</h4>
            <p>
              Fill your details on success page & upload the documents (as
              necessary).
            </p>
          </div>
          <div>
            <div>3</div>
            <img
              src="https://img.icons8.com/?size=100&id=ZwGNoFXGbt9n&format=png&color=000000"
              alt="icon3"
            />
            <h4>Receive updates on SMS & whats app</h4>
            <p>
              Receive update messages on whats app & sms on your requested
              product progress
            </p>
          </div>
          <div>
            <div>4</div>
            <img
              src="https://img.icons8.com/?size=100&id=1846&format=png&color=000000"
              alt="icon4"
            />
            <h4>Delivery of your product</h4>
            <p>
              Be it consultation, drafting or registration. Get the delivery in
              promised time.
            </p>
          </div>
        </Body>
      </Container>
    </StyledWorksSection>
  );
}

export default HowItWorksSection;
