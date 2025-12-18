import React from "react";
import { Link } from "react-router-dom";
import AutoSEO from "../components/SEO/AutoSEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContactModal } from "../hooks/useContactModal";

const NotFound: React.FC = () => {
  const { openContactForm } = useContactModal();

  return (
    <>
      <AutoSEO />
      <Header enableSticky={false} isTransparent={false} onContactUsClicked={() => openContactForm()} />
      
      <div style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}>
        <div style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "3rem",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          width: "100%"
        }}>
          {/* Large 404 Number */}
          <div style={{
            fontSize: "6rem",
            fontWeight: "bold",
            color: "#f39c12",
            lineHeight: "1",
            marginBottom: "1rem"
          }}>
            404
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "1.8rem",
            color: "#2c3e50",
            marginBottom: "1rem",
            fontWeight: "600"
          }}>
            Page Not Found
          </h1>

          {/* Description */}
          <p style={{
            color: "#7f8c8d",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "2rem"
          }}>
            Sorry, we couldn't find the page you're looking for. 
            The page may have been moved, deleted, or the URL was entered incorrectly.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center"
          }}>
            <Link 
              to="/" 
              style={{
                display: "inline-block",
                backgroundColor: "#f39c12",
                color: "white",
                padding: "12px 30px",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "background-color 0.3s ease",
                border: "none",
                cursor: "pointer"
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = "#e67e22"}
              onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = "#f39c12"}
            >
              Return Home
            </Link>

            <button
              onClick={() => openContactForm()}
              style={{
                backgroundColor: "transparent",
                color: "#f39c12",
                border: "2px solid #f39c12",
                padding: "10px 30px",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#f39c12";
                (e.target as HTMLElement).style.color = "white";
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
                (e.target as HTMLElement).style.color = "#f39c12";
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Helpful Links */}
          <div style={{
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid #ecf0f1"
          }}>
            <p style={{
              color: "#95a5a6",
              fontSize: "0.9rem",
              marginBottom: "1rem"
            }}>
              You might be looking for:
            </p>
            
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center"
            }}>
              <Link 
                to="/#our-services" 
                style={{
                  color: "#3498db",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease"
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = "#ecf0f1"}
                onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = "transparent"}
              >
                Our Services
              </Link>
              
              <Link 
                to="/#about" 
                style={{
                  color: "#3498db",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease"
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = "#ecf0f1"}
                onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = "transparent"}
              >
                About Us
              </Link>
              
              <Link 
                to="/#faq" 
                style={{
                  color: "#3498db",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease"
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = "#ecf0f1"}
                onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = "transparent"}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
