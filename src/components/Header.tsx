import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";

const Header = ({ onContactUsClicked }: { onContactUsClicked: () => void }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const { data } = useApi();

  useEffect(() => {
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
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <nav className="nav container">
        <div className="logo">
          {isSticky ? (
            <img src={data?.assets.logo} alt={data?.siteTitle} />
          ) : (
            <img src={data?.assets.logo_inverted} alt={data?.siteTitle} />
          )}
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "process")}>
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
            <a href="#contact" onClick={(e) => onContactUsClicked()}>
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
