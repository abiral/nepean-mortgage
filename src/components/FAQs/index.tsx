import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import "./index.css";

const FAQ = ({ onContactUsClicked }: { onContactUsClicked: () => void }) => {
  const { data } = useApi();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  if (!data) {
    return null;
  }

  const toggleItem = (key: string) => {
    setActiveItem(activeItem === key ? null : key);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2>{data?.faq.title}</h2>
          <p>{data?.faq.description}</p>
        </div>

        <div className="faq-content">
          {data?.faq.items.map((item) => (
            <div
              key={item.key}
              className={`faq-item ${activeItem === item.key ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(item.key)}
                aria-expanded={activeItem === item.key}
              >
                <span>{item.title}</span>
                <span className="faq-icon">
                  {activeItem === item.key ? "-" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <div className="faq-answer-content">
                  {item.description.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>
            We're here to help. Please{" "}
            <a href="javasrcipt:void()" onClick={() => onContactUsClicked()}>
              contact us
            </a>{" "}
            for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
