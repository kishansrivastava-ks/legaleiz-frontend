/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { fetchUserData, getImageSrc } from "../../../utils/library";

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

const ProfilePhotoForm = ({ photoURL, email }) => {
  console.log(email);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(photoURL);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // console.log(selectedFile);
    setPreviewURL(URL.createObjectURL(file));
    // console.log(previewURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo", selectedFile);
      console.log(formData);

      try {
        const response = await axios.patch(
          `http://127.0.0.1:8000/api/v1/user/${encodeURIComponent(email)}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);

        if (response.data.status === "success") {
          toast.success("Profile photo updated successfully!");
          setPreviewURL(getImageSrc(response.data.data.user.photo));
          setSelectedFile(null);
          setPreviewURL(null);
          window.location.reload();
        } else {
          toast.error("Failed to update profile photo");
        }
      } catch (error) {
        console.error("Error updating profile photo:", error);
        toast.error("An error occurred while updating the profile photo");
      }
    } else {
      toast.error("No file selected");
    }
  };

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

  return (
    <StyledForm>
      <ProfileImage>
        <Image
          src={(user && getImageSrc(user.photo)) || previewURL || photoURL}
          alt="Profile"
        />
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
      <SubmitButton onClick={handleSubmit} type="submit">
        Update Profile Photo
      </SubmitButton>
    </StyledForm>
  );
};

export default ProfilePhotoForm;
