import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreateService = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "500", // Default value
    type: "business", // Default value
    category: "documentation", // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/service",
        formData
      );
      console.log("Service added successfully:", response.data);
      // Clear form
      setFormData({
        title: "",
        price: "500", // Reset to default value
        type: "business", // Reset to default value
        category: "documentation", // Reset to default value
      });
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="type">Type</Label>
          <Select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="business">Business</option>
            <option value="individual">Individual</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category">Category</Label>
          <Select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="documentation">Documentation</option>
            <option value="talkToLawyer">Talk to a Lawyer</option>
            <option value="startup">Startup</option>
          </Select>
        </FormGroup>

        <Button type="submit">Add Service</Button>
      </form>
    </FormContainer>
  );
};

export default CreateService;
