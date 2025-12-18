import Header from "../Header";
import Footer from "../Footer";
import { useContactModal } from "../../hooks/useContactModal";
import DirectSEO from "../SEO/DirectSEO";
import "./DefaultPages.css";

const PrivacyPolicy = () => {
  const { openContactForm } = useContactModal();

  return (
    <div className="default-page">
      <DirectSEO path="/privacy-policy" />
      <Header
        onContactUsClicked={() => openContactForm()}
        enableSticky={false}
        isTransparent={false}
      />
      <main className="default-main">
        <div className="default-container">
          <div className="default-header">
            <h1 className="default-title">Privacy Policy</h1>
            <p className="default-subtitle">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
          </div>
          <div className="default-content">
            <div className="default-section">
              <h2>Who are we?</h2>
              <p>
                'We', 'us' and 'our' refers to the Broker, Aggregator,
                Australian Credit Licensee and our related businesses outlined
                in the Credit Guide provided to you.
              </p>
            </div>

            <div className="default-section">
              <h2>Our commitment to protect your privacy</h2>
              <p>
                We understand how important it is to protect your personal
                information. This document sets out our privacy policy
                commitment in respect of personal information we hold about you
                and what we do with that information.
              </p>
              <p>
                We recognise that any personal information we collect about you
                will only be used for the purposes we have collected as allowed
                under the law. It is important to us that you are confident that
                any personal information we hold about you will be treated in a
                way which ensures protection of your personal information.
              </p>
              <p>
                Our commitment in respect of personal information is to abide by
                the Australian Privacy Principles for the protection of personal
                information, as set out in the Privacy Act and any other
                relevant law.
              </p>
            </div>

            <div className="default-section">
              <h2>Personal information</h2>
              <p>
                When we refer to personal information we mean information from
                which your identity is reasonably apparent. This information may
                include information or an opinion about you. The personal
                information we hold about you may also include credit
                information.
              </p>
              <p>
                Credit information is information which is used to assess your
                eligibility to be provided with finance and may include any
                finance that you have outstanding, your repayment history in
                respect of those loans, and any defaults. Usually, credit
                information is exchanged between credit and finance providers
                and credit reporting bodies.
              </p>
              <p>
                The kinds of personal information we may collect about you
                include your name, date of birth, address, contact details,
                account details, occupation, and any other information we need
                to identify you.
              </p>
              <p>
                If you submit inquiries or information using our website we may
                also collect the type of finance and the amount of finance that
                you are interested in obtaining, and any information that you
                provide to us directly through our website or indirectly through
                use of our website.
              </p>
              <p>
                If you are applying for finance we may also collect the ages and
                number of your dependents and cohabitants, the length of time at
                your current address, your employment details and proof of
                earnings and expenses. If you apply for any insurance product
                through us we may also collect your health information. We will
                only collect health information from you with your consent.
              </p>
            </div>

            <div className="default-section">
              <h2>Why we collect your personal information</h2>
              <p>
                We collect personal information for the purposes of assessing
                your application for finance and managing that finance. We may
                also collect your personal information for the purposes of
                direct marketing and managing our relationship with you. From
                time to time we may offer you other products and services.
              </p>
              <p>
                We collect personal information on our website to send
                communications requested by you and to answer enquiries and
                provide information or advice to you.
              </p>
              <p>
                To enable us to maintain a successful business relationship with
                you, we may disclose your personal information to other
                organisations that provide products or services used or marketed
                by us. We may also disclose your personal information to any
                other organisation that may have or is considering having an
                interest in your finance, or in our business.
              </p>
            </div>

            <div className="default-section">
              <h2>How do we collect your personal information?</h2>
              <p>
                Where reasonable and practical we will collect your personal
                information directly from you.
              </p>
              <p>
                We may also collect your personal information from LMG, other
                finance brokers and other people such as accountants and
                lawyers.
              </p>
            </div>

            <div className="default-section">
              <h2>Do we disclose your personal information?</h2>
              <p>We may disclose your personal information:</p>
              <ul>
                <li>
                  to prospective funders or other intermediaries in relation to
                  your finance requirements;
                </li>
                <li>
                  to other organisations that are involved in managing or
                  administering your finance such as third party suppliers,
                  printing and postal services, call centres;
                </li>
                <li>
                  to associated businesses that may want to market products to
                  you;
                </li>
                <li>
                  to companies that provide information and infrastructure
                  systems to us;
                </li>
                <li>
                  to anybody who represents you, such as finance brokers,
                  lawyers and accountants;
                </li>
                <li>to anyone, where you have provided us consent;</li>
                <li>
                  where we are required to do so by law, such as under the
                  Anti-Money or Laundering and Counter Terrorism Financing Act
                  2006 (Cth);
                </li>
                <li>
                  to investors, agents or advisers, or any entity that has an
                  interest in our business; or
                </li>
                <li>
                  to your employer, referees or identity verification services.
                </li>
              </ul>
              <p>
                Prior to disclosing any of your personal information to another
                person or organisation, we will take all reasonable steps to
                satisfy ourselves that:
              </p>
              <p>
                <strong>(a)</strong> the person or organisation has a commitment
                to protecting your personal information at least equal to our
                commitment, or
              </p>
              <p>
                <strong>(b)</strong> you have consented to us making the
                disclosure.
              </p>
            </div>

            <div className="default-section">
              <h2>
                Do we disclose your personal information to anyone outside
                Australia?
              </h2>
              <p>
                We may disclose personal information to our related bodies
                corporate and third party suppliers and service providers
                located overseas for some of the purposes listed above. We take
                reasonable steps to ensure that the overseas recipients of your
                personal information do not breach the privacy obligations
                relating to your personal information.
              </p>
              <p>
                We may disclose your personal information to entities and
                services located outside of Australia, including the following:
              </p>
              <ul>
                <li>
                  our data hosting and other IT service providers, located in
                  various countries; and
                </li>
                <li>
                  other third parties located in various foreign countries,
                  including Philippines & USA.
                </li>
              </ul>
              <p>
                Your personal information may be stored in the cloud in an
                overseas country. If your information is stored in this way,
                disclosures may occur in countries other than those listed.
              </p>
              <p>
                In the event that a disclosure is made in an overseas country,
                the information will be under a foreign law and may not be
                protected by the Australian Privacy Principles. In any event, by
                providing your details, you consent to your information being
                disclosed in this manner.
              </p>
            </div>

            <div className="default-section">
              <h2>Direct marketing</h2>
              <p>
                From time to time we may use your personal information to
                provide you with current information about finance, offers you
                may find of interest, changes to our organisation, or new
                products or services being offered by us or any company with
                whom we are associated.
              </p>
              <p>
                If you do not wish to receive marketing information, you may at
                any time decline to receive such information by contacting us.
                If the direct marketing is by email you may also use the
                unsubscribe function. We will not charge you for giving effect
                to your request and will take all reasonable steps to meet your
                request at the earliest possible opportunity.
              </p>
            </div>

            <div className="default-section">
              <h2>Updating your personal information</h2>
              <p>
                It is important to us that the personal information we hold
                about you is accurate and up to date.
              </p>
              <p>
                During the course of our relationship with you we may ask you to
                inform us if any of your personal information has changed.
              </p>
              <p>
                If you wish to make any changes to your personal information,
                you may contact us. We will generally rely on you to ensure the
                information we hold about you is accurate or complete.
              </p>
            </div>

            <div className="default-section">
              <h2>Access and correction to your personal information</h2>
              <p>
                We will provide you with access to the personal information we
                hold about you. You may request access to any of the personal
                information we hold about you at any time.
              </p>
              <p>
                We may charge a fee for our costs of retrieving and supplying
                the information to you.
              </p>
              <p>
                Depending on the type of request that you make we may respond to
                your request immediately, otherwise we usually respond to you
                within seven days of receiving your request. We may need to
                contact other entities to properly investigate your request.
              </p>
              <p>
                There may be situations where we are not required to provide you
                with access to your personal information, for example, if the
                information relates to existing or anticipated legal
                proceedings, or if your request is vexatious.
              </p>
              <p>
                An explanation will be provided to you if we deny you access to
                the personal information we hold about you.
              </p>
              <p>
                If any of the personal information we hold about you is
                incorrect, inaccurate or out of date you may request that we
                correct the information. If appropriate we will correct the
                personal information. At the time of the request, otherwise, we
                will provide an initial response to you within seven days of
                receiving your request. Where reasonable, and after our
                investigation, we will provide you with details about whether we
                have corrected the personal information within 30 days.
              </p>
              <p>
                We may need to consult with other entities as part of our
                investigation.
              </p>
              <p>
                If we refuse to correct personal information we will provide you
                with our reasons for not correcting the information.
              </p>
            </div>

            <div className="default-section">
              <h2>Using government identifiers</h2>
              <p>
                If we collect government identifiers, such as your tax file
                number, we do not use or disclose this information other than
                required by law. We will never use a government identifier in
                order to identify you.
              </p>
            </div>

            <div className="default-section">
              <h2>Business without identifying you</h2>
              <p>
                In most circumstances it will be necessary for us to identify
                you in order to successfully do business with you, however,
                where it is lawful and practicable to do so, we will offer you
                the opportunity of doing business with us without providing us
                with personal information, for example, if you make general
                inquiries about interest rates or current promotional offers.
              </p>
            </div>

            <div className="default-section">
              <h2>Sensitive information</h2>
              <p>
                We will only collect sensitive information about you with your
                consent. Sensitive information is personal information that
                includes information relating to your racial or ethnic origin,
                political persuasion, memberships in trade or professional
                associations or trade unions, sexual preferences, criminal
                record, or health.
              </p>
            </div>

            <div className="default-section">
              <h2>
                How safe and secure is your personal information that we hold?
              </h2>
              <p>
                We will take reasonable steps to protect your personal
                information by storing it in a secure environment. We may store
                your personal information in paper and electronic form. We will
                also take reasonable steps to protect any personal information
                from misuse, loss and unauthorised access, modification or
                disclosure.
              </p>
            </div>

            <div className="default-section">
              <h2>Complaints</h2>
              <p>
                If you are dissatisfied with how we have dealt with your
                personal information, or you have a complaint about our
                compliance with the Privacy Act, you may contact us via the
                contact link on our website.
              </p>
              <p>
                We will acknowledge your complaint within seven days. We will
                provide you with a decision on your complaint within 30 days.
              </p>
              <p>
                If you are dissatisfied with the response of our complaints
                officer you may make a complaint to the Privacy Commissioner
                which can be contacted on either{" "}
                <a
                  href="https://www.oaic.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.oaic.gov.au
                </a>{" "}
                or 1300 363 992.
              </p>
            </div>

            <div className="default-section">
              <h2>Further information</h2>
              <p>
                You may request further information about the way we manage your
                personal information by contacting us.
              </p>
            </div>

            <div className="default-section">
              <h2>Change in our privacy policy</h2>
              <p>
                We are constantly reviewing all of our policies and attempt to
                keep up to date with market expectations. Technology is
                constantly changing, as is the law and market place practices.
              </p>
              <p>
                As a consequence we may change this privacy policy from time to
                time or as the need arises.
              </p>
              <p>You may request this privacy policy in an alternative form.</p>
            </div>

            <div className="default-contact-info">
              <h3>Contact Information</h3>
              <p>
                For any questions about this privacy policy or to exercise your
                privacy rights, please contact us:
              </p>
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
                <strong>Address:</strong> 20 Staples Place, Glenmore Park, NSW,
                2745
              </p>
            </div>

            <div className="default-last-updated">
              <p>
                This privacy policy was last updated on the date of publication.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
