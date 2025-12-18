import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useApi } from "./hooks/useApi";
import { usePerformanceOptimizations } from "./hooks/usePerformance";
import { ModalProvider } from "./context/ModalContext";
import ModalManager from "./components/ModalManager";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import Preloader from "./components/Shared/Preloader";

// Lazy load components for better code splitting
const PrivacyPolicy = lazy(() => 
  import("./pages/PrivacyPolicy").then(module => ({
    default: module.default
  }))
);
const WebsitePolicy = lazy(() => 
  import("./pages/WebsitePolicy").then(module => ({
    default: module.default
  }))
);
const FeedbackComplaints = lazy(() => 
  import("./pages/FeedbackComplaints").then(module => ({
    default: module.default
  }))
);
const NotFound = lazy(() => 
  import("./pages/404").then(module => ({
    default: module.default
  }))
);

function App() {
  const { loading, error, refreshData } = useApi();
  
  // Apply performance optimizations
  usePerformanceOptimizations();

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <div>
          <h2>Error Loading Application</h2>
          <p>Failed to load application data: {error}</p>
          <button
            onClick={refreshData}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <ModalProvider>
        <Router>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/website-policy" element={<WebsitePolicy />} />
              <Route
                path="/feedback-and-complaints"
                element={<FeedbackComplaints />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ScrollToTop />
          <ModalManager />
        </Router>
      </ModalProvider>
    </HelmetProvider>
  );
}

export default App;
