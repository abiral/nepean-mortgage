const Properties = () => {
  return (
    <section className="properties-section" id="properties">
      <div className="container">
        <h2 className="section-title">Popular Residences</h2>
        <div className="properties-grid">
          <div className="property-card">
            <img src="/sample-files/residence-1.png" alt="Modern Villa" />
            <div className="property-info">
              <div className="property-price">$450,000</div>
              <div className="property-title">Modern Family Villa</div>
              <div className="property-location">Downtown Area</div>
            </div>
          </div>
          <div className="property-card">
            <img src="/sample-files/residence-2.png" alt="Luxury House" />
            <div className="property-info">
              <div className="property-price">$680,000</div>
              <div className="property-title">Luxury Family House</div>
              <div className="property-location">Suburb Hills</div>
            </div>
          </div>
          <div className="property-card">
            <img src="/sample-files/residence-3.png" alt="Contemporary Home" />
            <div className="property-info">
              <div className="property-price">$520,000</div>
              <div className="property-title">Contemporary Home</div>
              <div className="property-location">City Center</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Properties;
