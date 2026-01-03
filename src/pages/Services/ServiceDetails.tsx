import { useParams, Navigate, Link } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { useContactModal } from '../../hooks/useContactModal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AutoSEO from '../../components/SEO/AutoSEO';
import getIcon from '../../icons/icons';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();
    const { data } = useApi();
    const { openContactForm } = useContactModal();

    if (!data) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading service details...</p>
            </div>
        );
    }

    const service = data.services.items.find(s => s.slug === serviceSlug);

    if (!service) {
        return <Navigate to="/404" replace />;
    }

    // Generate additional service details based on service type
    const getServiceDetails = (serviceId: string) => {
        const details = {
            'home-loans': {
                benefits: [
                    'Competitive interest rates from over 40+ lenders',
                    'First home buyer grants and government schemes',
                    'No upfront fees for loan applications',
                    'Fast pre-approval process (usually within 24-48 hours)',
                    'Ongoing support throughout the entire loan process'
                ],
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                features: [
                    'Fixed and variable rate options',
                    'Principal and interest or interest-only repayments',
                    'Offset accounts and redraw facilities',
                    'Split loan options for flexibility'
                ]
            },
            'refinancing': {
                benefits: [
                    'Potentially lower interest rates',
                    'Access to equity for renovations or investments',
                    'Consolidate multiple debts into one payment',
                    'Switch from interest-only to principal and interest',
                    'Access to better loan features and flexibility'
                ],
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                features: [
                    'No switching fees with select lenders',
                    'Cash back offers available',
                    'Package deals with offset accounts',
                    'Professional valuation included'
                ]
            },
            'investment-loans': {
                benefits: [
                    'Tax advantages and negative gearing benefits',
                    'Interest-only payment options',
                    'Higher loan-to-value ratios for investors',
                    'Portfolio lending for multiple properties',
                    'Specialist investment lending advice'
                ],
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                features: [
                    'Interest-only options up to 10 years',
                    'Line of credit facilities',
                    'Cross-collateral structuring',
                    'Rental income assessment'
                ]
            },
            'first-home-buyer': {
                benefits: [
                    'Access to First Home Owner Grant (FHOG)',
                    'First Home Loan Deposit Scheme (FHLDS)',
                    'Stamp duty concessions and exemptions',
                    'Low deposit options (as little as 5%)',
                    'Dedicated first home buyer support'
                ],
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                features: [
                    'Government guarantee schemes',
                    'Family guarantee options',
                    'Shared equity schemes',
                    'Building and land packages'
                ]
            },
            'commercial-loans': {
                benefits: [
                    'Competitive commercial lending rates',
                    'Flexible repayment structures',
                    'Quick approval processes for businesses',
                    'Experienced commercial lending specialists',
                    'Ongoing business banking relationship support'
                ],
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                features: [
                    'Principal and interest or interest-only options',
                    'Line of credit facilities',
                    'Equipment finance integration',
                    'Business banking packages'
                ]
            },
            'smsf-loans': {
                benefits: [
                    'Specialist SMSF lending expertise',
                    'Compliant loan structures',
                    'Competitive SMSF lending rates',
                    'Limited recourse borrowing arrangements',
                    'Ongoing compliance support'
                ],
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                features: [
                    'Limited recourse borrowing arrangements (LRBA)',
                    'Bare trust structures',
                    'Compliant property investments',
                    'Ongoing SMSF compliance monitoring'
                ]
            }
        };

        return details[serviceId as keyof typeof details] || {
            benefits: ['Professional mortgage advice', 'Competitive rates', 'Personalized service'],
            overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            features: ['Flexible terms', 'Expert guidance', 'Ongoing support']
        };
    };

    const serviceDetails = getServiceDetails(service.id);

    return (
        <>
            <AutoSEO />
            <Header
                enableSticky={false}
                isTransparent={false}
                onContactUsClicked={openContactForm}
            />

            <div className="service-details-page">
                {/* Breadcrumb Section */}
                <section className="breadcrumb-section">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link to="/#services">Services</Link>
                            <span className="separator">/</span>
                            <span className="current">{service.title}</span>
                        </div>
                    </div>
                </section>

                {/* Hero Section */}
                <section className="service-hero">
                    <div className="container">
                        <div className="hero-content">
                            <div>
                                <h1>{service.title}</h1>
                                <p className="hero-description">{service.description}</p>
                            </div>
                            <div className="service-icon-large">
                                {getIcon(service.icon, '60px', '60px', '#fff')}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="service-content">
                    <div className="container">
                        <div className="content-grid">

                            {/* Overview Section */}
                            <div className="content-section no-elevation">
                                <h2>Overview</h2>
                                <div className="overview-content">
                                    {serviceDetails.overview.split('\n').map((paragraph, index) =>
                                        <p key={index} className="overview-paragraph">{paragraph}</p>
                                    )}
                                </div>
                            </div>

                            {/* Benefits Section */}
                            <div className="content-section">
                                <h2>Key Benefits</h2>
                                <div className="benefits-grid">
                                    {serviceDetails.benefits.map((benefit, index) => (
                                        <div key={index} className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <p>{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="service-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Ready to Get Started?</h2>
                            <p>Let our experienced mortgage brokers help you with your {service.title.toLowerCase()}. Contact us today for a free consultation.</p>
                            <div className="cta-buttons">
                                <button
                                    className="primary-button"
                                    onClick={() => openContactForm()}
                                >
                                    Contact Us Now
                                </button> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default ServiceDetails;