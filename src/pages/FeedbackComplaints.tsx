import React from "react";
import DirectSEO from "../components/SEO/DirectSEO";
import Header from "../components/Header";
import { useContactModal } from "../hooks/useContactModal";
import Footer from "../components/Footer";

const FeedbackComplaints: React.FC = () => {
  const { openContactForm } = useContactModal();
  
  return (
    <>
      <Header enableSticky={false} isTransparent={false} onContactUsClicked={() => openContactForm()} />
      <DirectSEO path="/feedback-and-complaints" />
      <div
        style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}
      >
        <h1>Feedback and Complaints</h1>

        <h2>What to do if you have a dispute or complaint?</h2>
        <p>
          We hope you are delighted with our services, but if you have a 
          complaint please let us know so we can work towards resolving it 
          promptly and fairly.
        </p>
        <p>
          You can make a complaint verbally or in writing by contacting your 
          broker directly or by using any of the following:
        </p>
        <ul>
          <li>Email: info@nepeanmortgage.com.au</li>
          <li>Phone: 0434052278 Monday to Friday 9 am to 5pm (AEST)</li>
          <li>Mail: 20 Staples place, Glenmore Park, NSW, 2745</li>
        </ul>

        <h2>Our Complaint Resolution Process</h2>
        <p>
          When we receive a complaint, we will attempt to resolve it promptly. 
          We will provide a written acknowledgement of receipt of the complaint 
          to the client within 24 hours (1 business day) or as soon as 
          practicable unless the complaint is otherwise resolved in the meantime.
        </p>
        <p>
          We will ensure that a final response is given to you as soon as 
          possible, but within thirty (30) days of receipt of the complaint. 
          For certain types of complaints, involving "default notices" or urgent 
          disputes such as "applications for hardship", a final response must 
          be provided within twenty one (21) days.
        </p>
        <p>
          If we are unable to deal with the complaint as it relates to a third 
          party (for example, a lender), we may ask you to contact the relevant 
          third party.
        </p>
        <p>
          In cases where your complaint will take longer than 30 days to resolve, 
          we will notify you in writing with the reasons for the delay and of 
          your right to refer the complaint to the Australian Financial 
          Complaints Authority (AFCA).
        </p>

        <h2>External Dispute Resolution Scheme</h2>
        <p>
          If we do not reach an agreement on your complaint, you may refer the 
          complaint to an ASIC Approved External Dispute Resolution (EDR) Scheme. 
          Our external dispute resolution provider is the Australian Financial 
          Complaints Authority (AFCA).
        </p>
        <p>You can contact AFCA using any of the following:</p>
        <ul>
          <li>Online: www.afca.org.au</li>
          <li>Email: info@afca.org.au</li>
          <li>Telephone: 1800 931 678 (toll free)</li>
          <li>Mail: GPO Box 3, Melbourne Vic 3001</li>
        </ul>
        <p>
          External dispute resolution is a free service established to provide 
          you with an independent mechanism to resolve specific complaints. You 
          may refer the matter to AFCA at any time, but if our internal process 
          is still in progress, they may request that our internal processes 
          be completed before considering the matter further.
        </p>
        <p>
          You can obtain further details about our dispute resolution procedures 
          and obtain details of our privacy policy on request.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default FeedbackComplaints;
