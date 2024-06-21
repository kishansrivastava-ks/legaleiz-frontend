import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../ui/Whatsapp";

import { useAuth } from "../contexts/authContext/authContext";
import { useState } from "react";
import toast from "react-hot-toast";

import axios from "axios";

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

const RoleLabel = styled.label`
  font-size: 18px;
  color: #555;
`;

const RoleSubmitButton = styled.button`
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

// CONTACT FROM STYLING
const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const RoleTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
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

const ResponseContainer = styled.div`
  margin-top: 20px;
  background: #e0f7fa;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  text-align: left;

  p {
    margin: 5px 0;
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
      <RoleTitle>Choose your role</RoleTitle>
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
          <RoleLabel htmlFor="customer">Customer</RoleLabel>
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
          <RoleLabel htmlFor="partner">Partner</RoleLabel>
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
          <RoleLabel htmlFor="vendor">Vendor</RoleLabel>
        </Option>
      </Options>
      <RoleSubmitButton type="submit">Submit</RoleSubmitButton>
    </FormContainer>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/user",
        formData
      );
      toast.success("user creates successfully");
      setResponse(res.data.data.user);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <Title>Contact Us</Title>
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </InputContainer>
      <SubmitButton type="submit">Submit</SubmitButton>
      {response && (
        <ResponseContainer>
          <p>
            <strong>Name:</strong> {response.name}
          </p>
          <p>
            <strong>Email:</strong> {response.email}
          </p>
        </ResponseContainer>
      )}
    </ContactFormContainer>
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
            <ContactForm />
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
