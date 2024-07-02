import axios from "axios";

export const fetchUserData = async (email) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v1/user/${encodeURIComponent(email)}`
    );
    if (response.data.status === "success") {
      return response.data.data.user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
};

export const getImageSrc = (photo) => {
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
