import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../ui/Whatsapp";

import { useAuth } from "../contexts/authContext/authContext";

const LandingPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Main = styled.div`
  grid-row: 2;
  height: min-content;
  font-size: 2rem;
  /* background-color: rgb(243, 152, 152); */
  background-color: #f7f5f5;
  margin: 0;
  display: flex;
  width: 100vw;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 3vmax 10vmax;

  & > * {
    width: 100%;
    margin: 0;
  }
  & > div {
    font-size: 3rem;
  }
`;
function Dashboard() {
  const { userLoggedIn, currentUser } = useAuth();

  return (
    <LandingPage>
      <Navbar />
      <Main>
        {userLoggedIn && currentUser ? (
          <div>{`Welcome ${currentUser.displayName}`}</div>
        ) : (
          <div>Sign in to view dashboard</div>
        )}
      </Main>
      <Footer />
      <Whatsapp />
    </LandingPage>
  );
}

export default Dashboard;
