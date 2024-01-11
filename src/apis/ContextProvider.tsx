import React, { createContext, useContext } from "react";

const UserContext = createContext({});

export const ContextProvider = ({ children }: any) => {
  const [fragment, setFragment] = React.useState("");
  const data = { fragment, setFragment };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export const ContextData = () => {
  return useContext(UserContext);
};
