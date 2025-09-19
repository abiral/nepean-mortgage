import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApiProvider } from "./context/ApiContext.tsx";
import AppLoader from "./components/AppLoader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider>
      <AppLoader />
    </ApiProvider>
  </StrictMode>
);
