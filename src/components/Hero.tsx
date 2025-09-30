import { useApi } from "../hooks/useApi";

const Hero = () => {
  const { data } = useApi();

  if (!data) {
    return (
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{data?.hero_section.title}</h1>
            <p>{data?.hero_section.description}</p>

            {/* <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Enter location or property type"
              />
              <select className="search-input">
                <option>Property Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
              <button className="search-btn">Search</button>
            </div> */}
          </div>
          <div className="hero-image">
            <img
              src={data?.hero_section.banner}
              alt="Loan Image for Nepean Mortgage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
