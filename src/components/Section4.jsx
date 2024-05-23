import styled from "styled-components";
import Question from "../ui/Question";

const Section = styled.section`
  width: 100vw;
  height: min-content;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
`;

const StyledSection4 = styled(Section)`
  background-color: #17172c;
  grid-row: 5;
  padding: 5rem 15rem;
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Box1 = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  /* background-color: orange; */
  margin: 0.5rem;
`;
const Box2 = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  /* background-color: orange; */
  margin: 0.5rem;
`;

const QHead = styled.h2`
  color: white;
  font-size: 4rem;
`;

const QText = styled.p`
  font-weight: 500;
  color: #d7d7d7;
  font-size: 2.5rem;
  margin-top: 2rem;
`;

const QIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin: 2rem 0;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  /* margin: 1rem; */
  margin-right: 3rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    transition: transform 0.3s;
  }
`;

const questions = [
  {
    ques: "WHAT IS ONLINE LEGAL CONSULTATION?",
    ans: "Online Legal consultation or online Lawyer consultation is a method to connect Users and Lawyers virtually. It is a convenient and easy way to get online Lawyer advice using LegalKart app.",
    id: 1,
  },
  {
    ques: "ARE YOUR ONLINE LAWYERS QUALIFIED?",
    ans: "We have a strict verification process for every Lawyer providing online Legal consultation services on LegalKart. Our team manually verifies necessary documents, registrations, and certifications for every Lawyer.",
    id: 2,
  },
  {
    ques: "WHAT HAPPENS IF I DON’T GET A RESPONSE FROM A LAWYER?",
    ans: "In the unlikely event that an online Lawyer does not respond, you will be entitled to a 100% refund.",
    id: 3,
  },
  {
    ques: "HOW DO I START ONLINE CONSULTATION WITH LAWYER ON LEGALKART?",
    ans: "The privacy of our users is critical to us, and thus, we are compliant with industry standards of privacy and confidentiality. Rest assured that your online consultation with a Lawyer is completely safe and secured with 256-bit encryption.",
    id: 4,
  },
];
function Section4() {
  return (
    <StyledSection4>
      <StyledBox>
        <Box1>
          <QHead>
            Questions?
            <br />
            We are here to help
          </QHead>
          <QText>
            Check out our FAQs or talk to a live customer care specialist by
            phone, chat, or email.
          </QText>

          <QIcons>
            <Icon src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF" />
            <Icon src="https://img.icons8.com/?size=100&id=86875&format=png&color=FFFFFF" />
            <Icon src="https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF" />
          </QIcons>
        </Box1>
        <Box2>
          {questions.map((question) => (
            <Question
              question={question.ques}
              answer={question.ans}
              key={question.id}
            />
          ))}
        </Box2>
      </StyledBox>
    </StyledSection4>
  );
}

export default Section4;
