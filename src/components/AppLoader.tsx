import React from "react";
import { useApi } from "../hooks/useApi";
import LandingPage from "../LandingPage";

const AppLoader: React.FC = () => {
  const { data, loading, error, refreshData } = useApi();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>Loading...</div>
        <div>Fetching application data...</div>
      </div>
    );
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

  // Only render LandingPage when data is successfully loaded
  if (data) {
    return <LandingPage />;
  }

  return null;
};

export default AppLoader;
