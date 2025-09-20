import { useApi } from "../../hooks/useApi";
import getIcon from "../../icons/icons";
import "./index.css";

const OurServices = () => {
  const { data } = useApi();
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">{data?.services.title}</h2>
        <div className="services-grid">
          {data?.services.items.map((service) => (
            <div key={`services-${service.id}`} className="service-card">
              <span className="service-icon">
                {getIcon(service.icon, "30px", "30px", "#fff")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurServices;
