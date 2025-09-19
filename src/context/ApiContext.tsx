import React, { type ReactNode } from "react";
import { useApiData } from "../hooks/useApiData";
import { ApiContext } from "./ApiContextDefinition";

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const apiData = useApiData();

  return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};
