import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useCalculatorModal } from "../../hooks/useCalculatorModal";
import { CalculatorLists } from "../Calculators/types";
import "./index.css";
const Footer = () => {
  const { data } = useApi();
  const { openCalculator } = useCalculatorModal();

  if (!data) {
    return null; // or a loading skeleton
  }

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Link to="/">
                <img src={data?.assets.logo_inverted} alt={data?.site_title} />
              </Link>
            </div>
            <p>{data?.footer.info}</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/website-policy">Website Policy</a>
              </li>
              <li>
                <a href="/feedback-and-complaints">Feedback And Complaints</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Calculators</h3>
            <ul>
              <li>
                <button
                  onClick={() => openCalculator(CalculatorLists.REPAYMENT)}
                  className="footer-link-button"
                >
                  Repayment Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openCalculator(CalculatorLists.EXTRA_REPAYMENT)
                  }
                  className="footer-link-button"
                >
                  Extra Repayment Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    openCalculator(CalculatorLists.MORTGAGE_OFFSET)
                  }
                  className="footer-link-button"
                >
                  Mortgage Offset Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => openCalculator(CalculatorLists.SPLIT_LOAN)}
                  className="footer-link-button"
                >
                  Split Loan Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => openCalculator(CalculatorLists.CAR_LOAN)}
                  className="footer-link-button"
                >
                  Car Loan Calculator
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>
                📧{" "}
                <a href={`mailto:${data?.footer.contact.email}`}>
                  {data?.footer.contact.email}
                </a>
              </li>
              <li>
                📞
                <a href={`tel:${data?.footer.contact.phone}`}>
                  {data?.footer.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{data?.footer.copyright}</p>
          <p className="crafted-by">
            Crafted by{" "}
            <a href="https://abrlnp.me" target="_blank">
              Abiral Neupane
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
