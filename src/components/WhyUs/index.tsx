import { useApi } from "../../hooks/useApi";
import getIcon from "../../icons/icons";
import "./index.css";

const WhyUs = () => {
  const { data } = useApi();
  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        <h2 className="section-title">{data?.why_us.title}</h2>
        <p className="section-description">{data?.why_us.description}</p>
        <div className="highlights-grid">
          {data?.why_us.items.map((highlight, index) => (
            <div key={`highlight-${index}`} className="highlight-card">
              <span className="highlight-icon">
                {getIcon("checkmark-icon", "30px", "30px", "#fff")}
              </span>
              <h3>{highlight}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
