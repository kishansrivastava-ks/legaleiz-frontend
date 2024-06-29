import styled from "styled-components";
import { ProfileCompletionMeter } from "./Home";
import { useEffect, useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;
const ServicesContainer = styled.div`
  flex-basis: 75%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
`;
const ComplianceScoreContainer = styled.div`
  flex-basis: 40%;
  background-color: #fff;
  border-radius: 3px;
  height: max-content;
  align-self: flex-start;
  padding: 1rem;
  padding-bottom: 5rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Tabs = styled.div`
  display: flex;
  gap: 20px;
`;
const Tab = styled.button`
  background: ${({ isActive }) => (isActive ? "#007bff" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #007bff;
    color: #fff;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  /* padding: 5px 10px; */
  background: #fff;
  border-radius: 25px;
`;

const SearchBar = styled.input`
  border: none;
  outline: none;
  padding: 5px 10px;
  flex-grow: 1;
  border-radius: 25px;
  &:focus,
  &:active {
    outline: none;
  }
`;

// const SearchIconStyled = styled(SearchIcon)`
//   color: #888;
// `;
const Body = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;
const data = {
  individual: ["John Doe", "Jane Smith", "Alice Johnson"],
  business: ["ABC Corp", "XYZ Ltd", "123 Industries"],
};
function ExploreServices() {
  const [activeTab, setActiveTab] = useState("individual");
  const [list, setList] = useState(data.individual);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const type = query.get("type");
    if (type === "business" || type === "individual") {
      setActiveTab(type);
    }
    setList(data[activeTab]);
  }, [activeTab, location.search]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTabClick = (type) => {
    setActiveTab(type);
    navigate(`?type=${type}`);
  };

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          fontWeight: "600",
        }}
      >
        <NavLink
          style={{ display: "flex", alignItems: "center" }}
          to="/dashboard/home"
        >
          <FaChevronLeft />
          &nbsp; Home
        </NavLink>
        | <span>Explore Services</span>
      </div>
      <Container>
        <ServicesContainer>
          <Header>
            <Tabs>
              <Tab
                isActive={activeTab === "individual"}
                onClick={() => handleTabClick("individual")}
              >
                Individual
              </Tab>
              <Tab
                isActive={activeTab === "business"}
                onClick={() => handleTabClick("business")}
              >
                Business
              </Tab>
            </Tabs>
            <SearchBarContainer>
              <SearchBar
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
              />
              {/* <SearchIconStyled /> */}
            </SearchBarContainer>
          </Header>
          <Body>
            <List>
              {filteredList.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </Body>
        </ServicesContainer>
        <ComplianceScoreContainer>
          <h3>Your Compliances Score</h3>
          <ProfileCompletionMeter completion={78} />
        </ComplianceScoreContainer>
      </Container>
    </>
  );
}

export default ExploreServices;
