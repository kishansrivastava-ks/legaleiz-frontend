/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ProfilePhotoForm from "./ProfilePhotoForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { fetchUserData } from "../../../utils/library";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 3px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;
const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 80%;
  /* background-color: lightgreen; */
`;
const StyledForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  display: flex;
  gap: 4rem;
  /* background-color: red; */
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #000;
  letter-spacing: 1px;
  flex-basis: 40%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
  &::placeholder {
    font-size: 1.5rem;
  }
`;
const RadioGroup = styled.div`
  margin-top: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 20%;
  /* background-color: yellow; */
`;
const UpdateButton = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background-color: #ff6347;
  color: #fff;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55347;
  }
`;
export const PersonalDetailsForm = ({ currentUser }) => {
  const navigate = useNavigate();
  const { displayName, email, photoURL } = currentUser;
  const [userData, setUserData] = useState({
    name: displayName,
    email: email,
    dob: "",
    gender: "",
    phone: "",
  });

  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData(email);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [email]);
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://127.0.0.1:8000/api/v1/user/${encodeURIComponent(email)}`
  //       );
  //       if (response.data.status === "success" && response.data.data.user) {
  //         const { user } = response.data.data;
  //         setUserData({
  //           ...user,
  //           existingUser: true,
  //           fullName: user.name,
  //           email: user.email,
  //           profilePhoto: user.photoURL || photoURL, // Use user's photo if available, else use Google photo
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, [email, photoURL]);
  // const user = fetchUserData(email);
  console.log(user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/v1/user/${encodeURIComponent(email)}`,
        userData
      );
      toast.success("Details updated successfully!");
      navigate("/dashboard/profile");
    } catch (error) {
      console.error("Error updating user details:", error);
      toast.error("Failed to update details. Please try again.");
    }
  };
  const getImageSrc = (photo) => {
    if (photo && photo.data && photo.contentType) {
      const base64String = btoa(
        new Uint8Array(photo.data.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      return `data:${photo.contentType};base64,${base64String}`;
    }
    return null;
  };
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="name"
            value={displayName}
            readOnly
            // onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            type="date"
            id="dob"
            name="dob"
            value={user?.dob}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={user?.gender === "male"}
                onChange={handleInputChange}
              />{" "}
              Male
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={user?.gender === "female"}
                onChange={handleInputChange}
              />{" "}
              Female
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={user?.gender === "other"}
                onChange={handleInputChange}
              />{" "}
              Other
            </RadioLabel>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={email} readOnly />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Mobile Number</Label>
          <Input
            type="text"
            id="phone"
            name="phone"
            value={user?.phone}
            onChange={handleInputChange}
          />
        </FormGroup>
      </FormContainer>
      <ButtonContainer>
        <ProfilePhotoForm
          photoURL={(user && getImageSrc(user.photo)) || photoURL}
        />
        <UpdateButton type="submit">Update Details</UpdateButton>
      </ButtonContainer>
    </StyledForm>
  );
};
export const AddressForm = () => (
  <StyledForm>
    <FormContainer>
      <FormGroup>
        <Label htmlFor="addressLine1">Address Line 1</Label>
        <Input
          type="text"
          id="addressLine1"
          name="addressLine1"
          placeholder="Address Line 1"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="addressLine2">Address Line 2</Label>
        <Input
          type="text"
          id="addressLine2"
          name="addressLine2"
          placeholder="Address Line 2"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="pin">PIN Code</Label>
        <Input type="number" id="pin" name="pin" placeholder="PIN Code" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="district">District</Label>
        <Input
          type="text"
          id="district"
          name="district"
          placeholder="District"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="city">City / Town / Locality / Village</Label>
        <Input type="text" id="city" name="city" placeholder="City" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="state">State</Label>
        <Input type="text" id="state" name="state" placeholder="State" />
      </FormGroup>
    </FormContainer>
    <ButtonContainer>
      <div></div>
      <UpdateButton type="submit">Update Address</UpdateButton>
    </ButtonContainer>
  </StyledForm>
);

// 🔴 KYC FORM

export const KYCForm = () => (
  <StyledForm>
    <FormContainer>
      <FormGroup>
        <Label htmlFor="aadhar">Aadhar Number</Label>
        <Input
          type="text"
          id="aadhar"
          name="aadhar"
          placeholder="Enter your Aadhar number"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="pan">PAN Number</Label>
        <Input
          type="text"
          id="pan"
          name="pan"
          placeholder="Enter your PAN number"
        />
      </FormGroup>
    </FormContainer>
    <ButtonContainer>
      <div></div>
      <UpdateButton type="submit">Update KYC</UpdateButton>
    </ButtonContainer>
  </StyledForm>
);
