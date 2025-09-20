import { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
const About = lazy(() => import("./components/About"));
const OurProcess = lazy(() => import("./components/OurProcess"));
const OurServices = lazy(() => import("./components/OurServices"));
const PartnerBanks = lazy(() => import("./components/PartnerBanks"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const FAQs = lazy(() => import("./components/FAQs"));
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Contact from "./components/Contact";

function LandingPage() {
  const [isContactFormOpen, openContactForm] = useState<boolean>(false);
  return (
    <>
      <Header onContactUsClicked={() => openContactForm(true)} />
      <Hero />
      <Suspense fallback={<></>}>
        <OurProcess />
      </Suspense>
      <Suspense fallback={<></>}>
        <About onContactUsClicked={() => openContactForm(true)} />
      </Suspense>
      <Suspense fallback={<></>}>
        <OurServices />
      </Suspense>
      <Suspense fallback={<></>}>
        <PartnerBanks />
      </Suspense>
      <Suspense fallback={<></>}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<></>}>
        <FAQs onContactUsClicked={() => openContactForm(true)} />
      </Suspense>
      <Contact
        isOpen={isContactFormOpen}
        onClose={() => openContactForm(false)}
      />
      <Footer />
    </>
  );
}

export default LandingPage;
