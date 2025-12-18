import { lazy, Suspense, useEffect } from "react";
import { useContactModal } from "./hooks/useContactModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import DirectSEO from "./components/SEO/DirectSEO";
const About = lazy(() => import("./components/About"));
const OurProcess = lazy(() => import("./components/OurProcess"));
const OurServices = lazy(() => import("./components/OurServices"));
const PartnerBanks = lazy(() => import("./components/PartnerBanks"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const FAQs = lazy(() => import("./components/FAQs"));
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function LandingPage() {
  const { openContactForm } = useContactModal();

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Function to attempt scrolling with retries for lazy-loaded components
      const attemptScroll = (attempts = 0, maxAttempts = 15) => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Calculate header height for offset
          const headerHeight = 80; // Approximate header height
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else if (attempts < maxAttempts) {
          // Retry after a longer delay if element not found (lazy loading)
          setTimeout(() => attemptScroll(attempts + 1, maxAttempts), 300);
        }
      };

      // Start attempting to scroll after a small initial delay
      setTimeout(() => attemptScroll(), 200);
    }
  }, []);

  return (
    <>
      <DirectSEO path="/" />
      <Header onContactUsClicked={() => openContactForm()} />
      <Hero />
      <Suspense fallback={<></>}>
        <OurProcess />
      </Suspense>
      <Suspense fallback={<></>}>
        <About onContactUsClicked={() => openContactForm()} />
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
        <FAQs onContactUsClicked={() => openContactForm()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default LandingPage;
