import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../ui/Whatsapp";

import { useAuth } from "../contexts/authContext/authContext";
import { useState } from "react";
import toast from "react-hot-toast";

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
  background-color: #fff;
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
    font-size: 5rem;
    letter-spacing: 2px;
  }
`;
const UseContainer = styled.div``;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  /* margin: 0 auto; */
  margin-right: auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  margin-right: 10px;
  outline: none;

  &:checked::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #007bff;
    top: 3.5px;
    left: 3px;
    /* position: center; */
  }
`;

const Label = styled.label`
  font-size: 18px;
  color: #555;
`;

const SubmitButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #0056b3;
  }
`;
const RoleForm = () => {
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Role updated successfully");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Choose your role</Title>
      <Options>
        <Option>
          <RadioButton
            type="radio"
            id="customer"
            name="role"
            value="Customer"
            checked={role === "Customer"}
            onChange={(e) => setRole(e.target.value)}
          />
          <Label htmlFor="customer">Customer</Label>
        </Option>
        <Option>
          <RadioButton
            type="radio"
            id="partner"
            name="role"
            value="Partner"
            checked={role === "Partner"}
            onChange={(e) => setRole(e.target.value)}
          />
          <Label htmlFor="partner">Partner</Label>
        </Option>
        <Option>
          <RadioButton
            type="radio"
            id="vendor"
            name="role"
            value="Vendor"
            checked={role === "Vendor"}
            onChange={(e) => setRole(e.target.value)}
          />
          <Label htmlFor="vendor">Vendor</Label>
        </Option>
      </Options>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};
function Dashboard() {
  const { userLoggedIn, currentUser } = useAuth();

  return (
    <LandingPage>
      <Navbar />
      <Main>
        {userLoggedIn && currentUser ? (
          <UseContainer>
            <div>{`Welcome ${currentUser.displayName.split(" ")[0]}`}</div>
            <RoleForm />
          </UseContainer>
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
