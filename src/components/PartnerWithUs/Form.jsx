/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const SlideForm = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-45%);
  right: ${(props) => (props.isOpen ? "0" : "-350px")};
  max-width: 350px;
  /* height: 60%;  */
  height: max-content;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transition: right 0.3s ease;
  z-index: 999;
  overflow-y: auto; /* Enable scrolling if content exceeds height */
`;

// const FormLabel = styled.label`
//   display: block;
//   margin-bottom: 10px;
//   font-weight: bold;
// `;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1vmax;
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
`;

const Form = ({ isOpen }) => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    occupation: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <SlideForm isOpen={isOpen}>
      {/* <h2>Partner Form</h2> */}
      <form onSubmit={handleSubmit}>
        {/* <FormLabel>Name:</FormLabel> */}
        <FormInput
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        {/* <FormLabel>Email:</FormLabel> */}
        <FormInput
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        {/* <FormLabel>Phone Number:</FormLabel> */}
        <FormInput
          placeholder="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        {/* <FormLabel>Select State:</FormLabel> */}
        <FormSelect
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        >
          <option value="">Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          <option value="state3">State 3</option>
        </FormSelect>

        {/* <FormLabel>Select Your Occupation:</FormLabel> */}
        <FormSelect
          name="occupation"
          value={formData.occupation}
          onChange={handleInputChange}
        >
          <option value="">Select Your Occupation</option>
          <option value="occupation1">Occupation 1</option>
          <option value="occupation2">Occupation 2</option>
          <option value="occupation3">Occupation 3</option>
        </FormSelect>

        {/* <FormLabel>Message:</FormLabel> */}
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

        <SubmitButton type="submit" disabled={!agreeTerms}>
          Submit
        </SubmitButton>
      </form>
    </SlideForm>
  );
};

export default Form;
