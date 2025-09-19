import getIcon from "../../icons/icons";
import "./index.css";

const WhyUs = () => {
    const highlights = [
        "Tailored solutions designed for your future financial success",
        "Access to 40+ lenders and 200+ loan products",
        "Fully licensed & accredited with MFAA & AFCA",
        "End-to-end support with full transparency",
        "Flexible appointments, including after-hours and weekends",
        "Ongoing reviews to keep your mortgage competitive",
        "Free services—no cost to you"
    ];

    return (
        <section className="why-us-section" id="why-us">
            <div className="container">
                <h2 className="section-title">Why Choose Nepean Mortgage</h2>
                <p className="section-description">
                    We combine expertise, tailored solutions, and genuine care to guide you towards financial freedom and homeownership with confidence.
                </p>
                <div className="highlights-grid">
                    {highlights.map((highlight, index) => (
                        <div key={`highlight-${index}`} className="highlight-card">
                            <span className="highlight-icon">{getIcon('checkmark-icon', '30px', '30px', '#fff')}</span>
                            <h3>{highlight}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;