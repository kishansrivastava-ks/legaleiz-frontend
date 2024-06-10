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
  /* border: 5px solid red; */
  width: 100%;
  padding: 2vmax 8vmax;
`;
const LeftBox = styled.div`
  /* background-color: yellow; */
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
`;
const ConcernedAreaBox = styled.div`
  & > h3 {
    margin-bottom: 1rem;
  }
`;
const AreaOptionsBox = styled.div``;
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
`;
const TalkTimeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`;

// FOR THE SLIDER
const SliderWrapper = styled.div`
  width: 500px;
  margin: 20px;
  /* text-align: center; */
  /* background-color: yellow; */
  margin-right: auto;
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

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #007bff;
    cursor: pointer;
    border-radius: 50%;
    border: none; /* Remove border */
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #007bff;
    cursor: pointer;
    border-radius: 50%;
    border: none; /* Remove border */
  }
`;

const LabelsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const Label = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

const ResultWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  background-color: #f3f2f2;
  width: 80%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
`;

const ResultItem = styled.div`
  margin: 5px 0;
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
`;

// FOR THE RIGHT STAMP
const RightBox = styled.div`
  margin-top: 3rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  min-width: 25%;
  /* border: 1px solid black; */
  padding: 3vmax 1vmax;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > h2 {
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }
`;
const Stamp = styled.div`
  & > img {
    height: 12rem;
    margin-bottom: 2vmax;
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
