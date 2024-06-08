import styled from "styled-components";
import ConcernedArea from "../../components/TalkToLawyer/LegalConsultation/ConcernedArea";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 2vmax 3vmax;
  /* border: 2px solid red; */
  background-color: #fff;
`;

const BackBtn = styled.button`
  position: absolute;
  top: 5;
  left: 5;
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  letter-spacing: 1px;
  &:hover {
    /* background-color: #f1eeee; */
    background-color: blue;
    color: #fff;
  }
`;

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <BackBtn onClick={goBack}>&larr; Back</BackBtn>;
};

const concernedOptions = [
  "Company Matters",
  "Company ROC Compliance",
  "Salary-Gratuity-PF",
  "Trademark & Copyrights",
  "Investment & Fundraise",
  "Direct Tax",
  "GST",
  "Debt Recovery",
  "HR & Labour Compliance",
  "NCLT Matter",
  "Another Business Legal Matter",
];

function ConsultLawyer() {
  return (
    <Container>
      <GoBackButton />
      <ConcernedArea concernedOptions={concernedOptions} />
    </Container>
  );
}

export default ConsultLawyer;
