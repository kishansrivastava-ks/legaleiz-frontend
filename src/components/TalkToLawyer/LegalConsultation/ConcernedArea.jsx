/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  /* background-color: blue; */
  display: flex;
  gap: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding: 2vmax 8vmax;

  /* border: 3px solid red; */
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    padding: 1vmax 3vmax;
  }
`;
const LeftBox = styled.div`
  min-width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h2 {
    margin-bottom: 2rem;
    text-align: left;
    width: 100%;
    letter-spacing: 2px;
  }
  @media (max-width: 768px) {
    /* border: 2px solid red; */
    & > h2 {
      font-size: large;
      letter-spacing: 1px;
      margin-bottom: 1rem;
      margin-top: 2rem;
    }
  }
`;
const ConcernedAreaBox = styled.div`
  & > h3 {
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      font-size: small;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 0;
    }
  }
`;
const AreaOptionsBox = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
const AreaOption = styled.button`
  display: inline-block;
  width: max-content;
  border-radius: 25px;
  margin: 0.8rem;
  padding: 0.5rem 1.2rem;
  background: none;
  border: 1px solid lightgray;
  font-size: 1vmax;
  color: #000;
  &:hover {
    background-color: blue;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => (props.active == true ? "blue" : "white")};
  color: ${(props) => (props.active == true ? "white" : "black")};

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 1.5vmax;
    margin: 0.5rem;
  }
`;
const TalkTimeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
    & > h3 {
      font-size: smaller;
    }
  }
`;

// FOR THE SLIDER
const SliderWrapper = styled.div`
  width: 500px;
  margin: 20px;
  margin-right: auto;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const SliderInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: #ddd;
  outline: none;
  height: 10px;
  border-radius: 5px;
  transition: background 0.3s;

  @media (max-width: 768px) {
    height: 7px;
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #007bff;
    cursor: pointer;
    border-radius: 50%;
    border: none;

    @media (max-width: 768px) {
      height: 15px;
      width: 15px;
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #007bff;
    cursor: pointer;
    border-radius: 50%;
    border: none;

    @media (max-width: 768px) {
      height: 15px;
      width: 15px;
    }
  }
`;

const LabelsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

const Label = styled.div`
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5vmax;
  }
`;

const ResultWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  background-color: #f3f2f2;
  width: 80%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 1rem;
  }
`;

const ResultItem = styled.div`
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: small;
  }
`;
const ratePerMinute = {
  15: 20,
  20: 18,
  25: 25,
  30: 22,
  35: 30,
  40: 28,
  45: 35,
  50: 32,
  55: 40,
  60: 38,
};
const Slider = ({ value, onChange }) => (
  <SliderWrapper>
    <SliderInput
      type="range"
      min="15"
      max="60"
      step="5"
      value={value}
      onChange={onChange}
    />
    <LabelsWrapper>
      {Object.keys(ratePerMinute).map((time) => (
        <Label key={time}>
          {time}
          <div>min</div>
        </Label>
      ))}
    </LabelsWrapper>
  </SliderWrapper>
);
const Result = ({ talkTime, rate, total }) => (
  <ResultWrapper>
    <div>
      <ResultItem style={{ fontWeight: "bold" }}>
        {talkTime} min talk time
      </ResultItem>
      <ResultItem style={{ fontSize: "1.5rem", textAlign: "left" }}>
        ₹ {rate} per min
      </ResultItem>
    </div>
    <ResultItem style={{ fontWeight: "bold" }}>₹ {total}</ResultItem>
  </ResultWrapper>
);
const BuyTalktime = styled.button`
  border: none;
  background-color: blue;
  color: #fff;
  border-radius: 25px;
  padding: 0.8rem 3rem;
  margin-top: 2rem;
  margin-right: auto;
  &:hover {
    background-color: #0000c5;
  }
  @media (max-width: 768px) {
    /* transform: scale(0.8); */
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    font-size: small;

    margin-left: auto;
  }
`;

// FOR THE RIGHT STAMP
const RightBox = styled.div`
  margin-top: 3rem;
  padding: 3vmax 1vmax;
  min-width: 25%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  & > h2 {
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 2vmax 1vmax;
    min-width: 100%;

    & > h2 {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    & > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;
    padding: 1.5vmax 1vmax;

    & > h2 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }

    & > p {
      font-size: 0.9rem;
    }
  }
`;
const Stamp = styled.div`
  & > img {
    height: 12rem;
    margin-bottom: 2vmax;

    @media (max-width: 768px) {
      height: 10rem;
      margin-bottom: 1.5vmax;
    }

    @media (max-width: 480px) {
      height: 8rem;
      margin-bottom: 1vmax;
    }
  }
`;

function ConcernedArea({ concernedOptions, concernedArea }) {
  const [talkTime, setTalkTime] = useState(15);

  const handleChange = (e) => {
    setTalkTime(parseInt(e.target.value, 10));
  };

  const rate = ratePerMinute[talkTime];
  const total = talkTime * rate;

  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("concernedArea", value);
    setSearchParams(searchParams);
  }

  return (
    <Container>
      <LeftBox>
        <h2>Get talk time and consult a lawyer</h2>
        <ConcernedAreaBox>
          <h3>Select Concerned Area to Proceed</h3>
          <AreaOptionsBox>
            {concernedOptions.map((option, index) => (
              <AreaOption
                active={option === concernedArea ? true : false}
                onClick={(e) => handleClick(e.target.textContent)}
                key={index}
              >
                {option}
              </AreaOption>
            ))}
          </AreaOptionsBox>
        </ConcernedAreaBox>
        <TalkTimeContainer>
          <h3>Select Talk Time</h3>
          <Slider value={talkTime} onChange={handleChange} />
          <Result talkTime={talkTime} rate={rate} total={total} />
        </TalkTimeContainer>
        <BuyTalktime>Buy Talktime &rarr;</BuyTalktime>
      </LeftBox>
      <RightBox>
        <Stamp>
          <img src="/stamp.png" alt="stamp" />
        </Stamp>
        <h2>Money back Guarantee</h2>
        <p>
          If you are not satisfied by the Consultation, We will give you a full
          refund. No Questions Asked.
        </p>
      </RightBox>
    </Container>
  );
}

export default ConcernedArea;
