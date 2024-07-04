/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
