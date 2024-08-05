/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const Container = styled.div`
  display: flex;
  gap: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  width: 100vw;
  padding: 2vmax 8vmax;

  border: 3px solid red;

  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
    gap: 2rem;
  }
`;
const LeftContainer = styled.div`
  padding: 1rem;
  min-width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Heading = styled.h2`
  font-weight: bold;
  letter-spacing: 4px;
  margin-bottom: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    letter-spacing: 2px;
    font-size: 3vmax;
    margin-bottom: 1rem;
  }
`;
const Stats = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const Stat = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  color: #000;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 25px;
  background-color: ${(props) => props.bgColor};
  margin-right: 1rem;
  @media (max-width: 768px) {
    flex-basis: 50%;
    font-size: 1vmax;
    letter-spacing: 0;
    padding: 0.3rem 0.5rem;
    justify-content: center;
  }
  & > img {
    margin-right: 1rem;
    width: 2rem;
  }
`;
const Intro = styled.div`
  & > p {
    margin: 1rem 0;
    font-size: 1.8rem;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 2vmax;
    }
  }
`;
const List = styled.ul`
  list-style: none;
  width: 100%;
`;
const ListItem = styled.li`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  font-size: 1.1vmax;
  @media (max-width: 768px) {
    font-size: 2vmax;
    align-items: flex-start;
  }
  & > div {
    margin-right: 1rem;
    @media (max-width: 768px) {
      margin-top: 0.3rem;
    }
  }
`;

const RightContainer = styled.form`
  margin-top: 5rem;
  padding: 3rem 5rem;
  height: max-content;
  min-width: 40%;
  /* border: 1px solid black; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormHeading = styled.h2`
  font-weight: 800;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;
const Underline = styled.div`
  background-color: #f43636;
  height: 0.8rem;
  border-radius: 10px;
  width: 30%;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  padding: 0.5rem 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border: 1px solid lightgray;
  width: 100%;
  border-radius: 5px;
  &::placeholder {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

const PhoneInputContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
const Select = styled.select`
  padding: 13px 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
  width: 25%;
  flex: 1;
  font-size: 1rem;
  height: max-content;
`;

const CountryCodeSelect = () => (
  <Select>
    <option value="+1">+1 (USA)</option>
    <option value="+91">+91 (India)</option>
    <option value="+44">+44 (UK)</option>
    <option value="+61">+61 (Australia)</option>
    <option value="+81">+81 (Japan)</option>
    <option value="+49">+49 (Germany)</option>
    <option value="+33">+33 (France)</option>
    <option value="+86">+86 (China)</option>
    <option value="+7">+7 (Russia)</option>
    <option value="+55">+55 (Brazil)</option>
  </Select>
);

const Error = styled.div`
  color: gray;
  font-size: 12px;
  margin-top: -1rem;
  margin-right: auto;
  width: 100%;
  text-align: right;
  margin-bottom: 1rem;
`;

const MobileNumberInput = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    setIsValid(validateMobileNumber(value));
  };

  return (
    <div style={{ width: "75%" }}>
      <Input
        type="text"
        value={mobileNumber}
        onChange={handleChange}
        placeholder="Enter your mobile number"
        isValid={isValid}
      />
      {!isValid && <Error>Enter a valid mobile number</Error>}
    </div>
  );
};

const Location = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  & > * {
    width: 40%;
  }
`;
const Submit = styled.button`
  font-size: 1.5rem;
  padding: 1rem 3rem;
  width: 100%;
  background: none;
  border: none;
  background-color: blue;
  color: #fff;
  letter-spacing: 2px;
  border-radius: 3px;
  margin-top: 3rem;
`;

const GoogleReviews = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  & > h2 {
    font-weight: 500;
  }

  & > img {
    height: 4rem;
    margin-right: 1rem;
  }
  & > div > p {
    font-size: 1.5rem;
    line-height: 1;
    margin-top: 0.5rem;
    @media (max-width: 768px) {
      margin-top: 0;
      font-size: 1.5vmax;
    }
  }
  & > div > h4 {
    @media (max-width: 768px) {
      font-size: 2vmax;
    }
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const starsOptions = {
  edit: false,
  value: 4.5,
  size: 20,
  isHalf: true,
};
const ConsultLawyerBtn = styled.button`
  width: 100%;
  background: none;
  border: none;
  background-color: blue;
  color: #fff;
  border-radius: 25px;
  padding: 1rem 2rem;
  letter-spacing: 2px;
  &:hover {
    background-color: #0000c5;
  }
  @media (max-width: 768px) {
    width: 80%;
    align-self: center;
    padding: 0.5rem;
    font-size: 2vmax;
  }
`;
const Features = styled.div`
  margin-top: 3vmax;
  display: flex;
  padding-top: 2vmax;
  border-top: 1px solid lightgray;
  & > div {
    display: flex;
    margin-right: 3rem;
    align-items: center;
    line-height: 1;
    @media (max-width: 768px) {
      min-width: 30%;
      margin-right: 1vmax;
    }
    & > img {
      height: 4rem;
      margin-right: 10px;
      @media (max-width: 768px) {
        margin-right: 0.5vmax;
        height: 3rem;
      }
    }
    & > p {
      width: 20rem;
      font-size: 1.3vmax;
      @media (max-width: 768px) {
        text-align: left;
        font-weight: bold;
        line-height: 1.4;
      }
    }
  }
  /* border: 2px solid red; */
  @media (max-width: 768px) {
    width: 100%;

    padding: 1vmax;
  }
`;

function LegalConsultationOnline({ title, intro, process }) {
  return (
    <Container>
      <LeftContainer>
        <Heading>{title}</Heading>
        <Stats>
          <Stat bgColor="#fee1ac">
            <img
              src="https://img.icons8.com/?size=100&id=60687&format=png&color=FD7E14"
              alt="online-icon"
            />
            <p>114 Lawyers Online</p>
          </Stat>
          <Stat bgColor="#c5fec5">
            <img
              src="https://img.icons8.com/?size=100&id=9730&format=png&color=40C057"
              alt="call-icon"
            />
            <p>71 Calls currently going on</p>
          </Stat>
        </Stats>
        <Intro>
          <p>{intro[0]}</p>
          <p>{intro[1]}</p>
        </Intro>
        <List>
          {process.map((point, index) => (
            <ListItem key={index}>
              <div>
                <FaCheckCircle size={15} color="#0de40d" />
              </div>
              <p>{point}</p>
            </ListItem>
          ))}
        </List>
        <List>
          <ListItem>
            <div>
              <FaCheckCircle size={15} />
            </div>
            <p>9,000+ ezyLegal verified experts</p>
          </ListItem>
          <ListItem>
            <div>
              <FaCheckCircle size={15} />
            </div>
            <p>Senior Lawyers practising in Hight Courts and Supreme Courts</p>
          </ListItem>
        </List>
        <GoogleReviews>
          <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="google"
          />
          <div>
            <h4>Google Reviews</h4>
            <p>
              <span>
                <ReactStars {...starsOptions} />
              </span>
              <span>4 / 5 | 250+ Reviews</span>
            </p>
          </div>
        </GoogleReviews>
        <ConsultLawyerBtn>Consult a Lawyer &rarr;</ConsultLawyerBtn>
        <Features>
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=ZdthOWHeUPYa&format=png&color=000000"
              alt="shield icon"
            />
            <p>100% Confidential & Secure</p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=82767&format=png&color=000000"
              alt="clock icon"
            />
            <p>24x7 Available</p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/?size=100&id=3685&format=png&color=000000"
              alt="globe icon"
            />
            <p>Supports 8 Indian Languages</p>
          </div>
        </Features>
      </LeftContainer>
      <RightContainer>
        <FormHeading>Consult with an Expert</FormHeading>
        <Underline />
        <Input type="text" placeholder="Enter your full name"></Input>
        <Input type="email" placeholder="Enter your email address"></Input>
        <PhoneInputContainer>
          <CountryCodeSelect />
          <MobileNumberInput />
        </PhoneInputContainer>
        <Location>
          <Input placeholder="City"></Input>
          <Input placeholder="State"></Input>
        </Location>
        <Submit>Talk to Expert</Submit>
      </RightContainer>
    </Container>
  );
}

export default LegalConsultationOnline;
