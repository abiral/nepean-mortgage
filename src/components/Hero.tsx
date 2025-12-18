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
          </div>
          <div className="hero-image">
            <img
              src={data?.hero_section.banner}
              alt="Loan Image for Nepean Mortgage"
              width={556}
              height={556}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
