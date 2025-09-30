import React, { type ReactNode } from "react";
import { useApiData } from "../hooks/useApiData";
import { ApiContext } from "./ApiContextDefinition";

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const apiData = useApiData();

  // Ensure context is always available, even during loading states
  const contextValue = React.useMemo(() => apiData, [apiData]);

  return (
    <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
  );
};
