/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  height: max-content;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  /* height: 100%; */
  min-width: 97%;
  margin: 2rem;
`;

const InfoContent = styled.div`
  height: 100%;
  background-color: #fff;
  flex: 1 1 55rem;
  flex-basis: 60%;
  padding: 5rem;
`;

const InfoHeading = styled.div`
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 1rem 0;
`;

const InfoCaption = styled.div`
  font-size: 2rem;
  letter-spacing: 1.5px;
  margin: 1rem 0;
`;
const StyledImageBox = styled.div`
  height: 100%;
  /* background-color: green; */
  flex: 1 1 30rem;
  flex-basis: 40%;
`;

const StyledImage = styled.img`
  height: 100%;
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
