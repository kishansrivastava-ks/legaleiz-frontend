/* eslint-disable no-unused-vars */
import { FaFile, FaFilePdf } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  height: max-content;
  width: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  text-align: left;
  flex: 1 1;
  width: 100%;
  font-size: 2vmax;
  letter-spacing: 2px;
  font-weight: bold;
`;
const Body = styled.div`
  display: flex;
  flex: 1 1;
  width: 100%;
  justify-self: center;
  flex-direction: row;
  margin-top: 1vmax;
  gap: 1rem;
  & > div {
    flex: 1 1;
    padding: 0 1rem;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border-radius: 10px;

    & > h4 {
      font-weight: 550;
      font-size: 1vmax;
    }
    & > p {
      font-size: 0.8vmax;
      margin: 1vmax 0;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > h4 {
        font-size: 1rem;
        margin-left: 1rem;
      }
      & > p {
        font-size: 0.8rem;
      }
    }
  }
`;
const Image = styled.img`
  margin: 1vmax 0;
  margin-bottom: 1vmax;
  width: 3vmax;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  padding: 0.5rem;
`;
function HowItWorks() {
  return (
    <Container>
      <Title>How it works...</Title>
      <Body>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=1395&format=png&color=0000FF"
            alt="icon1"
            bgColor="lightblue"
          />
          <h4>Choose your required Product and Pay</h4>
          <p>Choose any product or combine two to get more discount</p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=25591&format=png&color=EB0000"
            alt="icon2  "
            bgColor="#fea5a5"
          />
          <h4>Fill required details & upload</h4>
          <p>
            Fill your details on success page & upload the documents (as
            necessary).
          </p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=ZwGNoFXGbt9n&format=png&color=05a105"
            alt="icon3"
            bgColor="lightgreen"
          />
          <h4>Receive updates on SMS & whats app</h4>
          <p>
            Receive update messages on whats app & sms on your requested product
            progress
          </p>
        </div>
        <div>
          <Image
            src="https://img.icons8.com/?size=100&id=1846&format=png&color=4f0488"
            alt="icon4"
            bgColor="#ca92f6"
          />
          <h4>Delivery of your product</h4>
          <p>
            Be it consultation, drafting or registration. Get the delivery in
            promised time.
          </p>
        </div>
      </Body>
    </Container>
  );
}

export default HowItWorks;
