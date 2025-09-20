import { useApi } from "../../hooks/useApi";
import "./index.css";
const Footer = () => {
  const { data } = useApi();
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="/logo-inverted-nepean-mortgage.png"
                alt="Nepean Mortgage"
              />
            </div>
            <p>{data?.footer.info}</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#process">Our Process</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Calculators</h3>
            <ul>
              <li>
                <a href="#">Calculator 1</a>
              </li>
              <li>
                <a href="#">Calculator 2</a>
              </li>
              <li>
                <a href="#">Calculator 3</a>
              </li>
              <li>
                <a href="#">Calculator 4</a>
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
          <p>
            Authorized Credit Representatives (572369) , is authorized credit
            representatives of BLSSA Pty Ltd ACN 117 651 760 Australian Credit
            Licence.
          </p>
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
