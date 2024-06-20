/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// NotificationContext.js
import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";

const NotificationContext = React.createContext();

export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(() => {
    const savedNotification = localStorage.getItem("notification");
    return savedNotification ? JSON.parse(savedNotification) : null;
  });

  const notify = (message, type = "success") => {
    const notification = { message, type };
    localStorage.setItem("notification", JSON.stringify(notification));
    setNotification(notification);
  };

  useEffect(() => {
    if (notification) {
      toast[notification.type](notification.message);
      localStorage.removeItem("notification");
      setNotification(null); // Reset notification after showing the toast
    }
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
    </NotificationContext.Provider>
  );
}

// export const useNotification = () => useContext(NotificationContext);
