/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useAuth } from "../../contexts/authContext/authContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  /* background-color: red; */
  position: relative;
`;

const FormHeader = styled.h2`
  text-align: center;
  color: #333;
  margin-right: auto;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 2rem;
  /* background-color: lightgoldenrodyellow; */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-size: 1.8rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormFooter = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #666;
  & > span {
    color: #007bff;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: #218838;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #218838;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  font-size: 16px;
  &:hover {
    background-color: #c82333;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #c82333;
  }
`;
const RequestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const RequestItem = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RequestDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

const RequestDetail = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  flex: 1 1 calc(50% - 10px);
  strong {
    font-weight: bold;
    margin-right: 5px;
  }
`;

const WithdrawButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  align-self: flex-end;
  &:hover {
    background-color: #c82333;
  }
`;

const HelpAndSupport = () => {
  const { userLoggedIn, currentUser, userData } = useAuth();
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    service: "",
    reason: "",
    issue: "",
  });
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reasons = ["Reason 1", "Reason 2", "Reason 3"];
  useEffect(() => {
    if (userData) {
      setServices(userData.purchasedServices);
    }
  }, [userData]);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/v1/query/getAll"
      );
      const userRequests = response.data.data.queries.filter(
        (query) => query.userId === userData._id
      );
      setRequests(userRequests);
    } catch (error) {
      toast.error("Failed to fetch requests.");
      console.error("Error fetching requests:", error);
    }
  };

  const handleWithdrawRequest = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to withdraw this request?"
    );
    if (confirm) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/v1/query/${id}`);
        toast.success("Request withdrawn successfully.");
        fetchRequests(); // Refresh the requests list
      } catch (error) {
        toast.error("Failed to withdraw request.");
        console.error("Error withdrawing request:", error);
      }
    } else {
      return;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const selectedService = services.find(
      (service) => service.serviceName === formData.service
    );
    if (!selectedService) {
      toast.error("Please select a valid service");
      return;
    }

    const queryData = {
      userName: userData.name,
      userId: userData._id,
      serviceName: formData.service,
      serviceId: selectedService.serviceId,
      reason: formData.reason,
      description: formData.issue,
      date: new Date().toISOString(),
      addressed: false,
    };

    try {
      await axios.post("http://127.0.0.1:8000/api/v1/query", queryData);
      toast.success("Request submitted successfully");
      setFormData({
        service: "",
        reason: "",
        issue: "",
      });
    } catch (error) {
      toast.error("Failed to submit request. Please try again!");
      console.error("Error submitting query:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    fetchRequests();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Button onClick={openModal}>View my requests</Button>

      <FormHeader>
        Fill the form below to reach out to us, or connect with us at
      </FormHeader>
      <FormContainer onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label htmlFor="service">Select a Service</Label>
          <Select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service.serviceId} value={service.serviceName}>
                {service.serviceName}
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="reason">Select a Reason</Label>
          <Select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
          >
            <option value="">Choose a reason</option>
            {reasons.map((reason, index) => (
              <option key={index} value={reason}>
                {reason}
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="issue">Describe the Issue</Label>
          <TextArea
            id="issue"
            name="issue"
            rows="5"
            value={formData.issue}
            onChange={handleInputChange}
            placeholder="Describe your issue here"
          ></TextArea>
        </FormGroup>
        <SubmitButton type="submit">Send</SubmitButton>
      </FormContainer>
      <FormFooter>
        You can also write to us at <span>support@legaleiz.com</span> with your
        queries.
      </FormFooter>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>My Requests</h2>
            {requests.length == 0 ? (
              <div>No active requests found</div>
            ) : (
              <RequestList>
                {requests.map((request) => (
                  <RequestItem key={request._id}>
                    <RequestDetails>
                      <RequestDetail>
                        <strong>Service:</strong> {request.serviceName}
                      </RequestDetail>
                      <RequestDetail>
                        <strong>Reason:</strong> {request.reason}
                      </RequestDetail>
                      <RequestDetail>
                        <strong>Description:</strong> {request.description}
                      </RequestDetail>
                      <RequestDetail>
                        <strong>Date:</strong>{" "}
                        {new Date(request.dateAsked).toLocaleString()}
                      </RequestDetail>
                      <RequestDetail>
                        <strong>Addressed:</strong>{" "}
                        {request.addressed ? "Yes" : "No"}
                      </RequestDetail>
                      <WithdrawButton
                        onClick={() => handleWithdrawRequest(request._id)}
                      >
                        Withdraw Request
                      </WithdrawButton>
                    </RequestDetails>
                  </RequestItem>
                ))}
              </RequestList>
            )}
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default HelpAndSupport;
