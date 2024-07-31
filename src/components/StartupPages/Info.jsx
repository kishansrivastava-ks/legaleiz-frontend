/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  height: max-content;
  /* border: 3px solid red; */
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  /* height: 100%; */
  width: 97%;
  /* min-width: 97%; */
  margin: 2rem;
  /* border: 2px solid blue; */
  @media (max-width: 768px) {
    margin: 0;
    position: relative;
  }
`;

const InfoContent = styled.div`
  height: 100%;
  background-color: #fff;
  flex: 1 1 55rem;
  flex-basis: 60%;
  padding: 3.5vw;
  /* @media (max-width: 768px) {
   paddin1g : ;
  } */
`;

const InfoHeading = styled.div`
  font-size: 5rem;
  font-size: 3.5vw;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 1rem 0;
  @media (max-width: 768px) {
    font-size: large;
    max-width: 70%;
  }
  /* border: 2px solid green; */
`;

const InfoCaption = styled.div`
  font-size: 2rem;
  font-size: 1.5vw;
  letter-spacing: 1.5px;
  margin: 1rem 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const StyledImageBox = styled.div`
  height: 100%;
  /* background-color: green; */
  flex: 1 1 30rem;
  flex-basis: 40%;
  /* border: 2px solid green; */
  @media (max-width: 768px) {
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 2%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  /* border: 2px solid red; */
  @media (max-width: 768px) {
    border-radius: 50%;
    height: 50%;
    aspect-ratio: 1 / 1;
    margin-top: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

function Info({ heading, caption, image }) {
  return (
    <StyledInfoSection>
      <InfoContainer>
        <InfoContent>
          <InfoHeading>{heading}</InfoHeading>
          <InfoCaption>{caption}</InfoCaption>
        </InfoContent>
        <StyledImageBox>
          <StyledImage src={image ? image : `/images/img-1.jpg`} alt="image1" />
        </StyledImageBox>
      </InfoContainer>
    </StyledInfoSection>
  );
}

export default Info;
