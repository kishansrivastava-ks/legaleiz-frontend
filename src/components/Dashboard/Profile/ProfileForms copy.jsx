/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ProfilePhotoForm from "./ProfilePhotoForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { fetchUserData } from "../../../utils/library";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext/authContext";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData(email);
        setUser(userData);
        setUserData({
          ...userData,
          name: displayName,
          email: email,
          dob: userData.dob
            ? new Date(userData.dob).toISOString().split("T")[0]
            : "",
          gender: userData.gender || "",
          phone: userData.phone || "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [email, displayName]);

  console.log(user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
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
            value={userData.dob}
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
                checked={userData.gender === "male"}
                onChange={handleInputChange}
              />{" "}
              Male
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={userData.gender === "female"}
                onChange={handleInputChange}
              />{" "}
              Female
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={userData.gender === "other"}
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
            value={userData.phone}
            onChange={handleInputChange}
          />
        </FormGroup>
      </FormContainer>
      <ButtonContainer>
        <ProfilePhotoForm
          photoURL={(user && getImageSrc(user.photo)) || photoURL}
          email={email}
        />
        <UpdateButton type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Details"}
        </UpdateButton>
      </ButtonContainer>
    </StyledForm>
  );
};

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23999" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
    outline: none;
  }

  &:hover {
    border-color: #007bff;
  }
`;

export const StyledOption = styled.option`
  padding: 8px;
  font-size: 16px;
`;

export const AddressForm = () => {
  const { userData, currentUser } = useAuth();
  const [address, setAddress] = useState(userData?.address || "");

  const [state, setState] = useState(userData?.state || "");
  const [city, setCity] = useState(userData?.city || "");
  const [pin, setPin] = useState(userData?.pinCode || null);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    if (userData) {
      setAddress(userData.address || "");
      setState(userData.state || "");
      setCity(userData.city || "");
      setPin(userData.pinCode || "");
    }
  }, [userData]);

  useEffect(() => {
    // Fetch states when component mounts
    const fetchStates = async () => {
      try {
        const response = await axios.post(
          `https://countriesnow.space/api/v0.1/countries/states`,
          {
            country: "India",
          }
        );
        // console.log(response.data.data.states);
        setStates(response.data.data.states);
      } catch (error) {
        toast.error("Failed to fetch states");
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    if (state) {
      // Fetch cities for the selected state
      const fetchCities = async () => {
        try {
          const response = await axios.post(
            `https://countriesnow.space/api/v0.1/countries/state/cities`,
            {
              country: "India",
              state: state,
            }
          );
          // console.log(response.data);
          setCities(response.data.data);
        } catch (error) {
          toast.error("Failed to fetch cities");
        }
      };
      fetchCities();
    }
  }, [state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/v1/user/${encodeURIComponent(
          currentUser.email
        )}`,
        {
          address,
          state,
          city,
          pinCode: pin,
        }
      );
      toast.success("Address updated successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Failed to update address. Please try again.");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="state">State</Label>
          <StyledSelect
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <StyledOption value="">Select State</StyledOption>
            {states.map((state) => (
              <StyledOption key={state.iso2} value={state.iso2}>
                {state.name}
              </StyledOption>
            ))}
          </StyledSelect>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city">City / Town / Locality / Village</Label>
          <StyledSelect
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <StyledOption value="">Select City</StyledOption>
            {cities.map((city) => (
              <StyledOption key={city.id} value={city.name}>
                {city.toString()}
              </StyledOption>
            ))}
          </StyledSelect>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pin">PIN Code</Label>
          <div style={{ width: "100%" }}>
            <Input
              type="number"
              id="pin"
              name="pin"
              placeholder="Enter your PIN Code"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
              }}
            />
          </div>
        </FormGroup>
      </FormContainer>
      <ButtonContainer>
        <div></div>
        <UpdateButton type="submit" disabled={formLoading}>
          {formLoading ? "Updating..." : "Update Address"}
        </UpdateButton>
      </ButtonContainer>
    </StyledForm>
  );
};

// 🔴 KYC FORM
const Warning = styled.p`
  color: red;
  font-size: 1rem;
`;
export const KYCForm = () => {
  const { useLoggedIn, currentUser, userData } = useAuth();
  const [aadhar, setAadhar] = useState(userData?.aadhar || "");
  const [pan, setPan] = useState(userData?.pan || "");
  const [loading, setLoading] = useState(false);
  const [aadharError, setAadharError] = useState("");
  const [panError, setPanError] = useState("");

  useEffect(() => {
    if (userData) {
      setAadhar(userData.aadhar || "");
      setPan(userData.pan || "");
    }
  }, [userData]);

  const validateAadhar = (value) => {
    const regex = /^\d{12}$/;
    if (!regex.test(value)) {
      setAadharError("Invalid Aadhar number. It should be a 12-digit number.");
    } else {
      setAadharError("");
    }
  };
  const validatePan = (value) => {
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!regex.test(value)) {
      setPanError(
        "Invalid PAN number. It should be in the format: AAAAA9999A."
      );
    } else {
      setPanError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (aadharError || panError) {
      toast.error("Please fix the errors before submitting.");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/v1/user/${encodeURIComponent(
          currentUser.email
        )}`,
        {
          aadhar,
          pan,
        }
      );
      console.log(response);

      if (response.status === 200) {
        toast.success("KYC Updated Successfully");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      } else {
        throw new Error("Failed to update KYC");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="aadhar">Aadhar Number</Label>
          <div style={{ width: "100%" }}>
            <Input
              type="text"
              id="aadhar"
              name="aadhar"
              placeholder="Enter your Aadhar number"
              value={aadhar}
              onChange={(e) => {
                setAadhar(e.target.value);
                validateAadhar(e.target.value);
              }}
            />
            {aadharError && <Warning>{aadharError}</Warning>}
          </div>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pan">PAN Number</Label>
          <div style={{ width: "100%" }}>
            <Input
              type="text"
              id="pan"
              name="pan"
              value={pan}
              onChange={(e) => {
                setPan(e.target.value);
                validatePan(e.target.value);
              }}
              placeholder="Enter your PAN number"
            />
            {panError && <Warning>{panError}</Warning>}
          </div>
        </FormGroup>
      </FormContainer>
      <ButtonContainer>
        <div></div>
        <UpdateButton type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update KYC"}
        </UpdateButton>
      </ButtonContainer>
    </StyledForm>
  );
};
