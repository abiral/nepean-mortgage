import { createContext } from "react";
import type { ApiContextType } from "../types/api";

export const ApiContext = createContext<ApiContextType | undefined>(undefined);
