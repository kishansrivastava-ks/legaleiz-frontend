/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ConcernedArea from "../../components/TalkToLawyer/LegalConsultation/ConcernedArea";
import { useNavigate } from "react-router-dom";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { slideInFromBottom } from "../../utils/animations.js";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 2vmax 3vmax;
  /* border: 2px solid red; */
  background-color: #fff;
  animation: ${slideInFromBottom} 0.5s ease-out forwards;
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

// const businessConcernedOptions = [
//   "Company Matters",
//   "Company ROC Compliance",
//   "Salary-Gratuity-PF",
//   "Trademark & Copyrights",
//   "Investment & Fundraise",
//   "Direct Tax",
//   "GST",
//   "Debt Recovery",
//   "HR & Labour Compliance",
//   "NCLT Matter",
//   "Another Business Legal Matter",
// ];
// const legalConcernedOptions = [
//   "Divorce & Child Custody",
//   "Family & Matrimonial",
//   "Property",
//   "Will",
//   "Criminal",
//   "Consumer Protection",
//   "Cheque Bouce",
//   "Cyber Crime",
//   "Labour & Employment",
//   "Legal Notice",
//   "Other Legal Problem",
//   "Business Legal Consultation",
// ];
let concernedOptions = [];

function ConsultLawyer() {
  const [searchParams] = useSearchParams();
  const concernedArea = searchParams.get("concernedArea");

  const location = useLocation();
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const section = pathParts[1]; // Assuming the structure is /business-consultation/consult

    if (section.includes("business")) {
      console.log("Business section detected");
      concernedOptions = [
        "Company Matters",
        "Company (ROC) Compliance",
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
    } else if (section.includes("legal")) {
      console.log("Legal section detected");
      concernedOptions = [
        "Divorce & Child Custody",
        "Family & Matrimonial",
        "Property",
        "Will",
        "Criminal",
        "Consumer Protection",
        "Cheque Bounce",
        "Cyber Crime",
        "Labour & Employment",
        "Legal Notice",
        "Other Legal Problem",
        "Business Legal Consultation",
      ];
    }
  }, [location]);

  return (
    <Container>
      <GoBackButton />
      <ConcernedArea
        concernedArea={concernedArea}
        concernedOptions={concernedOptions}
      />
    </Container>
  );
}

export default ConsultLawyer;
