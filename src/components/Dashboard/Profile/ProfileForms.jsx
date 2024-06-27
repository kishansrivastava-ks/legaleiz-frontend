import styled from "styled-components";

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
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
export const PersonalDetailsForm = () => (
  <Container>
    <FormContainer>
      <h2>Personal Details Form</h2>
    </FormContainer>
    <ButtonContainer>
      <UpdateButton>Update Personal Details</UpdateButton>
    </ButtonContainer>
  </Container>
);

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
      <UpdateButton type="submit">Update KYC</UpdateButton>
    </ButtonContainer>
  </StyledForm>
);
