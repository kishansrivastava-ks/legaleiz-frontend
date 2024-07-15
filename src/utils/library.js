import axios from "axios";
import toast from "react-hot-toast";

// GET USER DATA FROM DATABASE USING HIS EMAIL
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

// USED TO CONVERT A BUFFER IMAGE FROM DATABASE TO A IMAGE SOURCE URL
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

// GET SERVICE DETAILS FROM DATABASE USING SERVICE ID
export const getServiceById = async (id) => {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/v1/service/${id}`
  );
  return response.data.data.service;
};

// ADD SERVICE TO THE USER DATABASE
export const addServiceToUser = async (serviceId, userId) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/v1/user/add-service`,
      {
        purchasedService: serviceId,
        purchasedBy: userId,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with error:", error.response.data);
      throw new Error(
        error.response.data.message || "Server responded with an error"
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
      throw new Error("No response received from server");
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error setting up the request:", error.message);
      throw new Error("Error setting up the request");
    }
  }
};

// FOR UPDATING THE SERVICE STATUS OF A USER
export const updateServiceStatus = async (userId, serviceId, updatedStatus) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/user/update-service-status",
      {
        userId,
        serviceId,
        updatedStatus,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response && error.response.data.message
        ? error.response.data.message
        : "Failed to update service status"
    );
  }
};

export const addCommentToService = async (
  userId,
  serviceId,
  comment,
  commentedBy
) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/user/add-comment",
      {
        userId,
        serviceId,
        comment,
        commentedBy,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add comment. Please try again later");
  }
};

// DELETE A COMMENT BY A PARTNER
export const deleteComment = async (userId, serviceId, commentId) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/user/delete-comment",
      {
        userId,
        serviceId,
        commentId,
      }
    );
    return response;
  } catch (error) {
    throw new Error("Failed to delete comment. Please try again later");
  }
};

export const getRequests = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v1/query/getAll"
    );
    // const userRequests = response.data.data.queries.filter(
    //   (query) => query.userId === userId
    // );
    return response.data.data.queries;
  } catch (error) {
    throw new Error("Failed to fetch requests");
  }
};

export async function withdrawRequest(id) {
  const confirm = window.confirm(
    "Are you sure you want to withdraw this request?"
  );
  if (confirm) {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/query/${id}`);
      toast.success("Request withdrawn successfully.");
    } catch (error) {
      toast.error("Failed to withdraw request.");
      console.error("Error withdrawing request:", error);
    }
  } else {
    return;
  }
}

export async function getServices(email, status = null) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v1/user/${encodeURIComponent(email)}`
    );
    if (response.data.status === "success") {
      const user = response.data.data.user;
      if (status === null) {
        return user.purchasedServices;
      }
      const services = user.purchasedServices.filter(
        (service) => service.serviceStatus === status
      );
      return services;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user services:", error);
    return null;
  }
}

export async function getPurchases() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/purchase");
    if (response.data.status === "success") {
      return response.data.data.purchases;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching purchases:", error);
    return null;
  }
}
