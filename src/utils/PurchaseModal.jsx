/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/authContext/authContext";
import { getServiceById, addServiceToUser, fetchUserData } from "./library";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
`;

const Heading = styled.h2`
  margin-top: 0;
`;

const ServiceDetail = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const PurchaseModal = ({ serviceId, extraPrice, onClose }) => {
  const { userLoggedIn, currentUser } = useAuth();
  //   const history = useHistory();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const service = await getServiceById(serviceId);
        console.log(service);
        setServiceDetails(service);
      } catch (error) {
        toast.error("Failed to fetch service details");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [serviceId]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await fetchUserData(
          (userLoggedIn && currentUser.email) || "nouser@nouser.com"
        );
        // if (!user) {
        //   toast.error("You need to be signed in to perform this action");
        // }
        setUser(user);
      } catch (error) {
        toast.error("Failed to fetch user details");
      }
    };
    fetchUser();
  }, [currentUser.email, userLoggedIn]);

  const handlePayment = async () => {
    if (!userLoggedIn) {
      toast.error("You need to be signed in to perform this action");
      return;
    }

    try {
      //   await addServiceToUser(currentUser.email, {
      //     purchasedService: serviceId,
      //     serviceName: serviceDetails.title,
      //     servicePrice: serviceDetails.price,
      //     extraPrice: extraPrice || 0,
      //     purchasedOn: new Date(),
      //     serviceStatus: "ongoing",
      //   });
      await addServiceToUser(serviceId, user._id);
      toast.success("Service purchased successfully");
      navigate("/dashboard/my-services/ongoing");
    } catch (error) {
      toast.error(error.message || "Failed to purchase service");
    }
  };

  if (loading) {
    return (
      <ModalOverlay>
        <ModalContainer>Loading...</ModalContainer>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <Heading>Service Details</Heading>
        <ServiceDetail>
          <strong>Service Name:</strong> {serviceDetails.title}
        </ServiceDetail>
        <ServiceDetail>
          <strong>Service ID:</strong> {serviceId}
        </ServiceDetail>
        <ServiceDetail>
          <strong>Price:</strong> ₹{serviceDetails.price}
        </ServiceDetail>
        {extraPrice && (
          <ServiceDetail>
            <strong>Extra Price:</strong> ₹{extraPrice}
          </ServiceDetail>
        )}
        <ServiceDetail>
          <strong>Description:</strong> {serviceDetails.description}
        </ServiceDetail>
        <Button onClick={handlePayment} disabled={!userLoggedIn}>
          Pay Now
        </Button>
        <Button
          onClick={onClose}
          style={{ marginLeft: "10px", background: "#ccc", color: "#000" }}
        >
          Cancel
        </Button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PurchaseModal;
