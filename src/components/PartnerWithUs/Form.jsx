/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import SpinnerMini from "../../ui/SpinnerMini";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";

const SlideForm = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-45%);
  right: ${(props) => (props.isOpen ? "0" : "-350px")};
  max-width: 350px;
  height: max-content;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transition: right 0.3s ease;
  z-index: 50;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 5px;
    margin-bottom: 5px;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 5px;
    margin-bottom: 5px;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 5px;
    margin-bottom: 5px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1vmax;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  margin-left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Form = ({ isOpen }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    occupation: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/partner",
        formData
      );
      // console.log(response.data);
      toast.success("Form Submitted Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        occupation: "",
        message: "",
      });
      setAgreeTerms(false);

      setTimeout(() => {
        setShowPopup(true);
      }, 3000);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/signin");
      }, 8000);
    } catch (error) {
      console.log(error);
      alert("error submitting form");
      toast.error("Error submitting form! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <>
      <SlideForm isOpen={isOpen}>
        <form onSubmit={handleSubmit}>
          <FormInput
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <FormInput
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <FormInput
            placeholder="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />

          <FormSelect
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </FormSelect>

          <FormSelect
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
          >
            <option value="">Select Your Occupation</option>
            <option value="occupation1">CA</option>
            <option value="occupation2">CS</option>
            <option value="occupation3">Lawyer</option>
          </FormSelect>

          <FormTextarea
            placeholder="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
          />

          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
              required
            />
            I agree to the terms and conditions
          </CheckboxLabel>

          <SubmitButton type="submit" disabled={!agreeTerms || loading}>
            {loading ? <SpinnerMini /> : "Submit"}
          </SubmitButton>
        </form>
      </SlideForm>
      {showPopup && (
        <Popup message="You are being redirected to the sign-in page, kindly sign in with the same email ID you provided in the form." />
      )}
    </>
  );
};

export default Form;
