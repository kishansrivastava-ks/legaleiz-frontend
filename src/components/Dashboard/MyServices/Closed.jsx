import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/authContext/authContext";
import { fetchUserData } from "../../../utils/library";
import styled from "styled-components";
import SpinnerMini from "../../../ui/SpinnerMini";

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

function Closed() {
  const { userLoggedIn, currentUser } = useAuth();
  const [closedServices, setClosedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentsPopup, setCommentsPopup] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (userLoggedIn && currentUser) {
          const user = await fetchUserData(currentUser.email);
          const closed = user.purchasedServices.filter(
            (service) => service.serviceStatus === "closed"
          );
          setClosedServices(closed);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, [userLoggedIn, currentUser]);

  const openCommentPopup = (comments) => {
    setCommentsPopup(comments);
  };
  const closeCommentsPopup = () => {
    setCommentsPopup(null);
  };

  if (loading) {
    return (
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SpinnerMini color="#000" />
      </Container>
    );
  }

  if (closedServices.length === 0) {
    return (
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
        }}
      >
        No closed services found.
      </Container>
    );
  }

  return (
    <Container>
      <ServiceList>
        {closedServices.map((service) => (
          <ServiceItem key={service.serviceId}>
            <ServiceName>Service Name: {service.serviceName}</ServiceName>
            <ServiceId>Service ID: {service.serviceId}</ServiceId>
            <ServicePrice>Price: ${service.servicePrice}</ServicePrice>
            <ServiceDate>
              Purchased On: {new Date(service.purchasedOn).toLocaleDateString()}
            </ServiceDate>
            <CommentsButton onClick={() => openCommentPopup(service.comments)}>
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
    </Container>
  );
}

export default Closed;
