import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApiProvider } from "./context/ApiContext.tsx";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>
);
