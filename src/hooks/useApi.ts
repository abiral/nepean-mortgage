import { useContext } from "react";
import { ApiContext } from "../context/ApiContextDefinition";
import type { ApiContextType } from "../types/api";

export const useApi = (): ApiContextType => {
  const context = useContext(ApiContext);
  // Since we now have a default context value, this should never be undefined
  // But we'll keep a safety check just in case
  if (!context) {
    console.error("useApi: Context is null or undefined");
    return {
      data: null,
      loading: true,
      error: "Context not available",
      refreshData: () => {},
    };
  }
  return context;
};
