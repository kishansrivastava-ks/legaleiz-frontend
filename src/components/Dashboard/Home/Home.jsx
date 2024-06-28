/* eslint-disable react/prop-types */
import { BsFillBuildingFill } from "react-icons/bs";
import {
  FaBook,
  FaBuilding,
  FaChevronRight,
  FaExclamationTriangle,
  FaFileContract,
  FaFileInvoice,
  FaHeadset,
  FaReceipt,
  FaTrademark,
} from "react-icons/fa";
import { FiClipboard, FiBriefcase, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import ReactSpeedometer from "react-d3-speedometer";

const Heading = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-left: 1rem;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 95%;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;
const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  padding: 1rem;

  &:nth-child(1) {
    /* background-color: #ff6b6b; */
    background-color: #fff;
    /* border: 2px solid #ff6b6b; */
    grid-row: span 2; /* Spans both rows */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &:nth-child(2) {
    background-color: #4ecdc4;
    background-color: #fff;
    /* padding: 0; */
  }

  &:nth-child(3) {
    background-color: #1a535c;
    background-color: #fff;
  }
`;
const QuickAccess = styled.div`
  /* background-color: pink; */
  width: 100%;
  color: #000;
  margin-bottom: 2rem;
  & > h3 {
    margin-bottom: 1rem;
  }
  & > div {
    display: flex;
    gap: 1rem;
  }
  & > div > .nav-link {
    text-decoration: none;
    width: 100%;
    padding: 1rem;
    border-radius: 3px;
    font-size: 1.5rem;
    background-color: #d8ebfc;
    letter-spacing: 2px;
    font-weight: 600;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  & > div > .nav-link > .nav-icon {
    font-size: 2rem;
    margin-right: 1.5rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 50%;
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ExploreServices = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  color: #000;
  & > h3 {
    margin-bottom: 1rem;
  }
  & > div {
    display: flex;
    gap: 1rem;
  }
  & > div > .nav-link {
    text-decoration: none;
    width: 100%;
    padding: 1rem;
    border-radius: 3px;
    font-size: 1.5rem;
    background-color: #d8ebfc;
    letter-spacing: 2px;
    font-weight: 600;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  & > div > .nav-link > .nav-icon {
    font-size: 2rem;
    margin-right: 1.5rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 50%;
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const PopularServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  gap: 1rem;
`;
const ServiceLink = styled(NavLink)`
  color: #000;
  background-color: #ececec;
  padding: 1rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: 3px;
  & > span {
    margin-right: 1.5rem;
    background-color: #fff;
    aspect-ratio: 1 / 1;
    padding: 1rem;
    border-radius: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
  &:hover {
    background-color: gray;
    color: #fff;
    & > span {
      color: #000;
    }
  }
`;
const NeedExperts = styled.div`
  color: #000;
  width: 100%;
`;
const ExpertsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  & > div {
    cursor: pointer;
    width: 100%;
    background-color: #ececec;
    padding: 0.5rem 2rem;
    border-radius: 3px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: gray;
      color: #fff;
      & > span {
        color: #000;
      }
    }
    & > span {
      margin-right: 1rem;
      background-color: #fff;
      border-radius: 50%;
      padding: 1rem;
      height: 100%;
      aspect-ratio: 1 / 1;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

//🔴 FOR NEEDS ATTENTION SECTION
const NeedsAttention = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  color: #000;
  & > h3 {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    /* background-color: blue; */
    width: 100%;
    & > span {
      margin-right: 1rem;
      color: red;
    }
  }
`;
const AttentionLink = styled(NavLink)`
  background-color: lightgoldenrodyellow;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//🔴 FOR YOUR COMPLIANCE SCORE SECTION
const YourComplianceScore = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: red; */
  color: #000;
  & > h3 {
    /* margin-bottom: 1rem; */
  }
`;

// PROFILE COMPLETION METER
function ProfileCompletionMeter({ completion }) {
  let rating;

  if (completion <= 25) {
    rating = "Poor";
  } else if (completion <= 50) {
    rating = "Average";
  } else if (completion <= 75) {
    rating = "Good";
  } else {
    rating = "Excellent";
  }

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100px",
        maxHeight: "100px",
        // backgroundColor: "blue",
        lineHeight: "1",
        marginLeft: "50%",
        transform: "translateX(-50%)",
        marginTop: "0",
      }}
    >
      <div
        style={{
          transform: "scale(0.5)",
          transformOrigin: "center",
          // backgroundColor: "red",
        }}
      >
        <ReactSpeedometer
          value={completion}
          minValue={0}
          maxValue={100}
          needleColor="black"
          segments={4}
          segmentColors={["red", "orange", "yellow", "green"]}
          needleTransitionDuration={2000}
          needleTransition="easeElastic"
          currentValueText=""
          textColor="black"
          ringWidth={20}
          height={200}
        />
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "-5rem" }}
      >
        <h2
          style={{
            fontSize: "16px",
            marginRight: "1rem",
            width: "max-content",
          }}
        >
          {completion}%&nbsp; |
        </h2>
        <p style={{ fontSize: "14px" }}>{rating}</p>
      </div>
    </div>
  );
}
function Home() {
  return (
    <>
      <Heading>Home</Heading>
      <Container>
        <GridItem>
          <QuickAccess>
            <h3>Quick Access</h3>
            <div>
              <NavLink className="nav-link" to="/dashboard/my-services">
                <span className="nav-icon">
                  <FiBriefcase />
                </span>
                19 Active Services
              </NavLink>
              <NavLink className="nav-link" to="/dashboard/compliances">
                <span className="nav-icon">
                  <FiClipboard />{" "}
                </span>
                1 Upcoming Compliances
              </NavLink>
            </div>
          </QuickAccess>
          <ExploreServices>
            <h3>Explore Servies</h3>
            <div>
              <NavLink className="nav-link">
                <span className="nav-icon">
                  <FiUser />
                </span>
                For individuals
              </NavLink>
              <NavLink className="nav-link">
                <span className="nav-icon">
                  <BsFillBuildingFill />
                </span>
                for business
              </NavLink>
            </div>
          </ExploreServices>
          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ marginBottom: "1rem", color: "#000" }}>
              Popular Services
            </h3>
            <PopularServices>
              <ServiceLink>
                <span>
                  <FaBuilding />
                </span>
                Private Limited Company Registration
              </ServiceLink>
              <ServiceLink>
                <span>
                  <FaTrademark />
                </span>
                Trademark Registration
              </ServiceLink>
              <ServiceLink>
                <span>
                  <FaBook />
                </span>
                Accounting and Book Keeping
              </ServiceLink>
              <ServiceLink>
                <span>
                  <FaFileContract />
                </span>
                Legal Agreement
              </ServiceLink>
              <ServiceLink>
                <span>
                  <FaReceipt />
                </span>
                Goods & Service Tax Registration
              </ServiceLink>
              <ServiceLink>
                <span>
                  <FaFileInvoice />
                </span>
                GST Filings
              </ServiceLink>
            </PopularServices>
          </div>
          <NeedExperts>
            <h3 style={{ marginBottom: "1rem" }}>Need Experts ?</h3>
            <ExpertsContainer>
              <div>
                <span>
                  <FaHeadset />
                </span>
                Talk to a Lawyer
              </div>
              <div>
                <span>
                  <FaHeadset />
                </span>
                Talk to a CA
              </div>
              <div>
                <span>
                  <FaHeadset />
                </span>
                Talk to a CS
              </div>
            </ExpertsContainer>
          </NeedExperts>
        </GridItem>
        <GridItem>
          <NeedsAttention>
            <h3>
              <span>
                <FaExclamationTriangle />
              </span>
              Needs Attention
            </h3>
            <AttentionLink>
              Integrated Accounting + GST{" "}
              <span>
                <FaChevronRight />
              </span>
            </AttentionLink>
            <AttentionLink>
              Private Limited Company Registration{" "}
              <span>
                <FaChevronRight />
              </span>
            </AttentionLink>
          </NeedsAttention>
        </GridItem>
        <GridItem>
          <YourComplianceScore>
            <h3>Your Compliances Score</h3>
            <ProfileCompletionMeter completion={78} />
          </YourComplianceScore>
        </GridItem>
      </Container>
    </>
  );
}

export default Home;
