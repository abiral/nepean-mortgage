import React from "react";
import DirectSEO from "../components/SEO/DirectSEO";
import Header from "../components/Header";
import { useContactModal } from "../hooks/useContactModal";
import Footer from "../components/Footer";

const WebsitePolicy: React.FC = () => {
  const { openContactForm } = useContactModal();
  return (
    <>
      <Header enableSticky={false} isTransparent={false} onContactUsClicked={() => openContactForm()} />
      <DirectSEO path="/website-policy" />
      <div
        style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}
      >
        <h1>Website Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          This website policy includes a website that allows consumers to fill 
          in questionnaires, forms and surveys, loan applications, subscription 
          services and online expert chat.
        </p>

        <h2>About this Website Policy</h2>
        <p>
          This website policy applies to this website, which is operated on 
          behalf of Nepean Mortgage PTY LTD Australian Company Number 689 443 721 
          and its related bodies corporate (we, us and our).
        </p>
        <p>
          We are committed to protecting your privacy.
        </p>
        <p>
          This policy explains how your personal information will be treated as 
          you access and interact with this website.
        </p>
        <p>
          Our website privacy policy may change from time to time.
        </p>

        <h2>Collection and use of information</h2>
        <p>
          We may collect personal information from you directly or via your use 
          of our services. We will only collect personal information which is 
          reasonably necessary for, or directly related to, our functions or 
          activities.
        </p>

        <h2>Sensitive information</h2>
        <p>
          Sensitive information is any information about a person's racial or 
          ethnic origin, political opinion, membership of a political association, 
          religious beliefs or affiliations, philosophical beliefs, membership 
          of a professional or trade association, membership of a trade union, 
          sexual preferences or practices, criminal record or health information.
        </p>
        <p>
          We will not ask you to disclose sensitive information, but if you 
          elect to provide sensitive information it will also be captured and 
          stored.
        </p>

        <h2>Information from third parties</h2>
        <p>
          Our website also contains links to the websites of third party 
          providers of goods and services (Third Party websites). If you have 
          accessed Third Party websites through our website and if those third 
          parties collect information about you, we may also collect or have 
          access to that information as part of our arrangements with those 
          third parties where you access a Third Party website from our website, 
          cookie information, information about your preferences or other 
          information you have provided about yourself may be shared between us 
          and the third party.
        </p>

        <h2>Advertising and tracking</h2>
        <p>
          When you view our advertisements on a Third Party website, the 
          advertising company uses 'cookies' and in some cases 'web beacons' 
          to collect information such as:
        </p>
        <ul>
          <li>the server your computer is logged onto;</li>
          <li>your browser type;</li>
          <li>the date and time of your visit; and</li>
          <li>the performance of their marketing efforts.</li>
        </ul>
        <p>
          When you access our website after viewing one of our advertisements 
          on a Third Party website, the advertising company collects information 
          on how you utilize our website (e.g. which pages you view) and whether 
          you complete an online application.
        </p>

        <h2>Cookies</h2>
        <p>
          We use 'cookies' to provide you with better and more customised 
          service and with a more effective website.
        </p>
        <p>
          A 'cookie' is a small text file placed on your computer by our web 
          page server. A cookie can later be retrieved by our webpage servers. 
          Cookies are frequently used on websites and you can choose if and how 
          a cookie will be accepted by configuring your preferences and options 
          in your internet browser.
        </p>
        <p>We use cookies for different purposes such as:</p>
        <ul>
          <li>to allocate a unique number to your internet browsers;</li>
          <li>to customise our website for you;</li>
          <li>for statistical purposes;</li>
          <li>to identify if you have accessed a Third Party Website; and</li>
          <li>for security purposes.</li>
        </ul>

        <h2>IP addresses</h2>
        <p>
          Your IP address is the identifier for your computer when you are using 
          the internet.
        </p>
        <p>
          It may be necessary for us to collect your IP address for your 
          interaction with various parts of our website.
        </p>

        <h2>Online applications</h2>
        <p>
          When you send a completed online application to us, we retain the 
          information contained in that application. We are able to then use 
          that information to provide any financial services that you require.
        </p>
        <p>
          You can also suspend and save online applications, so you can complete 
          and send the applications at a later time. If you suspend or save your 
          application, the information that you have entered will be retained 
          in our systems so that you may recover the information when you resume 
          your application.
        </p>
        <p>
          Online applications that have been suspended or saved may be viewed 
          by us.
        </p>

        <h2>Security of information</h2>
        <p>
          The security of your information is very important to us.
        </p>
        <p>
          We regularly review developments in security and encryption technologies. 
          Unfortunately, no data transmission over the internet can be guaranteed 
          as totally secure.
        </p>
        <p>
          We take all reasonable steps to protect the information in our systems 
          from misuse, interference, loss, and any unauthorized access, 
          modification or disclosure.
        </p>
        <p>
          If we no longer require your information, and we are legally permitted 
          to, we will take all reasonable steps to destroy or de-identify the 
          information.
        </p>
        <p>
          We take reasonable steps to preserve the security of cookie and 
          personal information in accordance with this policy. If your browser 
          is suitably configured, it will advise you whether the information 
          you are sending us will be secure (encrypted) or not secure (unencrypted).
        </p>

        <h2>Direct marketing</h2>
        <p>
          We will not use or disclose sensitive information about you for direct 
          marketing purposes unless you have consented to that kind of use or 
          disclosure.
        </p>
        <p>
          We may use your personal information for direct marketing purposes. 
          If you do not wish to receive direct marketing communications from us 
          or from other organisations, or wish to know the source of the 
          information being used, you may submit a request. We will respond to 
          your request as soon as practicable.
        </p>

        <h2>Disclosure to overseas entities</h2>
        <p>
          We do not generally disclose personal information obtained from 
          cookies to overseas entities in the course of our activities.
        </p>
        <p>
          Please contact us on <a href="tel:0434052278">0434052278</a> if you would like further information.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default WebsitePolicy;
