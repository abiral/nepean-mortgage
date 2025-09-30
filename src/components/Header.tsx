import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApi } from "../hooks/useApi";

interface HeaderProps {
  onContactUsClicked: () => void;
  enableSticky?: boolean;
  isTransparent?: boolean;
}

const Header = ({
  onContactUsClicked,
  enableSticky = true,
  isTransparent = true,
}: HeaderProps) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const { data } = useApi();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!enableSticky) return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enableSticky]);

  // Add safety check for data after all hooks
  if (!data) {
    return (
      <header className="header">
        <nav className="nav container">
          <div className="logo">
            <Link to="/">
              <span>Loading...</span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    if (!isHomePage) {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${targetId}`;
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Determine header classes based on props and state
  const getHeaderClasses = () => {
    let classes = "header";

    if (!enableSticky) {
      // For non-sticky headers (DefaultPages), use static positioning
      classes += " static";
    } else if (isSticky) {
      // For sticky headers in sticky state
      classes += " sticky";
    }

    if (!isTransparent) {
      classes += " solid";
    }

    return classes;
  };

  // Determine which logo to show
  const getLogoSrc = () => {
    if (!isTransparent) {
      // For solid headers (like DefaultPages), always show regular logo
      return data?.assets.logo;
    }

    if (enableSticky && isSticky) {
      // For sticky state on transparent headers, show regular logo
      return data?.assets.logo;
    }

    // For transparent headers in non-sticky state, show inverted logo
    return data?.assets.logo_inverted;
  };

  return (
    <header className={getHeaderClasses()}>
      <nav className="nav container">
        <div className="logo">
          <Link to="/">
            <img src={getLogoSrc()} alt={data?.site_title} />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#process"
              onClick={(e) => handleSmoothScroll(e, "process")}
            >
              Our Process
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#partners"
              onClick={(e) => handleSmoothScroll(e, "partners")}
            >
              Partners
            </a>
          </li>
          <li>
            <a href="#why-us" onClick={(e) => handleSmoothScroll(e, "why-us")}>
              Why Us?
            </a>
          </li>
          <li>
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, "faq")}>
              FAQ
            </a>
          </li>
        </ul>
        <button onClick={() => onContactUsClicked()} className="nav-btn">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
