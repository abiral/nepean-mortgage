import "./index.css";
const Footer = () => {
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
                        <p>
                            Your trusted partner in finding the perfect home. We provide
                            exceptional real estate services with a focus on quality and
                            customer satisfaction.
                        </p>
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
                            <li>📧 info@realestate.com</li>
                            <li>📞 +1 (555) 123-4567</li>
                            <li>📍 123 Real Estate Ave, City, State</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Authorized Credit Representatives (572369) , is authorized credit representatives of BLSSA Pty Ltd ACN 117 651 760 Australian Credit Licence.</p>
                    <p className="crafted-by">Crafted by <a href="https://abrlnp.me" target="_blank">Abiral Neupane</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
