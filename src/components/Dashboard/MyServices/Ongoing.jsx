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

function Ongoing() {
  const { userLoggedIn, currentUser } = useAuth();
  const [ongoingServices, setOngoingServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (userLoggedIn && currentUser) {
          const user = await fetchUserData(currentUser.email);
          const ongoing = user.purchasedServices.filter(
            (service) => service.serviceStatus === "ongoing"
          );
          setOngoingServices(ongoing);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, [userLoggedIn, currentUser]);

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

  if (ongoingServices.length === 0) {
    return (
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
        }}
      >
        No ongoing services found.
      </Container>
    );
  }

  return (
    <Container>
      <ServiceList>
        {ongoingServices.map((service) => (
          <ServiceItem key={service.serviceId}>
            <ServiceName>Service Name: {service.serviceName}</ServiceName>
            <ServiceId>Service ID: {service.serviceId}</ServiceId>
            <ServicePrice>Price: ${service.servicePrice}</ServicePrice>
            <ServiceDate>
              Purchased On: {new Date(service.purchasedOn).toLocaleDateString()}
            </ServiceDate>
          </ServiceItem>
        ))}
      </ServiceList>
    </Container>
  );
}

export default Ongoing;
