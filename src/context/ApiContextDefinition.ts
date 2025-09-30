import { createContext } from "react";
import type { ApiContextType } from "../types/api";

// Create a default context value to prevent undefined context errors
const defaultContextValue: ApiContextType = {
  data: null,
  loading: true,
  error: null,
  refreshData: () => {},
};

export const ApiContext = createContext<ApiContextType>(defaultContextValue);
