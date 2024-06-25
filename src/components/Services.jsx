import styled from "styled-components";

const Grid1 = styled.div`
  /* justify-self: stretch; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 1.5vmax;
  padding: 1em;
  width: 85%;
  height: max-content;
  @media (width <= 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Grid1Cell = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 1vmax;
  background-color: ${(props) => props.bgColor};
  padding: 1.5vmax;
  height: 100%;
  min-width: 30%; // 🔴
  background-color: #f3f3ff;
  border-radius: 10px;
  &:hover {
    transform: scale(1.02) translateY(-1rem);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  transition: all 0.4s ease-in-out;
  @media (width <= 768px) {
    grid-template-rows: none; // Reset grid-template-rows
    display: flex;
    flex-direction: column;
    gap: 1vmax;

    & > :nth-child(1),
    & > :nth-child(2) {
      display: flex;
      flex: 1;
      flex-basis: 50%;
      gap: 2rem;
    }

    & > :nth-child(1) {
      order: 0;
    }

    & > :nth-child(2) {
      order: 0; // Keep both in the first row
    }
  }
`;

const StyledIcon = styled.img`
  height: 7rem;
  width: 7rem;
  aspect-ratio: 1/1;
`;

const CellHeading = styled.div`
  font-size: 3rem;
  font-weight: 500;
  color: #000;
  text-align: left;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CellPara = styled.p`
  font-size: 1.7rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-align: left;
  color: gray;
`;

const CellLink = styled.button`
  width: max-content;
  height: max-content;
  padding: 0.7rem 1.5rem;
  color: blue;
  border: 0.7px solid blue;
  border-radius: 3px;
  text-transform: uppercase;
  text-decoration: none;
  margin: 1rem 0;
  font-size: 1.4rem;
  letter-spacing: 1px;
  &:hover {
    background-color: #5b5bff;
    color: #fff;
  }
  font-weight: 550;
`;

function Services() {
  return (
    <Grid1>
      <Grid1Cell>
        <div>
          <StyledIcon src="https://img.icons8.com/?size=100&id=IGYpYRyLkRLI&format=png&color=C850F2" />
          <CellHeading>Online Consultation with a Lawyer</CellHeading>
        </div>
        <CellPara>
          Now consult a lawyer or get your legal documents reviewed anytime from
          the convenience of your home. With secure calls and verified Lawyers
        </CellPara>
        <div>
          <CellLink>online lawyer consultant</CellLink>
          <CellLink>Document review and consult</CellLink>
        </div>
      </Grid1Cell>
      <Grid1Cell>
        <div>
          <StyledIcon src="https://img.icons8.com/?size=100&id=4DqMzI0F7ksp&format=png&color=F25081" />
          <CellHeading>Documentation by Expert Professionals</CellHeading>
        </div>
        <CellPara>
          Corporate, HR, professional or personal, Get any legal document
          drafted and customised to your business or personal needs in the most
          affordable way.
        </CellPara>
        <div>
          <CellLink>Relinquishment deed</CellLink>
          <CellLink>Commercial Lease Agreement</CellLink>
        </div>
      </Grid1Cell>
      <Grid1Cell>
        <div>
          <StyledIcon src="https://img.icons8.com/?size=100&id=12684&format=png&color=22C3E6" />
          <CellHeading>Check your challan status</CellHeading>
        </div>
        <CellPara>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos sint
          omnis atque ipsam, tempora blanditiis vero libero reiciendis fugit ea
          animi provident voluptatum voluptas deserunt.
        </CellPara>
        <div>
          <CellLink>Relinquishment deed</CellLink>
          <CellLink>Commercial Lease Agreement</CellLink>
        </div>
      </Grid1Cell>
    </Grid1>
  );
}

export default Services;
