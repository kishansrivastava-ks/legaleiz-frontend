import styled from "styled-components";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import Main from "../components/Dashboard/Main";

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
  background-color: #f2f2f2;
  background-color: #e1e1e1;
`;

const MainBodyContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  background-color: #f0f0f0; /* Light Gray */
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainBodyContainer>
        <Main />
      </MainBodyContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
