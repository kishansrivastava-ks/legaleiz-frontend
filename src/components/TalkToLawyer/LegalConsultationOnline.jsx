import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: blue; */
  display: flex;
  gap: 4rem;
`;
const LeftContainer = styled.div`
  /* background-color: yellow; */
  padding: 1rem;
  /* flex: 1 1; */
  /* flex-basis: %; */
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
`;
const Stats = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
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
  & > div {
    margin-right: 1rem;
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

function LegalConsultationOnline() {
  return (
    <Container>
      <LeftContainer>
        <Heading>Legal Consultation Online</Heading>
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
          <p>
            Getting the right legal advice is important because it helps you
            know your rights and gives you a better chance for a positive
            outcome.
          </p>
          <p>
            No Appointment, No Waiting. Consult a Lawyer instantly and get the
            RIGHT Legal Advice.
          </p>
        </Intro>
        <List>
          <ListItem>
            <div>
              <FaCheckCircle size={15} color="#0de40d" />
            </div>
            <p>
              Gain a legal edge from the comfort of your home with our Online
              Legal Consultation Service, expertly designed to offer
              comprehensive legal advice tailored to your needs
            </p>
          </ListItem>
          <ListItem>
            <div>
              <FaCheckCircle size={15} color="#0de40d" />
            </div>
            <p>
              Enjoy focused discussion with our experienced lawyers, ensuring
              your legal queries are answered with utmost professionalism and
              clarity
            </p>
          </ListItem>
          <ListItem>
            <div>
              <FaCheckCircle size={15} color="#0de40d" />
            </div>
            <p>
              Our consultations are scheduled with your convenience in mind,
              allowing you to choose a suitable time and eliminating the hassle
              of commuting to a lawyer’s office
            </p>
          </ListItem>
          <ListItem>
            <div>
              <FaCheckCircle size={15} color="#0de40d" />
            </div>
            <p>
              Access top-notch legal counsel without stretching your budget –
              Our Online Legal Consultation Service is competitively priced,
              offering great value without compromising on quality.
            </p>
          </ListItem>
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
