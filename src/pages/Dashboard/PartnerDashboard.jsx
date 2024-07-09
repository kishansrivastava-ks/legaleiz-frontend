import styled from "styled-components";
import Sidebar from "../../components/Dashboard/PartnerDashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../components/Dashboard/PartnerDashboard/Header";

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: 7rem 1fr;
  height: 100vh;
  width: 100vw;
`;

const SidebarContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  background-color: #2d2d2d; /* Dark Gray */
  background-color: #050531;
  color: white;
`;

const HeaderContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const MainBodyContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  background-color: #f0f0f0; /* Light Gray */
  padding: 2vmax;
  /* overflow-y: auto; */
  /* background-color: yellow; */
`;

function PartnerDashboard() {
  return (
    <DashboardContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainBodyContainer>
        <Outlet />
      </MainBodyContainer>
    </DashboardContainer>
  );
}

export default PartnerDashboard;
