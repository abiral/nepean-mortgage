import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import OurProcess from "./components/OurProcess";
import FAQs from "./components/FAQs";
import OurServices from "./components/OurServices";
import PartnerBanks from "./components/PartnerBanks";
import WhyUs from "./components/WhyUs";

function LandingPage() {
    return (
        <>
            <Header />
            <Hero />
            <OurProcess />
            <About />
            <OurServices />
            <PartnerBanks />
            <WhyUs />
            <FAQs />
            <Footer />
        </>
    );
}

export default LandingPage;
