const NearByBlock = () => {
  return (
    <section className="nearby-section">
      <div className="container">
        <h2 className="section-title">Nearby Locations</h2>
        <div className="locations-grid">
          <div className="location-card">
            <img src="/sample-files/loc-1.png" alt="Living Room" />
            <div className="card-content">
              <h3 className="card-title">Living Room</h3>
              <p className="card-subtitle">Modern and spacious living areas</p>
            </div>
          </div>
          <div className="location-card">
            <img src="/sample-files/loc-2.png" alt="Kitchen" />
            <div className="card-content">
              <h3 className="card-title">Kitchen</h3>
              <p className="card-subtitle">Fully equipped modern kitchens</p>
            </div>
          </div>
          <div className="location-card">
            <img src="/sample-files/loc-3.png" alt="Bedroom" />
            <div className="card-content">
              <h3 className="card-title">Bedroom</h3>
              <p className="card-subtitle">Comfortable and cozy bedrooms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NearByBlock;
