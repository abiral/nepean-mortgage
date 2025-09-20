import { useApi } from "../../hooks/useApi";
import getIcon from "../../icons/icons";
import "./index.css";

const OurProcess = () => {
  const { data } = useApi();
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="process-header">
          <h2>{data?.process.title}</h2>
          <p>{data?.process.description}</p>
        </div>

        <div className="process-steps">
          {data?.process.items.map((step, index) => (
            <div key={`process-steps-${step.id}`} className="process-step">
              <div className="step-number">
                <span className="step-icon">
                  {getIcon(step.icon, "30px", "30px", "#fff")}
                </span>
                <span className="step-count">{step.id}</span>
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {index < (data?.process || []).length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
