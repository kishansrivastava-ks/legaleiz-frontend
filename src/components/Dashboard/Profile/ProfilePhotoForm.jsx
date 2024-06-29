/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 1rem;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* overflow: hidden; */
  border: 2px solid lightgray;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  /* object-position: center; */
`;

const EditButton = styled.label`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const EditIcon = styled(FaCamera)`
  font-size: 1.2rem;
`;

const FileInput = styled.input`
  display: none;
`;

const SubmitButton = styled.button`
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #007bff;
  cursor: pointer;
  margin-top: 10px;
  padding: 0 0.5rem;
  font-size: 1.3rem;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const ProfilePhotoForm = ({ photoURL }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (uploading new image)
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      // Implement upload logic here
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <ProfileImage>
        <Image src={photoURL} alt="Profile" />
        <EditButton htmlFor="fileInput">
          <EditIcon />
        </EditButton>
      </ProfileImage>
      <FileInput
        type="file"
        id="fileInput"
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <SubmitButton type="submit">Update Profile Photo</SubmitButton>
    </StyledForm>
  );
};

export default ProfilePhotoForm;
