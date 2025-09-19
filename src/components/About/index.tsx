import { useApi } from "../../hooks/useApi";
import "./index.css";

const About = () => {
    const { data } = useApi();
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>{data?.about.title}</h2>
                        <p>{data?.about.description}</p>
                        <button className="about-btn">Contact Us</button>
                    </div>
                    <div className="about-visual">
                        <img src={data?.about.profile} alt={data?.name} />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
