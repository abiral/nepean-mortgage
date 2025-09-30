import React from "react";
import "./index.css";
import nepeanLogo from "../../../assets/nepean-mortgage-logo.svg";

interface PreloaderProps {
  isLoading?: boolean;
  logoWidth?: number;
  logoHeight?: number;
}

const Preloader: React.FC<PreloaderProps> = ({
  isLoading = true,
  logoWidth = 120,
  logoHeight = 60,
}) => {
  if (!isLoading) return null;

  return (
    <div className="preloader-overlay">
      <div className="preloader-content">
        <div className="logo-container">
          <img
            src={nepeanLogo}
            alt="Nepean Mortgage Logo"
            className="logo-image"
            width={logoWidth}
            height={logoHeight}
          />
        </div>
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
        </div>
        <p className="loading-text">Loading....</p>
      </div>
    </div>
  );
};

export default Preloader;
