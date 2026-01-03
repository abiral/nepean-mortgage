import { useApi } from "../../hooks/useApi";
import { Link } from "react-router-dom";
import getIcon from "../../icons/icons";
import "./index.css";

const OurServices = () => {
  const { data } = useApi();

  if (!data) {
    return null;
  }

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">{data?.services.title}</h2>
        <div className="services-grid">
          {data?.services.items.map((service) => (
            <Link 
              key={`services-${service.id}`} 
              to={`/services/${service.id}`}
              className="service-card-link"
            >
              <div className="service-card">
                <span className="service-icon">
                  {getIcon(service.icon, "30px", "30px", "#fff")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="learn-more">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurServices;
