import { useEffect, useRef, useState } from "react";
import { useApi } from "../../hooks/useApi";
import "./index.css";

const PartnerBanks = () => {
  const { data } = useApi();
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setShouldAnimate(true);
          // Stop observing once animation is triggered
          observer.disconnect();
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5],
        rootMargin: '0px 0px -50px 0px' // Trigger when element is 50px into viewport
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!data) {
    return null;
  }

  const partnerCount = data.banking_partners.items.length;
  const slideWidth = 220; // 180px width + 40px margin (20px each side)

  return (
    <section className="partners-section" id="partners" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{data?.banking_partners.title}</h2>
      </div>
      <div className="slider">
        <div 
          className={`slide-track ${shouldAnimate ? 'slide' : ''}`}
          style={{
            width: `${slideWidth * partnerCount * 2}px`, // Double for seamless loop
            animationDuration: `${partnerCount * 3}s` // Dynamic duration based on count
          }}
        >
          {/* Render items twice for seamless infinite scroll */}
          {[...data.banking_partners.items, ...data.banking_partners.items].map((partner, index) => (
            <div key={`partner-bank-${partner.id}-${index}`} className="slide">
              <img src={partner.logo} alt={partner.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;
