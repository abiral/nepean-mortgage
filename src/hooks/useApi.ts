import { useContext } from "react";
import { ApiContext } from "../context/ApiContextDefinition";
import type { ApiContextType } from "../types/api";

export const useApi = (): ApiContextType => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
};
