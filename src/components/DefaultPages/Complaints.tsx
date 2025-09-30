import { Helmet } from "react-helmet-async";
import Header from "../Header";
import Footer from "../Footer";
import { useContactModal } from "../../hooks/useContactModal";
import "./DefaultPages.css";

const Complaints = () => {
  const { openContactForm } = useContactModal();

  return (
    <div className="default-page">
      <Helmet>
        <title>Feedback and Complaints | Nepean Mortgage</title>
      </Helmet>
      <Header
        onContactUsClicked={() => openContactForm()}
        enableSticky={false}
        isTransparent={false}
      />
      <main className="default-main">
        <div className="default-container">
          <div className="default-header">
            <h1 className="default-title">Feedback and Complaints</h1>
            <p className="default-subtitle">
              We value your feedback and are committed to resolving any concerns
              you may have about our services.
            </p>
          </div>
          <div className="default-content">
            <div className="default-section">
              <h2>What to do if you have a dispute or complaint?</h2>
              <p>
                We hope you are delighted with our services, but if you have a
                complaint please let us know so we can work towards resolving it
                promptly and fairly.
              </p>
              <p>
                You can make a complaint verbally or in writing by contacting
                your broker directly or by using any of the following:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@nepeanmortgage.com.au">
                    info@nepeanmortgage.com.au
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:0434052278">0434 052 278</a> Monday to Friday 9
                  am to 5pm (AEST)
                </li>
                <li>
                  <strong>Mail:</strong> 20 Staples Place, Glenmore Park, NSW,
                  2745
                </li>
              </ul>
            </div>

            <div className="default-section">
              <h2>Our Complaint Resolution Process</h2>
              <p>
                When we receive a complaint, we will attempt to resolve it
                promptly. We will provide a written acknowledgement of receipt
                of the complaint to the client within{" "}
                <strong>24 hours (1 business day)</strong> or as soon as
                practicable unless the complaint is otherwise resolved in the
                meantime.
              </p>
              <p>
                We will ensure that a final response is given to you as soon as
                possible, but within <strong>thirty (30) days</strong> of
                receipt of the complaint. For certain types of complaints,
                involving "default notices" or urgent disputes such as
                "applications for hardship", a final response must be provided
                within <strong>twenty one (21) days</strong>.
              </p>
              <p>
                If we are unable to deal with the complaint as it relates to a
                third party (for example, a lender), we may ask you to contact
                the relevant third party.
              </p>
              <p>
                In cases where your complaint will take longer than 30 days to
                resolve, we will notify you in writing with the reasons for the
                delay and of your right to refer the complaint to the Australian
                Financial Complaints Authority (AFCA).
              </p>
            </div>

            <div className="default-section">
              <h2>External Dispute Resolution Scheme</h2>
              <p>
                If we do not reach an agreement on your complaint, you may refer
                the complaint to an ASIC Approved External Dispute Resolution
                (EDR) Scheme. Our external dispute resolution provider is the{" "}
                <strong>
                  Australian Financial Complaints Authority (AFCA)
                </strong>
                .
              </p>

              <h3>Contact AFCA</h3>
              <p>You can contact AFCA using any of the following:</p>
              <ul>
                <li>
                  <strong>Online:</strong>{" "}
                  <a
                    href="https://www.afca.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.afca.org.au
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@afca.org.au">info@afca.org.au</a>
                </li>
                <li>
                  <strong>Telephone:</strong>{" "}
                  <a href="tel:1800931678">1800 931 678</a> (toll free)
                </li>
                <li>
                  <strong>Mail:</strong> GPO Box 3, Melbourne VIC 3001
                </li>
              </ul>

              <p>
                External dispute resolution is a <strong>free service</strong>{" "}
                established to provide you with an independent mechanism to
                resolve specific complaints. You may refer the matter to AFCA at
                any time, but if our internal process is still in progress, they
                may request that our internal processes be completed before
                considering the matter further.
              </p>
            </div>

            <div className="default-section">
              <h2>Additional Information</h2>
              <p>
                You can obtain further details about our dispute resolution
                procedures and obtain details of our privacy policy on request.
              </p>
            </div>

            <div className="default-contact-info">
              <h3>Quick Contact</h3>
              <p>For immediate assistance with your complaint or feedback:</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@nepeanmortgage.com.au">
                  info@nepeanmortgage.com.au
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:0434052278">0434 052 278</a>
              </p>
              <p>
                <strong>Business Hours:</strong> Monday to Friday, 9:00 AM to
                5:00 PM (AEST)
              </p>
              <p>
                <strong>Address:</strong> 20 Staples Place, Glenmore Park, NSW,
                2745
              </p>
            </div>

            <div className="default-last-updated">
              <p>
                We are committed to continuous improvement and value all
                feedback to enhance our services.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Complaints;
