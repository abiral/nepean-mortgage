import { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useContactModal } from "./hooks/useContactModal";
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
import Preloader from "./components/Shared/Preloader";

function LandingPage() {
  const { openContactForm } = useContactModal();

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure components are loaded
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Nepean Mortgage</title>
      </Helmet>
      <Header onContactUsClicked={() => openContactForm()} />
      <Hero />
      <Suspense fallback={<Preloader />}>
        <OurProcess />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <About onContactUsClicked={() => openContactForm()} />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <OurServices />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <PartnerBanks />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <FAQs onContactUsClicked={() => openContactForm()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default LandingPage;
