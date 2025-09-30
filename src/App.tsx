import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useApi } from "./hooks/useApi";
import { ModalProvider } from "./context/ModalContext";
import ModalManager from "./components/ModalManager";
import LandingPage from "./LandingPage";
import Preloader from "./components/Shared/Preloader";

const PrivacyPolicy = lazy(
  () => import("./components/DefaultPages/PrivacyPolicy")
);
const WebsitePolicy = lazy(
  () => import("./components/DefaultPages/WebsitePolicy")
);
const Complaints = lazy(() => import("./components/DefaultPages/Complaints"));

function App() {
  const { loading, error, refreshData } = useApi();

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
    <ModalProvider>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/website-policy" element={<WebsitePolicy />} />
            <Route path="/feedback-and-complaints" element={<Complaints />} />
          </Routes>
        </Suspense>
        <ModalManager />
      </Router>
    </ModalProvider>
  );
}

export default App;
