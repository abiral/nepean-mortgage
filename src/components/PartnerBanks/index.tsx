import { useApi } from "../../hooks/useApi";
import "./index.css";
const PartnerBanks = () => {
  const { data } = useApi();
  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <h2 className="section-title">{data?.banking_partners.title}</h2>
      </div>
      <div className="slider">
        <div className="slide-track slide">
          {data?.banking_partners.items.map((partner) => (
            <div key={`partner-bank-${partner.id}`} className="slide">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;
