import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import toast from "react-hot-toast";
import {
  addCommentToService,
  fetchUserData,
  updateServiceStatus,
} from "../../../utils/library";
import toast from "react-hot-toast";
import { FaComment, FaEdit } from "react-icons/fa";
import { useAuth } from "../../../contexts/authContext/authContext";

const Container = styled.div`
  height: 76vh;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ServiceItem = styled.li`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 20px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  background-color: lightgoldenrodyellow;
  & > div {
    &:nth-child(2) {
      text-align: right;
    }
  }
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

const ServiceStatus = styled(ServiceDetail)`
  color: #e67e22;
  /* display: flex; */
  /* align-items: center; */
`;
const Heading = styled.h3`
  margin-bottom: 1rem;
`;

const Loader = styled.div`
  font-size: 18px;
  color: #2c3e50;
`;

const NoServicesMessage = styled.div`
  font-size: 18px;
  color: #7f8c8d;
`;

const UpdateIcon = styled.div`
  cursor: pointer;
  /* margin-left: auto; */
  /* display: flex; */
  /* align-items: center; */
`;
const CommentIcon = styled.div`
  cursor: pointer;
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #f9f9f9;
  padding: 30px;
  /* border-radius: 10px;  */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;

  h2 {
    margin-bottom: 20px;
    font-size: 1.5em;
    color: #333;
  }

  select {
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
    font-size: 1em;
    border: 1px solid #ccc;
    /* border-radius: 5px;  */
    background-color: #fff;
    color: #333;
  }

  button {
    margin: 10px 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
    border: none;
    /* border-radius: 5px; */
    transition: background-color 0.3s;

    &:first-of-type {
      background-color: #007bff;
      color: #fff;
    }

    &:first-of-type:hover {
      background-color: #0056b3;
    }

    &:last-of-type {
      background-color: #f8f9fa;
      color: #333;
    }

    &:last-of-type:hover {
      background-color: #e2e6ea;
    }
  }
`;

// COMMENT POPUP
const CommentPopup = styled.div`
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

const CommentPopupContent = styled.div`
  background: white;
  padding: 20px;
  /* border-radius: 8px; */
  text-align: center;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  }

  textarea {
    width: 80%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    /* border-radius: 4px; */
    margin-bottom: 20px;
    resize: vertical; /* Allow vertical resizing */
  }

  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    /* border-radius: 4px; */
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }

  button:last-child {
    background-color: #e74c3c;

    &:hover {
      background-color: #c0392b;
    }
  }
`;
function MyProjects() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [isCommentPopupOpen, setIsCommentPopupOpen] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/purchase"
        );
        setPurchases(response.data.data.purchases);
      } catch (err) {
        setError("Failed to fetch purchases. Please try again later.");
        // toast.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  const handleUpdateClick = (purchase) => {
    setSelectedService(purchase);
    setNewStatus(purchase.serviceStatus);
    setIsPopupOpen(true);
  };

  const handleCommentClick = (purchase) => {
    setSelectedService(purchase);
    setIsCommentPopupOpen(true);
  };
  const handleStatusChange = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to update the status?"
    );
    if (!confirmed) return;

    try {
      await updateServiceStatus(
        selectedService.user,
        selectedService.service,
        newStatus
      );
      setPurchases((prev) =>
        prev.map((p) =>
          p._id === selectedService._id ? { ...p, serviceStatus: newStatus } : p
        )
      );
      toast.success("Service status updated successfully");
      setIsPopupOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAddComment = async () => {
    const confirmed = window.confirm("Are you sure you want to add a comment?");
    if (!confirmed) return;

    try {
      const partnerData = await fetchUserData(currentUser.email);
      const commentedBy = partnerData._id;

      await addCommentToService(
        selectedService.user,
        selectedService.service,
        comment,
        commentedBy
      );

      toast.success("Comment added successfully");
      setIsCommentPopupOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (loading) {
    return (
      <Container>
        <Loader>Loading...</Loader>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Loader>{error}</Loader>
      </Container>
    );
  }

  if (purchases.length === 0) {
    return (
      <Container>
        <NoServicesMessage>No active services found.</NoServicesMessage>
      </Container>
    );
  }

  return (
    <>
      <Heading>My Projects</Heading>
      <Container>
        <ServiceList>
          {purchases.map((purchase) => (
            <ServiceItem key={purchase._id}>
              <div>
                <ServiceName>Service Name: {purchase.serviceName}</ServiceName>
                <ServiceId>Service ID: {purchase.service}</ServiceId>
                <ServiceDetail>Purchased By: {purchase.userName}</ServiceDetail>
                <ServiceDetail>User ID: {purchase.user}</ServiceDetail>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ textAlign: "right" }}>
                  <ServiceStatus>
                    Status: {purchase.serviceStatus}
                  </ServiceStatus>
                  <ServiceDate>
                    Purchased On:{" "}
                    {new Date(purchase.purchasedOn).toLocaleDateString()}
                  </ServiceDate>
                  <ServicePrice>Price: ${purchase.servicePrice}</ServicePrice>
                  {purchase.extraPrice > 0 && (
                    <ServiceDetail>
                      Extra Price: ${purchase.extraPrice}
                    </ServiceDetail>
                  )}
                  <ServiceDetail>
                    Total Price: ${purchase.totalPrice}
                  </ServiceDetail>
                </div>
                <div style={{}}>
                  <UpdateIcon onClick={() => handleUpdateClick(purchase)}>
                    <FaEdit />
                  </UpdateIcon>
                  <CommentIcon onClick={() => handleCommentClick(purchase)}>
                    <FaComment />
                  </CommentIcon>
                </div>
              </div>
            </ServiceItem>
          ))}
        </ServiceList>
      </Container>
      {isPopupOpen && (
        <Popup>
          <PopupContent>
            <h2>Update Service Status</h2>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <option value="ongoing">Ongoing</option>
              <option value="renewal">Renewal</option>
              <option value="completed">Completed</option>
              <option value="closed">Closed</option>
            </select>
            <button onClick={handleStatusChange}>Update</button>
            <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
          </PopupContent>
        </Popup>
      )}
      {isCommentPopupOpen && (
        <CommentPopup>
          <CommentPopupContent>
            <h2>Add Comment</h2>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comment..."
              rows={4}
              cols={50}
            />
            <button onClick={handleAddComment}>Add Comment</button>
            <button onClick={() => setIsCommentPopupOpen(false)}>Cancel</button>
          </CommentPopupContent>
        </CommentPopup>
      )}
    </>
  );
}

export default MyProjects;
