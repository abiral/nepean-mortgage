import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApiProvider } from "./context/ApiContext.tsx";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import App from "./App.tsx";

// Load critical CSS first (already inlined in HTML)
// Dynamically load non-critical CSS after initial render
const loadNonCriticalCSS = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/index.css';
  link.media = 'print';
  link.onload = () => { link.media = 'all'; };
  document.head.appendChild(link);
};

// Load non-critical CSS after initial render
requestIdleCallback ? 
  requestIdleCallback(loadNonCriticalCSS) : 
  setTimeout(loadNonCriticalCSS, 100);

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
