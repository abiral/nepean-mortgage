import { useApi } from "../hooks/useApi";
import { useCriticalImage } from "../hooks/useOptimizedImage";
import { useLayoutShiftOptimization } from "../hooks/usePerformance";

const Hero = () => {
  const { data } = useApi();
  useLayoutShiftOptimization();
  
  const { isLoaded, imageProps } = useCriticalImage(
    data?.hero_section?.banner,
    () => {
      // Optional: Track LCP timing
      if (typeof performance !== 'undefined' && performance.mark) {
        performance.mark('hero-image-loaded');
      }
    }
  );

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
          <div className="hero-image" data-dynamic-height>
            <img
              {...imageProps()}
              alt="Mortgage brokers discussing and reviewing documents at Nepean Mortgage office"
              width="600"
              height="400"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
