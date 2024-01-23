/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NavController = createContext({});

export function NavControllerProvider({ children }) {
  const [isExpand,setIsExpand]=useState(false)
  return (
    <NavController.Provider
    value={{
        isExpand,setIsExpand
    }}
      >
      {children}
    </NavController.Provider>
  );
}
