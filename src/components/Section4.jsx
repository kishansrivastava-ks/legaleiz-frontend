import styled from "styled-components";
import Question from "../ui/Question";

const Section = styled.section`
  width: 100vw;
  height: 75vh;
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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>

          <QIcons></QIcons>
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
