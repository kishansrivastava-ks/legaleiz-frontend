import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/authContext/authContext";
import { getServices } from "../../../utils/library";
import styled from "styled-components";
import SpinnerMini from "../../../ui/SpinnerMini";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  height: 100%;
  width: 100%;
  /* padding: 20px; */
  /* background-color: #f9f9f9; */
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  background-color: #ffffff;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ServiceDetail = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ServiceName = styled(ServiceDetail)`
  font-weight: bold;
  color: #2c3e50;
`;

const ServiceId = styled(ServiceDetail)`
  color: #7f8c8d;
`;

const ServicePrice = styled(ServiceDetail)`
  color: #27ae60;
`;

const ServiceDate = styled(ServiceDetail)`
  color: #2980b9;
`;

const CommentsButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  /* background-color: #3498db; */
  color: #3498db;
  /* color: #000; */
  background: none;
  border: none;
  /* border-radius: 4px; */
  padding: 5px 10px;
  font-size: 1.5rem;
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
  }
`;

const CommentsPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentsPopupContent = styled.div`
  background: #fff;
  padding: 20px;
  /* border-radius: 8px; */
  text-align: left;
  width: 600px;
  height: 60vh;
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }

  .comment {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  .comment p {
    margin-bottom: 5px;
  }

  .commentedOn {
    font-size: 12px;
    color: #888;
  }

  & > button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 8px 16px;
    /* border-radius: 4px; */
    cursor: pointer;
    margin-top: 10px;
    font-size: 14px;
    margin-right: auto;
  }

  button:hover {
    background-color: #2980b9;
  }
`;

// FILTER BAR
const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;

  border: none;
  width: 200px;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 30px;
  color: #000;
  font-size: 1.3rem;
  &::placeholder {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  background-color: #fff;
  margin-left: 1rem;
  border: 1px solid gray;
  color: #000;
`;

const FallbackContainer = styled.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

function Closed() {
  const { currentUser } = useAuth();
  const [commentsPopup, setCommentsPopup] = useState(null);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  const { isPending, data } = useQuery({
    queryKey: ["closedServices"],
    queryFn: () => getServices(currentUser.email, "closed"),
  });

  useEffect(() => {
    if (data) {
      let updatedServices = [...data];

      // search
      if (searchTerm) {
        updatedServices = updatedServices.filter((service) =>
          service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // sort
      if (sortType) {
        updatedServices = updatedServices.sort((a, b) => {
          switch (sortType) {
            case "name-asc":
              return a.serviceName.localeCompare(b.serviceName);
            case "name-desc":
              return b.serviceName.localeCompare(a.serviceName);
            case "date-asc":
              return new Date(a.purchasedOn) - new Date(b.purchasedOn);
            case "date-desc":
              return new Date(b.purchasedOn) - new Date(a.purchasedOn);
            case "price-asc":
              return a.servicePrice - b.servicePrice;
            case "price-desc":
              return b.servicePrice - a.servicePrice;
            default:
              return 0;
          }
        });
      }
      setFilteredServices(updatedServices);
    }
  }, [searchTerm, sortType, data]);

  const openCommentPopup = (comments) => {
    setCommentsPopup(comments);
  };
  const closeCommentsPopup = () => {
    setCommentsPopup(null);
  };

  return (
    <Container>
      {isPending ? (
        <FallbackContainer>
          <SpinnerMini color="#000" />
        </FallbackContainer>
      ) : data && data.length === 0 ? (
        <FallbackContainer>No closed services found!</FallbackContainer>
      ) : (
        <>
          <FilterBar>
            <SearchInput
              type="text"
              placeholder="search by service name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select onChange={(e) => setSortType(e.target.value)}>
              <option value="">Sort By</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="date-asc">Date (Ascending)</option>
              <option value="date-desc">Date (Descending)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </Select>
          </FilterBar>
          <ServiceList>
            {filteredServices.map((service) => (
              <ServiceItem key={service.serviceId}>
                <ServiceName>Service Name: {service.serviceName}</ServiceName>
                <ServiceId>Service ID: {service.serviceId}</ServiceId>
                <ServicePrice>Price: ${service.servicePrice}</ServicePrice>
                <ServiceDate>
                  Purchased On:{" "}
                  {new Date(service.purchasedOn).toLocaleDateString()}
                </ServiceDate>
                <CommentsButton
                  onClick={() => openCommentPopup(service.comments)}
                >
                  comments ({service.comments.length})
                </CommentsButton>
                {commentsPopup && (
                  <CommentsPopup>
                    <CommentsPopupContent>
                      <h2>Comments</h2>
                      {commentsPopup.length === 0 && (
                        <p style={{ color: "#000" }}>No comments yet!</p>
                      )}
                      {commentsPopup.map((comment, index) => (
                        <div key={index} className="comment">
                          <p style={{ color: "#000" }}>{comment.commentText}</p>
                          <p className="commentedOn">
                            {new Date(comment.commentedOn).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                      <button onClick={closeCommentsPopup}>close</button>
                    </CommentsPopupContent>
                  </CommentsPopup>
                )}
              </ServiceItem>
            ))}
          </ServiceList>
        </>
      )}
    </Container>
  );
}

export default Closed;
