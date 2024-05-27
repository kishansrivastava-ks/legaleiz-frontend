import styled from "styled-components";

const StyledInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  /* width: 95vw; */
  height: 40rem;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 97%;
  position: relative;
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

const StyledButton = styled.button`
  padding: 1.5rem 3rem;
  border: none;
  background-color: blue;
  font-weight: 500;
  color: #fff;
  letter-spacing: 2px;
  margin: 1rem 0;
  border-radius: 10px;
  &:hover {
    background-color: #0505d1;
    transition: all 0.3s;
  }
  transition: all 0.3s;
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

function InfoSection() {
  return (
    <StyledInfoSection>
      <InfoContainer>
        <InfoContent>
          <InfoHeading>Focus on building your startup</InfoHeading>
          <InfoCaption>Leave your legal worries to us</InfoCaption>
          <StyledButton>Know More</StyledButton>
        </InfoContent>
        <StyledImageBox>
          <StyledImage src="images/img-1.jpg" alt="image1" />
        </StyledImageBox>
      </InfoContainer>
      <InfoContainer>
        <InfoContent>
          <InfoHeading>Focus on building your startup</InfoHeading>
          <InfoCaption>Leave your legal worries to us</InfoCaption>
          <StyledButton>Know More</StyledButton>
        </InfoContent>
        <StyledImageBox>
          <StyledImage src="images/img-1.jpg" alt="image1" />
        </StyledImageBox>
      </InfoContainer>
      <InfoContainer>
        <InfoContent>
          <InfoHeading>Focus on building your startup</InfoHeading>
          <InfoCaption>Leave your legal worries to us</InfoCaption>
          <StyledButton>Know More</StyledButton>
        </InfoContent>
        <StyledImageBox>
          <StyledImage src="images/img-1.jpg" alt="image1" />
        </StyledImageBox>
      </InfoContainer>
    </StyledInfoSection>
  );
}

export default InfoSection;
